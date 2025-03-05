import { useEffect, useState, useReducer, useMemo, createContext } from "react";
import reducer from "../_reducers/index";
import { QnasContextValue } from "../types";

// import { Qna, QnaCrudContextType } from "../types";
export const QnaStateContext = createContext<QnasContextValue | null>(null);

export const QnaStateProvider = ({ qnas, children }) => {
  return (
    <QnaStateContext.Provider value={qnas}>{children}</QnaStateContext.Provider>
  );
};

export default QnaStateProvider;
