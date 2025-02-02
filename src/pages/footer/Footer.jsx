import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="#footer">
      <a href="#" className="logo">
        SAMVIC CODES
      </a>

      {/* PERMALINKS */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      {/* SOCIALS */}
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/samviccodes"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/SamVicCodes11"
          target="_blank"
          rel="noreferrer noopener"
        >
        <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://x.com/SamVicCodes"
          target="_blank"
          rel="noreferrer noopener"
        >
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
