import React, { useState } from "react";

export default function Postform() {
  const [formData, setFormData] = useState({
    postTitle: "",
    postDescription: "",
    postImg: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevform) => ({
      ...prevform,
      [name]: value,
    }));
  }

  function handleSubmit() {}

  return (
    <div>
      <form className="Postform">
        <label>
          <p> Title:</p>
          <input
            type="text"
            name="postTitle"
            onChange={handleChange}
            value={formData.postTitle}
          />
          <p>Description:</p>
          <input
            className="inputtextarea"
            type="textarea"
            name="postDescription"
            onChange={handleChange}
            value={formData.postDescription}
          />
          <p>Image:</p>
          <input
            type="textarea"
            name="postImg"
            onChange={handleChange}
            value={formData.postImg}
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
