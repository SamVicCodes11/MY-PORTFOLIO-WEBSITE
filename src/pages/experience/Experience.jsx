import { IoShieldCheckmarkSharp } from "react-icons/io5";
import "./Experience.css";
import { FaCheck } from "react-icons/fa";

const Experience = () => {
  const frontendExperience = [
    {
      icon: <FaCheck />,
      skill: "HTML",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "CSS",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "JavaScript",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "TypeScript",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "React.js",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "Next.js",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "Tailwind CSS",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "Figma",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "Git & GitHub",
      experience: "Experienced",
    },

    {
      icon: <FaCheck />,
      skill: "Context API",
      experience: "Experienced",
    },
  ];

  // BACKEND
  const backendExperience = [
    {
      icon: <FaCheck />,
      skill: "Node.js",
      experience: "Experienced",
    },
    {
      icon: <FaCheck />,
      skill: "Express.js",
      experience: "Experienced",
    },
    {
      icon: <FaCheck />,
      skill: "Next.js",
      experience: "Experienced",
    },
    {
      icon: <FaCheck />,
      skill: "RESTful APIs",
      experience: "Experienced",
    },
    {
      icon: <FaCheck />,
      skill: "MongoDB",
      experience: "Experienced",
    },
    {
      icon: <FaCheck />,
      skill: "Firebase",
      experience: "Experienced",
    },
    {
      icon: <FaCheck />,
      skill: "Python",
      experience: "Basic",
    },
  ];

  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="experience_container container">
        {/* FRONTEND EXPERIENCE */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            {frontendExperience.map(({ icon, skill, experience }, index) => (
              <article key={index}>
                <i className="experience_icon">{icon}</i>
                <div>
                  <h4>{skill}</h4>
                  <small className="text_light">{experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BACKEND EXPERIENCE */}
        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience_content">
            {backendExperience.map(({ icon, skill, experience }, index) => (
              <article key={index}>
                <i className="experience_icon">{icon}</i>
                <div>
                  <h4>{skill}</h4>
                  <small className="text_light">{experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
