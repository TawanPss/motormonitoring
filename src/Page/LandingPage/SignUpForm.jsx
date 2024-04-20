import "./SignUpForm.css"
import { Link  , useNavigate} from 'react-router-dom';
export default function SignupForm() {
  return (
    <>
      <div className="label-signup">
        <p>Welcome to Motor Monitoring System</p>
        <p className="Sign-in-Text">Sign up to Start Monitoring your Motor</p>
        </div>
      <div className="signup-container">
      <input type="email" className="signup-input" placeholder="Insert email address"/>
      <button type="submit" className="signup-button"><Link className="Link-No-underline" to={'/register'}>Sign Up</Link></button>
      </div>
    </>
  );
}
