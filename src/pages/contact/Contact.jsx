import "./Contact.css";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus("");

    try {
      await emailjs.sendForm(
        "service_8b07mgi",
        "template_dr0ehkq",
        form.current,
        "Zy0zX13tFMrtgc_pz"
      );
      setMessageStatus("Message sent successfully! ✅");
      form.current.reset();
    } catch (error) {
      setMessageStatus("Network error, Please send again. ❌");
      console.error(error);
    } finally {
      setIsSending(false);
      setTimeout(() => setMessageStatus(""), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_link">
          <a href="mailto:victorakpobasa2020@gmail.com" className="contact_option">
            <MdOutlineEmail className="text_white contact_icon" aria-label="Email" />
            <h4 className="text_white">Email</h4>
            <h5>victorakpobasa2020@gmail.com</h5>
            <small>Send a message</small>
          </a>

          <a href="https://www.linkedin.com/in/samviccodes" target="_blank" rel="noopener noreferrer" className="contact_option">
            <FaLinkedin className="text_white contact_icon" aria-label="LinkedIn" />
            <h4 className="text_white">LinkedIn</h4>
            <h5>linkedin.com/in/samviccodes</h5>
            <small>Send a message</small>
          </a>

          <a href="https://wa.me/2348146557494" target="_blank" rel="noopener noreferrer" className="contact_option">
            <FaWhatsapp className="text_white contact_icon" aria-label="WhatsApp" />
            <h4 className="text_white">WhatsApp</h4>
            <h5>08146557494</h5>
            <small>Send a message</small>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required className="form-field" />
          <input type="email" name="email" placeholder="Your Email" required className="form-field" />
          <textarea name="message" rows="7" placeholder="Your Message" required className="form-field"></textarea>

          <button type="submit" className="btn btn_primary" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {messageStatus && <p className={`message_status ${messageStatus.includes("❌") ? "error" : ""}`}>{messageStatus}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
