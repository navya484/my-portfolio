import React from "react";
import "./skills.css";
import { FaCheckCircle } from "react-icons/fa";
const Experience = () => {
 
  const WebSkills = [
    { name: "Flask", level: "Intermediate" },
    { name: "Nodejs", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "Javascript", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
  ];
   
  const AISkills = [
    { name: "Model Development", level: "Basic" },
    { name: "Data Analysis", level: "Intermediate" },
    { name: "Predictive Analytics", level: "Intermediate" },
    
  ];

  const CyberSkills = [
    
    { name: "Ganache", level: "Basic" },
    { name: "Docker", level: "Basic" },
    { name: "solidity", level: "Intermediate" },
    { name: "Blockchain technology", level: "Basic" },
    
  ];


  return (
    <section className="experience-section">
      <h2 className="experience-heading">Skills</h2>

      <div className="experience-wrapper">
        

        <div className="experience-category">
          <h3 className="category-title">AI | ML</h3>
          <div className="skills-grid">
            {AISkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span className="skill-icon"><FaCheckCircle /></span>
                <div>
                  <p className="skill-name">{skill.name}</p>
                  <p className="skill-level">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-category">
          <h3 className="category-title">Web Development</h3>
          <div className="skills-grid">
            {WebSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span className="skill-icon"><FaCheckCircle /></span>
                <div>
                  <p className="skill-name">{skill.name}</p>
                  <p className="skill-level">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-category">
          <h3 className="category-title">CyberSkills</h3>
          <div className="skills-grid">
            {CyberSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span className="skill-icon"><FaCheckCircle /></span>
                <div>
                  <p className="skill-name">{skill.name}</p>
                  <p className="skill-level">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
