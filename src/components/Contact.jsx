import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <h2 className="section-title">Ready to Go <span className="text-gradient">Viral?</span></h2>
            <p className="contact-subtitle">
              Stop settling for average. Let's create something that breaks the internet.
            </p>
            
            <div className="contact-methods">
              <a href="https://wa.me/919390849006" target="_blank" rel="noopener noreferrer" className="contact-method card">
                <MessageCircle className="contact-icon" size={32} />
                <div>
                  <h4 className="method-title">WhatsApp Us</h4>
                  <p className="method-detail">Instant replies</p>
                </div>
              </a>
              
              <a href="mailto:shieldnetsolutions@yahoo.com" className="contact-method card">
                <Mail className="contact-icon" size={32} />
                <div>
                  <h4 className="method-title">Email Us</h4>
                  <p className="method-detail">shieldnetsolutions@yahoo.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container card">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" className="input-field" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" className="input-field" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select className="input-field" required>
                  <option value="" disabled selected>Service Needed</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="marketing">Marketing Strategy</option>
                  <option value="ads">Advertising Campaigns</option>
                  <option value="social_media">Social Media Marketing</option>
                  <option value="content">Content Marketing</option>
                  <option value="wedding">Marriage Shoots</option>
                  <option value="event">Event Shoots</option>
                  <option value="car">Car Delivery Shoots</option>
                  <option value="mobile">Instant Mobile Shoots</option>
                  <option value="management">Social Media Management</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="input-field" rows="4" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
