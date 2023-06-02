import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../components/Spinner";

const EditChild = () => {
  const [loading, setLoading] = useState(false);
  const [kid, setKid] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    kidAge: 0,
    kidName: "",
    kidGender: "Male",
    disability: false,
    images: {},
    parentAge: 0,
    parentName: "",
    parentPhone: 0,
    plan: "",
  });

  const {
    address,
    kidAge,
    kidName,
    kidGender,
    disability,
    images,
    parentAge,
    parentName,
    parentPhone,
    plan,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const params = useParams();
  const isMounted = useRef(true);

  // Redirect if listing is not user's
  useEffect(() => {
    if (kid && kid.userRef !== auth.currentUser.uid) {
      toast.error("You can not edit that child");
      navigate("/");
    }
  });

  // Fetch listing to edit
  useEffect(() => {
    setLoading(true);
    const fetchListing = async () => {
      const docRef = doc(db, "kids", params.kidId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setKid(docSnap.data());
        setFormData({ ...docSnap.data() });
        setLoading(false);
      } else {
        navigate("/");
        toast.error("Child does not exist");
      }
    };

    fetchListing();
  }, [params.kidId, navigate]);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/sign-in");
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (images.length > 6) {
      setLoading(false);
      toast.error("Max 6 images");
      return;
    }

    // Store image in firebase
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, "images/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
    };

    delete formDataCopy.images;

    // Update listing
    const docRef = doc(db, "kids", params.kidId);
    await updateDoc(docRef, formDataCopy);
    setLoading(false);
    toast.success("Child edited");
    navigate("/profile");
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <header>
        <p className="pageHeader">Add a Child</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <label className="formLabel">Address</label>
          <textarea
            className="formInputName"
            type="text"
            id="address"
            value={address}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Child Age</label>
          <input
            className="formInputAge"
            type="number"
            id="kidAge"
            value={kidAge}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Child Name</label>
          <input
            className="formInputName"
            type="text"
            id="kidName"
            value={kidName}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Child Gender</label>
          <select
            className="formInputGender"
            id="kidGender"
            value={kidGender}
            onChange={onMutate}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label className="formLabel">Disability</label>
          <div className="formButtons">
            <button
              className={disability ? "formButtonActive" : "formButton"}
              type="button"
              id="disability"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={
                !disability && disability !== null
                  ? "formButtonActive"
                  : "formButton"
              }
              type="button"
              id="disability"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className="formLabel">Parent Age</label>
          <input
            className="formInputAge"
            type="number"
            id="parentAge"
            value={parentAge}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Parent Name</label>
          <input
            className="formInputName"
            type="text"
            id="parentName"
            value={parentName}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Parent Phone</label>
          <input
            className="formInputPhone"
            type="number"
            id="parentPhone"
            value={parentPhone}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Plan</label>
          <input
            className="formInputPlan"
            type="text"
            id="plan"
            value={plan}
            onChange={onMutate}
            required
          />

          <label className="formLabel">Images</label>
          <p className="imagesInfo">
            The first image will be the cover (max 6).
          </p>
          <input
            className="formInputFile"
            type="file"
            id="images"
            onChange={onMutate}
            max="6"
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
          <button type="submit" className="primaryButton createListingButton">
            Add Child
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditChild;
