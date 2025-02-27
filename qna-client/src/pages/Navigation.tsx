import { useContext } from "react";
import { QnaDispatchContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { NavigationStyle } from "../styles/index";
import logo from "../imgs/logo.svg";

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
    <NavigationStyle.NavigationContainer className="links">
      <div className="links-logo">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="QNA logo" />
        </a>
      </div>

      <section>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname === link.path
                  ? "nav-link active"
                  : "nav-link "
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="navbar-divider"></span>
        <div>
          {!context.isLogin ? (
            <Link
              to={"/login"}
              className={
                location.pathname === "/login"
                  ? "btn btn-success btn-round active"
                  : "btn"
              }
            >
              Login
            </Link>
          ) : (
            <button onClick={onClickHandler}>로그아웃</button>
          )}
          {!context.isLogin && (
            <Link
              to={"/register"}
              className={
                location.pathname === "/register"
                  ? "btn btn-success btn-round active"
                  : "btn"
              }
            >
              Register
            </Link>
          )}
        </div>
      </section>
    </NavigationStyle.NavigationContainer>
  );
};

export default Navigation;
