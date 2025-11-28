// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandsHelping, FaGlobe, FaUserCheck } from 'react-icons/fa'; 

import CarlPhoto from '../assets/director_images/Carl.jpeg';
import AndrewPhoto from '../assets/director_images/Andrew.png';
import DanielPhoto from '../assets/director_images/Daniel.webp';
import JamieleePhoto from '../assets/director_images/Jamie-lee.jpeg';
import KnowledgePhoto from '../assets/director_images/Knowledge.png';
import PatrickPhoto from '../assets/director_images/Patrick.jpeg';
import SalomoPhoto from '../assets/director_images/Salomo.jpg';

const PlaceholderPhoto = null; 

// 💡 DIRECTOR DATA ARRAY (Includes titles and bios)
const directorsData = [
  { 
    name: 'Carl Pesat', 
    title: 'Director & Chairperson', 
    bio: 'Visionary leader focused on industry unification and growth.',
    photo: CarlPhoto 
  },
  { 
    name: 'Knowledge Ipinge', 
    title: 'Director', 
    bio: 'Specializing in policy engagement and stakeholder relations.',
    photo: AndrewPhoto 
  },
  { 
    name: 'Jamie-Lee Nels', 
    title: 'Director', 
    bio: 'Expert in strategic communication and youth mentorship initiatives.',
    photo: JamieleePhoto 
  },
  { 
    name: 'Patrick Sam', 
    title: 'Director', 
    bio: 'Driving safety standards and environmental stewardship programs.',
    photo: KnowledgePhoto
  },
  { 
    name: 'Andrew Mathias', 
    title: 'Director', 
    bio: 'Focuses on technical collaboration and resource leveraging.',
    photo: PatrickPhoto 
  },
  { 
    name: 'Daniel Malherbe', 
    title: 'Director', 
    bio: 'Contributes expertise in financial planning and governance.',
    photo: DanielPhoto 
  },
  { 
    name: 'Salomo Hei', 
    title: 'Director', 
    bio: 'Leads efforts in local content development and capacity building.',
    photo: SalomoPhoto 
  },
];


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

      {/* --- 4. LEADERSHIP/DIRECTORS SECTION (Now Dynamic) --- */}
      <section className="leadership-section">
        <h2>Meet Our Directors</h2>
        <p className="leadership-tagline">Guiding NAOGSP towards a future of sustainable global collaboration.</p>
        
        <div className="directors-grid">
          
          {/* 💡 DYNAMICALLY RENDER DIRECTORS HERE */}
          {directorsData.map((director, index) => (
            <div className="director-card" key={index}>
              <div className="director-photo">
                {/* 💡 Conditionally render image or placeholder */}
                {director.photo ? (
                  <img 
                    src={director.photo} 
                    alt={director.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <span>Photo</span> /* Placeholder text while image is null */
                )}
              </div>
              <h3>{director.name}</h3>
              <p className="director-title">{director.title}</p>
              <p className="director-bio">{director.bio}</p>
            </div>
          ))}

        </div>
      </section>

    </div> 
  );
}

export default Home;