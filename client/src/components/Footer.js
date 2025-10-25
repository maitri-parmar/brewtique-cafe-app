import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <p>📍 Brewtique Cafe, Mumbai, India</p>
    <p>📞 Contact: +91 98765 43210 | ✉️ brewtique@cafe.com</p>
    <p>© 2025 Brewtique. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#f0e6d2',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '14px',
    color: '#333',
  }
};

export default Footer;