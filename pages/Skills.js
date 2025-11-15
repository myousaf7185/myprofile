import React, { useEffect, useState } from "react";
import CircularProgressBar from "./CircularProgressBar";
import "./Skills.css"; // Create a separate CSS file for styles

const skillsData = [
  { skill: "JavaScript", level: 80, image: "/images/logos/js.png" },
  { skill: "React Js", level: 75 },
  { skill: "MongoDB", level: 80 },
  { skill: "Express", level: 80 },
  { skill: "React+Vite", level: 90 },
  { skill: "Node.js", level: 70 },
  { skill: "SQL Server", level: 55 },
  { skill: "PostgreSQL", level: 70 },
  { skill: "paython", level: 30 },
  { skill: "HTML", level: 90 },
  { skill: "CSS", level: 85 },
];

const Skills = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0)); // Initialize progress array

  useEffect(() => {
    const intervals = skillsData.map((skill, index) => {
      return setInterval(() => {
        setProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[index] < skill.level) {
            newProgress[index] += 1; // Increment progress
          }
          return newProgress;
        });
      }, 20); // Adjust speed of the loading effect
    });

    // Clear intervals after all skills reach their levels
    const maxLevel = Math.max(...skillsData.map((skill) => skill.level));
    const checkCompletion = setInterval(() => {
      if (progress.every((p, index) => p >= skillsData[index].level)) {
        clearInterval(checkCompletion);
        intervals.forEach(clearInterval); // Clear all skill intervals
      }
    }, 100);

    return () => {
      intervals.forEach(clearInterval);
      clearInterval(checkCompletion);
    };
  }, []);

  return (
    <>
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <hr />
        <div className="row">
          <div className="skills-list  ">
            {skillsData.map((skillData, index) => (
              <div className="progress-bar col-12 col-sm-6 col-md-4 col-lg-3"  key={index}>
                <CircularProgressBar
                  percentage={progress[index]}
                  skill={skillData.skill}
                />
              </div>
            ))}
          </div>
        </div>

 <div className='row'>
  <hr/>
      <h3 className="text-center">
  
  <span style={{ color: "#cc8bf8ff" }}>Appreciate</span> My Work If You Like It
  <img 
    src="/images/logos/thankyou.png" 
    alt="like" 
    style={{ width: "100px", height: "40px", display: "block", margin: "0 auto 8px" }} 
  />
</h3>
</div>


      </div>
    </>
  );
};

export default Skills;
