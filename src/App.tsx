import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import './App.css'
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App