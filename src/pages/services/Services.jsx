import { IoShieldCheckmarkSharp } from "react-icons/io5";
import "./Services.css";

const Services = () => {
  return (
    <section className="#services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* FRONTEND */}

        <article>
          <div className="services_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* FULLSTACK */}

        <article>
          <div className="services_head">
            <h3>Fullstack Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* BACKEND */}

        <article>
          <div className="services_head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/*  */}
      </div>
    </section>
  );
};

export default Services;
