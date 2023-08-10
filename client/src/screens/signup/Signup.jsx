/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import './signup.css';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Success from '../../components/Success';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [nid, setNid] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleRegister() {
    const user = {
      fullname,
      username,
      email,
      dob,
      address,
      password,
      phone,
      nid,
    };
    try {
      setLoading(true);
      const response = await axios.post('/api/users/register', user);
      setLoading(false);
      setSuccess(true);
      setFullname('');
      setUsername('');
      setEmail('');
      setDob('');
      setAddress('');
      setPassword('');
      setPhone('');
      setNid('');
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
              <span className="lg-title">Create Your Account</span>
              <div className="lg-input-field">
                <input
                  type="text"
                  placeholder="Full name"
                  id="username"
                  className="lInput"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
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
                  type="date"
                  placeholder="Date of Birth"
                  id="dob"
                  className="lInput"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
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
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  className="lInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
              <div className="lg-input-field">
                <input
                  type="number"
                  placeholder="NID no"
                  id="phone"
                  className="lInput"
                  pattern="[0-9] {10}"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
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
