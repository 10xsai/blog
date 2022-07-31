import "../../static/assets/css/blogpost.css";
import React from "react";
import { useParams } from "react-router-dom";
import getPost from "../helpers";
import Post1  from "../blogposts/learn_basic_github_commands";
import Post2 from "../blogposts/free_programming_courses_for_beginners.jsx";

const BlogPost = () => {
  const postId = Number(useParams().postId);
  const filename = getPost(Number(postId)).filename;
  const filepath = "../blogposts/"+filename;
  console.log(filepath);
  
  switch (postId) {
    case 1:
      return (<Post1/>);  
    case 2:
      return (<Post2/>)
    default:
      break;
  }
  
  return (
    <div>

    </div>
    // <React.Suspense fallback={<p>Loading</p>}>
    //   <Post></Post>
    // </React.Suspense>
  )
}

export default BlogPost;