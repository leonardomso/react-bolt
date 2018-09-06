"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _store = _interopRequireDefault(require("./store/store"));

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    html {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        font-size: 16px;\n    }\n\n    *,\n    *:before,\n    *:after {\n        -webkit-box-sizing: inherit;\n        box-sizing: inherit;\n    }\n\n    body,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    ol,\n    ul {\n        margin: 0;\n        padding: 0;\n        font-weight: normal;\n    }\n\n    ol,\n    ul {\n        list-style: none;\n    }\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject());

_reactDom.default.render(_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_app.default, null))), document.getElementById('root'));