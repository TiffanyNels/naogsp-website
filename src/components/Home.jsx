// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandsHelping, FaGlobe, FaUserCheck } from 'react-icons/fa'; 

function Home() { 
  
  return (
    <div className="home-page-container">
      
      {/* 1. QUICK LINKS (Existing Buttons) */}
      <div className="quick-links">
        <a href="/membership" className="btn primary">
          <span className="btn-content">Join NAOGSP <FaArrowRight className="btn-icon" /></span>
        </a>
        <a href="/membership#benefits" className="btn secondary">
          <span className="btn-content">Membership Benefits <FaArrowRight className="btn-icon" /></span>
        </a>
        <a href="/partnerships" className="btn tertiary">
          <span className="btn-content">Partnerships & Collaborations <FaArrowRight className="btn-icon" /></span>
        </a>
      </div>
      
      {/* --- 2. KEY PILLARS PREVIEW --- */}
      <section className="key-pillars-section">
        <h2>Our Core Focus</h2>
        <div className="pillars-grid">
          
          <div className="pillar-card">
            <FaGlobe className="pillar-icon" />
            <h3>Global Policy Advocacy</h3>
            <p>We work to shape international policy, providing expert guidance to governments and regulatory bodies to ensure ethical and sustainable practices.</p>
            <Link to="/what-we-do" className="read-more-link">Learn More</Link>
          </div>
          
          <div className="pillar-card">
            <FaHandsHelping className="pillar-icon" />
            <h3>Industry Collaboration</h3>
            <p>Connecting industry leaders with research institutions to bridge the gap between discovery and technological application in offshore projects.</p>
            <Link to="/what-we-do" className="read-more-link">Learn More</Link>
          </div>
          
          <div className="pillar-card">
            <FaUserCheck className="pillar-icon" />
            <h3>Professional Development</h3>
            <p>Offering mentorship, training, and resources to cultivate the next generation of geoscience professionals.</p>
            <Link to="/what-we-do" className="read-more-link">Learn More</Link>
          </div>

        </div>
      </section>
      
      {/* --- 3. MEMBERSHIP CTA --- */}
      <section className="membership-cta-section">
          <div className="cta-content">
              <h3>Ready to Join the Global Dialogue?</h3>
              <p>Become a member today and gain access to exclusive research, policy updates, and a network of world-leading experts.</p>
              <Link to="/membership" className="btn primary cta-btn">Apply for Membership</Link>
          </div>
      </section>

      {/* --- 4. LEADERSHIP/DIRECTORS SECTION (Updated with PDF Names) --- */}
      <section className="leadership-section">
        <h2>Meet Our Directors</h2>
        <p className="leadership-tagline">Guiding NAOGSP towards a future of sustainable global collaboration.</p>
        
        <div className="directors-grid">
          
          {/* Director Card 1 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Carl Pesat</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Visionary leader focused on industry unification and growth.</p>
          </div>
          
          {/* Director Card 2 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Knowledge Ipinge</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Specializing in policy engagement and stakeholder relations.</p>
          </div>
          
          {/* Director Card 3 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Jamie-Lee Nels</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Expert in strategic communication and youth mentorship initiatives.</p>
          </div>
          
          {/* Director Card 4 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Patrick Sam</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Driving safety standards and environmental stewardship programs.</p>
          </div>
          
          {/* Director Card 5 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Andrew Mathias</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Focuses on technical collaboration and resource leveraging.</p>
          </div>
          
          {/* Director Card 6 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Danie Malherbe</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Contributes expertise in financial planning and governance.</p>
          </div>
          
          {/* Director Card 7 */}
          <div className="director-card">
            <div className="director-photo"></div>
            <h3>Salomo Hei</h3>
            <p className="director-title">Director (Placeholder Title)</p>
            <p className="director-bio">Leads efforts in local content development and capacity building.</p>
          </div>
          

        </div>
      </section>

    </div> 
  );
}

export default Home;