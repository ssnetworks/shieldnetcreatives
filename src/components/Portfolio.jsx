import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import './Portfolio.css';

const categories = ['All', 'Events', 'Weddings', 'Cars', 'Brand Shoots'];

const portfolioItems = [
  { id: 1, category: 'Brand Shoots', title: 'Premium Campaign', videoUrl: 'https://drive.google.com/file/d/1k3QgLxmaAi9iWsPqWM6O631Mh_hXLcIC/preview' },
  { id: 2, category: 'Events', title: 'Luxury Event', videoUrl: 'https://drive.google.com/file/d/1HbN4s-MJHqJQ0vApVXnpxNDPxyZoePTD/preview' },
  { id: 3, category: 'Weddings', title: 'Cinematic Wedding', videoUrl: 'https://drive.google.com/file/d/1BRElw1NHdK5ZeXzTrse_B2A0_fSkqVVb/preview' },
  { id: 4, category: 'Cars', title: 'Automotive Reveal', videoUrl: 'https://drive.google.com/file/d/1HP8M9iETdv0jBoQ3y3nOLpXHFzJC5MTx/preview' },
  { id: 5, category: 'Brand Shoots', title: 'Product Showcase', videoUrl: 'https://drive.google.com/file/d/187teBoeSq14SsnmoT6lv1RCODQZ9eohU/preview' },
  { id: 6, category: 'Events', title: 'Corporate Summit', videoUrl: 'https://drive.google.com/file/d/1zgHhjrdYmyFIu8eLEsmr22V5YzoXckyz/preview' },
  { id: 7, category: 'Cars', title: 'Action Drive', videoUrl: 'https://drive.google.com/file/d/1VN-Xi47wTpLQupkzgyysfq9x93SZ3WPo/preview' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding portfolio-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">The <span className="text-gradient">Vault</span></h2>
          <p className="section-subtitle">Proof is in the production. Explore our latest visual triumphs.</p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="portfolio-grid"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                className="portfolio-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="portfolio-video-wrapper">
                  <iframe 
                    src={item.videoUrl} 
                    width="100%" 
                    height="100%" 
                    allow="autoplay"
                    frameBorder="0"
                    title={item.title}
                  ></iframe>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="portfolio-category">{item.category}</span>
                      <h3 className="portfolio-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#" className="btn btn-secondary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
