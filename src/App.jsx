import React, { useState } from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';
import ScrollTopBtn from './components/ScrollTopBtn';

function App() {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div className="pb-10">
      {/* Navbar, Header & Booking Box */}
      <Section1 activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Plan Your Trip */}
      <Section2 />

      {/* About & CTA */}
      <Section3 setActiveLink={setActiveLink} />

      {/* Jeep-BG & Why Choose Us */}
      <Section4 />

      {/* Testimonials */}
      <Section5 setActiveLink={setActiveLink} />

      {/* FAQs */}
      <Section6 />

      {/* App */}
      <Section7 setActiveLink={setActiveLink} />

      <Footer setActiveLink={setActiveLink} />

      <ScrollTopBtn />
    </div>
  );
}

export default App;
