import { useContext } from "react";
import { QnaDispatchContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
  console.log("[Navigation]isLogin ---> ", useContext(QnaDispatchContext));
  const context = useContext(QnaDispatchContext)!;
  if (!context) throw new Error("[Navigation]isLogin is not found");

  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/list", label: "List" },
    { path: "/viewer", label: "Viewer" },
    { path: "/controller", label: "Controller" },
  ];

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.logoutSuccess) {
        navigate("/login");
      } else {
        alert("로그아웃 실패!");
      }
    });
  };

  return (
    <>
      <nav className="links">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}

        {context.isLogin && (
          <Link
            to={"/register"}
            className={location.pathname === "/register" ? "active" : ""}
          >
            Register
          </Link>
        )}
        {context.isLogin ? (
          <Link
            to={"/login"}
            className={location.pathname === "/login" ? "active" : ""}
          >
            Login
          </Link>
        ) : (
          <button onClick={onClickHandler}>로그아웃</button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
