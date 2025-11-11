import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './fonts.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--main-bg-color)]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
