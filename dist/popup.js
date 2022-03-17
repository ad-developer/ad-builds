var ad = typeof ad === "object" ? ad : {}; ad["popup"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/popup/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/popup/popup.js":
/*!*********************************!*\
  !*** ./packages/popup/popup.js ***!
  \*********************************/
/*! exports provided: default, ADPopUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ADPopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADPopUp", function() { return ADPopUp; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* const cssClasses = {}; */
//import ADComponent from '../base/component';
var strings = {
  INSTANCE_KEY: 'ad-pupup',
  ANCOR: 'ad-popup-ancor',
  TARGET: 'ad-popup-target',
  OPEN: 'ad-popup--open'
};
/** ADPopUp class. */

var ADPopUp = /*#__PURE__*/function (_ad$component$ADCompo) {
  _inherits(ADPopUp, _ad$component$ADCompo);

  var _super = _createSuper(ADPopUp);

  function ADPopUp() {
    _classCallCheck(this, ADPopUp);

    return _super.apply(this, arguments);
  }

  _createClass(ADPopUp, [{
    key: "init",

    /**
       * @param {...?} args
       *  *  Setting bject optional
       *  {
       *    top = 99, // top position
       *    left = 99  // left posiion
       *    template: '' html template of the popup window (optional)
       *    keepOpened: keep window opened 
       *  }
       */
    value: function init() {
      var $this = this;
      var settings;

      if (arguments.length > 0) {
        settings = arguments.length <= 0 ? undefined : arguments[0];
        $this.top_ = settings.top;
        $this.left_ = settings.left;
        $this.template_ = settings.template;
        $this.keepOpened_ = settings.keepOpened;
      }

      var popup = null;

      if (settings && settings.template) {
        // Set specified popup window
        popup = $this.setTemplate_(settings.template); // Insert popup right after the root element 

        $this.root_.insertAdjacentElement('afterend', popup);
      } else {
        // Find popup window on the page
        var target = $this.root_.getAttribute(strings.ANCOR);
        popup = document.querySelector("[".concat(strings.TARGET, "=").concat(target, "]"));
      }

      $this.popup_ = popup; // Set specified position
      //if ($this.top_ && $this.left_) {
      //  $this.setPosition_($this.left_, $this.top_);
      //}

      $this.listen('click', function (e) {
        e.stopPropagation();
        $this.open();
      });
    }
    /**
    * @public
    * Close popup window
    */

  }, {
    key: "close",
    value: function close() {
      var _this = this;

      this.popup_.classList.remove(strings.OPEN);

      if (!this.keepOpened_) {
        document.body.removeEventListener('click', function (e) {
          _this.handleBodyClick_(e);
        });
      }
    }
    /**
       * @public
       * Open popup window
       */

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var pos = this.getPopupPosition_();
      this.setPosition_(pos.left, pos.top);
      this.popup_.classList.add(strings.OPEN);

      if (!this.keepOpened_) {
        document.body.addEventListener('click', function (e) {
          _this2.handleBodyClick_(e);
        });
      }
    }
    /**
        * @private
        * Get popup window position based on the ancor position
        * or specified position throug the settings
        */

  }, {
    key: "getPopupPosition_",
    value: function getPopupPosition_() {
      var top;
      var left;

      if (this.left_ && this.top_) {
        left = this.left_;
        top = this.top_;
      } else {
        // A threshold distance of 32px is expected
        // to be maintained between the tooltip and the viewport edge.
        var breaker = 32;

        if (this.breaker_) {
          breaker = this.breaker_;
        }

        var popup = this.popup_;
        var elRec = this.root_.getBoundingClientRect();
        var center = elRec.left + elRec.width / 2;
        left = center - popup.clientWidth / 2; // Left breaker

        if (left < breaker) {
          left = breaker;
        } // Right breaker


        var screenWidth = window.innerWidth;

        if (left + popup.clientWidth + breaker > screenWidth) {
          left = screenWidth - popup.clientWidth - breaker;
        }

        left = left;
        top = elRec.bottom + 8;
      }

      return {
        top: top,
        left: left
      };
    }
    /**
        * @private
        * @param {!number} top - position
        * @param {!number} left - position
        */

  }, {
    key: "setPosition_",
    value: function setPosition_(left, top) {
      this.popup_.style.left = left + 'px';
      this.popup_.style.top = top + 'px';
    }
    /**
     * @private
     * @param {!string} template - html template
     */

  }, {
    key: "setTemplate_",
    value: function setTemplate_(template) {
      template = this.createElement(template);
      return template;
    }
    /**
     * @private
     * @param {!Event} ev - event
     */

  }, {
    key: "handleBodyClick_",
    value: function handleBodyClick_(ev) {
      if (this.isElementConrainer_(ev.target)) {
        return;
      }

      this.close();
    }
    /**
    * @private
    * @param {!Element} element - html element
    */

  }, {
    key: "isElementConrainer_",
    value: function isElementConrainer_(element) {
      return this.popup_ === element || this.popup_.contains(element);
    }
  }], [{
    key: "attachTo",

    /**
       * @param {!Element} root
       * @return {!ADPopUp}
       */
    value: function attachTo(root) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Subclasses which extend ADPopUp should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element.
      var instance = _construct(ADPopUp, [root].concat(args)); // Attach instance to the root


      root.ad = root.ad || {};
      root.ad[strings.INSTANCE_KEY] = instance;
      return instance;
    }
    /**
       * @param {!Element} root
       * @return {!ADPopUp}
       */

  }, {
    key: "getInstance",
    value: function getInstance(root) {
      return root.ad && root.ad[strings.INSTANCE_KEY] ? root.ad[strings.INSTANCE_KEY] : null;
    }
  }]);

  return ADPopUp;
}(ad.component.ADComponent);




/***/ })

/******/ });