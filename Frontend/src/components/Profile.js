import React, { useState } from 'react';
import Post from './Post';
import Postform from './Postform';
import Navbar from './Navbar'

export default function Profile() {

  const [posts, setPost] = React.useState([{
    "Post_ID": 1,
    "User_ID": 1,
    "Post_Title": "Relatable",
    "Post_Description": "Walking up and down the aisles for what seems like hours.",
    "Post_image": "https://preview.redd.it/jjvqtw9iapb81.gif?format=mp4&s=e333e78478df813b5b18ecd0905efc8b00ae210c"
  },
  {
    "Post_ID": 2,
    "User_ID": 1,
    "Post_Title": "New Job",
    "Post_Description": "Just finished my first week",
    "Post_image": "https://preview.redd.it/op4nak4pvpb81.jpg?width=640&crop=smart&auto=webp&s=615dce736df9a82ae1e2136727e440a863a1ffbe"
  },
  {
    "Post_ID": 3,
    "User_ID": 2,
    "Post_Title": "New Friend",
    "Post_Description": "Happy times",
    "Post_image": "https://preview.redd.it/21ghjyhnjmb81.gif?width=960&format=mp4&s=69ae3f05ee59793703165d1b726159dcc1205f1f"
  },
  {
    "Post_ID": 4,
    "User_ID": 2,
    "Post_Title": "Gameboy",
    "Post_Description": "Hello old friend",
    "Post_image": "https://i.redd.it/in0kdzuienb81.jpg"
  },
  {
    "Post_ID": 5,
    "User_ID": 2,
    "Post_Title": "Dinosaur",
    "Post_Description": "Sweet dreams about your loved ones",
    "Post_image": "https://preview.redd.it/rwtgu96btqb81.jpg?width=960&crop=smart&auto=webp&s=13b18d9fb9355b81349568a124955458f0f8d2e3"
  }])

  const userID = 1


  let userPosts = posts.filter(function (post) {
    return post.User_ID === userID;
  });

  console.log(userPosts);

  const postElements = userPosts.map(post => {
      return (
        <>
          <Post key={post.User_ID} post={post}/>
        </>
      )
  })

  //use effect to get all post when loaded
  React.useEffect(async ()=> {
    try{
      const res = await fetch("http://127.0.0.1:5000/")
      const data = await res.json()
      //setPosts(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <div className="homepage--container">
      <Navbar />
      <div className='main--container'>
        <h3>My Posts</h3>
        <hr />
        {postElements}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
