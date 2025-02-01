import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="#footer">
      <a href="#" className="logo">
        SAMVIC CODES
      </a>

      {/* PERMALINKS */}
      <ul className="permalinks">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Experience</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Testimonials</a>
        </li>
        <li>
          <a href="">Contact Me</a>
        </li>
      </ul>

      {/* SOCIALS */}
      <div className="footer_socials">
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
      <small>&copy; 2025 SAMVIC PORTFOLIO WEBSITE </small>
      </div>
    </footer>
  );
};

export default Footer;
