import { IMovieListData, IBookmarkListData, Action } from "../";

export const addMovieData = (data: IMovieListData): Action => {
  return {
    type: "ADD_MOVIE_DATA",
    payload: data,
  };
};

export const addWatchedData = (data: IMovieListData): Action => {
  return {
    type: "ADD_WATCHED_DATA",
    payload: { ...data, comment: "" },
  };
};

export const deleteWatchedData = (id: number): Action => {
  return {
    type: "DELETE_WATCHED_DATA",
    payload: id,
  };
};

export const updateCommentData = (
  data: IMovieListData,
  comment: string
): Action => {
  return {
    type: "UPDATE_COMMENT_DATA",
    payload: { ...data, comment: comment },
  };
};

// export const memoizedDispatch = useMemo(() => {
//     console.log("[QnaDispatchProvider] dispatch ===> ", dispatch);

//     return {
//       onLogin: (userInfo: { isLogin: boolean; message: string }) => {
//         console.log(
//           "[QnaDispatchProvider] userInfo.isLogin ===> ",
//           userInfo.isLogin
//         );

//         console.log("dispatch test1");
//         dispatch({
//           type: "LOGIN",
//           isLogin: userInfo.isLogin,
//           message: userInfo.message,
//         });
//         localStorage.setItem("user", `${JSON.stringify(userInfo)}`);
//         console.log("dispatch test2 [userInfo.isLogin]", userInfo.isLogin);
//       },
//       onLogout: () => {
//         console.log("[QnaDispatchProvider] userInfo.isLogout ===> ");

//         dispatch({
//           type: "LOGIN",
//           isLogin: false,
//           message: "로그아웃 작동",
//         });
//       },
//       onRegister: (userInfo: { isLogin: boolean; message: string }) => {
//         dispatch({
//           type: "REGISTER",
//           isLogin: userInfo.isLogin,
//           message: userInfo.message,
//         });
//       },
//       onAuth: (userInfo: { isAuth: boolean; isLogin: boolean }) => {
//         dispatch({
//           type: "AUTH",
//           isAuth: userInfo.isAuth,
//           isLogin: userInfo.isLogin,
//         });
//       },
//       // CRUD
//       onCreate: (content: Qna) => {
//         dispatch({ type: "CREATE", data: content });
//       },
//       onUpdate: (targetId: string) => {
//         dispatch({ type: "UPDATE", targetId });
//       },
//       onDelete: (targetId: string) => {
//         dispatch({ type: "DELETE", targetId });
//       },
//       dispatch,
//     };
//   }, [qnas.isLogin]);
//   // }, [dispatch]);
