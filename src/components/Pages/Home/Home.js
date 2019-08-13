import React from 'react';
import './Home.css';
import Bacteria from '../Views/Videos/Bacteria.mp4';
import 'react-modal';


const modal = document.getElementById('id01');

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const Home = () => (
  <div>
    <header className="v-header container">
      <div className="fullscreen-video-wrap">
        <video id='videoTag' autoPlay loop muted>
          <source src={Bacteria} type='video/mp4' />

        </video>

      </div>
    </header>
    <div className="homePage">
      <h1 style={{ textAlign: "center", fontFamily: 'fantasy', color: 'blue', fontSize: '54px', fontWeight: "bold" }}>Welcome to electroScribe</h1>
      <br />
      <br />
      <h3 style={{ textAlign: "center" }}>The Electronic Medical Record management app of the future!</h3>
      <br />
      <br />
      <h4 className="info" style={{ textAlign: "center" }}>Dear Doctor/Patient,
        With this application you will be able to see all of your information by just using this application anywhere anythime.
        The only thing you are supoosed to do is just downloading this app and entering your personal information.
        You will see you your personal records, medical records, messages, and etc. Login to see your madical information!
      </h4>
      <br />
      <a style={{ fontWeight: 'bold', color: "white", textDecoration: "none" }} href="/login">Click to login</a>
    </div>



  </div>
)

export default Home;