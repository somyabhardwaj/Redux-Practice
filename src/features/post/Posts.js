
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'


function Posts() {
    const posts = useSelector(selectAllPosts);
  

    if (!posts) {
      return <div>Loading...</div>;
    }
  
    const renderedPosts = posts.map((post) => (
      <article style={{border:"2px solid white", margin:"10%" , textAlign:"center"}} key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    ));
  
    return <div>{renderedPosts}</div>;
  }
  

export default Posts
