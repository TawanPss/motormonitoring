import { useState } from "react";
import './LoginAndReg.css';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        alert(email + password)
    }

    return(
        <>
        <div className="container">
            <h2>Sign in</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputContainner">
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="bottomForm">
                <button type='submit'>Login</button>
                <div className='links'>
                    <p>Forgot Password</p>
                    <p>I don't have an account? Signup</p>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}

