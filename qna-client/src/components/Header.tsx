import { HeaderStyle } from "../styles/index";
import { Link, useNavigate } from "react-router-dom";
// import ConstellationCanvas from "./ConstellationCanvas";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#24292e",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1140px" }}>
        {/* <ConstellationCanvas color="rgba(255,255,255,0.3)"> */}
        <HeaderStyle.HeaderContainer>
          <div className="container">
            <h3 className="title">
              The QNA includes a wide number of IT Area questions
            </h3>
            <p>
              Test your knowledge or easily embed a quiz on your website with
              the Quiz API
            </p>

            <div className="btns">
              <Link
                to={"/list"}
                className={
                  location.pathname === "/list"
                    ? "btn active"
                    : "btn btn-outline-success btn-round"
                }
              >
                Take Quiz
              </Link>
              <Link
                to={"/list"}
                className={
                  location.pathname === "/list"
                    ? "btn active"
                    : "btn btn-success btn-round"
                }
              >
                Create Quiz
              </Link>
            </div>
          </div>

          <div>
            <img src="https://placehold.co/300x300" alt="샘플이미지" />
          </div>
        </HeaderStyle.HeaderContainer>
        {/* </ConstellationCanvas> */}
      </div>
    </div>
  );
};

export default Header;
