// src/components/Membership.jsx
import React from 'react';
import MembershipFormPDF from '/src/NAOGSP_Membership_Form.pdf';

function Membership() {
const emailAddress = 'contact@naogsp.com';
const MembershipFormPDF = '/NAOGSP_Membership_Form.pdf';
  return (
    <section className="membership-page">
      
      {/* Page Intro Section */}
      <div className="page-intro">
        <h1>Membership</h1>
        <h2>Join Namibia's Offshore Oil and Gas Service Providers</h2>
        <p>
          Invest in your business's future with NAOGSP. Join us in shaping Namibia's offshore oil and gas industry!
        </p>
      </div>

      {/* --- Benefits Section (Modular Cards) --- */}
      <h2 className="section-title">Key Membership Benefits at a Glance</h2>
      <div className="content-grid">
        
        <div className="content-card">
          <span className="icon-placeholder">📰</span>
          <h3>Stay Informed</h3>
          <p>Stay updated on policy changes and industry news impacting your business.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">🔗</span>
          <h3>Networking & Access</h3>
          <p>Access exclusive events, partnerships, and networking opportunities with international and local firms.</p>
        </div>
        
        <div className="content-card">
          <span className="icon-placeholder">🚀</span>
          <h3>Industry Competitiveness</h3>
          <p>Enhance your competitiveness with more clients and business opportunities in Namibia's oil and gas sector.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">🛡️</span>
          <h3>Tackle Critical Issues</h3>
          <p>Address safety, environmental, and security concerns to ensure contract security.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">🎓</span>
          <h3>Training & Development</h3>
          <p>Develop industry skills through specialised training and development programs.</p>
        </div>

        <div className="content-card">
          <span className="icon-placeholder">🏛️</span>
          <h3>Advocacy & Viability</h3>
          <p>Access to market and local participation to expand your customer base through association advocacy.</p>
        </div>

      </div>

      {/* --- Eligibility Section (List) --- */}
      <h2 className="section-title">Membership Eligibility and Requirements</h2>
      <p>
        All members are required to meet the following criteria consistently:
      </p>
      <ul className="eligibility-list">
        <li>Complete the membership application form.</li>
        <li>Provide proof of registration or incorporation in Namibia.</li>
        <li>Submit a valid tax certificate.</li>
        <li>Furnish credible evidence of conducting business/Proof of active business operations.</li>
        <li>Provide a company profile submission.</li>
        <li>Pay admission fees within 30 days after the Board admits the applicant.</li>
      </ul>

      {/* --- Categories Section (Table) --- */}
      <h2 className="section-title">Membership Categories</h2>
      
      {/* Using the table structure for the main comparison */}
      <table className="membership-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Who It's For</th>
            <th>Key Benefits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Associate</td>
            <td>Startups or small service companies (&lt;2 years of experience) entering offshore oil and gas.</td>
            <td>Access to events, networking, specialised training programs, and industry communications.</td>
          </tr>
          <tr>
            <td>Corporate</td>
            <td>Established service providers with technical and financial capabilities in offshore oil and gas.</td>
            <td>Business growth support, research access, policy participation, and exclusive development opportunities.</td>
          </tr>
          <tr>
            <td>Supporting</td>
            <td>Consultants, suppliers, manufacturers, and companies supporting the industry.</td>
            <td>Targeted marketing and visibility opportunities to showcase products or services to NAOGSP members.</td>
          </tr>
          <tr>
            <td>International</td>
            <td>Service companies operating outside Namibia.</td>
            <td>Market entry support, business networking, and access to Namibian industry insights.</td>
          </tr>
          <tr>
            <td>Temporary Dispensation</td>
            <td>Companies under review or those requiring temporary exemptions from accreditation criteria.</td>
            <td>Conditional participation benefits.</td>
          </tr>
        </tbody>
      </table>

      {/* --- Fees Section (Table) --- */}
      <h2 className="section-title">Membership Fees Structure</h2>
      <p>
        The membership fee consists of admission and annual subscription fees and is subject to revision at the Annual General Meeting (AGM).
      </p>

      <table className="membership-table fees-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Admission Fee (N\$)</th>
            <th>Annual Subscription (N\$)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Associate Membership</td>
            <td>N\$ 5,000</td>
            <td>N\$ 7,500</td>
          </tr>
          <tr>
            <td>Corporate Membership</td>
            <td>N\$ 10,000</td>
            <td>N\$ 15,000</td>
          </tr>
          <tr>
            <td>Supporting Membership</td>
            <td>N\$ 15,000</td>
            <td>N\$ 20,000</td>
          </tr>
          <tr>
            <td>International Membership</td>
            <td>N\$ 20,000</td>
            <td>N\$ 25,000</td>
          </tr>
        </tbody>
      </table>
      
      <p className="fee-note">
        <small>*Membership fees are non-refundable. The annual subscription fee is calculated on a monthly pro-rata basis for the remaining months of the financial year from the month that the membership is approved by the Board.</small>
      </p>

      <div className="document-submission-section">
        <h2>Submit Your Application & Documents</h2>
        <p>
            Once you have completed the **Membership Application Form** and collected all **Required Documents**, please follow the instructions below to submit your file.
        </p>

        <div className="submission-options">
            
             {/* Card 1: Download Link */}
            <div className="submission-card">
                <span className="icon-placeholder">📄</span>
                <h3>Download Membership Form</h3>
                <p>
                    Download and complete the official NAOGSP Membership Application Form to begin the process.
                </p>
                {/* PDF Download Link */}
                <a 
                    href={MembershipFormPDF} 
                    download="NAOGSP_Membership_Form.pdf"
                    className="btn primary small-btn" 
                    style={{marginTop: '10px'}}
                >
                    Download Form (PDF)
                </a>
            </div>
            
            {/* Card 2: Email Submission */}
            <div className="submission-card">
                <span className="icon-placeholder">📧</span>
                <h3>Option 1: Email Submission</h3>
                <p>
                    Attach the completed form and all supporting documents (proof of registration, tax certificate, company profile, logo) to an email and send it to the Membership Officer.
                </p>
                <a href={`mailto:${emailAddress}?subject=NAOGSP%20Membership%20Application`} className="btn secondary small-btn" style={{marginTop: '10px'}}>Email Application Documents</a>
            </div>

            {/* Card 3: Online Submission */}
            <div className="submission-card">
                <span className="icon-placeholder">☁️</span>
                <h3>Option 2: Online File Submission</h3>
                <p>
                    You can securely upload your files directly to our designated submission folder (e.g., using a Dropbox File Request or Google Drive Upload link).
                </p>
                <div className="upload-placeholder">
                    [Placeholder: Link to Dropbox/Google Drive File Request]
                </div>
            </div>
        </div>
      </div>

    </section>
  );
}

export default Membership;