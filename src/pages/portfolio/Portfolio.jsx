import "./Portfolio.css";
import { motion } from "framer-motion";

// Import images
import PROJECT1 from "../../images/project1.jpg";
import PROJECT2 from "../../images/project2.png";
import PROJECT3 from "../../images/project3.jpg";
import PROJECT4 from "../../images/project4.png";
import PROJECT5 from "../../images/project5.png";
import PROJECT6 from "../../images/project6.png";
import PROJECT7 from "../../images/project7.jpg";
import PROJECT8 from "../../images/project8.png";
import PROJECT9 from "../../images/project9.png";

// Portfolio projects data
const portfolioProjects = [
  {
    id: 1,
    image: PROJECT1,
    title: "Social Media Platform with Customizable Themes",
    github: "https://github.com/SamVicCodes11/SOCIAL_MEDIA_WEBSITE",
    demo: "https://social-media-website-vert.vercel.app/",
  },
  {
    id: 2,
    image: PROJECT2,
    title: "MERN Stack Blog Application with Admin Dashboard",
    github: "https://github.com/SamVicCodes11/FULLSTACK-BLOG-APP",
    demo: "https://fullstack-blog-app-beta.vercel.app/",
  },
  {
    id: 3,
    image: PROJECT3,
    title: "Educational Platform for Online Learning",
    github: "https://github.com/SamVicCodes11/EDUCATION-WEBSITE",
    demo: "https://education-website-nine-pi.vercel.app/",
  },
  {
    id: 4,
    image: PROJECT4,
    title: "TypeScript Fitness Tracking Application",
    github:
      "https://github.com/SamVicCodes11/TYPESCRIPT-FITNESS-TRACKING-APPLICATION",
    demo: "https://typescript-fitness-tracking-application.vercel.app/",
  },
  {
    id: 5,
    image: PROJECT5,
    title: "E-Commerce Fashion Store",
    github: "https://github.com/SamVicCodes11/E-CORMMERCE-SHOPPING-PLATFORM",
    demo: "https://e-cormmerce-shopping-platform.vercel.app/",
  },
  {
    id: 6,
    image: PROJECT6,
    title: "Interactive Quiz Website",
    github: "https://github.com/SamVicCodes11/QUIZ-WEBSITE",
    demo: "https://samvicquiz-website.vercel.app/",
  },
  {
    id: 7,
    image: PROJECT7,
    title: "Gym and Membership Management System",
    github: "https://github.com/SamVicCodes11/GYM__WEBSITE",
    demo: "https://samvicgymwebsite.vercel.app/",
  },
  {
    id: 8,
    image: PROJECT8,
    title: "Banking Management Platform",
    github: "https://github.com/SamVicCodes11/BANKING-MANAGEMENT-APP",
    demo: "https://banking-management-app-azure.vercel.app/",
  },
  {
    id: 9,
    image: PROJECT9,
    title: "Electronics E-Commerce Website",
    github:
      "https://github.com/SamVicCodes11/E-CORMMERCE-STORE-FOR-ELECTRONICS",
    demo: "https://e-cormmerce-store-for-electronics.vercel.app/",
  },
];

// Animation variants for cleaner structure
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <motion.h5 initial="hidden" animate="visible" variants={fadeInUp}>
        My Recent Work
      </motion.h5>
      <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
        Portfolio
      </motion.h2>

      <motion.div
        className="container portfolio_container"
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.2 }}
        // variants={{
        //   hidden: { opacity: 0, y: 20 },
        //   visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        // }}
      >
        {portfolioProjects.map((project) => (
          <motion.article
            key={project.id}
            className="portfolio_card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            variants={fadeInUp}
          >
            <div className="portfolio_image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <h3>{project.title}</h3>

            <motion.div className="portfolio_link">
              <motion.a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                whileHover={{ scale: 1.1 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                className="btn btn_primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                whileHover={{ scale: 1.1 }}
              >
                Live Demo
              </motion.a>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
