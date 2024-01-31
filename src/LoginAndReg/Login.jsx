import React, { useEffect, useState } from 'react';
import './LoginAndReg.css';
import { Link  , useNavigate} from 'react-router-dom';


export default function Login() {
    const navigate =useNavigate()
    

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        
        alert(email + password)
        navigate("/home")
        console.log(data.message)
    }

    useEffect(() => {
    fetch('http://127.0.0.1:8000')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
    //   console.log(data.message)
    }, []);

    return(
        <>
        <div className="container">
            <h1>{data.message}</h1>
            <h2 className="component-header">Sign in</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputContainner">
                <input className="input-form" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input className="input-form" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="bottomForm">
                <button className="submit-button" type='submit'>Login</button>
                <div className='links'>
                    <p>Forgot Password</p>
                    <p>I don't have an account?</p>
                    <Link to={'/register'}>Register</Link>
                </div>
            </div>
            </form>
        </div>
        
        </>
    )
}

