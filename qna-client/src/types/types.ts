export interface Qna {
  id: string;
  content: {
    question: string;
    answer: string;
    tags: string;
  };
  isDone: boolean;
}

// export type ActionTypes =
//   | "CREATE"
//   | "UPDATE"
//   | "DELETE"
//   | "LOGIN"
//   | "REGISTER"
//   | "AUTH";

export interface QnasContextValue {
  state: {
    questions: Qna[];
    isLogin: boolean;
  };
  dispatch: React.Dispatch<ActionTypes>;
}

export type ActionTypes =
  | { type: "CREATE"; data: Qna }
  | { type: "UPDATE"; targetId: string }
  | { type: "DELETE"; targetId: string }
  | { type: "LOGIN"; isLogin: boolean; message: string }
  | { type: "REGISTER"; isLogin: boolean; message: string }
  | { type: "AUTH"; isAuth: boolean; isLogin: boolean }
  | { type: "SET_QUESTIONS"; data: Qna[] };

export type QnaCrudContextType = {
  onCreate: (content: Qna) => void;
  onUpdate: (targetId: string) => void;
  onDelete: (targetId: string) => void;
};

export type QnaUserInfoContextType = {
  onLogin: (userInfo: { isLogin: boolean; message: string }) => void;
  onRegister: (userInfo: { isLogin: boolean; message: string }) => void;
  onAuth: (userInfo: { isAuth: boolean; isLogin: boolean }) => void;
  dispatch: React.ActionDispatch<React.AnyActionArg>;
  // dispatch: React.Dispatch<ActionTypes>;
  setIsLogin: () => void;
  isLogin: boolean;
};
