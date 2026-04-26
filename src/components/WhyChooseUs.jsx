import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  "100K Views Guarantee",
  "Instant Mobile Shoot Delivery",
  "End-to-End Social Media Management",
  "Premium Production Quality",
  "Young, Bold, Creative Team"
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding why-choose-us overflow-hidden">
      <div className="container">
        <div className="wcu-layout">
          <motion.div 
            className="wcu-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why ShieldNet <span className="text-gradient">Creatives?</span></h2>
            <p className="wcu-subtitle">We don't do generic. We build brands that demand attention and deliver results.</p>
            
            <ul className="wcu-list">
              {reasons.map((reason, index) => (
                <li key={index} className="wcu-item">
                  <CheckCircle2 className="wcu-icon" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn btn-primary wcu-btn">Start Your Project</a>
          </motion.div>
          
          <motion.div 
            className="wcu-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="wcu-video-wrapper">
              <iframe 
                src="https://drive.google.com/file/d/1CSaT5eBgigUri6uwvQQ01gIzZGyXvSUZ/preview" 
                width="100%" 
                height="100%" 
                allow="autoplay"
                frameBorder="0"
                title="Why Choose Us Video Reel"
              ></iframe>
            </div>
            
            <motion.div 
              className="wcu-stat-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <span className="stat-number">100K+</span>
              <span className="stat-label">Views Guaranteed</span>
            </motion.div>
            
            {/* 3D floating luxury elements */}
            <motion.div 
              className="floating-element element-1"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="floating-element element-2"
              animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
