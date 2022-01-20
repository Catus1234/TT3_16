import React, { useState } from "react";
import './css/login.css';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function validateLogin(){
        console.log(email, password)
    }
   

    return (
        <div className="login-container">
            <h1 className="login-form-header">Login</h1>
            <form>
                <div className="form-row">
                    <div className="login-form-label">Email</div>
                    <input type="email" placeholder="Enter your email" className="login-input-field"
                    autoComplete="off" onChange={(e) => setEmail(e.target.value)} required ></input>
                </div>
                <div className="form-row">
                    <div className="login-form-label">Password</div>
                    <input type="password" placeholder="Enter your password" className="login-input-field" autoComplete="off" 
                    onChange={(e) => setPassword(e.target.value)} required ></input><br></br>
                </div>
                <button type="button" className="login-submit-button" onClick={validateLogin}>Submit</button>
            </form>

        </div>

    );
}

export default Login;