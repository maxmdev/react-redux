import {FETCH_SUGGESTIONS, HIDE_SUGGESTIONS, SHOW_SUGGESTIONS} from "./types";

const initialState = {
    displaySuggestions: false,
    suggestions: []

}

export const autocompleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SUGGESTIONS:
            return { ...state, displaySuggestions: true }
        case HIDE_SUGGESTIONS:
            return { ...state, displaySuggestions: false, suggestions: [] }
        case FETCH_SUGGESTIONS:
            return { ...state, suggestions: action.payload }
        default: return state
    }
}

