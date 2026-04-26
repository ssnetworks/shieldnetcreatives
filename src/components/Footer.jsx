import React from 'react';
import { Share2, Globe, Link2, MonitorPlay } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-layout">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-text">
                <span className="logo-main">SN</span>
                <div className="logo-full">
                  <span className="text-white">ShieldNet</span>
                  <span className="text-gold">Creatives</span>
                </div>
              </div>
            </a>
            <p className="footer-tagline">Every Frame. Every Story. Guaranteed 100K.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Share2 size={20} /></a>
              <a href="#" className="social-link"><MonitorPlay size={20} /></a>
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><Link2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Branding & Identity</a></li>
              <li><a href="#services">Event & Wedding Shoots</a></li>
              <li><a href="#services">Social Media Management</a></li>
              <li><a href="#services">Ad Campaigns</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shieldnet Creatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
