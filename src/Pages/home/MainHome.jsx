import React, { useContext } from "react";
import "./mainHome.css";
// import Slider from "./slider/Slider";
import Notice from "./notice/Notice";
import { ThemeContext } from "../../Components/theme/ThemeContext";
function MainHome() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`main-container ${isDarkMode ? "dark" : "light"}`}>
      {/* <Slider /> */}
      <Notice />
    </div>
  );
}

export default MainHome;
