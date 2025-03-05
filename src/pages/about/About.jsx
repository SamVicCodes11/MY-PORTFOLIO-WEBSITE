import { FaAward } from "react-icons/fa";
import ME from "../../images/MY PIC 2.jpg";
// import ME from "../../images/sammy.JPG";
import "./About.css";

import { IoLibrary } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";

import CV from "../../cv/resume.pdf";

import { motion } from "framer-motion";

const About = () => {

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };


  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <motion.div 
      className="container about_container"
      initial="hidden"
      whileInView="visible"
      animate="visible"
      // viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      >
        <div className="about_me_img">
          <img src={ME} alt="Akpobasa Victor Samuel" />
        </div>

        <div>
          <motion.div 
          className="about_content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          >
            <article>
              <FaAward className="about_icon" />

              <h4>Experience</h4>
              <small className="text_light">3+ Years Working</small>
            </article>

            <article>
              <HiUsers className="about_icon" />

              <h4>Clients</h4>
              <small className="text_light"> 20+ Worldwide</small>
            </article>

            <article>
              <IoLibrary className="about_icon" />

              <h4>Projects</h4>
              <small className="text_light"> 30+ Completed</small>
            </article>
          </motion.div>

          <p>
            I’m a Front-End Engineer dedicated to crafting intuitive,
            high-performance user interfaces. I focus on building seamless,
            responsive, and accessible web experiences that enhance usability
            and engagement. With a keen eye for detail and a problem-solving
            mindset, I turn ideas into polished, interactive digital solutions.
          </p>

          {/* <a href="#contact" className="btn btn_primary">
            Let's Connect
          </a> */}

          <a href={CV} download className="btn btn_primary">
            Download CV
            
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
