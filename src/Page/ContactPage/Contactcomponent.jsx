import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./Contactcomponent.css"

export default function Contactcomponent() {
  return (
    <>
    <div className="icon-container">
      <FaFacebookSquare className="facebook-icon"/>
      <SiGmail className="gmail-icon" />
      <FaYoutube className="youtube-icon" />
      <FaInstagramSquare className="ig-icon" />
      </div>
    </>
  );
}
