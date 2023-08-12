import React from 'react'
import './about.css'
import aboutImg from '../../assets/aboutimg.jpg'

function About() {
  return (
    <section id="about">
        <div className="container about-section">
           <div className="section-heading">About Us</div>
           <div className="about-section-container">
           <a href="../../pages/Home/Home" className="logo">
                <img className='about-img' src={aboutImg} alt="aboutImg"  />
                </a>
               <div className="about-text">
               We ensure transparent communication and accountability, creating a compassionate community where small acts of kindness make a significant impact. Join us in sharing hope and changing lives together!
               </div>

           </div>
        </div>
    </section>

  )
}

export default About
