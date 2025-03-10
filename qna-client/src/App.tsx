import { useEffect, useState, useReducer, useRef } from "react";
import reducer from "./_reducers/index";
import Auth from "./features/Auth";
import { Routes, Route } from "react-router-dom";

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

import { Qna } from "./types/types";
import { useLoading } from "./components/LoadingSpinner";
import { QnaStateProvider } from "./_context/QnaStateProvider";
import { QnaDispatchProvider } from "./_context/QnaDispatchProvider";
import { QnaCrudContextProvider } from "./_context/QnaCrudContextProvider";
import axios from "axios";
// import api from "./utils/axios";

interface InitailStateType {
  questions: Qna[];
  isLogin: boolean;
}

function App() {
  const { isLoading, setIsLoading } = useLoading();
  const [mockData, setMockdata] = useState<Qna[]>([]);
  const initialState: InitailStateType = {
    questions: mockData,
    isLogin: false,
  };
  const [qnas, dispatch] = useReducer(reducer, initialState);
  // const didFetch = useRef(false);
  const didFetch = localStorage.getItem("isFetched");
  console.log("[app]didFetch ===> ", didFetch);

  const handleBeforeUnload = () => {
    localStorage.removeItem("isFetched");
  };

  useEffect(() => {
    if (didFetch) return;
    localStorage.setItem("isFetched", "true");
    window.addEventListener("beforeunload", handleBeforeUnload);
    console.log("dispatch in App:", dispatch);
    setIsLoading(true);

    axios
      .get("/data/mockData.json")
      .then((response) => {
        if (response.data) {
          console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
          console.log("Here is App Cmp  ---> ", response.data);
          setMockdata(response.data);
          dispatch({ type: "SET_QUESTIONS", data: response.data });
          setIsLoading(false);
          console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
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

    // 클린업 함수: 컴포넌트가 언마운트되거나, 리렌더링될 때 beforeunload 이벤트에 대한 리스너를 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <QnaStateProvider qnas={qnas}>
        <QnaDispatchProvider qnas={qnas} dispatch={dispatch}>
          <QnaCrudContextProvider dispatch={dispatch}>
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
              {/* <Route
                path="/viewer"
                element={
                  <Auth option={true}>
                    <ViewerStyle.viewerContainer>
                      <Viewer />
                    </ViewerStyle.viewerContainer>
                  </Auth>
                }
              /> */}
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
                  <Auth option={true}>
                    <DetailCardStyle.DetailContainer>
                      <Detail />
                    </DetailCardStyle.DetailContainer>
                  </Auth>
                }
              />

              <Route
                path="detailResult"
                element={
                  <Auth option={true}>
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
          </QnaCrudContextProvider>
        </QnaDispatchProvider>
      </QnaStateProvider>
    </div>
  );
}

export default App;
