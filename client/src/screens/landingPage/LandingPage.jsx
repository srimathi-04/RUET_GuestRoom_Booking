import './landingPage.css';
import { useState } from 'react';
import TaC from './T&C/TaC';
import Faqs from './faqs/Faqs';

function handleClick() {
  window.location.href = '/home';
}
const LandingPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  return (
    <div className="App-img">
      <header className="App-h"></header>
      <h1 className="body-txt">Welcome to RUET Guest Room</h1>

      <p className="body-txt">
        Experience comfort and convenience at RUET Guest Room. Our
        accommodations offer a cozy and welcoming environment, ensuring a
        pleasant stay during your visit to RUET Guest Room.
      </p>

      <button className="get-started-btn" onClick={handleClick}>
        Explore Rooms
      </button>

      <footer className="App-footer">
        <div className="footer">
          <div className="">
            <button
              className="get-started-btn1 "
              onClick={() => setModalShow(true)}
            >
              T&C
            </button>
            <TaC show={modalShow} onHide={() => setModalShow(false)} />
            <button
              className="get-started-btn1"
              onClick={() => setModalShow1(true)}
            >
              FAQs
            </button>
            <Faqs show={modalShow1} onHide={() => setModalShow1(false)} />
          </div>
          © 2023 Sumon Ali. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
