import React from 'react';
import { Tilt } from 'react-tilt';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Shieldnet completely transformed our brand's online presence. The 100K guarantee seemed too good to be true, but they delivered 250K views on our first campaign.",
    client: "Rahul Desai",
    company: "Desai Motors"
  },
  {
    quote: "The quality of their event shoots is unmatched. They don't just capture moments; they craft cinematic stories. Highly recommend their team.",
    client: "Priya Sharma",
    company: "Elegance Weddings"
  },
  {
    quote: "Instant delivery for our mobile shoots helped us ride the trend wave perfectly. Bold, fast, and extremely professional.",
    client: "Vikram Singh",
    company: "Urban Streetwear"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Word on the <span className="text-gradient">Street</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Here's what our clients say.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <Tilt 
              key={index} 
              options={{ max: 20, scale: 1.05, speed: 400 }}
              className="tilt-card-wrapper"
            >
              <div className="card testimonial-card h-full" style={{ transformStyle: 'preserve-3d' }}>
                <Quote className="quote-icon" size={40} style={{ transform: 'translateZ(40px)' }} />
                <p className="testimonial-quote" style={{ transform: 'translateZ(30px)' }}>"{test.quote}"</p>
                <div className="testimonial-author" style={{ transform: 'translateZ(20px)' }}>
                  <h4 className="author-name">{test.client}</h4>
                  <span className="author-company">{test.company}</span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
