import { IoShieldCheckmarkSharp } from "react-icons/io5";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
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
              <p>Building responsive and visually appealing user interfaces.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Optimizing web applications for speed and performance.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Ensuring seamless cross-browser and mobile compatibility.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Implementing smooth animations and interactive elements.</p>
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
              <p>Developing scalable, end-to-end web applications.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Integrating frontend and backend for seamless data flow.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Building robust APIs for secure data exchange.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Ensuring high performance and security across applications.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Managing databases and server-side logic efficiently.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Deploying and maintaining web applications in the cloud.</p>
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
              <p>Designing and implementing scalable backend architectures.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Developing and securing RESTful APIs and databases.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Ensuring data integrity and authentication mechanisms.</p>
            </li>

            <li>
              <IoShieldCheckmarkSharp className="service_list_icon" />
              <p>Optimizing server performance and database queries.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
