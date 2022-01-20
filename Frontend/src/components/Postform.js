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

  function handleSubmit(event) {
    event.preventDefault();
    const filled = false;
    if (formData.postTitle !== "" && formData.postDescription !== "" && formData.postImg !== "")
    {
      filled = true
    }

    if(filled === true)
    {
      console.log(formData)
      fetch("api", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    } else {
      alert("Please enter information in the fields!")
    }
  }

  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="button">
        <button onClick={() => setShow(!show)}>
          {show ? "Cancel" : "Add Post"}
        </button>
      </div>
      {show && (
        <form className="Postform" onSubmit={handleSubmit}>
          Title
          <input
            type="text"
            name="postTitle"
            onChange={handleChange}
            value={formData.postTitle}
            placeholder="Title"
          />
          Description
          <textarea
            className="inputtextarea"
            type="textarea"
            name="postDescription"
            onChange={handleChange}
            value={formData.postDescription}
            placeholder="Tell use about your experience!"
          />
          Image
          <input
            type="text"
            name="postImg"
            onChange={handleChange}
            value={formData.postImg}
            placeholder="Paste image url"
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
