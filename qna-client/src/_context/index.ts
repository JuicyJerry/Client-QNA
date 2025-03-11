import { createContext, useContext } from "react";
import {
  InitialStateType,
  QnaCrudContextType,
  QnaUserInfoContextType,
} from "../types/types";

export const QnaStateContext = createContext<InitialStateType | null>(null);
export const QnaCrudContext = createContext<QnaCrudContextType | null>(null);
export const QnaDispatchContext = createContext<QnaUserInfoContextType | null>(
  null
);

export function useQnaState() {
  const state = useContext(QnaStateContext);
  if (!state) throw new Error("QnasProvider not found");
  return state;
}

export function useQnaDispatch() {
  const dispatch = useContext(QnaDispatchContext);
  if (!dispatch) throw new Error("QnasProvider not found");
  return dispatch;
}
