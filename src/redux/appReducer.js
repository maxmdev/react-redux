import {CHANGE_THEME, HIDE_LOADER, SHOW_LOADER} from "./types";

const initialState = {
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true}
        case HIDE_LOADER:
            return { ...state, loading: false}
        case CHANGE_THEME:
            return { ...state, changeTheme: !state.changeTheme}
        default: return state
    }
}