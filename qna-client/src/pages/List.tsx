import { QnaStateContext } from "../App.js";
import { useContext } from "react";
import { ListStyle } from "../styles/index";
import QnaList from "../components/QnaList";
import { Qna } from "../types";

// interface Props extends Qna {}

const List = () => {
  const qnas = useContext(QnaStateContext);
  if (!qnas) throw new Error("[List]qnas is not found");
  console.log("List[qnas]: ", qnas);

  return (
    <div className="list">
      <p className="total">
        총 개수 <span>{qnas.state?.questions.length}</span>
      </p>
      <ul>
        {qnas.state?.questions.length > 0 ? (
          qnas.state.questions.map((element: Qna, index: number) => {
            return (
              <ListStyle.ListList key={element.id}>
                <li className={`list-${index}`} key={`list-${index}`}>
                  <QnaList element={element} index={index} />
                </li>
              </ListStyle.ListList>
            );
          })
        ) : (
          <p>등록된 Question이 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default List;
