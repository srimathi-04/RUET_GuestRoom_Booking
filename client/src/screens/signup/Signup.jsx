/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import './signup.css';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Success from '../../components/Success';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleRegister() {
    const user = {
      username,
      email,
      address,
      password,
      phone,
    };
    try {
      setLoading(true);
      const response = await axios.post('/api/users/register', user);
      setLoading(false);
      setSuccess(true);
      setUsername('');
      setEmail('');
      setAddress('');
      setPassword('');
      setPhone('');
      window.alert('Registration Successfully Done!');
      window.location.href = '/login';
    } catch (error) {
      window.alert('Oops! Something went wrong.');
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="login">
      {loading && <Loader />}
      {error && <Error />}
      <header className="lg-body">
        <div className="lg-page">
          {success && <Success message="Registration successfully done" />}
          <div className="lg-form">
            <div className="lg-form-login">
              <span className="lg-title">Registration</span>
              <div className="lg-input-field">
                <input
                  type="text"
                  placeholder="username"
                  id="username"
                  className="lInput"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="lg-input-field">
                <input
                  type="text"
                  placeholder="email"
                  id="email"
                  className="lInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="lg-input-field">
                <input
                  type="text"
                  placeholder="address"
                  id="address"
                  className="lInput"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="lg-input-field">
                <form action="">
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    className="lInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>
              </div>
              <div className="lg-input-field">
                <input
                  type="number"
                  placeholder="phone"
                  id="phone"
                  className="lInput"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button className="lButton" onClick={handleRegister}>
                Register
              </button>
              <div className="lg-login-signup">
                <span className="lg-text">
                  Already have an account?
                  <a href="/login" className="lg-text signup-link">
                    Login Now
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Signup;
