import React from 'react'
import chariconLogo from '../../assets/Charity.png'
import userIcon from '../../assets/Male User.png'
import './navbar.css'

function Navbar() {
  return (
    <section className='navbar'>
        <div className="container navbar-section ">
        <a href="C:\Users\lili\Downloads\Charicon\charicon-frontend\src\pages\Home\Home.jsx">
            <img height="60px "src={chariconLogo} alt="charicon Logo" />
            </a>
            <div className="nav-item-container">
              <a style={{color: 'white'}} href="#about">  <div>About</div> </a>
              <a style={{color: 'white'}} href="#working"> <div >How it Works?</div></a>
              <a style={{color: 'white'}} href="#contact">  <div>Contact</div></a>
              <a href="..\src\pages\UserLogin">
                <div className="user-authentication">
                    <img src={userIcon}  alt="" />
                </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Navbar
