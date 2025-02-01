import { IoShieldCheckmarkSharp } from "react-icons/io5";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="#experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="experience_container container">
        {/* FRONTEND EXPERIENCE */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article>
              <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article>
              <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article>
              <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article>
              <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>{" "}
            
          </div>
        </div>

        {/* BACKEND EXPERIENCE */}

        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience_content">
            <article>
            <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article>
            <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article>
               <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article>
            <IoShieldCheckmarkSharp className="experience_icon" />

              <div>
                <h4>HTML</h4>

                <small className="text_light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
