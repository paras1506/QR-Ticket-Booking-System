import React from 'react';
import { Link } from 'react-router-dom';
import videoSource from '../assets/vdo.mp4';
import './main.css'; // Import the new CSS file

const Main = () => {
  return (
    <div className="main-container">
      <video className="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1 className="main-title">Welcome to Our Museum</h1>
        <p className="main-subtitle">Explore wonders below</p>
        {/* <a href="#visit" className="main-button">Plan Your Visit</a> */}
        <Link to="/home" className="main-button">
          Plan Your Visit
        </Link>
      </div>
    </div>
  );
};

export default Main;
