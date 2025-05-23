import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bobaPic from '../assets/boba2.jpeg'; // 🧋💕


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter both fields 😊');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      alert(response.data.message);
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data.message || 'Login failed 💔');
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {/* Left - Form */}
      <div style={{
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Sign In</h2>

          <input
            style={inputStyle}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            style={inputStyle}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={buttonStyle}>Enter Dashboard</button>
        </form>
      </div>

      {/* Right - Boba Image */}
      <div style={{
        flex: 1,
        background: `url(${bobaPic}) center/cover no-repeat`,
      }}></div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  marginBottom: '1rem',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  borderRadius: '8px',
  backgroundColor: '#ff80ab',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default Login;
