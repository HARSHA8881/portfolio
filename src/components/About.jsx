import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer who loves creating beautiful and functional web applications. 
              I enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p>
              My goal is to build applications that provide exceptional user experiences while maintaining 
              clean, efficient code. I'm constantly learning and exploring new technologies to stay at the 
              forefront of web development.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="tech-list">
              <li>Python</li>
              <li>HTMl</li>
              <li>CSS</li>
              <li>JavaScript </li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Prisma</li>
              <li>Sql</li>
              
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

