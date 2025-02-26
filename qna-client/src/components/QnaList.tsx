import { Qna } from "../types";

interface Props {
  element: Qna;
  index: number;
}

export default function QnaList(props: Props) {
  return (
    <div>
      <p className={`list-${props.index}`}>{props.element.content.question}</p>
      <p>{props.element.content.answer}</p>
    </div>
  );
}
