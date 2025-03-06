import { useMemo, createContext } from "react";
import { QnaUserInfoContextType } from "../types/types";

export const QnaDispatchContext = createContext<QnaUserInfoContextType | null>(
  null
);
export const QnaDispatchProvider = ({ dispatch, children }) => {
  const memoizedDispatch = useMemo(() => {
    return {
      onLogin: (userInfo: { isLogin: boolean; message: string }) => {
        console.log("[App] userInfo.isLogin ===> ", userInfo.isLogin);

        dispatch({
          type: "LOGIN",
          isLogin: userInfo.isLogin,
          message: userInfo.message,
        });
      },
      onLogout: () => {
        console.log("[App] userInfo.isLogout ===> ");

        dispatch({
          type: "LOGIN",
          isLogin: false,
          message: "로그아웃 작동",
        });
      },
      onRegister: (userInfo: { isLogin: boolean; message: string }) => {
        dispatch({
          type: "REGISTER",
          isLogin: userInfo.isLogin,
          message: userInfo.message,
        });
      },
      onAuth: (userInfo: { isAuth: boolean; isLogin: boolean }) => {
        dispatch({
          type: "AUTH",
          isAuth: userInfo.isAuth,
          isLogin: userInfo.isLogin,
        });
      },
      dispatch,
    };
  }, [dispatch]);
  // }, [dispatch]);

  return (
    <QnaDispatchContext.Provider value={memoizedDispatch}>
      {children}
    </QnaDispatchContext.Provider>
  );
};

export default QnaDispatchProvider;
