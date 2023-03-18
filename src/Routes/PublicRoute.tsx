import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/hook";
import { IState } from "../types/interfaces";
import { IProps } from "../types/interfaces";

const PublicRoute = ({ children }: IProps) => {
  const isLoggedIn = useAppSelector((state: IState) => state.auth.isLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/auth" />;
};
export default PublicRoute;
