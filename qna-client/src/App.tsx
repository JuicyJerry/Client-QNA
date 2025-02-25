import { useState } from "react";
import Auth from "./features/Auth";
import { Routes, Route } from "react-router-dom";
import { QuestionProvider } from "./_context/QuestionProvider";
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

interface Qna {
  id: number;
  content: {
    question: string;
    answer: string;
  };
  isDone: boolean;
}

function App() {
  const [total, setTotal] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const onClickButton = (value: number) => {
    setTotal(total + value);
  };

  return (
    <QuestionProvider
      value={{
        total,
        current,
        setCurrent,
        onClickButton,
        // setIsLogin,
      }}
    >
      <div className="App">
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
      </div>
    </QuestionProvider>
  );
}

export default App;
