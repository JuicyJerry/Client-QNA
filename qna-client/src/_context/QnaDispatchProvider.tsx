import { useMemo, createContext, memo } from "react";
import { QnaUserInfoContextType } from "../types/types";

export const QnaDispatchContext = createContext<QnaUserInfoContextType | null>(
  null
);
export const QnaDispatchProvider = memo(({ qnas, dispatch, children }) => {
  const memoizedDispatch = useMemo(() => {
    console.log("[QnaDispatchProvider] dispatch ===> ", dispatch);

    return {
      onLogin: (userInfo: { isLogin: boolean; message: string }) => {
        console.log(
          "[QnaDispatchProvider] userInfo.isLogin ===> ",
          userInfo.isLogin
        );

        console.log("dispatch test1");
        dispatch({
          type: "LOGIN",
          isLogin: userInfo.isLogin,
          message: userInfo.message,
        });
        localStorage.setItem("user", `${JSON.stringify(userInfo)}`);
        console.log("dispatch test2 [userInfo.isLogin]", userInfo.isLogin);
      },
      onLogout: () => {
        console.log("[QnaDispatchProvider] userInfo.isLogout ===> ");

        dispatch({
          type: "LOGOUT",
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
  }, [qnas.isLogin]);
  // }, [dispatch]);

  return (
    <QnaDispatchContext.Provider value={memoizedDispatch}>
      {children}
    </QnaDispatchContext.Provider>
  );
});

export default QnaDispatchProvider;
