import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/images/profile.jpg'

const Hero = () => {
  return (
    <div className="main-content-index">
      <div className="container-index">
        <img src={profileImg} alt="Profile Photo" />
        <div className="text-section-index">
          <h1>Balarhythamica.R</h1>
          <p>Aspiring MERN Full Stack Developer</p>
          <Link to="/about" className="btn-know-more">Know More</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
