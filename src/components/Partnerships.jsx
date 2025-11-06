// src/components/Partnerships.jsx
import React from 'react';

function Partnerships() {
  return (
    <section className="partnerships-page">
      
      {/* Page Intro Section */}
      <div className="page-intro">
        <h1>Partnerships & Regional Collaboration</h1>
        <h2>Strengthening Regional and International Ties</h2>
        <p>
          NAOGSP actively engages in strategic partnerships and regional collaboration to drive growth and efficiency across the offshore oil and gas service sector in Namibia and across the continent.
        </p>
      </div>

      {/* --- Key Partnership Section --- */}
      <h2 className="section-title">Memorandum of Understanding (MOU) with AECIPA</h2>
      <p className="large-text">
        In **August 2023**, NAOGSP signed a significant Memorandum of Understanding (MOU) with the **Angolan Oil and Gas Service Companies Association (AECIPA)**. This agreement aims to strengthen regional cooperation and create mutual business advantages for our members.
      </p>

      {/* Focus Areas (Structured in a card grid) */}
      <h3 className="section-subtitle">Focus Areas of the AECIPA MOU</h3>
      <div className="content-grid">
        
        <div className="content-card">
          <span className="icon-placeholder">📊</span>
          <h3>Market Information Sharing</h3>
          <p>Sharing market information and research to provide members with actionable business intelligence.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">💼</span>
          <h3>Business Facilitation</h3>
          <p>Facilitating direct business partnerships between Angolan and Namibian service companies.</p>
        </div>
        
        <div className="content-card">
          <span className="icon-placeholder">⚙️</span>
          <h3>Technology Exchange</h3>
          <p>Promoting joint training initiatives and technology exchange to elevate regional capabilities.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">⛓️</span>
          <h3>Supply-Chain Efficiency</h3>
          <p>Promoting supply-chain efficiency and advocating for local content growth across both nations.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">⚖️</span>
          <h3>Regional Policy Alignment</h3>
          <p>Establishing joint advocacy efforts for regional policy alignment to create a unified regulatory environment.</p>
        </div>
        
      </div>

      {/* --- Regional Engagement --- */}
      <h2 className="section-title" style={{ marginTop: '50px' }}>Wider African Collaboration</h2>
      <p>
        Beyond Angola, NAOGSP actively engages with other influential African associations in nations including **Mozambique**, **Tanzania**, **Ghana**, **Uganda**, **Senegal**, and **Nigeria**. This engagement focuses on promoting local content, industrialization, and shared best practices across the continent.
      </p>

      {/* --- Founder's Quote (Special dark block for emphasis) --- */}
      <div className="founder-quote-block">
        <p className="quote-text">
          "Our goal is to balance expatriate quotas with genuine local skills development - empowering Namibian offshore service companies."
        </p>
        <p className="quote-author">
          — Knowledge Ndunge Ipinge, Founder of NAOGSP
        </p>
      </div>

    </section>
  );
}

export default Partnerships;