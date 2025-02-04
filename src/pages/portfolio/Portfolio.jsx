import React from "react";
import "./Portfolio.css";
import PROJECT1 from "../../images/project1.jpg";
import PROJECT2 from "../../images/project2.png";
import PROJECT3 from "../../images/project3.jpg";

import PROJECT4 from "../../images/project4.png";

import PROJECT5 from "../../images/project5.png";
import PROJECT6 from "../../images/project6.png";

import PROJECT7 from "../../images/project7.jpg";
import PROJECT8 from "../../images/project8.png";

const Portfolio = () => {
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
      title: "Typescript Fitness Tracking Application",
      github:
        "https://github.com/SamVicCodes11/TYPESCRIPT-FITNESS-TRACKING-APPLICATION",
      demo: "https://typescript-fitness-tracking-application.vercel.app/",
    },
    {
      id: 5,
      image: PROJECT5,
      title: "E-Commerce Shopping Platform",
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
      github: "https://github.com/SamVicCodes11/Bankist-Website",
      demo: "https://bankist-website-psi.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioProjects.map((project) => (
          <article key={project.id}>
            <div className="portfolio_image">
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>

            <div className="portfolio_link">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn_primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
