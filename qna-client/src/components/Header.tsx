import { memo } from "react";
import { HeaderStyle } from "../styles/index";
import { Link } from "react-router-dom";

const Header = memo(() => {
  return (
    <HeaderStyle.HeaderContainer>
      <div className="wrapper">
        <HeaderStyle.HeaderContents>
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
                to={"/controller"}
                className={
                  location.pathname === "/controller"
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
        </HeaderStyle.HeaderContents>
      </div>
    </HeaderStyle.HeaderContainer>
  );
});

export default Header;
