import { useState } from "react";
import './LoginAndReg.css';
import { Link } from "react-router-dom";
import { handleRegister } from "../components/Api";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username, setUsername] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        alert(email + password)
    }

    const clickRegister = () => {
        handleRegister(username, email, password);
    }

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
                <button onClick={clickRegister}>Sign up</button>
                <div className='links'>
                    <p>I already have an account.</p>
                    <Link to={"/login"}>Sign in</Link>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}

