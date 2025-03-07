import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

import AVATAR1 from "../../images/avatar1.jpg";
import AVATAR2 from "../../images/avatar2.jpg";
import AVATAR3 from "../../images/avatar3.jpg";
import AVATAR4 from "../../images/avatar4.jpg";

const testimonials = [
  {
    avatar: AVATAR1,
    name: "Olivia Harper",
    review:
      "Victor is a fantastic developer! He built our website with great attention to detail, and the user experience is top-notch. Highly recommend working with him!",
  },
  {
    avatar: AVATAR2,
    name: "Ibrahim Bello",
    review:
      "Working with Victor was a great experience! His attention to UI/UX and performance optimization was impressive.",
  },
  {
    avatar: AVATAR3,
    name: "Jason Miller",
    review:
      "Victor transformed our online store into a seamless experience. His frontend expertise made a huge impact!",
  },
  {
    avatar: AVATAR4,
    name: "Aisha Bello",
    review:
      "Highly skilled and professional! Victor understood our requirements perfectly and delivered beyond expectations.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial_container"
      >
        {testimonials.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <article className="testimonial">
              <div className="client_pic">
                <img src={avatar} alt={name} />
              </div>
              <h4>{name}</h4>
              <small className="client_review">{review}</small>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
