import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
