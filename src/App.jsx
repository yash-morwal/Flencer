import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import './fonts.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--main-bg-color)]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Testimonials />
    </div>
  );
}

export default App;
