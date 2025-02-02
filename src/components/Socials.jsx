import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://github.com/SamVicCodes11"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub />

      </a>


      <a
        href="https://www.linkedin.com/in/samviccodes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedinIn />
      </a>


      <a
        href="https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://x.com/SamVicCodes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaXTwitter />
      </a>
    </div>
  );
};

export default Socials;
