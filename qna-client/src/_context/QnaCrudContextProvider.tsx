import { useMemo, memo } from "react";
import { Qna, QnaCrudProviderProps } from "../types/types";
import { QnaCrudContext } from "./index";

export const QnaCrudContextProvider = memo(
  ({ dispatch, children }: QnaCrudProviderProps) => {
    console.log("[QnaCrudContextProvider] check ===> check");
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
  }
);

export default QnaCrudContextProvider;
