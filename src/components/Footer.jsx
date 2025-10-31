import React from "react";
import { FaInstagram, FaTelegramPlane, FaPhone } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h4>Contact Us</h4>
          <p><FaPhone /> +998 (33) 552 36 06</p>
          <p><FaTelegramPlane /> @yourtelegram</p>
        
          <a href="https://www.instagram.com/chocoberry__namangan/">  <p><FaInstagram />Instagram</p></a>
        </div>
        <div className="footer-item">
          <h4>Working Hours</h4>
          <p>Mon - Fri: 8:00 - 23:00</p>
          <p>Sat - Sun: 80:00 - 2:00</p>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Sweet Menu. All rights reserved.</p>
    </footer>
  );
}
