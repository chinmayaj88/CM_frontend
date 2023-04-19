import { useSelector } from "react-redux";

export function useMenuItems() {
  const user = useSelector((state) => state.auth.user);

  let menuItems = [
    {
      title: "Profile",
      path: "/profile",
      cName: "dropdown-link",
    },
    {
      title: "Design",
      path: "/design",
      cName: "dropdown-link",
    },
  ];

  if (user && user.user.role === "student") {
    menuItems.splice(1, 0, {
      title: "Student Portal",
      path: "/studentPortal",
      cName: "dropdown-link",
    });
  }

  if (user && user.user.role === "teacher") {
    menuItems.splice(1, 0, {
      title: "admin panel",
      path:"http://localhost:3001",
      target:"_blank",
      cName: "dropdown-link",
    });
  }

  return menuItems;
}
