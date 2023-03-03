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
  lessonAudio: { webContentLink: string };
  lessonNumber: string;
  lessonText: [
    {
      words: string[];
      transcription?: string[];
      translations: string[];
      explanation?: string[];
      question?: string[];
      answers?: string[];
    }
  ];
  stage: Number | null;
}
