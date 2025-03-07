import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="logo">
        SAMVIC CODES
      </a>

      {/* PERMALINKS */}
      <ul className="permalinks">
        {[
          "Home",
          "About",
          "Experience",
          "Services",
          "Portfolio",
          "Testimonials",
          "Contact Me",
        ].map((section, index) => (
          <li key={index}>
            <a
              href={
                section === "Home"
                  ? "#"
                  : `#${section.toLowerCase().replace(" ", "")}`
              }
            >
              {section}
            </a>
          </li>
        ))}
      </ul>

      {/* SOCIALS */}
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/samviccodes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/SamVicCodes11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/SamVicCodes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; {new Date().getFullYear()} SAMVIC PORTFOLIO WEBSITE
        </small>
      </div>
    </footer>
  );
};

export default Footer;
