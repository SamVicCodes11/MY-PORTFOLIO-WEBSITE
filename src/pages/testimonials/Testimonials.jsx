import "./Testimonials.css";
import PHOTO from "../../images/avatar3.jpg";


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial_container">
        <article>
        <div className="client_pic">
          <img src={PHOTO} alt="" />
        </div>

        <h4>Daniel Evans</h4>

        <small className="clent_review">
        Victor is a fantastic developer! He built our website with great attention to detail, and the user experience is top-notch. Highly recommend working with him!
        </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
