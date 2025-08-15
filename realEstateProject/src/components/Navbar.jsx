import React from 'react';
import '../components/CSS/navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
  <div className="navchoice1">
    <ul>
      <li>Home</li>
      <li>Properties</li>
      <li>Our Projects</li>
      <li>FAQ</li>
      <li>About Us</li>
    </ul>
  </div>

  <div className="logomarci">
    <div className="picture">
      <img className='logoMarciMM' src="/logo.png" alt="" />
    </div>
    <div className="namelogo">
      <p className='marcilogo'>Marci Metzger</p>
    </div>
    
  </div>
  <div className="navchoice2">
    <ul>
      <li>Contact Us</li>
      <li>Book Call</li>
    </ul>
  </div>
</div>
  );
}