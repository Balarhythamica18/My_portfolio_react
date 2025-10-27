import React from 'react'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.jpg'    
import reactLogo from '../assets/images/react.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.jpg'
import bootstrap from '../assets/images/bootstrap.png'
import figma from '../assets/images/figma.png'
import canva from '../assets/images/canva.png'

const About = () => {
  return (
    <div className="main-content-about">
      <div className="about-container">
        <header>
          <h1>About Me</h1>
        </header>
        <section className="about-text">
          <p>
            I am <strong>Balarhythamica</strong> from Kumbakonam. I completed my
            <strong> B.E. in Computer Science and Engineering</strong> at
            <strong> KSK College of Engineering and Technology</strong> with <strong>82%</strong>, graduating in <strong>2023</strong>.
          </p>
          <p>I am passionate about <strong>Front-End Development</strong> and enjoy building responsive, user-friendly, and modern web applications.</p>
        </section>

        <section className="skills-about">
          <div className="skills-title-about">Skills</div>
          <div className="skills-icons-about">
            <img src={html} alt="HTML"/>
            <img src={css} alt="CSS"/>
            <img src={js} alt="JavaScript"/>
            <img src={reactLogo} alt="React"/>
            <img src={git} alt="Git"/>
            <img src={github} alt="GitHub"/>
            <img src={bootstrap} alt="Bootstrap"/>
            <img src={figma} alt="Figma"/>
            <img src={canva} alt="Canva"/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
