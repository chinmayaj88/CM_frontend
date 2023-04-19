import React, { useState } from "react";
import "./tbtn.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Tbtn = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    // document.body.classList.toggle("dark");
  };

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        onClick={onClick}
      />
      <label htmlFor="checkbox" className="label">
        <FaMoon className="icon moon" />
        <FaSun className="icon sun" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default Tbtn;
