import React from 'react';
import './App.css';
import profileImage from './profile.jpg';
import gpsImage from './GPs.jpg';
import TrafficImage from './Traffic volume .jpg'; 
import medImage from './medid.png';
import questImage from './quest.png';
import elecImage from './elec.png';
// Image should be inside src/
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaGithub, FaLinkedin,  FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import EducationTimeline from './EducationTimeline';
import Skills from './skills'; 

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Navya Prasad</div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#timeline">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <img src={profileImage} alt="Navya Prasad" className="profile-img" />
        <div className="hero-text">
          <p>Hello, I'm</p>
          <h1>Navya Prasad</h1>
          <h5> - Computer Science and Engineering Undergrad</h5>
          <h4>Web Developer | AI/ML Enthusiast | Exploring Blockchain</h4>
          <h5>Future-Ready. Code-Driven. Passion-Led.</h5>
          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn light">Download CV</a>
            <a href="#contact" className="btn dark">Contact Info</a>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/navya-prasad-009a25298/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/navya484" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.hackerrank.com/profile/navyaprasad4824" target="_blank" rel="noopener noreferrer">
              <FaHackerrank size={30} color="#2EC866" />
            </a>
            <a href="https://leetcode.com/u/Navya_Prasad/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={30} color="#FFA116" />
            </a>
          </div>
        </div>
      </header>
      <div id="timeline">
        <EducationTimeline />
      </div>
      <div id="skills">
        <Skills/>
      </div>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-cards">
          {/* NFT Project Card */}
          <div className="project-card">
           <img src={gpsImage} alt="GPS Toll Based System Using Machine Learning" />
            <div className="project-info">
              <p className="category">Machine Learning</p>
              <h3>GPS Toll Based System Using Machine Learning</h3>
              <a href="https://gps-toll.cubeshosting.com/#" target="_blank" rel="noreferrer">Visit</a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/Team-CodeClan/GPS-Toll-based-System-simulation" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Fashion Project Card */}
          <div className="project-card">
            <img src="https://raw.githubusercontent.com/MuhammedAnees-loony/Connect-saintgits/92bdf0fc0fe558b8aef5d0abf8323d90cc79437c/logo5.svg" alt="Connect@Saintgits" />
            <div className="project-info">
              <p className="category">Website</p>
              <h3>Connect@Saintgits</h3>
              <a href="https://muhammedanees-loony.github.io/Connect-saintgits/">Visit</a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/MuhammedAnees-loony/Connect-saintgits" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Fashion Project Card */}
          <div className="project-card">
            <img src={medImage} alt="Medical Id Generator using Blockchain" />
            <div className="project-info">
              <p className="category">Cyber security</p>
              <h3>Medical Id Generator using Blockchain</h3>
              <a href="#">Visit</a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/Mathews-Reji/BMC-Hack" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={questImage} alt="Gamification" />
            <div className="project-info">
              <p className="category">Gamification</p>
              <h3>Questgram-Gamified Public Engagement Platform</h3>
              <a href="https://muhammedanees-loony.github.io/hackathon/">Visit</a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/MuhammedAnees-loony/hackathon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={TrafficImage} alt="Medical Id Generator using Blockchain" />
            <div className="project-info">
              <p className="category">Neural Networks</p>
              <h3>Traffic Volume Prediction using LSTM Neural Network</h3>
              <a href="#">Visit</a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/MuhammedAnees-loony/Traffic-Volume-Prediction" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={elecImage} alt="Monthly Electricity Consumption Forecasting for a Household" />
            <div className="project-info">
              <p className="category">Neural Networks</p>
              <h3>Monthly Electricity Consumption Forecasting for a Household</h3>
              <a href="#">Visit</a>
            </div>
            <div className="github-icon">
              <a href="https://github.com/navya484/Electricity_household_prediction" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="circle-container">
      <svg viewBox="0 0 200 200" className="rotating-text">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="white" fontSize="16" fontFamily="Arial">
          <textPath href="#circlePath" startOffset="0%">
            Web Developer · AI/ML
          </textPath>
        </text>
      </svg>
      <div className="center-button">
        <a
          href="mailto:navyaprasad4824@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Navya%2C%0AI'm%20interested%20in%20your%20profile."
          className="center-button"
          role="button"
        >
          Hire Me
        </a>

      </div>
    </div>
    <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: navyaprasad4824@gmail.com</p>
        <p>Phone: +91-7356226196</p>
        <p>Location: Kerala, India</p>
      </section>
    </div>
  );
}

export default App;
