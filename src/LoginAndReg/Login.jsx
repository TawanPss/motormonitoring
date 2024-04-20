import React, { useEffect, useState, useContext } from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import { UserContext } from '../App';
import './LoginAndReg.css';


export default function Login() {
    const navigate =useNavigate()
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [data, setData] = useState([]);
    const userRole = useContext(UserContext);
    const endpoint = `api/users/login`;
    const reqOption = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            passwd: password
        })
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        const res = await fetch(endpoint, reqOption);
        if(res.ok){
            // console.log(res.data);
            if(userRole == "customer"){
                navigate("/all-motors");
            }
            if(userRole == "admin"){
                navigate("/admin-all-motors");
            }
        }
    
    }

    useEffect(() => {
    fetch(`api/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
    //   console.log(data.message)
    }, []);

    return(
        <>
        <div className="container">
            {/* <h1>{data.message}</h1> */}
            <h2 className="component-header">Sign in</h2>
            <form onSubmit={(e) => handleSubmit(e)} className='loginForm'>
                <div className='inputContainner'>
                    <input className="Login-Page-input-form" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                    <input className="Login-Page-input-form" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <div className='links'>
                    <button className="Login-Page-submit-button" type='submit'>Login</button>
                    <p>Forgot Password</p>
                    <p>I don't have an account? <Link to={'/register'}>Register</Link></p>
                </div>
            </form>
        </div>
        
        </>
    )
}

