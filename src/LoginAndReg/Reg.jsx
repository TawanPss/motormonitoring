import { useState } from "react";
import { Link } from "react-router-dom";
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

    return(
        <>
        <div className="container">
            <h2 className="component-header">Sign up</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputContainner">
                <input className="input-form" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input className="input-form" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input className="input-form" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="bottomForm">
                <button className="submit-button" type='submit'>Sign up</button>
                <div className='links'>
                    <p>I already have an account.</p>
                    <Link to={'/sign-in'}>Sign In</Link>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}

