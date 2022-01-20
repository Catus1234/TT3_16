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
        "https://preview.redd.it/jjvqtw9iapb81.gif?format=mp4&s=e333e78478df813b5b18ecd0905efc8b00ae210c",
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
        "https://preview.redd.it/21ghjyhnjmb81.gif?width=960&format=mp4&s=69ae3f05ee59793703165d1b726159dcc1205f1f",
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
        <Post post={post} />
      </>
    );
  });
  return (
    <div className="main--container">
      <Navbar />
      <h3>Share your story!</h3>
      <hr />
      <Postform />
      <h3>See what people are up to!</h3>
      <hr />
      {postElements}
    </div>
  );
}
