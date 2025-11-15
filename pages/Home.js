import React from 'react';
import './Home.css';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <div className='body'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className='leftcontent'>
                <div className='home-content'>
                  <h3>Hello, it's Me</h3>
                  <h1>Ayesha Yousaf</h1>
                  <h3>I am a <span>MERN Stack Developer</span></h3>
                  <h4 className='text-center' style={{color: "#fe8433"}}>Key Skills: </h4>
                  <p> As a passionate MERN Stack Developer, I specialize in building dynamic, scalable web applications using MongoDB, Express.js, React.js, and Node.js. With a strong foundation in full-stack development, I am adept at transforming complex requirements into user-friendly solutions.</p>
                  <p>Contact Detail<br/>email: ayeshayousaf61090@gmail.com<br/>Whatsapp: 00000000000000 <br/>freelancer : name title</p>
                  <div className='social-media'>
                    <a href=''><i className='fab fa-facebook' /></a>
                    <a href=''><i className='fab fa-twitter' /></a>
                    <a href=''><i className='fab fa-instagram' /></a>
                    <a href=''><i className='fab fa-youtube' /></a>
                  </div>
                  <br />
                  <a href='' className='btn btn-success'>Download CV</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className='img-container'>
                <img src='/images/dev.png' style={{ width: '100%', height: 'auto' }} alt='Software Development' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
