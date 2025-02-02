import CV from "../images/cv.pdf";
const CTA = () => {
  return (
    <div className="cta_button">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn_primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
