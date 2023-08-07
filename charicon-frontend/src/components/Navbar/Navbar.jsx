import React from 'react'
import chariconLogo from '../../assets/Charity.png'
import userIcon from '../../assets/Male User.png'
import './navbar.css'

function Navbar() {
  return (
    <section className='navbar'>
        <div className="container navbar-section ">
            <img src={chariconLogo} alt="charicon Logo" />
            <div className="nav-item-container">
                <div id="about">About</div>
                <div id="working">How it Works?</div>
                <div id="contact">Contact</div>
                <div className="user-authentication">
                    <img src={userIcon} alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Navbar