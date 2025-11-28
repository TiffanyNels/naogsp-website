// src/components/WhatWeDo.jsx
import React from 'react';
// 💡 Import the new formal icons
import { FaGavel, FaGraduationCap, FaCalendarAlt, FaShieldAlt, FaGlobe, FaHandsHelping } from 'react-icons/fa';

function WhatWeDo() {
  return (
    <section className="what-we-do-page">
      
      {/* Page Intro Section */}
      <div className="page-intro">
        <h1>What We Do</h1>
        <h2>Our Core Focus Areas for Industry Growth</h2>
        <p>
          NAOGSP focuses its efforts on five key areas to ensure the growth, development, and viability of offshore oil and gas service companies in Namibia.
        </p>
      </div>
      
      {/* Core Activities (Structured in a 3-column grid using content-grid) */}
      <div className="content-grid">
        
        {/* Activity 1: Advocacy */}
        <div className="content-card">
          {/* 💡 Icon: Policy/Advocacy (FaGavel) */}
          <span className="icon-placeholder"><FaGavel /></span>
          <h3>Advocacy & Policy</h3>
          <p>
            Representing member interests in government and industry discussions to advocate for supportive industry policies.
          </p>
        </div>

        {/* Activity 2: Training & Education */}
        <div className="content-card">
          {/* 💡 Icon: Education (FaGraduationCap) */}
          <span className="icon-placeholder"><FaGraduationCap /></span>
          <h3>Training & Education</h3>
          <p>
            Developing essential skills through targeted workshops, specialised training, and certification programs.
          </p>
        </div>

        {/* Activity 3: Networking */}
        <div className="content-card">
          {/* 💡 Icon: Events/Calendar (FaCalendarAlt) */}
          <span className="icon-placeholder"><FaCalendarAlt /></span>
          <h3>Networking & Events</h3>
          <p>
            Hosting conferences, exhibitions, trade events, and social functions to facilitate business connections and information sharing.
          </p>
        </div>

        {/* Activity 4: Safety & Sustainability */}
        <div className="content-card">
          {/* 💡 Icon: Safety/Protection (FaShieldAlt) */}
          <span className="icon-placeholder"><FaShieldAlt /></span>
          <h3>Safety & Sustainability</h3>
          <p>
            Promoting adherence to international HSE (Health, Safety, Environment) standards and best practices in offshore operations.
          </p>
        </div>
        
        {/* Activity 5: Collaboration */}
        <div className="content-card">
          {/* 💡 Icon: Regional/Global Collaboration (FaHandsHelping) */}
          <span className="icon-placeholder"><FaHandsHelping /></span>
          <h3>Regional Collaboration</h3>
          <p>
            Working with local and international associations to grow the sector and promote local content development.
          </p>
        </div>
        
      </div>

    </section>
  );
}

export default WhatWeDo;