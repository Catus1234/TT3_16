import React, { useState } from "react";
import './css/login.css';
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [EmailErrorMessage, setEmailErrMessage] = useState("")
    const [PasswordErrorMessage, setPasswordErrMessage] = useState("")

    //validate the login input fields on the front end
    function validateLogin() {
        let errors = {};

        var emailStr = email + ""
        var emailRegEx = /\S+@\S+\.\S+/

        if (!email) {
            errors.email = "Email is required"
        } else if (!emailRegEx.test(emailStr)) {
            errors.email = "Please enter a valid email address"
        }

        if (!password) {
            errors.password = "Password is required"
        }

        setEmailErrMessage(errors.email)
        setPasswordErrMessage(errors.password)

        if (Object.keys(errors).length === 0) {
            handleLogin(email, password);
        }
    }

    //call the api for login
    async function handleLogin() {

        //send data to backend as name and password

        let data = {
            "email": email,
            "password": password,
        }

        let results = await fetch('USER.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            console.log(response)
            return response.json();
        })

        console.log(results)

        var userExists = false;
        var userID = "";
        for (var i = 0; i < results.length; ++i) {
            if (results[i].Email == email) {
                if (results[i].Password == password) {
                    userID = results[i].User_ID
                    localStorage.setItem("userID", userID)
                    navigate("/home")
                }
            } else {
                setPasswordErrMessage("Wrong email or password!")
            }
        }

        console.log(userID)
    }


    return (
        <div className="login-container">
            <h1 className="login-form-header">Login</h1>
            <form>
                <div className="form-row">
                    <div className="login-form-label">Email</div>
                    <input type="email" placeholder="Enter your email" className="login-input-field"
                        autoComplete="off" onChange={(e) => setEmail(e.target.value)} required ></input>
                    <div className="login-error-message">{EmailErrorMessage}</div>
                </div>
                <div className="form-row">
                    <div className="login-form-label">Password</div>
                    <input type="password" placeholder="Enter your password" className="login-input-field" autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)} required ></input><br></br>
                    <div className="login-error-message">{PasswordErrorMessage}</div>
                </div>
                <button type="button" className="login-submit-button" onClick={validateLogin}>Submit</button>
            </form>

        </div>

    );
}

export default Login;