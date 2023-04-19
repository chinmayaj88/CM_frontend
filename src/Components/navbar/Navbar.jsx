import React, { useState, useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Tbtn from "../ToggleButton/TBTN";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../theme/ThemeContext";
import { logout, reset } from "../../redux/auth/authSlice";
import DropDown from "../dropdown/DropDown";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const handleClick1 = () => {
    toggleTheme();
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  const onMouseLeave = () => {
    setTimeout(() => {
      setDropdown(false);
    }, 2000);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    dispatch(reset());
  };

  return (
    <>
      <div className={`nav-container ${isDarkMode ? "dark" : "light"} `}>
        <div className="nav-wrapper">
          <Link to="/" onClick={closeMobileMenu} className="logo-link">
            <h1 className={`nav-logo ${isDarkMode ? "dark" : "light"}`}>
              College
            </h1>
          </Link>
          <div className={click ? "mid-right show" : "mid-right hide"}>
            <div className="mid">
              <Link to="/" className="mid-link" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/" className="mid-link">
                About
              </Link>
              <Link to="/" className="mid-link">
                Contact us
              </Link>
              <Link to="/" className="mid-link">
                Course-Offered
              </Link>
              <Link to="/" className="mid-link">
                Admission
              </Link>
              <Link to="/" className="mid-link">
                Placement
              </Link>
              <Link to="/notice" className="mid-link">
                Notice
              </Link>

              {user ? (
                <Link to="/logout" className="ham-link">
                  <button className="ham-login-button" onClick={onLogout}>
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/login" className="ham-link">
                  <button
                    className="ham-login-button"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>

          {user ? (
            <div
              className="mid"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="navbar-img-container">
                {user && user.user.profileImages[0] && (
                  <img
                    src={user.user.profileImages[0].imgURL}
                    alt="gg"
                    className="btn"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              {dropdown && <DropDown />}
            </div>
          ) : (
            <></>
          )}

          <div className={click ? "right show" : "right hide"}>
            {/* <img src="/assets/sc1.jpg" alt="gg" className="btn" /> */}
            {user ? (
              <Link to="/login">
                <button className="btn" onClick={onLogout}>
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn" onClick={closeMobileMenu}>
                  Login
                </button>
              </Link>
            )}
            <Tbtn className="btn" onClick={handleClick1} />
          </div>
          <RiMenu3Fill className="ham" onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
