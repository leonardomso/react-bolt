import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/";

const middleware = applyMiddleware(logger);

const store = createStore(
    rootReducer,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
