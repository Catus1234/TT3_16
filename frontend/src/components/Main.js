import React from "react";
import Post from "./Post";
import Postform from "./Postform";
import Navbar from "./Navbar";

export default function Main() {
  const [posts, setPost] = React.useState([
    {
      Post_ID: 1,
      Post_Title: "Relatable",
      Post_Description:
        "Walking up and down the aisles for what seems like hours.",
      Post_image:
        "https://i.redd.it/491l4somvtb81.jpg",
    },
    {
      Post_ID: 2,
      Post_Title: "New Job",
      Post_Description: "Just finished my first week",
      Post_image:
        "https://preview.redd.it/op4nak4pvpb81.jpg?width=640&crop=smart&auto=webp&s=615dce736df9a82ae1e2136727e440a863a1ffbe",
    },
    {
      Post_ID: 3,
      Post_Title: "New Friend",
      Post_Description: "Happy times",
      Post_image:
        "https://preview.redd.it/7m3h2v230qb81.jpg?width=640&crop=smart&auto=webp&s=9a6617330a192b1801c1af857233b28608d48b19",
    },
    {
      Post_ID: 4,
      Post_Title: "Gameboy",
      Post_Description: "Hello old friend",
      Post_image: "https://i.redd.it/in0kdzuienb81.jpg",
    },
    {
      Post_ID: 5,
      Post_Title: "Dinosaur",
      Post_Description: "Sweet dreams about your loved ones",
      Post_image:
        "https://preview.redd.it/rwtgu96btqb81.jpg?width=960&crop=smart&auto=webp&s=13b18d9fb9355b81349568a124955458f0f8d2e3",
    },
  ]);

  const postElements = posts.map((post) => {
    return (
      <>
        <Post post={post} hidden={true} key={post.Post_ID} />
      </>
    );
  });

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

      <div className="main--container">
        <h3 className='main--postpost'>Share your story!</h3>
        <Postform/>
        <h3 className='main--posts'>See what people are up to!</h3>
            {postElements}
      </div>
  );
}
