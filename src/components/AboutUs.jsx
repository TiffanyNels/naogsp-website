// src/components/AboutUs.jsx
import React from 'react';

function AboutUs() {
  return (
    <section className="about-us-page">
      
      {/* Page Intro Section */}
      <div className="page-intro">
        <h1>About Us</h1>
        <h2>Who We Are</h2>
        <p>
          The Namibian Association for Offshore Oil and Gas Service Providers (NAOGSP) is a non-profit organization representing Namibia's offshore oil and gas service providers. It aims to strengthen collaboration, promote sustainable practices, and empower local businesses.
        </p>
      </div>

      {/* Vision and Mission (Structured in a 2-column grid using content-grid) */}
      <h2>Our Core Mandate</h2>
      <div className="content-grid">
        
        {/* Vision Card */}
        <div className="content-card">
          <span className="icon-placeholder">🌟</span>
          <h3>Our Vision</h3>
          <p>
            Driving collaboration and growth for a sustainable energy future in Namibia.
          </p>
        </div>

        {/* Mission Card */}
        <div className="content-card">
          <span className="icon-placeholder">💪</span>
          <h3>Our Mission</h3>
          <p>
            Empowering excellence in Namibia's offshore oil and gas industry.
          </p>
        </div>
      </div>

      {/* Objectives (Structured in a multi-column grid) */}
      <h2>Our Key Objectives</h2>
      <div className="content-grid">
        
        {/* Objective 1: Advocacy */}
        <div className="content-card">
          <span className="icon-placeholder">🏛️</span>
          <h3>Policy Advocacy</h3>
          <p>Advocate for supportive industry policies that foster the growth and development of service companies.</p>
        </div>

        {/* Objective 2: Networking */}
        <div className="content-card">
          <span className="icon-placeholder">🤝</span>
          <h3>Networking & Information</h3>
          <p>Create networking and information-sharing opportunities for all members.</p>
        </div>
        
        {/* Objective 3: Participation */}
        <div className="content-card">
          <span className="icon-placeholder">📈</span>
          <h3>Promoting Participation</h3>
          <p>Promote participation of both large and small service providers in the sector.</p>
        </div>

        {/* Objective 4: Sustainability */}
        <div className="content-card">
          <span className="icon-placeholder">🌍</span>
          <h3>Safe & Sustainable Practices</h3>
          <p>Support safe, sustainable, and innovative industry practices.</p>
        </div>

      </div>

    </section>
  );
}

export default AboutUs;