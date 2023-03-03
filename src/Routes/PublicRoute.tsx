import { Navigate } from 'react-router-dom'
import {useAppSelector} from '../Redux/hook'
import { IState } from '../types/interfaces'
import { Props } from './interfaces'

const PublicRoute = ({ children}: Props) => {
  const isLoggedIn = useAppSelector((state: IState) => state.auth.isLoggedIn)
  return !isLoggedIn ? children : <Navigate to="/auth" />
}
export default PublicRoute
