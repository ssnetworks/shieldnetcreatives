import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Palette, Target, Megaphone, Share2, FileText, Heart, Calendar, Car, Smartphone, MessageSquare } from 'lucide-react';
import './Services.css';

const services = [
  { icon: <Palette size={32} />, name: 'Branding & Identity', desc: 'Crafting unique visual identities that command attention.' },
  { icon: <Target size={32} />, name: 'Marketing Strategy', desc: 'Data-driven campaigns to dominate your market.' },
  { icon: <Megaphone size={32} />, name: 'Advertising Campaigns', desc: 'High-impact ads that convert viewers to customers.' },
  { icon: <Share2 size={32} />, name: 'Social Media Marketing', desc: 'Explosive growth across all social platforms.' },
  { icon: <FileText size={32} />, name: 'Content Marketing', desc: 'Compelling stories that build brand loyalty.' },
  { icon: <Heart size={32} />, name: 'Marriage Shoots', desc: 'Cinematic captures of your most special moments.' },
  { icon: <Calendar size={32} />, name: 'Event Shoots', desc: 'Dynamic coverage for corporate and private events.' },
  { icon: <Car size={32} />, name: 'Car Delivery Shoots', desc: 'Premium reveals for luxury automotive deliveries.' },
  { icon: <Smartphone size={32} />, name: 'Instant Mobile Shoots', desc: 'High-quality vertical content, delivered instantly.' },
  { icon: <MessageSquare size={32} />, name: 'Social Media Management', desc: 'End-to-end handling of your online presence.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const defaultTiltOptions = {
  reverse:        false,
  max:            25,     
  perspective:    1000,   
  scale:          1.08,    
  speed:          400,   
  transition:     true,   
  axis:           null,   
  reset:          true,    
  easing:         "cubic-bezier(.03,.98,.52,.99)",    
};

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Arsenal</span></h2>
          <p className="section-subtitle">Everything you need to dominate the digital landscape.</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt options={defaultTiltOptions} className="tilt-card-wrapper">
                <div className="card service-card" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="service-icon" style={{ transform: 'translateZ(50px)' }}>{service.icon}</div>
                  <h3 className="service-name" style={{ transform: 'translateZ(30px)' }}>{service.name}</h3>
                  <p className="service-desc" style={{ transform: 'translateZ(20px)' }}>{service.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
