var ad = typeof ad === "object" ? ad : {}; ad["form"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/form/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/form/form.js":
/*!*******************************!*\
  !*** ./packages/form/form.js ***!
  \*******************************/
/*! exports provided: default, ADForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ADForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADForm", function() { return ADForm; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* const cssClasses = {};*/
//import ADComponent from '../base/component';
var strings = {
  INSTANCE_KEY: 'ad-form',
  MULTISELECT_ATTR: 'ad-ms-default-text'
};
/** Class representing a base ADForm. */

var ADForm = /*#__PURE__*/function (_ad$component$ADCompo) {
  _inherits(ADForm, _ad$component$ADCompo);

  var _super = _createSuper(ADForm);

  function ADForm() {
    _classCallCheck(this, ADForm);

    return _super.apply(this, arguments);
  }

  _createClass(ADForm, [{
    key: "init",

    /**
     * @param {...?} args
     */
    value: function init() {
      var $this = this;
      var settings = arguments.length <= 0 ? undefined : arguments[0];
      var formMetaData = settings.formMetaData;

      if (formMetaData) {
        $this.build(formMetaData);
      }

      $this.controls_ = null;
      $this.createControlList_();
      $this.traceControls_(); // Init validator

      $this.validator_ = settings.validator($this.root_);
    }
    /**
     * 
     * @param {!Object} data. Data is a json based object in the 
     * key - value format
     * {
     *  name: 'John Smith',
     *  phoneNumber: '8888888888'
     * } 
     * The method will go over the all keys and try to find element fo the form 
     * with the matching ad-id. 
     */

  }, {
    key: "setData",
    value: function setData(data) {
      // Remove tracing to prevent firing 
      //form.change event 
      this.traceControls_(true);

      for (var key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          var value = data[key];
          var el = this.root_.querySelector("[ad-id=\"".concat(key, "\"]"));

          if (el) {
            var processed = flase; // Text area or ADRte

            if (el.tagName === 'TEXTAREA') {
              // See if ADRte is used 
              if (ad.ADRte) {
                // Try to get instance of the ADRte
                var inst = ad.ADRte.getInstance(el);

                if (inst) {
                  inst.set(value);
                  processed = true;
                }
              } // multiselect        

            } else if (el.hasAttribute(string.MULTISELECT_ATTR)) {
              var _inst = void 0;

              if (_inst = this.isMultislect_()) {
                _inst.selectedData(value);

                processed = true;
              } // Check box or radio button 

            } else if (this.isClickType_(el)) {
              el.checked = this.toBool_(value);
              processed = true; // Everything else     
            } else {
              if (el.nodeType === 'DIV' || el.nodeType === 'SPAN') {
                el.innerHTML = this.htmlDecript_(value);
                processed = true;
              }
            }

            if (!processed) {
              el.value = this.htmlDecript_(value);
            }

            if (el.nodeType === 'SELECT') {// TODO: This is a placeholder for 
              // potential change event trigger on the 
              // select control.
            }
          }
        }
      } // Set tracing 


      this.traceControls_(true);
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;

      if (this.validator_.isValid()) {
        var res = {};
        this.controls_.forEach(function (el) {
          var value;

          if (el.hasAttribute(string.MULTISELECT_ATTR)) {
            var inst;

            if (inst = _this.isMultislect_(el)) {
              value = inst.getSelectedData();
            }
          } else {
            value = el.getAttribute('ad-data');

            if (!value) {
              if (_this.isClickType_(el)) {
                value = _this.toInt_(el.checked);
              } else {
                value = el.value;
              }
            }
          }

          res[el.getAttribute('ad-id')] = _this.htmlEncript_(value);
        });
        return res;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      // Remove tracing to prevent firing 
      //form.change event 
      this.traceControls_(true);
      this.controls_.forEach(function (el) {
        var processed = false;
        var inst;

        if (el.hasAttribute(strings.MULTISELECT_ATTR)) {
          if (inst = _this2.isMultislect_(el)) {
            inst.clear();
            processed = true;
          }
        } else if (el.tagName === 'TEXTAREA') {
          if (inst = _this2.isRte_(el)) {
            inst.clear();
            processed = true;
          }
        } else if (el.tagName === 'SELECT') {
          _this2.clearSelect_(el);

          processed = true;
        } else if (inst = _this2.isClickType_(el)) {
          el.checked = false;
          processed = true;
        } else if (el.tagName === 'DIV' || el.tagName === 'SPAN') {
          el.innerHTML = '';
          processed = true;
        }

        if (!processed) {
          el.value = '';
        }
      }); // Set tracing 

      this.traceControls_(true); // Remove validator errors
      // this will be replaced by the validator 
      // api validarot.clearErrors(); 

      var errors = this.root_.querySelectorAll('.ad-error');
      errors.forEach(function (el) {
        el.classList.remove('ad-error');
      });
    }
    /**
     * 
     * @param {!Object} formMetaData is json based object.
     * {
     *  element: 'div',
     *  attributes: [{attribute: '', value":''],
     *  children: [
     *              {
     *               element: div, 
     *               attributes:, 
     *               children:[]
     *              }
     *  ],
     *  observe: {
     *              elementId; '', 
     *              event: '', 
     *              value: ''
     *  }
     * } 
     */

  }, {
    key: "build",
    value: function build(formMetaData) {
      throw 'Not implemented';
    }
    /**
     * @private
     * Creates control list. 
     */

  }, {
    key: "createControlList_",
    value: function createControlList_() {
      var controls = this.root_.querySelectorAll('[ad-id]');
      this.controls_ = controls;
    }
    /**
    * @private
    * @param {boolean} untrace - untrace(true)/trace(false) 
    */

  }, {
    key: "traceControls_",
    value: function traceControls_(untrace) {
      for (var _i = 0, el, eventType = 'blur'; el = this.controls_[_i++];) {
        if (el.nodeType === 'SELECT') {
          eventType = 'change';
        } else if (this.isClickType_(el)) {
          eventType = 'click';
        }

        if (untrace) {
          el.removeEventListener(eventType, this.traceControlHandler_);
        } else {
          el.addEventListener(eventType, this.traceControlHandler_);
        }
      }
    }
    /**
     * @private
     * @param {!Event} e - element event 
     */

  }, {
    key: "traceControlHandler_",
    value: function traceControlHandler_(e) {
      this.emit('form.change', {
        event: e
      });
    }
    /**
     * @private
     * @param {!Element} el 
     * @returns {boolean} 
     */

  }, {
    key: "isClickType_",
    value: function isClickType_(el) {
      var res = el.matches('[type="checkbox"]') || el.matches('[type="radio"]');
      return res;
    }
    /**
     * @private
     * @param {!string} value 
     * @returns {boolean}
     */

  }, {
    key: "toBool_",
    value: function toBool_(value) {
      value = parseInt(value);
      return !!value;
    }
  }, {
    key: "toInt_",
    value: function toInt_(value) {
      return value ? 1 : 0;
    }
    /**
     * @private
     * @param {Object} data 
     * @returns {string}
     */

  }, {
    key: "htmlDecript_",
    value: function htmlDecript_(data) {
      var res = data;

      if (data && typeof data === 'string') {
        res = data.replace(/&#39;/g, "'");
        res = data.replace(/&quot;/g, '"');
      }

      return res;
    }
    /**
     * @private
     * @param {Object} data 
     * @returns {string}
     */

  }, {
    key: "htmlEncript_",
    value: function htmlEncript_(data) {
      var res = data;

      if (data && typeof data === 'string') {
        res = data.replace(/'/g, '&#39;');
        res = data.replace(/"/g, '&quot;');
      }

      return res;
    }
  }, {
    key: "isMultislect_",
    value: function isMultislect_(el) {
      if (ad.ADMultiselect) {
        return el = ad.ADMultiselect.getInstance(el);
      }
    }
  }, {
    key: "isRte_",
    value: function isRte_(el) {
      if (ad.ADRte) {
        return el = ad.ADRte.getInstance(el);
      }
    }
  }, {
    key: "clearSelect_",
    value: function clearSelect_(el) {
      var options = el.querySelectorAll('options');

      for (var index = 0, l = options.length; index < l; index++) {
        options[i].selected = options[i].defaultSelected;
      }
    }
  }], [{
    key: "attachTo",

    /**
     * @param {!Element} root
     * @return {!ADForm}
     */
    value: function attachTo(root) {
      // Subclasses which extend ADForm should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element.
      var obj = {
        validator: function validator(root) {
          return new ad.advalidator.ADValidator(root);
        }
      };
      var nObj = null;

      if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 0) {
        nObj = Object.assign(obj, arg[0]);
      }

      var instance = new ADForm(root, nObj); // Attach instance to the root

      root.ad = root.ad || {};
      root.ad[strings.INSTANCE_KEY] = instance;
      return instance;
    }
    /**
     * @param {!Element} root
     * @return {!ADForm}
     */

  }, {
    key: "getInstance",
    value: function getInstance(root) {
      return root.ad && root.ad[strings.INSTANCE_KEY] ? root.ad[strings.INSTANCE_KEY] : null;
    }
  }]);

  return ADForm;
}(ad.component.ADComponent);




/***/ })

/******/ });