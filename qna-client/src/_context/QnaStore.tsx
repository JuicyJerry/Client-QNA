import { useState, memo, useReducer, useEffect } from "react";
import reducer from "../_reducers/index";
import { InitialStateType, Qna, QnaStoreProps } from "../types/types";
import { useLoading } from "../components/LoadingSpinner";
import { QnaStateProvider } from "../_context/QnaStateProvider";
import { QnaDispatchProvider } from "../_context/QnaDispatchProvider";
import { QnaCrudContextProvider } from "../_context/QnaCrudContextProvider";

import axios from "axios";
// import api from "./utils/axios";

const QnaStore = memo(({ children }: QnaStoreProps) => {
  const [mockData, setMockdata] = useState<Qna[]>([]);
  const initialState: InitialStateType = {
    questions: mockData,
    isLogin: false,
    isAuth: false,
  };
  const [qnas, dispatch] = useReducer(reducer, initialState);

  const { setIsLoading } = useLoading() as {
    setIsLoading: (loading: boolean) => void;
  };

  const didFetch = localStorage.getItem("isFetched");
  console.log("[app]didFetch ===> ", didFetch);

  const handleBeforeUnload = () => {
    localStorage.removeItem("isFetched");
  };

  useEffect(() => {
    if (didFetch) return;
    localStorage.setItem("isFetched", "true");
    window.addEventListener("beforeunload", handleBeforeUnload);
    console.log("dispatch in App:", dispatch);
    setIsLoading(true);

    axios
      .get("/data/mockData.json")
      .then((response) => {
        if (response.data) {
          console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
          console.log("Here is App Cmp  ---> ", response.data);
          setMockdata(response.data);
          dispatch({ type: "SET_QUESTIONS", data: response.data });
          setIsLoading(false);
          console.log("★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
        } else {
          alert("mock data 없음");
          setMockdata(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("API 호출 오류: ", error);
        setIsLoading(false);
      });

    // 클린업 함수: 컴포넌트가 언마운트되거나, 리렌더링될 때 beforeunload 이벤트에 대한 리스너를 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <QnaStateProvider qnas={qnas}>
      <QnaDispatchProvider dispatch={dispatch}>
        <QnaCrudContextProvider dispatch={dispatch}>
          {children}
        </QnaCrudContextProvider>
      </QnaDispatchProvider>
    </QnaStateProvider>
  );
});

export default QnaStore;
