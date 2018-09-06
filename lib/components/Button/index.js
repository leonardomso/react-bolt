"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-radius: ", ";\n    border: ", ";\n    margin-top: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.bgColor || '#fe0000';
}, function (props) {
  return props.color || 'white';
}, function (props) {
  return props.borderRadius;
}, function (props) {
  return props.border;
}, function (props) {
  return props.marginTop || '0';
});

var _default = Button;
exports.default = _default;