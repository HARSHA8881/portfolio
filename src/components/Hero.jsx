import React from 'react'
import ParticleBackground from './ParticleBackground'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">
              <span className="wave"></span> Hi, my name is
            </p>
            <h1 className="hero-name">
              <span className="name-highlight typing-effect">Harsha Gonela</span>
            </h1>
            <h2 className="hero-title">
              <span className="gradient-text">I solve problems and build experiences for the web.</span>
            </h2>
            <p className="hero-description">
            I'm a frontend developer with a strong grip on Data Structures and Algorithms, focused on creating fast, intuitive, and visually engaging web applications. Currently pushing my skills to craft seamless digital experiences that blend logic and design.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator"></div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero

