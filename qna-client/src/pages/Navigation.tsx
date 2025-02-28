import { useContext } from "react";
import { QnaStateContext, QnaDispatchContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { NavigationStyle } from "../styles/index";
import logo from "../imgs/logo.svg";

const Navigation = () => {
  console.log("[Navigation]isLogin ---> ", useContext(QnaDispatchContext));
  const { isLogin } = useContext(QnaStateContext)!;
  const { onLogout } = useContext(QnaDispatchContext)!;
  console.log("[Navigation]isLogin 2---> ", onLogout);
  console.log("[Navigation]isLogin 3---> ", isLogin);

  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/list", label: "List" },
    { path: "/viewer", label: "Viewer" },
    { path: "/controller", label: "Controller" },
  ];

  const onClickHandler = () => {
    // const token = localStorage.getItem("user");
    axios
      .get(
        "/api/users/logout",
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        //   },
        // },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.data.logoutSuccess) {
          console.log("logoutSuccess");
          onLogout();
          navigate("/login");
        } else {
          console.log("try again!");
          alert("로그아웃 실패!");
        }
      })
      .catch((err) => {
        console.log("Logout error ===> ", err);
        alert("로그아웃 중 오류 발생!");
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
          {!isLogin ? (
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
          {!isLogin && (
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
