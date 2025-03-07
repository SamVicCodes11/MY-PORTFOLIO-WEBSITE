import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Services.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <motion.div
        className="container services_container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* FRONTEND */}
        <motion.article variants={cardVariants}>
          <div className="services_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            {[
              "Building responsive and visually appealing user interfaces.",
              "Optimizing web applications for speed and performance.",
              "Ensuring seamless cross-browser and mobile compatibility.",
              "Implementing smooth animations and interactive elements.",
            ].map((text, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants}>
                <IoShieldCheckmarkSharp className="service_list_icon" />
                <p>{text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.article>

        {/* FULLSTACK */}
        <motion.article variants={cardVariants}>
          <div className="services_head">
            <h3>Fullstack Development</h3>
          </div>
          <ul className="service_list">
            {[
              "Developing scalable, end-to-end web applications.",
              "Integrating frontend and backend for seamless data flow.",
              "Building robust APIs for secure data exchange.",
              "Ensuring high performance and security across applications.",
              "Managing databases and server-side logic efficiently.",
              "Deploying and maintaining web applications in the cloud.",
            ].map((text, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants}>
                <IoShieldCheckmarkSharp className="service_list_icon" />
                <p>{text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.article>

        {/* BACKEND */}
        <motion.article variants={cardVariants}>
          <div className="services_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            {[
              "Designing and implementing scalable backend architectures.",
              "Developing and securing RESTful APIs and databases.",
              "Ensuring data integrity and authentication mechanisms.",
              "Optimizing server performance and database queries.",
            ].map((text, i) => (
              <motion.li key={i} custom={i} variants={listItemVariants}>
                <IoShieldCheckmarkSharp className="service_list_icon" />
                <p>{text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default Services;
