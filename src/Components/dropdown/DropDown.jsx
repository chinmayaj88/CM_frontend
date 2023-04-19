import { useState } from "react";
import { useMenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./dropDown.css";

const DropDown = () => {
  const [click, setClick] = useState(false);

  const menuItems = useMenuItems();
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                target={item.target}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
