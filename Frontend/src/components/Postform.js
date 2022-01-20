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

    function handleSubmit(){
        
    }

    return(
        <div>
        <form>
        <label>
            <input type = "text" name ="postTitle" onChange={handleChange} value={formData.postTitle}/> 
            <input type = "textarea" name ="postDescription" onChange={handleChange} value={formData.postDescription}/> 
            <input type = "image" name = "postImg" onChange={handleChange} value={formData.postImg}/>
            </label>
            <button type = "submit">Submit</button>
        </form>
        </div>
    )
}