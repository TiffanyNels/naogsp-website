// src/components/Home.jsx (FINAL FINAL VERSION)
import React from 'react';

// The naogspInfo prop is still passed but currently not used in the render.
// We keep it in case future home page content needs it.
function Home() { 
  
  return (
    <section className="home-page-content">
      {/* 💡 RETAINED: Only the Quick Access Buttons */}
      <div className="quick-links">
        <a href="/membership" className="btn primary">Join NAOGSP</a>
        <a href="/membership#benefits" className="btn secondary">Membership Benefits</a>
        <a href="/partnerships" className="btn tertiary">Partnerships & Collaborations</a>
      </div>
      
      {/* You can add any other content specific to the home page below the links here */}
      
    </section>
  );
}

export default Home;