import './App.css';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import {Routes, Route} from 'react-router-dom'
import StartPage from './pages/StartPage/index';
import Registration from './pages/Registration/index';
import LogIn from './pages/LogIn/index';



function App() {
  return (
    <Routes>
      <Route
      index
      path="/"
      element = {
        <PublicRoute>
          <StartPage/>
        </PublicRoute>
      }
      />
    
    <Route
       path="/registration"
       element={
        <PublicRoute>
          <Registration />
        </PublicRoute>
      }
   />

    <Route
      path="/login"
      element={
        <PublicRoute>
          <LogIn />
        </PublicRoute>
      }
    />
    </Routes>
  );
}

export default App;
