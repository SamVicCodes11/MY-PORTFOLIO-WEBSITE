import React from "react";
import CTA from "../../components/CTA";
import Socials from "../../components/Socials";
import ME from "../../images/MY_PICC.png";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <header>
      <div className="container header_container">
        <motion.h4
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hello, I'm
        </motion.h4>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Akpobasa Victor
        </motion.h1>

        <motion.h4
          className="text_light"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          Frontend Engineer
        </motion.h4>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <CTA />
        </motion.div>

        {/* Socials (Animate from Bottom to Top) */}
        <motion.div
          // initial={{ y: 50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          <Socials />
        </motion.div>

        {/* Scroll Down Link (Animate from Bottom to Top) */}
        <motion.a
          href="#contact"
          className="slider"
          // initial={{ y: 50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        >
          Scroll Down
        </motion.a>

        {/* Profile Image Animation */}
        <motion.div
          className="me"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <img src={ME} alt="Akpobasa Victor" />
        </motion.div>
      </div>
    </header>
  );
};

export default Home;
