import React from 'react';
import './Experience.css'; // Import your CSS file

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'Freelancer',
      duration: 'Jan 2022 - Present',
      description: 'Developing dynamic web applications using MongoDB, Express.js, React.js, and Node.js.',
    },
    {
      title: 'Digital Marketing Manager',
      company: 'Local Services',
      duration: 'Jan 2022 - Present',
      description: 'Developing dynamic web applications using MongoDB, Express.js, React.js, and Node.js.',
    },

    {
      title: 'Wordpress Developer',
      company: 'Freelancer',
      duration: 'Jan 2021 - Dec 2021',
      description: 'Worked on various frontend projects utilizing React and Bootstrap for responsive design.',
    },
    {
      title: 'Shopify Developer',
      company: 'Freelancer',
      duration: 'Jan 2021 - Dec 2021',
      description: 'Worked on various frontend projects utilizing React and Bootstrap for responsive design.',
    },
    {
      title: 'PERN stack Dev',
      company: 'Freelancer',
      duration: 'Jan 2021 - Dec 2021',
      description: 'Worked on various frontend projects utilizing React js node js express js postgre SQL and Bootstrap for responsive design.',
    },
    // Add more experience entries as needed
  ];

  return (
   

<div className="experience-container container text-center">
  <h1 className="skills-title">My Experience</h1>
  <div className="row justify-content-center">
    {experiences.map((exp, index) => (
      <div className="experience-card col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <h2 className="experience-title">{exp.title}</h2>
        <h3 className="experience-company">{exp.company}</h3>
        <p className="experience-duration">{exp.duration}</p>
        <p className="experience-description">{exp.description}</p>
      </div>
    ))}
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

  );
};

export default Experience;
