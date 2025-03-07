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
        {/* Animated Text */}
        <motion.h4
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }} // Exit Animation
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1, color: "#4db5ff" }} // Hover Effect
        >
          Hello, I'm
        </motion.h4>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.1, color: "#4db5ff" }}
        >
          Akpobasa Victor
        </motion.h1>

        <motion.h4
          className="text_light"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.05, color: "#4db5ff" }}
        >
          Frontend Engineer
        </motion.h4>

        {/* CTA Buttons with Hover & Exit Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <CTA />
        </motion.div>

        {/* Socials Animation on Viewport */}
        
        <motion.div>
          <Socials />
        </motion.div>

        {/* Scroll Down Link Animation */}

        <motion.a
          href="#contact"
          className="slider"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          whileHover={{
            scale: 1.1,
            color: "#4db5ff",
            textShadow: "0px 0px 8px rgba(77, 181, 255, 0.8)",
          }}
        >
          Scroll Down
        </motion.a>

        {/* Profile Image with Hover & Responsive Effects */}

        <motion.div
          className="me"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={ME} alt="Akpobasa Victor" />
        </motion.div>
      </div>
    </header>
  );
};

export default Home;
