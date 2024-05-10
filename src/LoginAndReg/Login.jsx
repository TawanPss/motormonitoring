import React, { useEffect, useState, useContext } from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import { login } from '../component/APIs/UserAPIs';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../slicers/userSlice';
import { getCookie } from '../component/APIs/Cookie';
import { baseUrl } from '../component/APIs/ApiComponent';
import Swal from 'sweetalert2';
import './LoginAndReg.css';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
        if(isLoginFormEmpty(email, password)){
            Swal.fire({
                title: 'Field Empty!',
                text: 'Please fill email and password.',
                icon: "error",
                confirmButtonText: 'Okay'
            });
        }else{
            const body = {
                email: email,
                passwd: password
            }
            const reqOpt = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }
            // login(body)
            const endpoint = `${baseUrl}/users/login`;
            fetch(endpoint, reqOpt)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch(setUser(data.user))
                localStorage.setItem('token', data.token)
                if(data.user.role === "customer"){
                    navigate("/all-motors");
                }
                else if(data.user.role === "admin"){
                    navigate("/admin-all-motors");
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Login Failed!',
                    text: 'Please try again later.',
                    icon: "error",
                    confirmButtonText: 'Okay'
                });
            })
        }    
    }

    const isLoginFormEmpty = (email, password) => {
        if(email.trim() === "" || password.trim() === ""){
            return true;
        }
        return false;
    }

    // useEffect(() => {
    // fetch(`api/`)
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.error('Error fetching data:', error));
    // //   console.log(data.message)
    // }, []);

    return(
        <>
        <div className="container">
            {/* <h1>{data.message}</h1> */}
            <h2 className="component-header">Sign in</h2>
            <form onSubmit={(e) => handleSubmit(e)} className='loginForm'>
                <div className='inputContainner'>
                    <input className="Login-Page-input-form" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                    <input className="Login-Page-input-form" id='passwd' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <div className='links'>
                    <button className="Login-Page-submit-button" type='submit'>Login</button>
                    <p>Forgot Password</p>
                    <p>I don't have an account? <Link to={'/register'}>Sign Up</Link></p>
                </div>
            </form>
        </div>
        
        </>
    )
}