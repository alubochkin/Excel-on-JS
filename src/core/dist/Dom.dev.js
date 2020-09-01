"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom =
/*#__PURE__*/
function () {
  function Dom(selector) {
    _classCallCheck(this, Dom);

    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  _createClass(Dom, [{
    key: "html",
    value: function html(_html) {
      if (typeof _html === 'string') {
        this.$el.innerHTML = _html;
        return this;
      }

      return this.$el.outerHTML.trim();
    }
  }, {
    key: "text",
    value: function text(_text) {
      this.$el.textContent = _text;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.html('');
      return this;
    }
  }, {
    key: "on",
    value: function on(eventType, callback) {
      this.$el.addEventListener(eventType, callback);
    }
  }, {
    key: "off",
    value: function off(eventType, callback) {
      this.$el.removeEventListener(eventType, callback);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return $(this.$el.querySelector(selector));
    }
  }, {
    key: "append",
    value: function append(node) {
      if (node instanceof Dom) {
        node = node.$el;
      }

      if (Element.prototype.append) {
        this.$el.append(node);
      } else {
        this.$el.appendChild(node);
      }

      return this;
    }
  }, {
    key: "closest",
    value: function closest(selector) {
      return $(this.$el.closest(selector));
    }
  }, {
    key: "getCoords",
    value: function getCoords() {
      return this.$el.getBoundingClientRect();
    }
  }, {
    key: "findAll",
    value: function findAll(selector) {
      return this.$el.querySelectorAll(selector);
    }
  }, {
    key: "css",
    value: function css() {
      var _this = this;

      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.keys(styles).forEach(function (key) {
        _this.$el.style[key] = styles[key];
      });
    }
  }, {
    key: "id",
    value: function id(parse) {
      if (parse) {
        var parsed = this.id().split(':');
        return {
          row: +parsed[0],
          col: +parsed[1]
        };
      }

      return this.data.id;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.$el.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.$el.classList.remove(className);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.$el.focus();
      return this;
    }
  }, {
    key: "data",
    get: function get() {
      return this.$el.dataset;
    }
  }]);

  return Dom;
}();

function $(selector) {
  return new Dom(selector);
}

$.create = function (tagName) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};