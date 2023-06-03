import { useState, useEffect } from "react";
import "../styles/Profile.css";
import { NavLink } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import ChildItem from "../components/ChildItem";
import Footer from "../components/Footer";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [kids, setKids] = useState(null);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  useEffect(() => {
    const fetchUserKids = async () => {
      const kidsRef = collection(db, "kids");

      const q = query(
        kidsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );

      const querySnap = await getDocs(q);

      let kids = [];

      querySnap.forEach((doc) => {
        return kids.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setKids(kids);
      setLoading(false);
    };

    fetchUserKids();
  }, [auth.currentUser.uid]);

  const onLogout = () => {
    auth.signOut();
    toast.success("Signed out successfully");

    navigate("/login");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update display name in fb
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not update profile details");
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onDelete = async (kidId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "kids", kidId));
      const updatedKids = kids.filter((kid) => kid.id !== kidId);
      setKids(updatedKids);
      toast.success("Successfully deleted child");
    }
  };

  const onEdit = (kidId) => navigate(`/edit-kid/${kidId}`);

  return (
    <>
      <div className="profile">
        <div className="profile-cont">
          <header className="profileHeader">
            <p className="pageHeader">My Profile</p>
            <button type="button" className="logOut" onClick={onLogout}>
              Logout
            </button>
          </header>

          <main>
            <div className="profileDetailsHeader">
              <p className="profileDetailsText">Personal Details</p>
              <p
                className="changePersonalDetails"
                onClick={() => {
                  changeDetails && onSubmit();
                  setChangeDetails((prevState) => !prevState);
                }}
              >
                {changeDetails ? "done" : "change"}
              </p>
            </div>

            <div className="profileCard">
              <form>
                <input
                  type="text"
                  id="name"
                  className={
                    !changeDetails ? "profileName" : "profileNameActive"
                  }
                  disabled={!changeDetails}
                  value={name}
                  onChange={onChange}
                  style={{ marginBottom: "5px" }}
                />
                <input
                  type="text"
                  id="email"
                  className={
                    !changeDetails ? "profileEmail" : "profileEmailActive"
                  }
                  disabled={!changeDetails}
                  value={email}
                  onChange={onChange}
                />
              </form>
            </div>

            <NavLink to="/add-kid" className="addChild">
              <p>Add your child</p>
              <img src={arrowRight} alt="arrow right" />
            </NavLink>

            {!loading && kids?.length > 0 && (
              <>
                <p className="kidText">Your Kids</p>
                <ul className="kidsList">
                  {kids.map((kid) => (
                    <ChildItem
                      key={kid.id}
                      kid={kid.data}
                      id={kid.id}
                      onDelete={() => onDelete(kid.id)}
                      onEdit={() => onEdit(kid.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
