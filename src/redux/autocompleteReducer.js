import {FETCH_SUGGESTIONS, HIDE_SUGGESTIONS, RESET_AUTOCOMPLETE, SELECT_SUGGESTION, SHOW_SUGGESTIONS} from "./types";

const initialState = {
    displaySuggestions: false,
    isSelected: false,
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
        case SELECT_SUGGESTION:
            return { ...state, suggestions: [], isSelected: true }
        case RESET_AUTOCOMPLETE:
            return { ...state, displaySuggestions: false, isSelected: false }
        default: return state
    }
}

