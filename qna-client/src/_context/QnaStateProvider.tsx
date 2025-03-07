import { createContext, memo } from "react";
import { QnasContextValue } from "../types/types";

// import { Qna, QnaCrudContextType } from "../types";
export const QnaStateContext = createContext<QnasContextValue | null>(null);

export const QnaStateProvider = memo(({ qnas, children }) => {
  console.log("[QnaStateProvider] qnas ---> ", qnas);
  return (
    <QnaStateContext.Provider value={qnas}>{children}</QnaStateContext.Provider>
  );
});

export default QnaStateProvider;
