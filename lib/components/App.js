'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    background-image: url(', ');\n    width: 1000px;\n    height: 300px;\n'], ['\n    background-image: url(', ');\n    width: 1000px;\n    height: 300px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 1.5em;\n    text-align: center;\n    color: white;\n'], ['\n    font-size: 1.5em;\n    text-align: center;\n    color: white;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 4em;\n    background: black;\n'], ['\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 4em;\n    background: black;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _starboyblogo = require('../images/starboyblogo.png');

var _starboyblogo2 = _interopRequireDefault(_starboyblogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject, _starboyblogo2.default);

var SubTitle = _styledComponents2.default.h1(_templateObject2);

var Wrapper = _styledComponents2.default.section(_templateObject3);

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Wrapper,
                null,
                _react2.default.createElement(Header, null)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;