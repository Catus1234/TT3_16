import React, { useState } from 'react';

export default function Post(props) {

  const [showUpdateForm, toggleUpdate] = useState(false)

  const setting = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
    <circle cx="12" cy="12" r="3" />
  </svg>

  const menu = <div className='dropdown'>
    <div>Delete Post</div>
    <div onClick={(e) => toggleUpdate(true)}>Update Post</div>
  </div>

  function updatePost() {
    toggleUpdate(false)
  }

  return (
    <div className="post--container">
      {showUpdateForm ?
        <div></div> :
        <div className="post--imagecontainer">
          <img className="post--image" src={props.post.Post_image} /></div>}
      {showUpdateForm ? <div className="post--innertext">
        <label><strong>Post Title: </strong></label><input className="post--update-post-input" type="text" value={props.post.Post_Title}></input>
        <label><strong>Post Description:</strong> </label><textarea className="post--update-post-textarea" type="text">{props.post.Post_Description}</textarea>
        <label><strong>Image URL:</strong> </label><input className="post--update-post-input" type="text" value={props.post.Post_image}></input>
        <button className="post--update-post-button" onClick={updatePost}>Update</button>
      </div> : <div className="post--innertext">
        <h2 className="post--title">{props.post.Post_Title}</h2>
        <h4 className="post--description">{props.post.Post_Description}</h4>
      </div>
      }
      {showUpdateForm ? <div></div> : <div className='post--setting'>
        {setting}
        {menu}
      </div>}

    </div>
  )
}
