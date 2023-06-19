import { useState } from 'react';
import './login.css';
import axios from 'axios';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Login = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function handleLogin() {
    const user = {
      username,
      password,
    };
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      const result = response.data;
      setLoading(false);
      localStorage.setItem('currentUser', JSON.stringify(result));
      window.alert('Login Successfully Done.');
      // Check if the logged-in user is an admin
      if (result.isAdmin) {
        // Redirect to the admin page
        window.location.href = '/admin';
      } else {
        // Redirect to the home page for non-admin users
        window.location.href = '/home';
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      window.alert('Login failed. Invalid credentials.');
      // Handle specific error cases if needed
      if (error.response && error.response.status === 401) {
        // Unauthorized error (login failed)
        console.log('Login failed. Invalid credentials.');
        // Perform additional actions or display error messages
      } else {
        // Other error cases
        console.log('An error occurred during login.');
        // Handle other error cases or display generic error messages
      }
    }
  }

  return (
    <div>
      {loading && <Loader />}
      <div className="login">
        <header className="lg-body">
          <div className="lg-page">
            {error && (
              <Error message="Please, enter a valid username or password" />
            )}
            <div className="lg-form">
              <div className="lg-form-login">
                <span className="lg-title">Login</span>
                <div></div>
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
                    type="password"
                    placeholder="password"
                    id="password"
                    className="lInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="lButton" onClick={handleLogin}>
                  Login
                </button>
                <div className="lg-login-signup">
                  <span className="lg-text">
                    Not a member?
                    <a href="/register" className="lg-text signup-link">
                      Register Now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Login;
