import { useState } from "react";
import { FaHome, FaUser, FaBook } from "react-icons/fa";
import { MdDesignServices, MdMessage } from "react-icons/md";

import { motion } from "framer-motion";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav >
    <div
    
     
    >
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <FaHome />
      </a>

      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <FaUser />
      </a>

      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <FaBook />
      </a>

      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <MdDesignServices />
      </a>

      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <MdMessage />
      </a>
    </div>
    </nav>
  );
};

export default Nav;
