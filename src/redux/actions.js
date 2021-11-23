import {CHANGE_THEME, CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const jsonData = await response.json()
        dispatch(hideLoader())
        dispatch({ type: FETCH_POSTS, payload: jsonData })
    }
}

export function changeTheme() {
    return {
        type: CHANGE_THEME
    }
}