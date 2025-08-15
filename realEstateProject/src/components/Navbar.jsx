import React, { useState, useEffect } from 'react';
import '../components/CSS/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // adjust scroll threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <button
        className={`burger left-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        // Remove fixed positioning from burger in CSS!
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={`logo sticky-logo${scrolled ? ' scrolled' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: scrolled ? 'pointer' : 'default' }}
      >
        <img src="/logo.png" alt="" />
      </div>
      <div className={`sidebar-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/buy" onClick={() => setMenuOpen(false)}>Buy</a></li>
          <li><a href="/rent" onClick={() => setMenuOpen(false)}>Rent</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
      {menuOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </nav>
  );
}