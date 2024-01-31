import LandingHeader from "../../component/NavigationBar/LandingHeader";
import SignupForm from "./SignUpForm";
import "./landing.css"
export default function Landing() {
    return (
      <>
      <div className="Landing-container">
        <LandingHeader />
        Landing
        <SignupForm />
      </div>
      </>
    );
  }
  