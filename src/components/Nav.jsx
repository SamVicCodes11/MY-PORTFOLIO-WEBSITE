import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBook } from "react-icons/fa";
import { MdDesignServices, MdMessage } from "react-icons/md";
import { motion } from "framer-motion";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    // Observe sections and update activeNav
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    // Detect when user scrolls to the top
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveNav("#");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} // 0.8s delay
    >
      <div>
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
    </motion.nav>
  );
};

export default Nav;
