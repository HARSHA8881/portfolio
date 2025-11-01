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
            Hello! I’m a passionate frontend developer who loves crafting interactive and visually appealing web applications. With a strong foundation in Data Structures and Algorithms, I approach development with both creativity and problem-solving precision.
            </p>
            <p>
            I enjoy transforming complex challenges into clean, efficient, and user-friendly solutions. My goal is to build web experiences that not only look great but perform flawlessly. I’m always exploring new technologies and design patterns to stay ahead in the ever-evolving world of web development.
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

