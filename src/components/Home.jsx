// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import { FaRegHandshake, } from 'react-icons/fa'; 
import { FiUserCheck, FiUserPlus, FiUsers, FiPlus } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";

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
    photo: CarlPhoto
  },
  { 
    name: 'Andrew Mathias', 
    photo:  AndrewPhoto 
  },
  { 
    name: 'Jamie-Lee Nels',
    photo: JamieleePhoto 
  },
  { 
    name: 'Knowledge Ipinge', 
    photo: KnowledgePhoto
  },
  { 
    name: 'Patrick Sam', 
    photo: PatrickPhoto 
  },
  { 
    name: 'Daniel Malherbe',
    photo: DanielPhoto 
  },
  { 
    name: 'Salomo Hei', 
    photo: SalomoPhoto 
  },
];
=======
import { FaArrowRight, FaHandsHelping, FaGlobe, FaUserCheck } from 'react-icons/fa'; 
>>>>>>> Stashed changes

function Home() { 
  
  return (
    <div className="home-page-container">
      
      {/* 1. QUICK LINKS (Existing Buttons) */}
      <div className="quick-links">
        <a href="/membership" className="btn primary">
<<<<<<< Updated upstream
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
           <span className="btn-content"> Partnerships & Collaborations </span>
=======
          <span className="btn-content">Join NAOGSP <FaArrowRight className="btn-icon" /></span>
        </a>
        <a href="/membership#benefits" className="btn secondary">
          <span className="btn-content">Membership Benefits <FaArrowRight className="btn-icon" /></span>
        </a>
        <a href="/partnerships" className="btn tertiary">
          <span className="btn-content">Partnerships & Collaborations <FaArrowRight className="btn-icon" /></span>
>>>>>>> Stashed changes
        </a>
      </div>
      
      {/* --- 2. KEY PILLARS PREVIEW --- */}
      <section className="key-pillars-section">
<<<<<<< Updated upstream

        <div className='pillar-header'>
           <h2>Our Core Focus</h2>
        </div>
      
        <div className="pillars-grid">
          
          <div className="pillar-card">
            <div className='icon-container'>
              <GrLanguage className="pillar-icon" /> 
            </div>
            <div className='pillar-context'>
              <h3> Global Policy Advocacy</h3>
              <p>We work to shape international policy, providing expert guidance to governments and regulatory bodies to ensure ethical and sustainable practices.</p>
              <Link to="/what-we-do" className="read-more-link">Learn More</Link>
              </div> 
          </div>
          
          <div className="pillar-card">
            <div className='icon-container'>
              <FaRegHandshake className="pillar-icon" />
            </div>
            <div className='pillar-context'>
              <h3> Industry Collaboration</h3>
              <p>Connecting industry leaders with research institutions to bridge the gap between discovery and technological application in offshore projects.</p>
              <Link to="/what-we-do" className="read-more-link">Learn More</Link>
              </div> 
          </div>
          
          <div className="pillar-card">
            <div className='icon-container'>
              <FiUserCheck className="pillar-icon" />
            </div> 
            <div className='pillar-context'>
              <h3> Professional Development</h3>
              <p>Offering mentorship, training, and resources to cultivate the next generation of geoscience professionals.</p>
              <Link to="/what-we-do" className="read-more-link">Learn More</Link>
              </div> 
          </div>

        </div>
      </section>
      
=======
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
      
>>>>>>> Stashed changes
      {/* --- 3. MEMBERSHIP CTA --- */}
      <section className="membership-cta-section">
          <div className="cta-content">
              <h3>Ready to Join the Global Dialogue?</h3>
              <p>Become a member today and gain access to exclusive research, policy updates, and a network of world-leading experts.</p>
              <Link to="/membership" className="btn primary cta-btn">Apply for Membership</Link>
          </div>
      </section>

<<<<<<< Updated upstream
      {/* --- 4. LEADERSHIP/DIRECTORS SECTION (Now Dynamic) --- */}
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
=======
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
>>>>>>> Stashed changes
  );
}

export default Home;