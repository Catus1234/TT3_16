import React, { useState } from "react";

export default function Postform(){
    const[formData ,setFormData] = useState({
        postTitle: "",
        postDescription: "",
        postImg: ""
    }
    )
 
    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevform => ({
            ...prevform,
            [name]: value
        }))
    }

    return(
        <div>
        <form>
        <label>
            <input type = "text" name ="Title of your post" handleChange={handleChange}/> 
            <input type = "textarea" name ="Write your post"/> 
            <input type = "image" name = "Upload image"/>
            </label>
            <button type = "submit">Submit</button>
        </form>
        </div>
    )
}