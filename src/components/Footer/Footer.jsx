import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "../InfoSections/FAQ.jsx";
import Dev from "../InfoSections/Dev.jsx";

import "./Footer.css";

function Footer() {
  const [showFaqs, setShowFaqs] = useState(false);
  const [showDevs, setShowDevs] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/image/download.jpeg" alt="F3 Zone" />
          <p>Your Fitness, Your Zone</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#Blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Socials */}
        <div className="socials">
          <a
            href="https://www.facebook.com/f3sportscenter?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/f3sportscenter?igsh=Mmk3YW1xdjh2Mnc1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="con-info">
        <p>Urdaneta City</p>
        <p>
          <i className="fas fa-phone"></i> 09277043559 &nbsp; | &nbsp;
          <i className="fas fa-envelope"></i> info@gmail.com
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="footer-buttons">
        <button className="toggle-btn" onClick={() => setShowFaqs(!showFaqs)}>
          {showFaqs ? "Hide FAQs" : "Show FAQs"}
        </button>
        <button className="toggle-btn" onClick={() => setShowDevs(!showDevs)}>
          {showDevs ? "Hide Developers" : "Show Developers"}
        </button>
      </div>

      {/* FAQ Animation */}
      <AnimatePresence>
        {showFaqs && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <FAQ />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Developers Animation */}
      <AnimatePresence>
        {showDevs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Dev />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom */}
      <div className="bottom">
        <p>&copy; {new Date().getFullYear()} F3 Zone. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
