"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.listeners = {};
  }

  _createClass(Emitter, [{
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!Array.isArray(this.listeners[event])) {
        return false;
      }

      this.listeners[event].forEach(function (listener) {
        listener.apply(void 0, args);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(event, fn) {
      var _this = this;

      this.listeners[event] = this.listeners[event] || [];
      this.listeners[event].push(fn);
      return function () {
        _this.listeners[event] = _this.listeners[event].filter(function (listner) {
          return listner !== fn;
        });
      };
    }
  }]);

  return Emitter;
}();

exports.Emitter = Emitter;