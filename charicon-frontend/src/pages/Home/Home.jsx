import React from 'react'
import childrenImg from '../../assets/children.jpg'
import './home.css'
import About from '../../components/About/About'
import Working from '../../components/Working/Working'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <section className="home">
        <div className="container home-section">
            <div className="hero-content hero-text">
              <h1 className='hero-content-bottom-margin'>Be a ray of <span style={{color: 'var(--color-primary)'}}>hope</span> in <br /> someone's life.</h1>
              <p className="hero-desc hero-content-bottom-margin">Donate your clothes today and be the change that the world needs!</p>
              <div className="btn-container hero-content-bottom-margin">
              <button className="donate"><Link style={{color: 'white'}} to="/browsengo"> Donate</Link> </button>
               <button className="ngo-login"><Link style={{color: 'black'}}  to="/ngologin"> NGO Login</Link></button>
              </div>
            </div>
            <div className="hero-content">
              <img className='hero-img' src={childrenImg} alt="childrenImg" />
            </div>
        </div> 
    </section>
    <About />
    <Working />
    </>
  )
}

export default Home