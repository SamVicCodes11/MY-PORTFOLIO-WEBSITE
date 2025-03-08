import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBook } from "react-icons/fa";
import { MdDesignServices, MdMessage } from "react-icons/md";
import { motion } from "framer-motion";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isScrolling, setIsScrolling] = useState(true);
  const [firstMount, setFirstMount] = useState(true);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setFirstMount(false); // Disable first mount animation after initial hide
      }, 2500); // Hide after 2.5 seconds
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            setActiveNav(newHash);
            window.history.pushState(null, null, newHash);
          }
        });
      },
      { threshold: 0.2 } // Reduce threshold for better detection
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveNav("#");
        window.history.pushState(null, null, "#");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={firstMount ? { opacity: 0, y: 50 } : false} // Animate only on first mount
      animate={{ opacity: isScrolling ? 1 : 0, y: isScrolling ? 0 : 50 }}
      transition={
        firstMount ? { duration: 0.5, ease: "easeOut" } : { duration: 0 }
      }
      style={{ pointerEvents: isScrolling ? "auto" : "none" }}
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
          href="#services"
          className={activeNav === "#services" ? "active" : ""}
          onClick={() => setActiveNav("#services")}
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
