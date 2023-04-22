import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = "100vh";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className={`${showLinks ? "nav-center shadow" : "nav-center"}`}>
      <div className="nav-header">
        <NavLink to="/">
          <h1 className="logo">
            Love <br />
            <span>Day Care</span>
          </h1>
        </NavLink>
        <button
          className={`${showLinks ? "nav-toggle show" : "nav-toggle"}`}
          onClick={toggleLinks}
        >
          {showLinks ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>{" "}
          </li>
          <li className="log">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="links">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/pricing">Pricing</NavLink>
//         <NavLink to="/team">Team</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
