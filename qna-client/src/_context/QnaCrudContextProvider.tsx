import { useMemo, createContext } from "react";
import { Qna, QnaCrudContextType } from "../types";

export const QnaCrudContext = createContext<QnaCrudContextType | null>(null);

export const QnaCrudContextProvider = ({ children }) => {
  const memoizedCRUD = useMemo(() => {
    return {
      onCreate: (content: Qna) => {
        dispatch({ type: "CREATE", data: content });
      },
      onUpdate: (targetId: string) => {
        dispatch({ type: "UPDATE", targetId });
      },
      onDelete: (targetId: string) => {
        dispatch({ type: "DELETE", targetId });
      },
    };
  }, []);

  return (
    <QnaCrudContext.Provider value={memoizedCRUD}>
      {children}
    </QnaCrudContext.Provider>
  );
};

export default QnaCrudContextProvider;
