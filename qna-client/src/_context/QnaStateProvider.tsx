import { memo } from "react";
import { QnaStateContext } from "./index";
import { QnaStateProviderProps } from "../types/types";

export const QnaStateProvider = memo(
  ({ qnas, children }: QnaStateProviderProps) => {
    console.log("[QnaStateProvider] qnas ---> ", qnas);
    return (
      <QnaStateContext.Provider value={qnas}>
        {children}
      </QnaStateContext.Provider>
    );
  }
);

export default QnaStateProvider;
