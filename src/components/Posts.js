import React from "react";
import {connect} from "react-redux";
import Post from "./Post";

const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return (
            <span className='text-center'> No posts yet. </span>
        )
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);