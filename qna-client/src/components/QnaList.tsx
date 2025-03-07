import { memo } from "react";
import { Qna } from "../types/types";
import { useNavigate } from "react-router-dom";

interface Props {
  element: Qna;
  index: number;
}

export const QnaList = memo((props: Props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("props.element --->", props.element.id);
    navigate(`/detail/${props.element.id}`);
  };

  return (
    <a onClick={handleClick} href="">
      <h6 className={`list-${props.index}`}>
        {props.element.content.question}
      </h6>
      <p>
        Tags: <code>{props.element.content.tags}</code>
      </p>
      {/* <p>{props.element.content.answer}</p> */}
    </a>
  );
});

export default QnaList;
