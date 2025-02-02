import { FaAward } from "react-icons/fa";
import ME from "../../images/MY PIC 2.jpg";
// import ME from "../../images/sammy.JPG";
import "./About.css";

import { IoLibrary } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me_img">
          <img src={ME} alt="Akpobasa Victor Samuel" />
        </div>

        <div>
          <div className="about_content">
            <article>
              <FaAward className="about_icon" />

              <h4>Experience</h4>
              <small className="text_light">3+ Years in Software Development</small>
            </article>

            <article>
              <HiUsers className="about_icon" />

              <h4>Clients</h4>
              <small className="text_light">Worked with 300+ Clients Worldwide</small>
            </article>

            <article>
              <IoLibrary className="about_icon" />

              <h4>Projects</h4>
              <small className="text_light">Completed 30+ Projects</small>
            </article>
          </div>

          <p>
          I’m a Front-End Engineer dedicated to crafting intuitive, high-performance user interfaces. I focus on building seamless, responsive, and accessible web experiences that enhance usability and engagement. With a keen eye for detail and a problem-solving mindset, I turn ideas into polished, interactive digital solutions.
          </p>

          <a href="#contact" className="btn btn_primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
