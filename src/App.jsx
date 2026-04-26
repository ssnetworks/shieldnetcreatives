import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GuaranteeBanner from './components/GuaranteeBanner';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GuaranteeBanner />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
