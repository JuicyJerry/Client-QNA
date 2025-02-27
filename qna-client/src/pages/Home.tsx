import { useEffect } from "react";
import axios from "axios";
import { HomeStyle } from "../styles/index";
import Header from "../components/Header";


const Home = () => {
  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => {
        console.log("Home 화면입니다.", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "calc(100vh - 56px)" }}>
      <HomeStyle.HomeContainer className="home">
        <Header />
        <div className="container">
          <h1>Question And Answer</h1>
          <div className="content">
            <p>1. 질문과 답을 입력하세요.</p>
            <p>2. 뷰어(Viewer) 모드에서 질문과 답을 확인하세요.</p>
          </div>
        </div>
      </HomeStyle.HomeContainer>
    </div>
  );
};

export default Home;
