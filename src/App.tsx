import './App.css';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Routes>
      <Route
      index
      path="/"
      element = {
        <PublicRoute>
          <p>ertyuiop</p>
        </PublicRoute>
      }
      />
    </Routes>
  );
}

export default App;
