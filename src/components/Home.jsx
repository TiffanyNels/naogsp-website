// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHandshake } from 'react-icons/fa'; 
import { FiUserCheck, FiUserPlus, FiUsers, FiPlus } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";

import CarlPhoto from '../assets/director_images/Carl.jpeg';
import AndrewPhoto from '../assets/director_images/Andrew.png';
import DanielPhoto from '../assets/director_images/Daniel.webp';
import JamieleePhoto from '../assets/director_images/Jamie-lee.jpeg';
import KnowledgePhoto from '../assets/director_images/Knowledge.png';
import PatrickPhoto from '../assets/director_images/Patrick.jpeg';
import SalomoPhoto from '../assets/director_images/Salomo.jpg';

const directorsData = [
  { name: 'Carl Pesat', photo: CarlPhoto },
  { name: 'Andrew Mathias', photo: AndrewPhoto },
  { name: 'Jamie-Lee Nels', photo: JamieleePhoto },
  { name: 'Knowledge Ipinge', photo: KnowledgePhoto },
  { name: 'Patrick Sam', photo: PatrickPhoto },
  { name: 'Daniel Malherbe', photo: DanielPhoto },
  { name: 'Salomo Hei', photo: SalomoPhoto },
];

function Home() { 
  return (
    <div className="home-page-container">
      
      {/* 1. QUICK LINKS */}
      <div className="quick-links">
        <a href="/membership" className="btn primary">
          <div className='quick-link-icon'>
            <FiUserPlus className="ql-btn-icon" />
          </div>
          <span className="btn-content"> Join NAOGSP </span>
        </a>
        <a href="/membership#benefits" className="btn secondary">
          <div className='quick-link-icon'>
            <FiPlus className="ql-btn-icon" />
          </div>
          <span className="btn-content"> Membership Benefits </span>
        </a>
        <a href="/partnerships" className="btn tertiary">
          <div className='quick-link-icon'>
            <FiUsers className="ql-btn-icon" />
          </div>
          <span className="btn-content"> Partnerships &amp; Collaborations </span>
        </a>
      </div>
      
      {/* 2. KEY PILLARS PREVIEW */}
      <section className="key-pillars-section">
        <div className='pillar-header'>
          <h2>Our Core Focus</h2>
        </div>
        <div className="pillars-grid">
          
          <div className="pillar-card">
            <div className='icon-container'>
              <GrLanguage className="pillar-icon" /> 
            </div>
            <div className='pillar-context'>
              <h3>Global Policy Advocacy</h3>
              <p>We work to shape international policy, providing expert guidance to governments and regulatory bodies to ensure ethical and sustainable practices.</p>
              <Link to="/what-we-do" className="read-more-link">Learn More</Link>
            </div> 
          </div>
          
          <div className="pillar-card">
            <div className='icon-container'>
              <FaRegHandshake className="pillar-icon" />
            </div>
            <div className='pillar-context'>
              <h3>Industry Collaboration</h3>
              <p>Connecting industry leaders with research institutions to bridge the gap between discovery and technological application in offshore projects.</p>
              <Link to="/what-we-do" className="read-more-link">Learn More</Link>
            </div> 
          </div>
          
          <div className="pillar-card">
            <div className='icon-container'>
              <FiUserCheck className="pillar-icon" />
            </div> 
            <div className='pillar-context'>
              <h3>Professional Development</h3>
              <p>Offering mentorship, training, and resources to cultivate the next generation of geoscience professionals.</p>
              <Link to="/what-we-do" className="read-more-link">Learn More</Link>
            </div> 
          </div>

        </div>
      </section>
      
      {/* 3. MEMBERSHIP CTA */}
      <section className="membership-cta-section">
        <div className="cta-content">
          <h3>Ready to Join the Global Dialogue?</h3>
          <p>Become a member today and gain access to exclusive research, policy updates, and a network of world-leading experts.</p>
          <Link to="/membership" className="btn primary cta-btn">Apply for Membership</Link>
        </div>
      </section>

      {/* 4. LEADERSHIP/DIRECTORS SECTION */}
      <section className="leadership-section">
        <h2 className="section-title">Meet Our Directors</h2>
        <p className="leadership-tagline">Guiding NAOGSP towards a future of sustainable global collaboration.</p>
        
        <div className="carousel">
          {directorsData.map((director, index) => (
            <div 
              className={`director-card-wrap ${index === 0 ? 'scroll-start' : ''}`} 
              key={index}
            >
              <div className="img-container">
                {director.photo ? (
                  <img src={director.photo} alt={director.name} />
                ) : (
                  <div className="placeholder-img">Photo</div>
                )}
              </div>
              <h3>{director.name}</h3>
              <div className="info-block">
                <p className="director-title">{director.title}</p>
                <p className="director-bio">{director.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;