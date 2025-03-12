import { ReactNode } from "react";

export interface Qna {
  id: string;
  content: {
    question: string;
    answer: string;
    tags: string;
  };
  isDone: boolean;
}

export interface InitialStateType {
  questions: Qna[];
  isLogin: boolean;
  isAuth: boolean;
}

export interface QnaStoreProps {
  children: ReactNode;
}
export interface QnasContextValue {
  state: {
    questions: Qna[];
    isLogin: boolean;
  };
  dispatch: React.Dispatch<ActionTypes>;
}

export interface QnaStateProviderProps {
  children: ReactNode;
  qnas: InitialStateType;
}

export interface QnaCrudProviderProps {
  children: ReactNode;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface QnaDispatchProviderProps {
  children: ReactNode;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface QnaAuthProps {
  children: ReactNode;
  option: boolean | null;
  adminRoute?: boolean | null;
}

export interface GoogleCredentialResponse {
  credential: string;
}

export type ActionTypes =
  | { type: "CREATE"; data: Qna }
  | { type: "UPDATE"; targetId: string }
  | { type: "DELETE"; targetId: string }
  | { type: "LOGIN"; isLogin: boolean; message: string }
  | { type: "LOGOUT"; isLogin: boolean; message: string }
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
  onLogout: () => void;
  // onLogout: (userInfo: { isLogin: boolean; message: string }) => void;
  // dispatch: React.ActionDispatch<React.AnyActionArg>;
  // dispatch: React.Dispatch<ActionTypes>;
  // setIsLogin: () => void;
  // isLogin: boolean;
};

// export type ActionTypes =
//   | "CREATE"
//   | "UPDATE"
//   | "DELETE"
//   | "LOGIN"
//   | "REGISTER"
//   | "AUTH";
