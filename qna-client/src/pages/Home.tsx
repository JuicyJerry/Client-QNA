import { useEffect } from "react";
import axios from "axios";
import { HomeStyle } from "../styles/index";
import { ListStyle } from "../styles/index";
import Header from "../components/Header";
import List from "./List";

const Home = () => {
  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => {
        console.log("Home 화면입니다.", response);
      })
      .catch((err) => {
        console.log("Home 화면입니다.2");
        console.error(err.response.data.error);
        // console.log(err);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "calc(100vh - 56px)" }}>
      <ListStyle.ListContainer>
        <HomeStyle.HomeContainer className="home">
          <Header />
          <List />
        </HomeStyle.HomeContainer>
      </ListStyle.ListContainer>
    </div>
  );
};

export default Home;
