import { useState } from "react";
import './LoginAndReg.css';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
<<<<<<< Updated upstream
    
=======
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
>>>>>>> Stashed changes

    const handleSubmit = (e) => {
        e.preventDefault();
        //////////////// Run Login Api Here ///////////////
<<<<<<< Updated upstream
        alert(email + password)
    }

    return(
        <>
        <div className="container">
=======
        alert(email + password )
        console.log(data.message)
    }

    const handleLogin = () => {
      const formData = { email: email, passwd: password };
      fetch(`/api/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('User Logged in successfully:', data);
            // Handle success or navigate to another page
          })
        .catch((error) => {
            console.error('Error logging in user:', error);
            // Handle error or display an error message to the user
          });
    };
    
    useEffect(() => {
        fetch(`/api`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
        //   console.log(data.message)
    }, []);

    return(
        <>
          <div className="container">
            <h1>{data.message}</h1>
>>>>>>> Stashed changes
            <h2>Sign in</h2>
            {/* <form onSubmit={(e) => handleSubmit(e)}> */}
            <div className="inputContainner">
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
            <div className="inputContainner">
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="bottomForm">
                <button onClick={handleLogin}>Login</button>
                <div className='links'>
                    <p>Forgot Password</p>
                    <p>I don't have an account? Signup</p>
                </div>
            </div>
            {/* </form> */}
        </div>
        
        </>
    )
}

