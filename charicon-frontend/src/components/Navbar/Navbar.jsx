import React from 'react'
import chariconLogo from '../../assets/Charity.png'
import userIcon from '../../assets/Male User.png'
import './navbar.css'

function Navbar() {
  return (
    <section className='navbar'>
        <div className="container navbar-section ">
            <img height="60px "src={chariconLogo} alt="charicon Logo" />
            <div className="nav-item-container">
              <a style={{color: 'white'}} href="#about">  <div>About</div> </a>
              <a style={{color: 'white'}} href="#working"> <div id="working">How it Works?</div></a> 
              <a style={{color: 'white'}} href="#contact">  <div>Contact</div></a>
                <div className="user-authentication">
                    <img src={userIcon} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar