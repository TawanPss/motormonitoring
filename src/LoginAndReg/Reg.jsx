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
                <button type='submit'>Sign up</button>
                <div className='links'>
                    <p>I already have an account.Sign in</p>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}

