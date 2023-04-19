import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="pw-left">
          <div className="pw-left-top">
            <div className="img-container">
              {user && user.user.profileImages[0] && (
                <img
                  src={user.user.profileImages[0].imgURL}
                  alt="gg"
                  className="avatar"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
            <div className="pw-left-top-links">
              <h3>{user.user.name}</h3>
              <h3>(2020-2024)</h3>
            </div>
          </div>
          <div className="pw-left-bottom">
            <Link to="/" className="links profile-l">
              Results
            </Link>
            <Link to="/" className="links profile-l">
              Payment
            </Link>
            <Link to="/" className="links profile-l">
              Admit Card
            </Link>
            <Link to="/" className="links profile-l">
              Attendance
            </Link>
            <Link to="/" className="links profile-l">
              Payment Status
            </Link>
          </div>
        </div>
        <div className="pw-right">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div>
                  <h3>Full Name</h3>
                </div>
                <div>{user.user.name}</div>
              </div>
              <hr />
              {user.user.role === "student" && (
                <div className="row">
                  <div>
                    <h3>Roll No</h3>
                  </div>
                  <div>{user.user.rollNo}</div>
                </div>
              )}
              <hr />
              <div className="row">
                <div>
                  <h3>Reg No</h3>
                </div>
                <div>{user.user.regNo}</div>
              </div>
              <hr />
              <div className="row">
                <div>
                  <h3>Mobile no</h3>
                </div>
                <div>(320) 380-4539</div>
              </div>
              <hr />
              <div className="row">
                <div>
                  <h3> Parent's Mobile no</h3>
                </div>
                <div>(320) 380-4539</div>
              </div>
              <hr />
              <div className="row">
                <div>
                  <h3>Address</h3>
                </div>
                <div>Bay Area, San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
