import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const skills = {
    frontend: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Experienced" },
      { skill: "JavaScript", level: "Experienced" },
      { skill: "TypeScript", level: "Intermediate" },
      { skill: "React.js", level: "Experienced" },
      { skill: "Next.js", level: "Experienced" },
      { skill: "Tailwind CSS", level: "Experienced" },
      { skill: "Figma", level: "Experienced" },
      { skill: "Git & GitHub", level: "Experienced" },
      { skill: "Context API", level: "Experienced" },
      { skill: "Axios", level: "Experienced" },
      { skill: "Redux", level: "Intermediate" },
    ],
    backend: [
      { skill: "Node.js", level: "Experienced" },
      { skill: "Express.js", level: "Experienced" },
      { skill: "RESTful APIs", level: "Experienced" },
      { skill: "MongoDB", level: "Experienced" },
      { skill: "Firebase", level: "Experienced" },
      { skill: "Python", level: "Basic" },
      { skill: "Prisma", level: "Intermediate" },
      { skill: "Postman", level: "Proficient" },
      { skill: "NPM", level: "Experienced" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <section id="experience">
      <motion.h5 initial="hidden" animate="visible" variants={containerVariants}>
        What Skills I Have
      </motion.h5>
      <motion.h2 initial="hidden" animate="visible" variants={containerVariants}>
        My Experience
      </motion.h2>

      <motion.div className="experience_container container" variants={containerVariants} initial="hidden" animate="visible">
        {Object.entries(skills).map(([category, skillSet]) => (
          <motion.div key={category} className={`experience_${category}`} variants={containerVariants}>
            <h3>{category === "frontend" ? "Frontend Development" : "Backend Development"}</h3>
            <p>{category === "frontend" ? "Building scalable UI components and interactive experiences." : "Developing secure and scalable APIs."}</p>
            <motion.div className="experience_content" variants={containerVariants}>
              {skillSet.map(({ skill, level }, index) => (
                <motion.article key={index} className="experience_item" variants={itemVariants}>
                  <span className="experience_icon" aria-label="Skill Verified">
                    <FaCheck />
                  </span>
                  <div>
                    <h4>{skill}</h4>
                    <small className="text_light">{level}</small>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
