import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const Socials = () => {
  const socialLinks = [
    {
      href: "https://github.com/SamVicCodes11",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/samviccodes",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: "https://x.com/SamVicCodes",
      icon: <FaXTwitter />,
      label: "Twitter (X)",
    },
  ];

  return (
    <motion.div
      className="socials"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      {socialLinks.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </motion.div>
  );
};

export default Socials;
