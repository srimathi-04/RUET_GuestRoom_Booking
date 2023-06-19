/* eslint-disable react/jsx-no-target-blank */
import './App.css';
import Navbar from './components/navbar/Navbar';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homescreen from './screens/home/Homescreen';
import BookingScreen from './screens/bookingScreen/BookingScreen';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import Profile from './screens/profile/Profile';
import Admin from './screens/admin/Admin';
import LandingPage from './screens/landingPage/LandingPage';
import './bootstrap.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/book/:roomid/:fromdate/:todate"
            element={<BookingScreen />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
