import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';


function App() {
 

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }  
          >

          </Route>
        </Routes>
    </Router>
  )
}

export default App
