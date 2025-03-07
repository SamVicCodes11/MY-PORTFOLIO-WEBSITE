import { FaAward } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { motion } from "framer-motion";
import ME from "../../images/MY PIC 2.jpg";
// import ME from "../../images/sammy.JPG";
import CV from "../../cv/resume.pdf";
import "./About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <motion.div
          className="about_me_img"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={ME} alt="Akpobasa Victor Samuel" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="about_content">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <FaAward className="about_icon" />
              <h4>Experience</h4>
              <small className="text_light">3+ Years Working</small>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <HiUsers className="about_icon" />
              <h4>Clients</h4>
              <small className="text_light">20+ Worldwide</small>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <IoLibrary className="about_icon" />
              <h4>Projects</h4>
              <small className="text_light">30+ Completed</small>
            </motion.article>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I’m a Front-End Engineer dedicated to crafting intuitive,
            high-performance user interfaces. I focus on building seamless,
            responsive, and accessible web experiences that enhance usability
            and engagement. With a keen eye for detail and a problem-solving
            mindset, I turn ideas into polished, interactive digital solutions.
          </motion.p>

          <motion.a
            href={CV}
            download
            className="btn btn_primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
