// import React, { useState, ReactElement, useEffect } from "react";
// import axios from "axios";
// import { Qna } from "../types";
// import { ActionType } from "../_actions/index";
// interface Props extends Qna {
//   children: ReactElement;
// }

// interface QuestionsContextValue {
//   state: {
//     question: Qna[];
//     isLogin: boolean;
//   };
//   dispatch: React.Dispatch<ActionType>; // reducer의 액션 타입에 따라 더 구체적으로 정의 가능
//   idRef: React.MutableRefObject<number>;
// }

// export const QuestionsContext =
//   React.createContext<QuestionsContextValue | null>(null);

// export const QuestionProvider = ({ children }: Props) => {

//   return (
//     <QuestionsContext.Provider
//       value={{
//         state,
//         dispatch,
//         idRef,
//       }}
//     >
//       {children}
//     </QuestionsContext.Provider>
//   );
// };
