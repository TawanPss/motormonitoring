import LandingHeader from "../../component/NavigationBar/LandingHeader";
import Contact from "../ContactPage/Contact";
import SignupForm from "./SignUpForm";
import Feature from "../Feature/Feature"
import "./Landing.css"
import AboutUs from "../AboutUsPage/AboutUs";
export default function Landing() {
    return (
      <>
      <div className="Landing-container">
        <LandingHeader />
        <SignupForm />
        <div className="custom-shape" />
      </div>
      <AboutUs />
      <Feature />
      <Contact />
      </>
    );
  }
  