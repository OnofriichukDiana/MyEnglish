import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../Redux/hook'
import { IState } from '../Redux/interfaces'
import { Props } from './interfaces'


const PrivateRoute = ({ children }: Props) => {
  const isLoggedIn = useAppSelector((state: IState) => state.auth.isLoggedIn)
  return isLoggedIn ? children : <Navigate to="/" />
}
export default PrivateRoute
