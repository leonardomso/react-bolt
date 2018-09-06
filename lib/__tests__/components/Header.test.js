"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _App = _interopRequireDefault(require("../../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {
  test('Rendering the simple component', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_App.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});