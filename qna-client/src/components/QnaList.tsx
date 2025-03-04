import { Qna } from "../types";

interface Props {
  element: Qna;
  index: number;
}

export default function QnaList(props: Props) {
  return (
    <a href="">
      <h6 className={`list-${props.index}`}>
        {props.element.content.question}
      </h6>
      <p>
        Tags: <code>{props.element.content.tags}</code>
      </p>
      {/* <p>{props.element.content.answer}</p> */}
    </a>
  );
}
