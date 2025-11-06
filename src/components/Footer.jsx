// src/components/Footer.jsx
import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="footer-content">
                
                {/* 1. Contact Information Block [cite: 87, 88] */}
                <div className="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <p>For all inquiries:</p>
                    <p>
                        <a href="tel:+264857707090">+264 (0)85 770 7090</a>
                    </p>
                    <p>
                        <a href="mailto:contact@naogsp.com">contact@naogsp.com</a>
                    </p>
                    {/* Placeholder for social media icons */}
                    <div className="social-links">
                        {/* Placeholder for social icons (e.g., LinkedIn, X, etc.) */}
                    </div>
                </div>
                
                {/* 3. Membership Links Block */}
                 <div className="footer-section membership-links">
                    <h3>Membership</h3>
                    <ul>
                        <a href="/membership">Membership Categories</a>
                        <a href="/membership#benefits">Benefits</a>
                        <a href="/membership#fees">Fees</a>
                        <a href="/membership#apply">Apply for Membership</a>
                        {/* Visitors can download membership documents and brochures [cite: 91] */}
                        <a href="/downloads">Documents & Brochures</a>
                    </ul>
                </div>

            </div>

            {/* 4. Copyright Bar */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Namibian Association for Offshore Oil and Gas Service Providers (NAOGSP). All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;