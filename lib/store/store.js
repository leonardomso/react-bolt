"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _redux = require("redux");

var _reducers = require("../reducers/");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxLogger2.default);

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

exports.default = store;