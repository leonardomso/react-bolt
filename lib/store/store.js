"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("../reducers/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk.default, _reduxLogger.default);
var store = (0, _redux.createStore)(_reducers.default, (0, _redux.compose)(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
var _default = store;
exports.default = _default;