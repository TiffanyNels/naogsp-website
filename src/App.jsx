// src/App.jsx

import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import WhatWeDo from './components/WhatWeDo';
import Membership from './components/Membership';
import Partnerships from './components/Partnerships';
import NewsAndMedia from './components/NewsAndMedia';

import HeroImage from './assets/Oil-and-gas-site-696x369.jpg';

function App() {
  // State for data fetching and status
  const [naogspInfo, setNaogspInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  // useEffect Hook: Fetches data once when the component mounts
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      // Attempt to fetch general company information from Supabase
      const { data, error } = await supabase
        .from('website_info') 
        .select('*')
        .limit(1);

      if (error) {
        console.error('Error fetching data from Supabase:', error);
        setError('Failed to load company information from the database.');
      } else {
        // Pass the fetched mission statement to state
        setNaogspInfo(data[0]); 
      }
      setLoading(false);
    }

    fetchData();
  }, []); // Runs once on component mount


  if (loading) {
    return <div className="status-message">Loading NAOGSP Website...</div>;
  }
  if (error) {
    return <div className="status-message error-message">Error: {error}</div>;
  }
  // --- Main Render starts here if no loading/error ---

  return (
    <div className="app-container">
      
      <Header />

      {isHomePage && (

       <div 
          className="hero-section-global"
          style={{ backgroundImage: `url(${HeroImage})` }} 
        >
          <h1>Uniting Offshore Oil and Gas Service Companies in Namibia.</h1>
          
          <div className="mission-summary-global">
              <p className="mission-highlight">
                  Established to advocate for the growth and development of service companies in the offshore oil and gas industry.
              </p>
          </div>
        </div>
      )}

      <main>
     
        <Routes>
          {/* Home Page: Pass fetched data as a prop */}
          <Route path="/" element={<Home naogspInfo={naogspInfo} />} />

          {/* Static Content Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-media" element={<NewsAndMedia />} />
          
          {/* Optional: Add a 404/Not Found Page */}
          <Route path="*" element={<h1>404 | Page Not Found</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App