import { useSelector } from "react-redux";

const RoleCheaker = ({ text }) => {
  const { user } = useSelector((state) => state.auth);

  if (user.role === "admin") {
    return text;
  }
};

export default RoleCheaker;
