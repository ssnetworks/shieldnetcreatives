import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          {/* We'll use the user provided logo image or a styled text fallback */}
          <div className="logo-text">
            <span className="logo-main">SN</span>
            <div className="logo-full">
              <span className="text-white">ShieldNet</span>
              <span className="text-gold">Creatives</span>
            </div>
          </div>
        </a>

        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Book a Shoot</a>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
