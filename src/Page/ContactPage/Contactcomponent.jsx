import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./Contactcomponent.css";
import PhoneIcon from "./image1.png"
import EmailIcon from "./image2.png"

export default function Contactcomponent() {
  return (
    <>
      <div className="contact-container">
        <div className="icon-container">
          <FaFacebookSquare className="facebook-icon" />
          <SiGmail className="gmail-icon" />
          <FaYoutube className="youtube-icon" />
          <FaInstagramSquare className="ig-icon" />
        </div>
        <div className="info-container">
          <p className="info-location">
            Contact Us Thammasat University 99 Moo 18 Paholyothin Road, Klong
            Nueng, Klong Luang, Pathumthani 12121 Thailand
          </p>
          <div className="info-contact">
            <div className="info-email-container">
            <img className="info-email-icon" src={EmailIcon} />
            <div className="info-email">Allnew_family@love.com</div>
            </div>
            <div className="info-num-container1">
            <img className="info-phone-icon" src={PhoneIcon} />
            <div className="info-num1">080-000-0000</div>
            </div>
            <div className="info-num-container2">
            <img className="info-phone-icon" src={PhoneIcon} />
            <div className="info-num2">090-000-0000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
