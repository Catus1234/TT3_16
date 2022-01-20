import { useState } from "react";

export const Postform = () => {
    const(form,setForm) = useState()
 
 return 
    <div>
        <form>
          <label>
            <input type = "text" name ="Title of your post"/> 
             <input type = "textarea" name ="Write your post"/> 
             <input type = "image" name = "Upload image"/>
            </label>
            <button type = "submit">Submit</button>
        </form>
    </div>
};

export default Postform