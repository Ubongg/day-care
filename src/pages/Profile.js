import { useState, useEffect } from "react";
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

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>
    </div>
  );
};

export default Profile;
