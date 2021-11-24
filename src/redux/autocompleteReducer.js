import {FETCH_SUGGESTIONS, HIDE_SUGGESTIONS, SHOW_SUGGESTIONS} from "./types";

const initialState = {
    showSuggestions: false,
    suggestions: []

}

export const autocompleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SUGGESTIONS:
            return { ...state, showSuggestions: true }
        case HIDE_SUGGESTIONS:
            return { ...state, showSuggestions: false, suggestions: action.payload }
        case FETCH_SUGGESTIONS:
            return { ...state, suggestions: action.payload }
        default: return state
    }
}

