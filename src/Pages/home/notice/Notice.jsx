//#############################################################################
import React, { useState, useContext } from "react";
import "./notice.css";
import { ThemeContext } from "../../../Components/theme/ThemeContext";

function Notice() {
  const { isDarkMode } = useContext(ThemeContext);

  // eslint-disable-next-line no-unused-vars
  const [notices, setNotices] = useState([
    {
      id: 1,
      bTechNotice: "Notice 1 for B.Tech students",
      mTechNotice: "Notice 1 for M.Tech students",
      mbaNotice: "Notice 1 for MBA students",
    },
    {
      id: 2,
      bTechNotice: "Notice 2 for B.Tech students",
      mTechNotice: "Notice 2 for M.Tech students",
      mbaNotice: "Notice 2 for MBA students",
    },
    {
      id: 3,
      bTechNotice: "Notice 3 for B.Tech students",
      mTechNotice: "Notice 3 for M.Tech students",
      mbaNotice: "Notice 3 for MBA students",
    },
    {
      id: 4,
      bTechNotice: "Notice 3 for B.Tech students",
      mTechNotice: "Notice 3 for M.Tech students",
      mbaNotice: "Notice 3 for MBA students",
    },
    {
      id: 5,
      bTechNotice: "Notice 3 for B.Tech students",
      mTechNotice: "Notice 3 for M.Tech students",
      mbaNotice: "Notice 3 for MBA students",
    },
    {
      id: 6,
      bTechNotice: "Notice 3 for B.Tech students",
      mTechNotice: "Notice 3 for M.Tech students",
      mbaNotice: "Notice 3 for MBA students",
    },
  ]);

  // const addNotice = () => {
  //   const newNotice = {
  //     id: notices.length + 1,
  //     bTechNotice: `Notice ${notices.length + 1} for B.Tech students`,
  //     mTechNotice: `Notice ${notices.length + 1} for M.Tech students`,
  //     mbaNotice: `Notice ${notices.length + 1} for MBA students`,
  //   };
  //   setNotices([...notices, newNotice]);
  // };

  return (
    <div className="notice-container">
      <h1 className="h11">Notice</h1>
      <hr />
      <div className={`notice-wrapper ${isDarkMode ? "dark" : "light"}`}>
        <table className="notice-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>B.Tech</th>
              <th>M.Tech</th>
              <th>MBA</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>{notice.bTechNotice}</td>
                <td>{notice.mTechNotice}</td>
                <td>{notice.mbaNotice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={addNotice}>Add Notice</button> */}
      </div>
    </div>
  );
}

export default Notice;
