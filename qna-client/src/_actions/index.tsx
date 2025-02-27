// import React, { useCallback, useContext } from "react";
// import { Qna } from "../types";
// import { QnaDispatchContext } from "../App";

// export const CREATE = "CREATE";
// export const UPDATE = "UPDATE";
// export const DELETE = "DELETE";
// export const LOGIN = "LOGIN";
// export const REGISTER = "REGISTER";
// export const AUTH = "AUTH";
// export const SET_QUESTIONS = "SET_QUESTIONS";

// export const QuestionsDispatchContext = React.createContext<{
//   createDate: (content: Qna) => void;
// } | null>(null);

// interface UserInfo {
//   isLogin?: boolean;
//   isAuth?: boolean;
// }

// export const useQnaActions = () => {
//   console.log(
//     "[useQnaActions]useContext(QnaDispatchContext) --> ",
//     useContext(QnaDispatchContext)
//   );
//   const { dispatch } = useContext(QnaDispatchContext)!;
//   console.log("[useQnaActions]dispatch --> ", dispatch);
//   if (!dispatch) throw new Error("[useQnaActions]context is not found");

//   const onCreate = useCallback((content: Qna) => {
//     dispatch({
//       type: CREATE,
//       data: content,
//     });
//   }, []);

//   const onUpdate = useCallback(
//     (targetId: string) =>
//       dispatch({
//         type: UPDATE,
//         targetId: targetId,
//       }),
//     []
//   );

//   const onDelete = useCallback(
//     (targetId: string) =>
//       dispatch({
//         type: DELETE,
//         targetId: targetId,
//       }),
//     []
//   );

//   const onLogin = useCallback(
//     (userInfo: UserInfo) =>
//       dispatch({
//         type: LOGIN,
//         isLogin: userInfo.isLogin,
//         message: "",
//       }),
//     []
//   );

//   const onRegister = useCallback(
//     (userInfo: UserInfo) =>
//       dispatch({
//         type: REGISTER,
//         isLogin: userInfo.isLogin,
//         message: "",
//       }),
//     []
//   );

//   const onAuth = useCallback(
//     (userInfo: UserInfo) =>
//       dispatch({
//         type: AUTH,
//         isAuth: userInfo.isAuth,
//         isLogin: userInfo.isLogin,
//       }),
//     []
//   );

//   return {
//     onCreate,
//     onUpdate,
//     onDelete,
//     onLogin,
//     onRegister,
//     onAuth,
//   };
// };