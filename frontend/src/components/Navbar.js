import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Navbar() {

    let navigate = useNavigate();

    return (
        <nav>
            <div className="navbar--container">
                <h2 className="navbar--proj">DBS SEED</h2>
                <h3 className="navbar--home" onClick={() => {navigate("/home")}}>Home</h3>
                <h3 className="navbar--profile" onClick={() => {navigate("/profile")}}>Profile</h3>
                <h3 className="navbar--logout" onClick={() => {navigate("/")}}>Logout</h3>
            </div>
        </nav>
        
    )
}