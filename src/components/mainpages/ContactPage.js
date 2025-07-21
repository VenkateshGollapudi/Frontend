import React from 'react';
import './contact.css'; // Make sure you create a CSS file for styling

export const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions or concerns.</p>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>If you need assistance, feel free to reach out to us through the following methods:</p>
        <ul>
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
          <li>Phone: <a href="tel:+123456789">+1 234 567 89</a></li>
          <li>Address: 123 Fashion Street, City, Country</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I track my order?</h3>
          <p>Once your order has shipped, you'll receive a tracking number to follow your package.</p>
        </div>
        <div className="faq-item">
          <h3>What is your return policy?</h3>
          <p>We accept returns within 30 days of purchase. Please refer to our Return Policy page for more details.</p>
        </div>
        <div className="faq-item">
          <h3>How do I change my order?</h3>
          <p>Orders can be changed within 24 hours of purchase. Please contact our support team for assistance.</p>
        </div>
      </div>

      {/* Support Form Section */}
      <div className="support-form">
        <h2>Need Assistance? Reach Out to Us</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
