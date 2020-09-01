"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExcelComponent = void 0;

var _DomListener2 = require("@core/DomListener");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ExcelComponent =
/*#__PURE__*/
function (_DomListener) {
  _inherits(ExcelComponent, _DomListener);

  function ExcelComponent($root) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ExcelComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExcelComponent).call(this, $root, options.listeners));
    _this.name = options.name || '';

    _this.prepair();

    _this.emitter = options.emitter;
    return _this;
  }

  _createClass(ExcelComponent, [{
    key: "toHTML",
    value: function toHTML() {
      return '';
    }
  }, {
    key: "prepair",
    value: function prepair() {}
  }, {
    key: "init",
    value: function init() {
      this.initDomListeners();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeDomListeners();
    }
  }]);

  return ExcelComponent;
}(_DomListener2.DomListener);

exports.ExcelComponent = ExcelComponent;