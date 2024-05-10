import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./LandingHeader.css";
import logo from "./logoV1.png";
import { Link as ScrollLink } from "react-scroll";

export default function LandingHeader() {
  return (
    <>
      <nav className="landing-header">
        <ScrollLink to="landing" smooth={true} duration={500} className="btn">
          <img src={logo} />
        </ScrollLink>
        <ul>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} className="btn">
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="feature" smooth={true} duration={500} className="btn">
              FEATURE
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} className="btn">
              CONTACT
            </ScrollLink>
          </li>
          <li className="signin">
            <Link to="/sign-in">SIGN IN</Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
}
