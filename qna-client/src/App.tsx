import { useEffect, useState, useReducer, useMemo, createContext } from "react";
import reducer from "./_reducers/index";
import Auth from "./features/Auth";
import { Routes, Route } from "react-router-dom";
// import { useQnaActions } from "./_actions/index";

import {
  Controller,
  Home,
  List,
  Login,
  Navigation,
  Notfound,
  Register,
  Viewer,
  GoogleRedirectionPage,
} from "./pages/index";
import {
  HomeStyle,
  ListStyle,
  ViewerStyle,
  ControllerStyle,
  LoginStyle,
  RegisterStyle,
  NotfoundStyle,
} from "./styles/index";
import "./App.css";
import axios from "axios";
import { Qna, QnasContextValue, QnaDispatchContextType } from "./types";
import { LoadingProvider, useLoading } from "./components/LoadingSpinner";

export const QnaStateContext = createContext<QnasContextValue | null>(null);
export const QnaDispatchContext = createContext<QnaDispatchContextType | null>(
  null
);

function App() {
  // console.log("Here is App Cmp");
  // const { isLoading, setIsLoading } = useLoading();
  const [mockData, setMockdata] = useState<Qna[]>([]);
  const initialState = {
    questions: mockData,
    isLogin: false,
  };
  const [qnas, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("/data/mockData.json")
      .then((response) => {
        if (response.data) {
          setMockdata(response.data);
          dispatch({ type: "SET_QUESTIONS", data: response.data });
        } else {
          alert("mock data 없음");
          setMockdata(response.data);
        }
      })
      .catch((error) => {
        console.error("API 호출 오류: ", error);
      });
    // .finally(() => setIsLoading(false));
  }, []);
  // }, [setIsLoading]);
  // }, [mockData]); // 무한 루프
  /**
   * setMockdata 상태 업데이트 -> mockData 변경 -> useEffect 트리거 (무한 루프)
   */

  useEffect(() => {
    axios.get("/api/users/auth", { withCredentials: true }).then((response) => {
      if (response.data.isAuth) {
        dispatch({ type: "AUTH", isAuth: true, isLogin: true });
      }
    });
  }, [dispatch]);

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate: (content: Qna) => {
        dispatch({ type: "CREATE", data: content });
      },
      onUpdate: (targetId: string) => {
        dispatch({ type: "UPDATE", targetId });
      },
      onDelete: (targetId: string) => {
        dispatch({ type: "DELETE", targetId });
      },
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

  return (
    <div className="App">
      <QnaStateContext.Provider value={qnas}>
        <QnaDispatchContext.Provider value={memoizedDispatch}>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <LoadingProvider value={useLoading}>
                  <Auth option={null}>
                    <HomeStyle.HomeContainer>
                      <Home />
                    </HomeStyle.HomeContainer>
                  </Auth>
                </LoadingProvider>
              }
            />
            <Route
              path="/list"
              element={
                <LoadingProvider value={useLoading}>
                  <Auth option={true}>
                    <ListStyle.ListContainer>
                      <List />
                    </ListStyle.ListContainer>
                  </Auth>
                </LoadingProvider>
              }
            />
            <Route
              path="/viewer"
              element={
                <LoadingProvider value={useLoading}>
                  <Auth option={true}>
                    <ViewerStyle.viewerContainer>
                      <Viewer />
                    </ViewerStyle.viewerContainer>
                  </Auth>
                </LoadingProvider>
              }
            />
            <Route
              path="/controller"
              element={
                <LoadingProvider value={useLoading}>
                  <Auth option={true}>
                    <ControllerStyle.ControllerContainer>
                      <Controller />
                    </ControllerStyle.ControllerContainer>
                  </Auth>
                </LoadingProvider>
              }
            />
            <Route
              path="/login"
              element={
                <LoadingProvider value={useLoading}>
                  <Auth option={false}>
                    <LoginStyle.LoginContainer>
                      <Login />
                    </LoginStyle.LoginContainer>
                  </Auth>
                </LoadingProvider>
              }
            />
            <Route
              path="/register"
              element={
                <LoadingProvider value={useLoading}>
                  <Auth option={false}>
                    <RegisterStyle.RegisterContainer>
                      <Register />
                    </RegisterStyle.RegisterContainer>
                  </Auth>
                </LoadingProvider>
              }
            />

            <Route
              path="oauthgoogle"
              element={
                <Auth option={null}>
                  {/* <NotfoundStyle.NotfoundContainer> */}
                  <GoogleRedirectionPage />
                  {/* </NotfoundStyle.NotfoundContainer> */}
                </Auth>
              }
            />

            {/* <Route path="/oauthgoogle" element={<GoogleRedirectionPage />} /> */}
            <Route
              path="*"
              element={
                <Auth option={null}>
                  <NotfoundStyle.NotfoundContainer>
                    <Notfound />
                  </NotfoundStyle.NotfoundContainer>
                </Auth>
              }
            />
          </Routes>
        </QnaDispatchContext.Provider>
      </QnaStateContext.Provider>
    </div>
  );
}

export default App;
