import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import Post from "./Post";
import {Loader} from "./Loader";

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const isLoading = useSelector(state => state.app.loading);

    if(isLoading) {
        return (
            <Loader/>
        )
    }

    if(!posts.length) {
        return (
            <button
                onClick={() => dispatch(fetchPosts())}
                className='btn btn-primary'>Load</button>
        )
    }

    return posts.map(post => <Post post={post} key={post.id} />)
}