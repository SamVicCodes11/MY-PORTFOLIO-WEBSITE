import "./Testimonials.css";
import PHOTO from "../../images/avatar4.jpg";


const Testimonials = () => {
  return (
    <section className="#testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial_container">
        <article>
        <div className="client_pic">
          <img src={PHOTO} alt="" />
        </div>

        <h4>SamVic Codes</h4>

        <small className="clent_review">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          quis laborum eius dolores excepturi sed minima! Esse, eaque vel!
        </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
