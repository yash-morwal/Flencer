import React from 'react';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import FaqPage from './components/FaqPage';
import Benefits from './components/Benefits';
import CTASection from './components/CTASection';
import PricingSection from './components/PricingSection'
import Footer from './components/Footer';
import './fonts.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--main-bg-color)]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Benefits/>
      <HowItWorks/>
      <PricingSection/>
      <CTASection/>
      <Testimonials />
      <FaqPage/>
      <ContactSection/>
      <Footer/>

      </div>
  );
}

export default App;
