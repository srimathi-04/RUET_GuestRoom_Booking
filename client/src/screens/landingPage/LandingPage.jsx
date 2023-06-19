import './landingPage.css';
function handleClick() {
  window.location.href = '/home';
}
const LandingPage = () => {
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
        <p className="footer">© 2023 Sumon Ali. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
