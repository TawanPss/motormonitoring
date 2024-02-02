import React,{ useState, useEffect } from "react";
import './LoginAndReg.css';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogin } from "../components/Api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage, setErrMessage] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        // alert(email + password)
    }

    const clickLogin = async() => {
        const result = await handleLogin(email, password, errorMessage);
        if(result.success){
            navigate("/dashboard");
        }else {
            // Handle login failure
            console.log("Failed to login.")
            // setErrMessage(result.error.message || 'Login failed');
        }
    }

    useEffect(() => {
    fetch(`/api/api`)
        .then((res) => res.json())
        .then((mes) => setMessage(mes))
        .catch((err) => console.error("Error fetching message:", err));
    }, []);

    return(
        <>
        <div className="container">
            <h1>{message.message}</h1>
            <h2>Sign in</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputContainner">
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="bottomForm">
                <button onClick={clickLogin}>Login</button>
                <div className='links'>
                    <p>Forgot Password</p>
                    <p>I don't have an account? </p>
                    <Link to={"/register"}>Signup</Link>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}