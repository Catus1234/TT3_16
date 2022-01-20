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
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="button">
        <button onClick={() => setShow(!show)}>
          {show ? "Cancel" : "Add Post"}
        </button>
      </div>
      {show && (
        <form className="Postform">
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
          />
          Image
          <input
            type="text"
            name="postImg"
            onChange={handleChange}
            value={formData.postImg}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
