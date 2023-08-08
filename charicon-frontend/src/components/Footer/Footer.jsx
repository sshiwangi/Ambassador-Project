import React from 'react'
import './Footer.css'
import chariconImg from '../../assets/Charity.png'

function Footer() {
  return (
    <section id="contact">
      <div className="container footer-section">
        <div className="footer-item-container footer-main">
          <div className="charicon-logo">
          <img src={chariconImg} alt="" />
          <span style={{color: 'var(--color-primary)', fontSize: '24px', fontWeight: '600'}}>Charicon</span>
          </div>
          <p>Charicon is a platform bridging donors and NGOs, making it easy to donate essential items to the less fortunate.  Join us in sharing hope and changing lives together!</p>
        </div>
        <div className="footer-item-container">
          <h3 className="item-heading">Company</h3>
          <br />
          About
          <br />
          What we do?
          <br />
          Privacy Policy
        </div>
        <div className="footer-item-container">
          <h3 className="item-heading">Contact</h3>
          <br />
          Instagram
          <br />
          Facebook
          <br />
          YouTube
        </div>
      </div>
    </section>
  )
}

export default Footer