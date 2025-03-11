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
  GoogleRedirectionPage,
  Detail,
  DetailResult,
} from "./pages/index";
import {
  HomeStyle,
  ListStyle,
  ControllerStyle,
  LoginStyle,
  RegisterStyle,
  NotfoundStyle,
  DetailCardStyle,
} from "./styles/index";
import "./App.css";

import QnaStore from "./_context/QnaStore";
// import { useQnaState, useQnaDispatch } from "./_context/index";

function App() {
  return (
    <div className="App">
      <QnaStore>
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
      </QnaStore>
    </div>
  );
}

export default App;
