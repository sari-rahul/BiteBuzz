import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" className='footer-logo'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing 
                   elitr, sed diam nonumy eirmod tempor invidunt ut 
                   labore et dolore magna aliquyam erat, sed diam 
                   voluptua. At vero eos et accusam et justo duo dolores 
                   et ea rebum. Stet clita kasd gubergren, no sea takimata 
                   sanctus est Lorem ipsum dolor sit amet.
                </p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer">
                        <img src={assets.facebook_icon} alt="Facebook"/>
                    </a>
                    <a href="https://twitter.com/"  target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="#navbar">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#delivery">Delivery</a></li>
                    <li><a href="#privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+12345634232</li>
                    <li>contact@bite-buzz.com</li>
                </ul>
            </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 Bite-Buzz.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
