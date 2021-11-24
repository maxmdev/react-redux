import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";
import {autocompleteReducer} from "./autocompleteReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    autocomplete: autocompleteReducer
})