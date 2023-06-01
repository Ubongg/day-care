import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import Footer from "../components/Footer";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with registration");
    }
  };

  return (
    <div className="auth">
      <div className="section">
        <div className="cont s-signup">
          <form className="form sign-up" onSubmit={onSubmit}>
            <h2>Sign Up</h2>
            <label>
              <span>Name</span>
              <input
                type="text"
                id="name"
                value={name}
                onChange={onChange}
              ></input>
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
              ></input>
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={onChange}
              ></input>
            </label>
            <button className="submit">Sign Up Now</button>
          </form>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-in">
                <h2>One of us?</h2>
                <p>
                  If you already have an account, just sign in. We've missed
                  you!
                </p>
              </div>
              <NavLink
                to="/login"
                className="img-btn"
                style={{ color: "var(--primaryColor)" }}
              >
                <span className="m-in">Sign In</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
