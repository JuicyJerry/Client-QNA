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
  Detail,
  DetailResult,
} from "./pages/index";
import {
  HomeStyle,
  ListStyle,
  ViewerStyle,
  ControllerStyle,
  LoginStyle,
  RegisterStyle,
  NotfoundStyle,
  DetailCardStyle,
} from "./styles/index";
import "./App.css";
import axios from "axios";
import { Qna, QnasContextValue, QnaDispatchContextType } from "./types";
import { useLoading } from "./components/LoadingSpinner";

export const QnaStateContext = createContext<QnasContextValue | null>(null);
export const QnaDispatchContext = createContext<QnaDispatchContextType | null>(
  null
);

function App() {
  const { isLoading, setIsLoading } = useLoading();
  const [mockData, setMockdata] = useState<Qna[]>([]);
  const initialState = {
    questions: mockData,
    isLogin: false,
  };
  const [qnas, dispatch] = useReducer(reducer, initialState);

  console.log("Here is App Cmp 1-1", isLoading);
  useEffect(() => {
    console.log("[App]check: ");
    setIsLoading(true);
    // setTimeout(() => {
    //   console.log("App[setTimeout/check]: start");
    //   setIsLoading(true);
    //   console.log("App[setTimeout/check]: end");
    // }, 3000);

    axios
      .get("/data/mockData.json")
      .then((response) => {
        if (response.data) {
          console.log("Here is App Cmp 3 ---> ", response.data);
          setMockdata(response.data);
          dispatch({ type: "SET_QUESTIONS", data: response.data });
          setIsLoading(false);
        } else {
          alert("mock data 없음");
          setMockdata(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("API 호출 오류: ", error);
        setIsLoading(false);
      });
  }, []);
  // }, [mockData]); // 무한 루프
  /**
   * setMockdata 상태 업데이트 -> mockData 변경 -> useEffect 트리거 (무한 루프)
   */

  // useEffect(() => {
  //   axios.get("/api/users/auth", { withCredentials: true }).then((response) => {
  //     if (response.data.isAuth) {
  //       dispatch({ type: "AUTH", isAuth: true, isLogin: true });
  //     }
  //   });
  // }, [dispatch]);

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
  }, []);
  // }, [dispatch]);

  return (
    <div className="App">
      <QnaStateContext.Provider value={qnas}>
        <QnaDispatchContext.Provider value={memoizedDispatch}>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <Auth option={null}>
                  <HomeStyle.HomeContainer>
                    <Home />
                  </HomeStyle.HomeContainer>
                </Auth>
              }
            />
            <Route
              path="/list"
              element={
                <Auth option={true}>
                  <ListStyle.ListContainer>
                    <List />
                  </ListStyle.ListContainer>
                </Auth>
              }
            />
            <Route
              path="/viewer"
              element={
                <Auth option={true}>
                  <ViewerStyle.viewerContainer>
                    <Viewer />
                  </ViewerStyle.viewerContainer>
                </Auth>
              }
            />
            <Route
              path="/controller"
              element={
                <Auth option={true}>
                  <ControllerStyle.ControllerContainer>
                    <Controller />
                  </ControllerStyle.ControllerContainer>
                </Auth>
              }
            />
            <Route
              path="/login"
              element={
                <Auth option={false}>
                  <LoginStyle.LoginContainer>
                    <Login />
                  </LoginStyle.LoginContainer>
                </Auth>
              }
            />
            <Route
              path="/register"
              element={
                <Auth option={false}>
                  <RegisterStyle.RegisterContainer>
                    <Register />
                  </RegisterStyle.RegisterContainer>
                </Auth>
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

            <Route
              path="/detail/:id"
              element={
                <Auth option={null}>
                  <DetailCardStyle.DetailContainer>
                    <Detail />
                  </DetailCardStyle.DetailContainer>
                </Auth>
              }
            />

            <Route
              path="detailResult"
              element={
                <Auth option={null}>
                  <DetailCardStyle.DetailResultContainer>
                    <DetailResult />
                  </DetailCardStyle.DetailResultContainer>
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
