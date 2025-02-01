import React from "react";
import PORTFOLIO from "../../images/portfolio2.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="#portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article>
          <div className="portfolio_image">
            <img src={PORTFOLIO} alt="" />
          </div>

          <h3>Portfolio Title</h3>

          <div className="portfolio_link">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article>
          <div className="portfolio_image">
            <img src={PORTFOLIO} alt="" />
          </div>

          <h3>Portfolio Title</h3>

          <div className="portfolio_link">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article>
          <div className="portfolio_image">
            <img src={PORTFOLIO} alt="" />
          </div>

          <h3>Portfolio Title</h3>

          <div className="portfolio_link">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article>
          <div className="portfolio_image">
            <img src={PORTFOLIO} alt="" />
          </div>

          <h3>Portfolio Title</h3>

          <div className="portfolio_link">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn_primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
