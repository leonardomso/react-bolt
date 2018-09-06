"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = _interopRequireDefault(require("./button/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.5em;\n    text-align: center;\n    color: white;\n    font-family: sans-serif;\n    margin-top: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n    background: black;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.section(_templateObject());

var SubTitle = _styledComponents.default.h1(_templateObject2(), function (props) {
  return props.marginTop || '0';
});

var App = function App() {
  return _react.default.createElement(Wrapper, null, _react.default.createElement(SubTitle, null, "Thanks for downloading the boilerplate!"), _react.default.createElement(SubTitle, {
    marginTop: "20px"
  }, "Feel free to contribute."), _react.default.createElement(_button.default, {
    width: "110px",
    height: "40px",
    border: "none",
    borderRadius: "30px",
    marginTop: "20px"
  }, "Thanks"));
};

var _default = App;
exports.default = _default;