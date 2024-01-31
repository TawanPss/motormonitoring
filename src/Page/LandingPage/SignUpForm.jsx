import "./SignUpForm.css"
export default function SignupForm() {
  return (
    <>
      <div className="label-signup">Welcome .</div>
      <div className="signup-container">
      <input type="email" className="signup-input" placeholder="Insert email address"/>
      <button type="submit" className="signup-button">SIGN UP</button>
      </div>
    </>
  );
}
