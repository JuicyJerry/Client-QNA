import { useContext, memo, useState, useEffect } from "react";
// import { QnaStateContext, QnaDispatchContext } from "../App";
import { QnaDispatchContext } from "../_context/QnaDispatchProvider.tsx";
// import { QnaStateContext } from "../_context/QnaStateProvider.tsx";
import { Link, useNavigate } from "react-router-dom";
import { NavigationStyle } from "../styles/index";
import logo from "../assets/imgs/logo.svg";
import api from "../utils/axios.ts";

const Navigation = memo(() => {
  // console.log(
  //   "[Navigation]useContext(QnaStateContext) 0 ---> ",
  //   useContext(QnaStateContext)
  // );
  // const { isLogin } = useContext(QnaStateContext)!;
  // console.log("[Navigation]isLogin 1 ---> ", isLogin);
  // console.log("[Navigation]onLogout 2---> ", onLogout);
  const { onLogout } = useContext(QnaDispatchContext)!;
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    console.log(
      "[navigation] localStorage.getItem ---> ",
      localStorage.getItem("user")
    );

    if (localStorage.getItem("user")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [localStorage.getItem("user")]);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/list", label: "List" },
    // { path: "/viewer", label: "Viewer" },
    { path: "/controller", label: "Controller" },
  ];

  const onClickHandler = () => {
    // const token = localStorage.getItem("user");
    api
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
          localStorage.removeItem("user");
          setIsLogin(false);
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
});

export default Navigation;
