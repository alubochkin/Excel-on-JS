"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Excel = void 0;

var _Dom = require("@core/Dom");

var _Emitter = require("../../core/Emitter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Excel =
/*#__PURE__*/
function () {
  function Excel(selector, options) {
    _classCallCheck(this, Excel);

    this.$el = (0, _Dom.$)(selector);
    this.components = options.components || [];
    this.emitter = new _Emitter.Emitter();
  }

  _createClass(Excel, [{
    key: "getRoot",
    value: function getRoot() {
      var $root = _Dom.$.create('div', 'excel');

      var componentOPTIONS = {
        emitter: this.emitter
      };
      this.components = this.components.map(function (Component) {
        var $el = _Dom.$.create('div', Component.className);

        var component = new Component($el, componentOPTIONS);
        $el.html(component.toHTML());
        $root.append($el);
        return component;
      });
      return $root;
    }
  }, {
    key: "render",
    value: function render() {
      this.$el.append(this.getRoot());
      this.components.forEach(function (component) {
        return component.init();
      });
    }
  }]);

  return Excel;
}();

exports.Excel = Excel;