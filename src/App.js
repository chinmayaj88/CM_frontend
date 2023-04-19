import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainHome from "./Pages/home/MainHome";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import ThemeContextProvider from "./Components/theme/ThemeContext";
import Notice from "./Pages/home/notice/Notice";
import Login from "./Pages/auth/Login";
import { loadStudent, loadTeacher } from "./redux/auth/authSlice";
import Profile from "./Components/profile/Profile";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedIsAuthenticated && storedUser) {
      if (storedUser.user.role === "student") {
        dispatch(loadStudent(storedUser));
      } else if (storedUser.user.role === "teacher") {
        dispatch(loadTeacher(storedUser));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem("isAuthenticated", isAuthenticated);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "student") {
        dispatch(loadStudent());
      } else if (user.role === "teacher") {
        dispatch(loadTeacher());
      }
    }
  }, [dispatch, isAuthenticated, user]);

  return (
    <ThemeContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<MainHome />} />
            <Route exact path="/notice" element={<Notice />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/profile"
              element={isAuthenticated ? <Profile /> : <MainHome />}
            />
            {/* PROTECTED ROUTES */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
