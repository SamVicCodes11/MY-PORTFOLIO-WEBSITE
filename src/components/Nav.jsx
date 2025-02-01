import { BsPersonFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdMessage } from "react-icons/md";


const Nav = () => {
  return (
    <nav>
      <a href="#">
      <FaHome />

      </a>

      <a href="#about">
      <FaUser />

      </a>

      <a href="#experience">
      <FaBook />

      </a>

      <a href="#portfolio">
      <MdDesignServices />

      </a>

      <a href="#contact">
      <MdMessage />

      </a>
    </nav>
  );
};

export default Nav;
