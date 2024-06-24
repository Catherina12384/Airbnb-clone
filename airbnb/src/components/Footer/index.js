import React, { useState } from 'react';
import './styles.css';


function Footer() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(!showSupport);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <a href='#'>©2024 Airbnb, Inc.</a>
          <a href="#">∙Privacy</a>
          <a href="#">∙Terms</a>
          <a href="#">∙Sitemap</a>
          <a href="#">∙Company details</a>
        </p>
        <div className="footer-links">
          <div className="language-selector">
            <a href='#'  className="globe-icon">
            🌐︎
            </a>
            <a href='#'className="language">English (IN)</a>
          </div>
          <div className="currency-selector" style={{color: "var(--black)",fontWeight: "600"}}>
            <a href='#'>₹ INR</a>
            </div>
          <div className="support-selector" onClick={handleSupportClick}>
            Support & resources{' '}
            <span className="arrow-icon">
              {showSupport ? '^' : 'v'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
