import React, { useState } from "react";
import "../styles/LogIn.css";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const LogIn = () => {
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

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

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        toast.success("Signed in successfully");
        navigate("/profile");
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };

  return (
    <div className="auth">
      <div className="section">
        <div className="cont">
          <form className="form sign-in" onSubmit={onSubmit}>
            <h2>Sign In</h2>
            <label>
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
                required
              ></input>
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                required
              ></input>
            </label>
            <button className="submit">Sign In</button>
            <p className="forgot-pass">Forgot Password ?</p>
          </form>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-up">
                <h2>New here?</h2>
                <p>Sign up and discover great amount of new opportunities!</p>
              </div>
              <NavLink
                to="/signup"
                className="img-btn"
                style={{ color: "var(--primaryColor)" }}
              >
                <span className="m-up">Sign Up</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
