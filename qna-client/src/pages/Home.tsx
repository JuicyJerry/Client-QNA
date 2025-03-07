import { useEffect, useContext, memo } from "react";
// import { QnaDispatchContext } from "../App";
import { QnaDispatchContext } from "../_context/QnaDispatchProvider.tsx";
import { HomeStyle } from "../styles/index";
import { ListStyle } from "../styles/index";
import Header from "../components/Header";
import List from "./List";
import { useLocation } from "react-router-dom";
import api from "../utils/axios.ts";

const Home = memo(() => {
  const location = useLocation();
  const { onLogin } = useContext(QnaDispatchContext)!;
  // console.log("[home]location ===> ", location);

  if (location.state?.userInfo) {
    // console.log("[home] location.state ===> ", location.state);
    onLogin({
      isLogin: true,
      message: "로그인 성공",
    });
  }

  useEffect(() => {
    api
      .get("/api/hello")
      .then((response) => {
        // console.log("Home 화면입니다.", response);
      })
      .catch((err) => {
        // console.log("Home 화면입니다.2");
        console.error(err.response.data.error);
        // console.log(err);
      });
  }, []);

  return (
    <HomeStyle.HomeContainer>
      <ListStyle.ListContainer>
        <section className="home">
          <Header />
          <List />
        </section>
      </ListStyle.ListContainer>
    </HomeStyle.HomeContainer>
  );
});

export default Home;
