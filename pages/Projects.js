import React from 'react';
import './Projects.css'; // Import your CSS file

const Projects = () => {
  const projects = [
    // Example project data
    {
        title: 'theIThelp.com : 2007',
        using :'html, css',
      description: 'theIThelp.com is website for IT support and education meterial...',
      link: '#',
      image: '/images/project-one.jpg',
    },
    {
    
      title: 'sies12.com : 2012',
        using :'html, css',
      description: 'First project is SIES Sipra international Education Systerm now Cadet College.',
      link: '#',
      image: '/images/project-one.jpg',
    },
    {
      title: 'learning Portal: 2015',
        using :'html, css, liferay, flash',
      description: 'the portal is made for online education system in edu Academy..',
      link: '#',
      image: '/images/project-three.jpg',
    },
    
    {
      title: 'Tuorism website : 2018',
        using :'html, css, liferay, flash, java',
      description: 'Tourism Website made for toursit and indentify nearist places for tourist..',
      link: '#',
      image: '/images/project-one.jpg',
    },
    {
      title: 'atoend.com : 2023',
        using :'wordpress, php, html, css',
      description: 'atoend.com is ecommerce Website made in Wrodpress and woo commerce store fully integrated..',
      link: '#',
      image: '/images/project-two.jpg',
    },
    {
      title: 'mrapeal.com : 2024',
        using :'shopify, javascript, html, css',
      description: 'mrapeal.com is ecommerce story made in shopify platform for dropshipping store & branding..',
      link: '#',
      image: '/images/project-three.jpg',
    },
    {
      title: 'portfolios : 2025',
        using :'React js, express js, node.js, pgsql, mongodb,bootstrap',
      description: 'mrapeal.com is ecommerce story made in shopify platform..',
      link: '#',
      image: '/images/project-three.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1 className='skills-title'>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img className="project-thumbnail" src={project.image} alt={project.title} />
            <h2 className="project-title">{project.title}</h2>
            <h2 className="project-using">{project.using}</h2>
            <p className="project-description">{project.description}</p>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
        
      </div>
      <hr/>
      {/* <h3 className='text-center'><p> <span className=''style={{color: '#cc8bf8ff'}}>Appreciate</span> My Work If You Like It</p></h3> */}
   <div className='row'>
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

export default Projects;
