import React, { useContext } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="footer-container">
      <div className={`footer-wrapper ${isDarkMode ? "dark" : "light"}`}>
        <div className="footer-left">
          <h2>Links</h2>
          <ul>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-mid">
          <h2>Links</h2>
          <ul>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-mid">
          <h2>Links</h2>
          <ul>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-mid">
          <h2>Social</h2>
          <ul>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                <AiFillFacebook style={{ fontSize: "20px", color: "#fff" }} />
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                <AiFillInstagram
                  style={{ fontSize: "20px", color: "hotpink" }}
                />
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                <AiFillYoutube style={{ fontSize: "20px", color: "#FF0000" }} />
              </Link>
            </li>
            <li className="footer-li">
              <Link className={`link ${isDarkMode ? "dark" : "light"}`}>
                <AiFillTwitterCircle
                  style={{ fontSize: "20px", color: "blue" }}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h1>College</h1>
          <ul>
            <li className="footer-li">&#169;college.inc</li>
            <li className="footer-li">&#169;college.inc</li>
            <li className="footer-li">&#169;college.inc</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
