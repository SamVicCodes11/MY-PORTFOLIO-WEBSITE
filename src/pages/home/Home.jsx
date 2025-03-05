import React from "react";
import CTA from "../../components/CTA";
import Socials from "../../components/Socials";
import ME from "../../images/MY_PICC.png";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container header_container">
        <h4>Hello, I'm</h4>
        <h1>Akpobasa Victor</h1>
        <h4 className="text_light">Frontend Engineer</h4>

        <CTA />
        <Socials />

        <a href="#contact" className="slider">
          Scroll Down
        </a>

        {/* ME */}
        <motion.div
          className="me"
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { opacity: 1, y: 0,scale: 1 },
          }}
        >
          <img src={ME} alt="" />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Home;
