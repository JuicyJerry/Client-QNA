import { QnaStateContext } from "../App.js";
import { useContext, useEffect, useRef, useState } from "react";
import { ListStyle } from "../styles/index";
import QnaList from "../components/QnaList";
import { Qna } from "../types";
import { useLoading } from "../components/LoadingSpinner.js";

const List = () => {
  const { setIsLoading } = useLoading();
  const qnas = useContext(QnaStateContext);
  const [visibleQuestions, setVisibleQuestions] = useState<Qna[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12; // 한 번에 불러올 개수
  const listRef = useRef<HTMLUListElement | null>(null); // 리스트 ul 요소 참조

  useEffect(() => {
    setIsLoading(true);
    if (qnas?.questions.length) {
      setVisibleQuestions(qnas.questions.slice(0, itemsPerPage));
      setIsLoading(false);
    }
  }, []);

  // 스크롤 이벤트 감지하여 추가 데이터 로딩
  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = listElement;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        console.log("[handleScroll] loadMoreQuestions 실행 ===> ");
        loadMoreQuestions();
      }
    };

    listElement.addEventListener("scroll", handleScroll);
    return () => listElement.removeEventListener("scroll", handleScroll);
  }, [visibleQuestions]);

  // 추가 데이터 로딩 함수
  const loadMoreQuestions = () => {
    console.log(
      "[loadMoreQuestions] qnas.questions.length ===> ",
      qnas.questions.length
    );
    console.log(
      "[loadMoreQuestions]  visibleQuestions.length ===> ",
      visibleQuestions.length
    );
    if (qnas.questions.length > visibleQuestions.length) {
      setIsLoading(true);
      setTimeout(() => {
        const nextPage = page + 1;
        const nextQuestions = qnas.questions.slice(0, nextPage * itemsPerPage);
        setVisibleQuestions(nextQuestions);
        setPage(nextPage);
        setIsLoading(false);
      }, 1000); // 로딩 시각적 효과 추가 (1초 딜레이)
    }
  };

  return (
    <div>
      <header>
        <h2>Predifined Quizzes</h2>
        <p>
          Get a taste our predifed quizzes containing the most relevant
          questions for interviews, jobs etc.
        </p>
      </header>

      <section className="list">
        {/* 총 개수 <span>{qnas.questions.length}</span>
      <p className="total"></p> */}
        <ul ref={listRef}>
          {qnas.questions.length > 0 ? (
            qnas.questions.map((element: Qna, index: number) => {
              return (
                <ListStyle.ListList
                  className={`list-${index}`}
                  key={`list-${index}`}
                >
                  <QnaList element={element} index={index} />
                </ListStyle.ListList>
              );
            })
          ) : (
            <p>등록된 Question이 없습니다.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default List;
