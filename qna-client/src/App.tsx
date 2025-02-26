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

export const QnaStateContext = createContext<QnasContextValue | null>(null);
export const QnaDispatchContext = createContext<QnaDispatchContextType | null>(
  null
);

function App() {
  console.log("Here is App Cmp");

  const [mockData, setMockdata] = useState<Qna[]>([]);
  const [isLogin, setIsLogin] = useState(false);

  const initialState = {
    questions: mockData,
    isLogin: false,
  };
  const [qnas, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/mockData.json");
        console.log("[QuestionProvider]fetchData ---> ", response);

        if (response.data) {
          setMockdata(response.data);
          dispatch({ type: "SET_QUESTIONS", data: response.data });
        } else {
          alert("mock data 없음");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // }, [mockData]); // 무한 루프
  /**
   * setMockdata 상태 업데이트 -> mockData 변경 -> useEffect 트리거 (무한 루프)
   */

  useEffect(() => {
    console.log("isLogin ===> ", isLogin);
  }, [isLogin]);

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
        dispatch({
          type: "LOGIN",
          isLogin: userInfo.isLogin,
          message: userInfo.message,
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
      setIsLogin: () => setIsLogin(true),
      isLogin,
    };
  }, [dispatch, isLogin]);

  return (
    <div className="App">
      <QnaStateContext.Provider value={qnas}>
        <QnaDispatchContext.Provider value={memoizedDispatch}>
          <h1>Question And Answer</h1>
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
