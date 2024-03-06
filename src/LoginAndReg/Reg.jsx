import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/register", {
                username,
                email,
                password,
            });
            console.log(response.data); 
        } catch (error) {
            console.error("Registration failed:", error.response.data);
            setError("Registration failed. Please try again."); 
        }
    };

    return (
        <div className="container">
            <h2 className="component-header">Sign up</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="inputContainner">
                    <input
                        className="input-form"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="inputContainner">
                    <input
                        className="input-form"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="inputContainner">
                    <input
                        className="input-form"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </div>
                <div className="bottomForm">
                    <button className="submit-button" type="submit">
                        Sign up
                    </button>
                    <div className="links">
                        <p>I already have an account.</p>
                        <Link to={"/sign-in"}>Sign In</Link>
                    </div>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
        </div>
    );
}
