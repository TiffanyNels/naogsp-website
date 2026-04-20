// src/components/AboutUs.jsx
import React from 'react';
// 💡 Import the new formal icons
import { FaEye, FaAward, FaGavel, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa'; 
import SecondImage from '../assets/Offshore_background.webp';

function AboutUs() {
  return (
    <section className="about-us-page">

      {/* Page Intro Section */}
      <div className="second-image-background"
                style={{ backgroundImage: `url(${SecondImage})` }} >
                  <div className='page-intro'>
                     <h1>About Us</h1>
        <p>
        <span className='about_span_header'>NAOGSP</span> <br /> <span class="about_us_span">The Namibian Association for Offshore Oil and Gas Service Providers</span> <br />
        </p>
                  </div>
      </div>

<div className="core-mandate-section-one">

  <div className='core-mandate-header'>
    <h2>Core Mandate</h2>
<h3>
  A non-profit organisation representing Namibia's offshore oil and gas service providers. <br /><span className='mandate-context'>It aims to strengthen collaboration, promote sustainable practices, and empower local businesses.</span>
</h3>
  </div>
      <div className="content-grid-one">
        
        {/* Vision Card */}
        <div className="vision-card">
          <h3>Our Vision</h3>
          <p>
            Driving collaboration and growth for a sustainable energy future in Namibia.
          </p>
        </div>

        {/* Mission Card */}
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            Empowering excellence in Namibia's offshore oil and gas industry.
          </p>
        </div>
      </div>

</div>
<div className='core-madate-section-two'>
  <h2>Key Objectives</h2>
      <div className="content-grid-two">
        
        {/* Objective 1: Advocacy */}
        <div className="content-card-two">
          <h3>Policy Advocacy</h3>
          <p>Advocate for supportive industry policies that foster the growth and development of service companies.</p>
        </div>

        {/* Objective 2: Networking */}
        <div className="content-card-two">
          <h3>Networking & Information</h3>
          <p>Create networking and information-sharing opportunities for all members.</p>
        </div>
        
        {/* Objective 3: Participation */}
        <div className="content-card-two">
          <h3>Promoting Participation</h3>
          <p>Promote participation of both large and small service providers in the sector.</p>
        </div>

        {/* Objective 4: Sustainability */}
        <div className="content-card-two">
          <h3>Safe & Sustainable Practices</h3>
          <p>Support safe, sustainable, and innovative industry practices.</p>
        </div>
      </div>
</div>
      

    </section>
  );
}

export default AboutUs;