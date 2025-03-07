import { useEffect, useContext, memo, useCallback, ReactElement } from "react";
import { QnaDispatchContext } from "../_context/QnaDispatchProvider";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

interface AuthProps {
  children: ReactElement;
}

const Auth = memo(({ children, option, adminRoute = null }) => {
  // option => null, 아무나 출입 가능 페이지
  // option => true, 로그인한 유저만 출입 가능 페이지
  // option => false, 로그인한 유저는 출입 불가능 페이지
  // adminRoute => true, 어드민 유저가 출입 가능 페이지

  // const { onCreate, onUpdate, onDelete, onLogin, onRegister, onAuth } =
  //   useQnaActions();
  const { onAuth } = useContext(QnaDispatchContext);
  const navigate = useNavigate();
  // console.log("[auth] onAuth ===> ", onAuth);

  // 아무나 진입 가능한 페이지 : Home, About
  // 로그인 회원만 집입 가능 페이지 : Viewer, List
  // 로그인 한 회원은 진입 못 하는 페이지: Login, Register
  // 관리자만 진입 가능 페이지 : Admin

  const fetchData = useCallback(async () => {
    try {
      // console.log("localStorage.getItem ---> ", localStorage.getItem("user"));
      const token = localStorage.getItem("user");
      console.log("[auth] token 1===> ", token);
      console.log("[auth] option ===> ", option);

      if (token) {
        console.log("[auth] token 2===> ", token);

        const response = await api.get("/api/users/auth", {
          headers: {
            // withCredentials: true, // 서버 쿠키 기반 인증
            // Authorization: `Bearer ${token}`,
          },
        });
        console.log("[auth] response ===> ", response);
        console.log("[auth] response ===> ", response.data.isAuth);

        // 로그인한 상태
        if (response.data.isAuth) {
          onAuth({ isLogin: true, isAuth: true, message: "인증 성공" });
          console.log("response.data.isAuth[option] ---> ", option);

          if (adminRoute && !response.data.isAdmin) {
            navigate("/login");
          } else {
            if (!option) {
              navigate("/");
            }
          }
        }
        // else {
        //   if (option) {
        //     onAuth({ isLogin: false, message: "인증 실패" });
        //     navigate("/login");
        //   }
      } else {
        if (option) {
          onAuth({ isLogin: false, message: "인증 실패" });
          navigate("/login", { replace: true });
        }
      }
    } catch (err) {
      console.log("err ===> ", err);
      navigate("/");
      // if (err.response.data.error === "token is not found") {
      //   // console.log("토큰 없는 상태")
      // } else console.log("err ===> ", err);
    }
  });

  useEffect(() => {
    console.log("[auth]check");
    fetchData();
  }, [option, localStorage.getItem("user")]);
  // }, [adminRoute, navigate, option, onAuth]);

  /**
   * setIsLogin, onAuth는 useContext로 가져온 상태 업데이트 함수이므로 변경 안 됨
   * adminRoute, navigate, option 값에 따라, 리다이렉트 해야함
   */

  return <>{children}</>;
});

export default Auth;
