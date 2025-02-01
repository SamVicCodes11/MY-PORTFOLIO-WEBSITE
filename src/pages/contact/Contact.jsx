import { FaXTwitter } from "react-icons/fa6";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="#contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_link">
          <a
            href="mailto:victorakpobasa2020@gmail.com"
            className="contact_option"
          >

            <FaXTwitter className="text_white contact_icon" />
            <h4 className="text_white">Email</h4>
            <h5>victorakpobasa2020@gmail.com</h5>

            <a href="">Send a message</a>
          </a>


          <a
            href="mailto:victorakpobasa2020@gmail.com"
            className="contact_option"
          >
            <FaLinkedin className="text_white contact_icon" />

            <h4 className="text_white">LinkedIn</h4>
            <h5>linkedin.com/in/samviccodes</h5>

            <a href="">Send a message</a>
          </a>



          <a
            href="mailto:victorakpobasa2020@gmail.com"
            className="contact_option"
          >
            <FaWhatsapp className="text_white contact_icon" />
            <h4 className="text_white">Whatsapp</h4>
            <h5>08146557494</h5>

            <a href="">Send a message</a>
          </a>
        </div>


        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>

          <input type="email" name="email" placeholder="Your Email" required/>

          <textarea name="message" rows="7" id="" placeholder="Your Message" required></textarea>

          <button type="submit" className="btn btn_primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
