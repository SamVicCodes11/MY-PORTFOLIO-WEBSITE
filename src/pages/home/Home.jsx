import React from "react";
import CTA from "../../components/CTA";
import Socials from "../../components/Socials";
import ME from "../../images/MY_PICC.png";
import "./Home.css";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <header>
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
        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Home;
