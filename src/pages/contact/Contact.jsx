import "./Contact.css";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault(); // Ensure the default behavior is prevented

    try {
      await emailjs.sendForm(
        "service_8b07mgi",
        "template_dr0ehkq",
        form.current,
        "Zy0zX13tFMrtgc_pz" // Direct string for publicKey
      );
      alert("Message sent successfully! ✅");
      form.current.reset();
    } catch (error) {
      alert("Network error, Please try again. ❌");
      console.error(error);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_link">
          <a href="mailto:victorakpobasa2020@gmail.com" className="contact_option">
            <MdOutlineEmail className="text_white contact_icon" />
            <h4 className="text_white">Email</h4>
            <h5>victorakpobasa2020@gmail.com</h5>
            <small>Send a message</small>
          </a>

          <a
            href="https://www.linkedin.com/in/samviccodes"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_option"
          >
            <FaLinkedin className="text_white contact_icon" />
            <h4 className="text_white">LinkedIn</h4>
            <h5>linkedin.com/in/samviccodes</h5>
            <small>Send a message</small>
          </a>

          <a
            href="https://wa.me/2348146557494"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_option"
          >
            <FaWhatsapp className="text_white contact_icon" />
            <h4 className="text_white">WhatsApp</h4>
            <h5>08146557494</h5>
            <small>Send a message</small>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>

          <button type="submit" className="btn btn_primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
