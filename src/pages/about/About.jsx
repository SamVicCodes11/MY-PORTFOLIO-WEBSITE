import { FaAward } from "react-icons/fa";
import ME from "../../images/MY PIC 2.jpg";
// import ME from "../../images/sammy.JPG";
import "./About.css";

import { IoLibrary } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";

const About = () => {
  return (
    <section className="#about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me_img">
          <img src={ME} alt="" />
        </div>

        <div>
          <div className="about_content">
            <article>
              <FaAward className="about_icon" />

              <h4>Experience</h4>

              <small className="text_light">3+ Years Working</small>
            </article>

            <article>
              <HiUsers className="about_icon" />

              <h4>Clients</h4>

              <small className="text_light">300+ Worldwide </small>
            </article>

            <article>
              <IoLibrary className="about_icon" />

              <h4>Projects</h4>

              <small className="text_light">30+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            pariatur inventore quidem repudiandae dolorem sint blanditiis
            corporis doloribus voluptatum officia quod hic cumque dolor alias
            provident, et possimus aut ad!
          </p>

          <a href="#contact" className="btn btn_primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
