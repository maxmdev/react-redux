import React from "react";
import Post from "./Post";

export default ({posts}) => {
    if(!posts.length) {
        return (
            <span className='text-center'> No posts yet. </span>
        )
    }
    return posts.map(post => <Post post={post} key={post} />)
}