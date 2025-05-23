import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import './app.css'           // centralised styling

function App() {
  return (
    <>
      {/* Tiny top-bar with ONLY Sign In / Sign Up links */}
      <nav className="menu">
        <h1 className="logo">🧋 Boba Teashop</h1>
        <div className="links">
          <Link to="/">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
