import React, { useState, useContext, useEffect, useRef } from "react";
import "./login.css";
import { ThemeContext } from "../../Components/theme/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent, loginTeacher } from "../../redux/auth/authSlice";
import Spinner from "../../Components/loading/Spinner";
const Login = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  const studentTab = useRef(null);
  const teacherTab = useRef(null);
  const switcherTab = useRef(null);

  const [formData, setFormData] = useState({
    rollNo: "",
    password: "",
  });

  const [teacherFormData, setTeacherFormData] = useState({
    regNo: "",
    teacherPassword: "",
  });

  const { rollNo, password } = formData;
  const { regNo, teacherPassword } = teacherFormData;

  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChange2 = (e) => {
    setTeacherFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      rollNo,
      password,
    };
    dispatch(loginStudent(userData));
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const userData2 = {
      regNo,
      password: teacherPassword,
    };
    dispatch(loginTeacher(userData2));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  const switchTabs = (e, tab) => {
    if (tab === "student") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      teacherTab.current.classList.remove("shiftToNeutralForm");
      studentTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "teacher") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      teacherTab.current.classList.add("shiftToNeutralForm");
      studentTab.current.classList.add("shiftToLeft");
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={`LoginSignUpContainer ${isDarkMode ? "dark" : "light"}`}>
      <div className="LoginSignUpBox">
        <div>
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, "student")}>Student</p>
            <p onClick={(e) => switchTabs(e, "teacher")}>Teacher</p>
          </div>
          <button ref={switcherTab}></button>
        </div>
        <form className="loginForm" onSubmit={handleSubmit} ref={studentTab}>
          <div className="loginEmail">
            <input
              type="text"
              className="login-input"
              name="rollNo"
              value={rollNo}
              onChange={onChange}
              placeholder="Roll No"
            />
          </div>
          <div className="loginPassword">
            <input
              type="password"
              className="login-input"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="password"
            />
          </div>
          <Link to="/" className="forgot-password">
            Forgot Password
          </Link>
          <input type="submit" value="Login" className="loginBtn" />
        </form>
        <form
          className="signUpForm"
          encType="multipart/form-data"
          onSubmit={handleSubmit2}
          ref={teacherTab}
        >
          <div className="">
            <input
              type="text"
              className="login-input"
              name="regNo"
              value={regNo}
              onChange={onChange2}
              placeholder="Reg No"
            />
          </div>
          <div className="">
            <input
              type="password"
              className="login-input"
              name="teacherPassword"
              value={teacherPassword}
              onChange={onChange2}
              placeholder="password"
            />
          </div>
          <Link to="/" className="forgot-password">
            Forgot Password
          </Link>
          <input type="submit" value="Login" className="signUpBtn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
