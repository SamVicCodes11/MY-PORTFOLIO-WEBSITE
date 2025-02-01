import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="socials">
      <a href="">
        <FaLinkedin />
      </a>
      <a href="">
        <FaFacebookF />
      </a>
      <a href="">
        <FaXTwitter />
      </a>
    </div>
  );
};

export default Socials;
