// src/components/Contact.jsx
import React from 'react';
import { useForm } from '@formspree/react'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const phoneNumber = '+264 85 770 7090';
  const emailAddress = 'contact@naogsp.com';
  const [state, handleSubmit] = useForm("manlgkyz");

  if (state.succeeded) {
      return (
          <div className="contact-success-message">
              <h2>Thank You!</h2>
              <p>Your message has been successfully received by the NAOGSP team. We will get back to you shortly.</p>
              <button onClick={() => window.location.reload()} className="btn primary">Send Another Message</button>
          </div>
      );
  }

  return (
    <section className="contact-page">
      
      <div className="page-intro">
        <h1>Contact Us</h1>
        <h2>We are here to assist with your offshore service inquiries.</h2>
        <p>
          For membership applications, partnership proposals, or general inquiries, please use the contact details or the form provided below.
        </p>
      </div>

      {/* --- Main Contact Grid (Map & Info) --- */}
      <div className="contact-grid-layout">
        
        <div className="contact-info-card content-card">
          <h3>Get In Touch</h3>
          <p>
            Our team is ready to respond to your queries promptly.
          </p>

          <div className="detail-item">
            <span className="icon-placeholder"><FaPhone /></span>
            <h4>Phone Number</h4>
            <p>{phoneNumber}</p>
          </div>

          <div className="detail-item">
            <span className="icon-placeholder"><FaEnvelope /></span>
            <h4>Email Address</h4>
            <p>{emailAddress}</p>
          </div>
          
          <div className="detail-item">
            <span className="icon-placeholder"><FaMapMarkerAlt /></span>
            <h4>Office Location (Placeholder)</h4>
            <p>Windhoek, Namibia (View our office on the map below)</p>
          </div>

          <div className="document-links">
            <h4 style={{ marginTop: '20px' }}>Quick Downloads</h4>
            <p>Visitors will be able to download membership documents and brochures here.</p>
            <a href="#" className="btn secondary small-btn">Download Brochure</a>
            <a href="#" className="btn secondary small-btn">Membership Forms</a>
          </div>
        </div>

        {/* Contact Form Section (Remains unchanged) */}
        <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <p>Use the form below to send messages directly to our team.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required /> 
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="_replyto" required /> 
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                        <option value="">Select Inquiry Type</option>
                        <option value="Membership Inquiry">Membership Inquiry</option>
                        <option value="Partnership Proposal">Partnership Proposal</option>
                        <option value="General Question">General Question</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
              
                <button 
                    type="submit" 
                    className="btn primary submit-btn"
                    disabled={state.submitting}
                >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
  
                {state.errors && <p className="form-error">An error occurred: Please check your connection and try again.</p>}
            </form>
        </div>
      </div>

    </section>
  );
}

export default Contact;