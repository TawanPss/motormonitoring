import { useState } from "react";
import './LoginAndReg.css';



export default function Register() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        alert(email + password)
    }

    const handleRegister = () => {
        const user = { username: username, email: email, passwd: password }; // User data to be sent to the server
        
        fetch(`/api/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('User registered successfully:', data);
            // Handle success or navigate to another page
          })
          .catch((error) => {
            console.error('Error registering user:', error);
            // Handle error or display an error message to the user
          });
      };

    return(
        <>
        <div className="container">
            <h2>Sign up</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputContainner">
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="bottomForm">
                <button onClick={handleRegister}>Register</button>
                <div className='links'>
                    <p>I already have an account.Sign in</p>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}

