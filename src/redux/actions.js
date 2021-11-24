import {
    CHANGE_THEME,
    CREATE_POST,
    FETCH_POSTS, FETCH_SUGGESTIONS, HIDE_ALERT,
    HIDE_LOADER,
    HIDE_SUGGESTIONS, SHOW_ALERT,
    SHOW_LOADER,
    SHOW_SUGGESTIONS
} from "./types";

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

export function fetchSuggestions(input) {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const jsonData = await response.json();
        const suggestions = jsonData.filter(item => {
            return item.title.includes(input);
        });

        if (suggestions.length > 0) {
            dispatch({type: FETCH_SUGGESTIONS, payload: suggestions});
            dispatch({type: SHOW_SUGGESTIONS})
        }
    }
}

export function showSuggestions() {
    return {
        type: SHOW_SUGGESTIONS
    }
}

export function hideSuggestions() {
    return {
        type: HIDE_SUGGESTIONS,
        payload: []
    }
}

export function showAlert(alertMessage) {
    return dispatch => {
        dispatch({type: SHOW_ALERT, payload: alertMessage});
        setTimeout(() => {
            dispatch(hideAlert());
        }, 2000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}