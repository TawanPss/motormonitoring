import LandingHeader from "../../component/NavigationBar/LandingHeader";
import SignupForm from "./SignUpForm";
import "./landing.css"
export default function Landing() {
    return (
      <>
      <div className="Landing-page">
        <LandingHeader />
        Landing
        <SignupForm />
      </div>
      </>
    );
  }
  