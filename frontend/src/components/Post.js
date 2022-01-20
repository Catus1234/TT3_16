import React from 'react';

export default function Post(props) {
  return (
      <div className="post--container">
          <div className="post--imagecontainer">
            <img className="post--image" src={props.post.Post_image} />
          </div>
          <div className="post--innertext">
            <h2 className="post--title">{props.post.Post_Title}</h2>
            <h4 className="post--description">{props.post.Post_Description}</h4>
          </div>
          
      </div>
  )
}
