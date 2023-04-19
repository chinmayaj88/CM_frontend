import axios from "axios";

const URL = "/api/";

const loginStudent = async (userdata) => {
  const response = await axios.post(URL + "students/studentLogin", userdata);
  return response.data;
};

const loginTeacher = async (userdata2) => {
  const response = await axios.post(URL + "teachers/teacherLogin", userdata2);
  return response.data;
};

const logout = async () => {
  const response = await axios.get(URL + "teachers/teacherLogout");
  return response.data;
};

const loadStudent = async () => {
  const response = await axios.get(URL + "students/loadStudent");
  return response.data;
};

const loadTeacher = async () => {
  const response = await axios.get(URL + "teachers/loadTeacher");
  return response.data;
};

const authService = {
  loginStudent,
  loginTeacher,
  logout,
  loadStudent,
  loadTeacher,
};

export default authService;
