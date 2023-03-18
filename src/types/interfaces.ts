export interface IUser {
  name?: string;
  email: string;
  password: string;
  availableLeasons: Number[];
  avatarURL?: string;
}
export interface IInitialState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
export interface IState {
  auth: {
    user: IUser;
    token: string;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null;
  };
}
export interface IResponse {
  user: IUser;
  token: string;
}
export interface IError {
  message: string;
}
export interface ILesson {
  id: string;
  lessonAudio: string;
  lessonNumber: string;
  lessonText: string;
  stage: number | null;
}
export interface IProps {
  children: JSX.Element;
}
