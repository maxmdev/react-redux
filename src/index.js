import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import {rootReducer} from "./redux/rootReducer";
import {filterSpamWords} from "./redux/middleware";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            thunk,
            filterSpamWords
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(
    app,
    document.getElementById('root')
);
