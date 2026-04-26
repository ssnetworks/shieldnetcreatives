import React from 'react';
import './GuaranteeBanner.css';

const GuaranteeBanner = () => {
  return (
    <section className="guarantee-banner">
      <div className="container">
        <h2 className="guarantee-text">
          "Every video we produce is guaranteed to hit 100,000 views. 
          <span className="guarantee-highlight"> That's not a promise — that's our contract.</span>"
        </h2>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
