import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bobaPic from '../assets/boba1.jpeg';        // ← adjust if your path/file name differs

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate  = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) return alert('Fill both fields, please 🧋');

    try {
      const { data } = await axios.post(
        'http://localhost:5000/signup',
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      alert(data.message);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed, honey 💔');
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* ─── Left – Form ─────────────────────────────────────────────── */}
      <div style={{
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <form onSubmit={handleSignup} style={{ width: '100%', maxWidth: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Sign Up</h2>

          <input
            style={inputStyle}
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            style={inputStyle}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={buttonStyle}>Create Account</button>
        </form>
      </div>

      {/* ─── Right – Boba Image ─────────────────────────────────────── */}
      <div style={{
        flex: 1,
        background: `url(${bobaPic}) center/cover no-repeat`
      }} />
    </div>
  );
};

/* ───── Re-usable inline styles ───────────────────────────────────── */
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  marginBottom: '1rem',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  borderRadius: '8px',
  backgroundColor: '#ff80ab',
  color: '#fff',
  border: 'none',
  cursor: 'pointer'
};

export default Signup;
