// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
//import Post from ""
import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
console.log('parent props', props)
const [Likes, setLikes] = useState(props.post.likes)

const addLikes = e => {
  setLikes(Likes => Likes + 1)
}
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
          onClick={addLikes}/>
      </div>
      <LikeSection 
      
      addLikes ={addLikes}
      likes = {Likes}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
