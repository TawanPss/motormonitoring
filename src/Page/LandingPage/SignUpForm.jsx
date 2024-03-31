import "./SignUpForm.css"
export default function SignupForm() {
  return (
    <>
      <div className="label-signup">
        <p>Welcome to Motor Monitoring System</p>
        <p className="Sign-in-Text">Sign up to Start Monitoring your Motor</p>
        </div>
      <div className="signup-container">
      <input type="email" className="signup-input" placeholder="Insert email address"/>
      <button type="submit" className="signup-button">SIGN UP</button>
      </div>
    </>
  );
}
