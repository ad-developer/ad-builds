/*!
 Javascript framework for building user interfaces
 Copyright (c) 2018 A.D.
 License: Apache-2.0
*/
var ad = ad || {}; ad["cm"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* ========================================================================
 * ad-js framework
 * control-manager.js v1.0.0
 * ========================================================================
 * Copyright 2017 A. D.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

var ADControlManager = {

  /**
   * Key/Value (map) object to keep controls.
   * @private
   */
  controls_: {},

  /**
   * Key/Value (map) object to keep data sources.
   * @private
   */
  dataSources_: {},

  /**
   * Key/Value (map) object to keep modules.
   * @private
   */
  modules_: {},

  /**
   * Key/Value (map) object to keep containers.
   * @private
   */
  containers_: {},

  /**
   * Pre pad text to form global id.
   * @private
   */
  gpad_: 'ad',

  /**
   * Next global id index.
   * @private
   */
  gid_: 1,

  /**
   * locateObj_ - Locating the object inside the json grath based on the submitted path.
   *
   * @param  {object} JSONObj  JSON object
   * @param  {string} path     Path
   * @return {string}          Extracted object
   */
  locateObj_: function locateObj_(JSONObj, path) {
    if (path === '') {
      return obj;
    }
    path = path.split('.');
    var arrayPattern = /(.+)\[(\d+)\]/;
    for (var i = 0, match; i < path.length; i++) {
      match = arrayPattern.exec(path[i]);
      if (match) {
        JSONObj = JSONObj[match[1]][parseInt(match[2])];
      } else {
        JSONObj = JSONObj[path[i]];
      }
    }
    return JSONObj;
  },


  /**
   * getNodeText_ - description
   *
   * @param  {Elememt} domElement  DOM element.
   * @return {string}    returns the node's text content, disregarding all
   * childrens' text content.
   */
  getNodeText_: function getNodeText_(domElement) {
    var res = '';
    var i = 0;
    var children = domElement.childNodes;
    for (; domElement = children[i]; i++) {
      if (domElement.nodeType === Node.TEXT_NODE && domElement.textContent.trim() !== '') {
        res += domElement.textContent;
      }
    }
    return res.trim();
  },


  /**
   * convertDomToJson - Method to convert dom structure into the Json object.
   * This method add missing Id(s) to dom element(s) and resolve Json object
   * nodes. This is a default implementation and is not controlled at this
   * moment... it can be added as an opt-out feature in the future
   * implementation.
   * @param  {Elemnt} domElement DOM element.
   * @return {object}       Json object.
   */
  convertDomToJson: function convertDomToJson(domElement) {
    var obj = {};
    var i = 0;
    var el = void 0;
    var children = void 0;
    var arrObj = [];
    var attr = domElement.attributes;
    var tag = domElement.tagName.toLowerCase();
    var id = false;

    obj.c = tag;

    // Get all attributes
    for (; el = attr[i]; i++) {
      tag = el.value;
      // Make sure not to add display: none; as a
      // value of style attribute
      if (el.value.indexOf('display: none;') >= 0) {
        tag = tag.replace('display: none;', '');
      }
      tag = tag.trim();
      if (tag.length || el.name.startsWith('ad-')) {
        obj[el.name] = tag;
        if (el.name === 'ad-id') {
          id = true;
        }
      }
    }
    // Add id if missing...
    // TODO: This needs to be reviewed.
    if (!id) {
      obj['ad-id'] = this.guid();
    }

    // Check if element has an inner text
    tag = ADControlManager.getNodeText_(domElement);
    if (tag.length) {
      obj.ad_inner_text = tag;
    }

    // Add children.
    if (domElement.children.length) {
      i = 0;
      children = domElement.children;
      for (; el = children[i]; i++) {
        arrObj.push(ADControlManager.convertDomToJson(el));
      }
      obj.cs = arrObj;
    }
    return obj;
  },


  /**
   *  Generates next clobal id.
   * @return {string}  description
   */
  guid: function guid() {
    return ADControlManager.gpad_ + ADControlManager.gid_++;
  },


  /**
   * build - The main method of the framework. It applys
   *
   * @param  {string|object} meta  meta can be either container id
   * or Json object (descriptor) representing the content of the container.
   *
   * If a container id is provided then the HTML markup is used to build
   * the content of the container...
   * If Json object is provided ( the following Json format is used:
   *                        { contId: "id",
   *                          controls: [
   *                                      {tag: "name",
   *                                       attribute-one: "value",
   *                                       attribute-two: "value",
   *                                       ...
  *                                         },
   *                                       ...,
   *                                       ]
   *                         } )
   * them the content is build base on the descriptor.
   *
   * @param  {object=} model Represents a model of the container controls.
   *
   * @param  {string=} state State of the control(s) it can be either edit
   * (by defaut) or 'static' non editable.
   */
  build: function build(meta, model, state) {
    var id = void 0;
    var parent = void 0;
    var tag = void 0;
    var po = void 0;
    var i = void 0;

    // Resolve the meta data
    if (meta['ad-id']) {
      id = meta['ad-id'];
      tag = meta.c;
    } else {
      id = meta;
    }

    var con = document.querySelector('[ad-id=' + id + ']');

    // Hide container. It can not be done properly on the very first run
    // through the hide() method of the Control object. The Control object
    // needs to be fully rendered before you can call the method which
    // defeats the purpose of the action.
    ADControlManager.hideContainer_(con);

    if (!tag) {
      tag = con.tagName.toLowerCase();
    }

    // Purge the container (if the container already exists)
    // from the controls tree and get it's parent and it's position within it.
    po = this.purge_(id);
    // tag = null;
    if (po) {
      parent = po.p;
      i = po.i;
    }

    // Make instance of the corresponding
    // container control
    var ControlObj = this.getControl(tag);
    ControlObj = new ControlObj(meta, model, state, parent, i);

    // Add new control, and JSON branch to a parent
    // in case of replacement
    if (po) {
      parent.addControl(ControlObj, i);
      tag = ADControlManager.locateObj_(ControlObj.getRootContainer().getJson(), parent.path);

      tag.cs.splice(i, 1, ControlObj.getJson());
    }

    // Hide the newly built control before injecting it into the
    // container.
    ControlObj.hide();

    // Replace the container with the new DOM tree
    parent = con.parentElement;
    // Get the DOM tree
    po = ControlObj.getDom();
    parent.replaceChild(po, con);

    // Show the control
    ControlObj.show();
  },


  /**
   * Method to registers controls.
   *
   * @param  {string} name   A tag name or Json node name example "ad-text";
   * @param  {Control} control   Control class.
   */
  registerControl: function registerControl(name, control) {
    this.controls_[name] = control;
  },


  /**
   * Method to register datasources.
   *
   * @param  {string} name       DataSource name.
   * @param  {DataSource} dataSource DataSource class.
   */
  registerDataSource: function registerDataSource(name, dataSource) {
    this.dataSources_[name] = dataSource;
  },


  /**
   * Method to register modules.
   *
   * @param  {string} name   Madule name.
   * @param  {Module} module Module class.
   */
  registerModule: function registerModule(name, module) {
    this.modules_[name] = module;
  },


  /**
   * getDataSource get datasource class.
   *
   * @param  {string} name DataSorce name
   * @return {object}      DataSource class.
   */
  getDataSource: function getDataSource(name) {
    return this.dataSources_[name];
  },


  /**
   * getModule get module classs.
   *
   * @param  {string} name Module name.
   * @return {object}      Module class.
   */
  getModule: function getModule(name) {
    return this.modules_[name];
  },


  /**
   * Method to build container path. Used as a key to save/retrieve container
   * object from containers_ map.
   *
   * @param  {ADControl} parent Parent Object
   * @param  {number} index     Position within parent collection of controls.
   * @return {string}           New calculated path.
   */
  getContainerPath_: function getContainerPath_(parent, index) {
    var p = parent.path;
    if (p !== '') {
      p += '.';
    }
    p += 'cs[' + index + ']';
    return p;
  },


  /**
   * addContainer - Method to add a container to containers_ map;
   *
   * @param  {string} id           Container id.
   * @param  {ADControl} container Container object.
   * @param  {ADControl} parent    Parent object.
   * @param  {number} index        Position within parent collection of controls.
   */
  addContainer: function addContainer(id, container, parent, index) {
    var path = '';
    if (parent) {
      path = ADControlManager.getContainerPath_(parent, index);
    }
    container.path = path;
    this.containers_[id] = container;
  },


  /**
   * Getter to get container object from containers_ map;
   *
   * @param  {string} id    Container id.
   * @return {ADControl}    Container object.
   */
  getContainer: function getContainer(id) {
    return ADControlManager.containers_[id];
  },


  /**
   * getControl - Getter to get control class from controls_ map;
   *
   * @param  {string} tagName conrols's tag name.
   * @return {Control}     Control class.
   */
  getControl: function getControl(tagName) {
    var c = this.controls_[tagName];
    if (!c) {
      c = this.controls_['general-control'];
    }
    return c;
  },


  /**
   * getParentAndIndex_ - Extract parent and index elememt from the path.
   *
   * @param  {string} path Path
   * @return {object}      Object with the two fields p - as a parent and
   *                       i - index ... {i,p} ...
   */
  getParentAndIndex_: function getParentAndIndex_(path) {
    var p = path.substr(0, path.length - 3);
    var i = path.substr(path.length - 2, 1);
    return {
      // path
      p: p,
      // index
      i: parseInt(i)
    };
  },


  /**
   * purge_ - Method removes the node traces from the (1) containers_ list,
   * (2) from global Json path and (3) from parent controls list array.
   *
   * @private
   * @param  {string} id Id
   * @return {object}    Object of parent and index within it.
   */
  purge_: function purge_(id) {
    // Remove this container and all subcontainers from containers_ list.
    // Remove this from JOSN path.
    // Remove this control from parent controls.
    var con = this.containers_[id];
    var path = void 0;
    var el = void 0;
    var i = 0;

    if (!con) {
      return;
    }

    var parent = con.getParent();
    path = con.path;

    // Remove from container...
    delete this.containers_[id];

    // ... and all subcontainers.
    for (el in this.containers_) {
      if (this.containers_.hasOwnProperty(el)) {
        if (this.containers_[el].path.startsWith(path)) {
          delete this.containers_[el];
        }
      }
    }

    // If not a parent then it's a root container and the entire JSON
    // object will be deleted
    if (!parent) {
      el = con.getJson();
      // Set the JSON object to the empty object.
      el = {};
      return;
    }
    path = this.getParentAndIndex_(path);

    con = ADControlManager.locateObj_(parent.getRootContainer().getJson(), path.p);

    // Remove JSON branch from the parent.
    con.splice(path.i, 1);

    path = parent.getControls();
    i = 0;
    for (; i < path.length; i++) {
      con = path[i];
      if (con.getId() === id) {
        // i = i - 1;
        path.splice(i, 1);
        break;
      }
    }
    return {
      p: parent,
      i: i
    };
  },


  /**
   * hideContainer_ - hides entry point container domElement
   *
   * @param  {Elememt} domElement toot element of the container
   */
  hideContainer_: function hideContainer_(domElement) {
    domElement.style.display = 'none';
  }
};

/* harmony default export */ __webpack_exports__["a"] = (ADControlManager);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ========================================================================
 * ad-js framework
 * control.js v1.0.0
 * ========================================================================
 * Copyright 2017 A. D.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

/**
 *
 */
var ADControl = function () {
  /**
   * init - Object initialization method.
   *
   * @param  {object|string} meta  meta can be either control id,  JSON object,
   * or DOM element.
   * @param  {string} state  State of the control to be displayed. It can be
   * form, edit, or view.
   * @param  {object} model  Model to the control to be bind to.
   * @param  {object} parent Parent control (container).
   * @param  {number} index  Index within parent control (container).
   */
  function ADControl(meta, state, model, parent, index) {
    _classCallCheck(this, ADControl);

    var $this = this;
    var id = void 0;
    var el = void 0;
    var json = void 0;

    // Resolve Id and meta data.
    // Assumption: the very first element/collection must be supplied with an id.
    if (meta['ad-id']) {
      json = meta;
      id = json['ad-id'];
    } else if (typeof meta === 'string') {
      id = meta;
    }
    $this.id_ = id;

    // Set Json metadata. It runs only for the very first time if Html markup
    // is passed. All consecutive descendant's runs are Json based.
    if (!json) {
      el = document.querySelector('[ad-id=' + id + ']');
      json = $this.convertDomToJson(el);
    }
    $this.json_ = json;

    // Set attributes
    $this.attr_ = {};
    $this.setAttr_(json);

    $this.state_ = state || 'form';
    $this.model_ = model;

    $this.root_ = null;
    $this.built_ = false;
    $this.path = null;
    $this.parent_ = parent;

    $this.init(id, json, model, state, parent, index);
  }

  /**
   * init - Object initialization method.
   *
   * @param  {string} id     Control id.
   * @param  {object} json   Json object representing this control
   * @param  {string} state  State of the control to be displayed. It can be
   * form, edit, or view.
   * @param  {object} model  Model to the control to be bind to.
   * @param  {object} parent Parent control (container).
   * @param  {number} index  Index within parent control (container).
   */


  _createClass(ADControl, [{
    key: 'init',
    value: function init(id, json, state, model, parent, index) {
      var $this = this;
      var i = 0;
      var Cntrl = void 0;
      var node = void 0;

      // Render myself...
      $this.renderDom();

      // Am I a container...
      if (json.cs) {
        $this.controls_ = [];

        // ... I want to be added to container collection
        $this.addContainer(id, $this, parent, index);

        // ... and add all my children to myself
        for (; node = json.cs[i]; i++) {
          Cntrl = $this.getControl(node.c);
          Cntrl = new Cntrl(node, model, state, $this, i);
          $this.controls_.push(Cntrl);
          $this.root_.appendChild(Cntrl.getDom());
        }
      }
    }

    /**
     * getJson - returns json object representing control itself and all children
     * (optional) within it.
     *
     * @return {Object}  json object
     */

  }, {
    key: 'getJson',
    value: function getJson() {
      return this.json_;
    }

    /**
     * getDom - get the root_ dom object of the control...
     *
     * @return {HTMLElement}  description
     */

  }, {
    key: 'getDom',
    value: function getDom() {
      return this.root_;
    }

    /**
     * show - description
     *
     */

  }, {
    key: 'show',
    value: function show() {
      // TODO: Need to be reviewed to implemented
      // more robust way of showing with animation... etc.
      this.root_.style.display = 'block';
    }

    /**
     * hide - description
     *
     */

  }, {
    key: 'hide',
    value: function hide() {
      // TODO: Need to be reviewed to implemented
      // more robust way of hiding with animation... etc.
      this.root_.style.display = 'none';
    }

    /**
     * exec - description
     *
     * @param  {string} method description
     * @param  {Object} par    description
     * @return {Object}        description
     */

  }, {
    key: 'exec',
    value: function exec(method, par) {
      if (this[method]) {
        return this[method](par);
      }
    }

    /**
     * getAttributes - description
     *
     * @return {type}  description
     */

  }, {
    key: 'getAttributes',
    value: function getAttributes() {
      return this.attr_;
    }

    /**
     * setAttr_ - method to set internal attr_ variable
     *
     * @param  {Object} json json object
     */

  }, {
    key: 'setAttr_',
    value: function setAttr_(json) {
      var node = void 0;
      for (node in json) {
        if (json.hasOwnProperty(node)) {
          if (node !== 'cs' && node !== 'c') {
            this.attr_[node] = json[node];
          }
        }
      }
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this.id_;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent_;
    }
  }, {
    key: 'setState',
    value: function setState(state, model) {
      this.state_ = state;
      this.model_ = model;
      this.renderDom();
    }
  }, {
    key: 'getControlById',
    value: function getControlById(id) {
      if (this.controls_) {
        for (var i = 0, ctrl, controls = this.controls_; ctrl = controls[i]; i++) {
          if (ctrl.id_ === id) {
            return ctrl;
          }
        }
      }
    }
  }, {
    key: 'getControls',
    value: function getControls() {
      return this.controls_;
    }
    /**
     * getRootContainer - description
     *
     * @param  {type} con description
     * @return {type}     description
     */

  }, {
    key: 'getRootContainer',
    value: function getRootContainer(con) {
      var p = this.getParent();

      if (p) {
        con = p.getRootContainer(p);
      }
      return con;
    }
    /**
     * setData - set data to the control (former set)
     *
     * @param  {Object} data  data to be assinted to the control
     */

  }, {
    key: 'setData',
    value: function setData() /* data*/{}
    /**
     * getData - get data from the control (former get)
     *
     * @param  {string} id control id
     * @return {Object}    description
     */

  }, {
    key: 'getData',
    value: function getData() /* id*/{}
  }, {
    key: 'addControl',
    value: function addControl(ctrl, index) {
      this.controls_.splice(index, 0, ctrl);
    }
    // Interfaces...
    // TODO: can be implemented as an adapter passed to the constructor?

  }, {
    key: 'guid',
    value: function guid() {}
  }, {
    key: 'addContainer',
    value: function addContainer() /* id, container, parent, index*/{}
  }, {
    key: 'convertDomToJson',
    value: function convertDomToJson() /* domObj*/{}
  }, {
    key: 'getControl',
    value: function getControl() /* name*/{}
  }, {
    key: 'renderDom',
    value: function renderDom() {}
  }]);

  return ADControl;
}();

/* harmony default export */ __webpack_exports__["a"] = (ADControl);
;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_manager__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_control__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_source__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ADControlManager", function() { return __WEBPACK_IMPORTED_MODULE_0__control_manager__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ADControl", function() { return __WEBPACK_IMPORTED_MODULE_1__control__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ADGeneralControl", function() { return __WEBPACK_IMPORTED_MODULE_2__general_control__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ADDataSource", function() { return __WEBPACK_IMPORTED_MODULE_3__data_source__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ADModule", function() { return __WEBPACK_IMPORTED_MODULE_4__module__["a"]; });
/**
 * Copyright 2017 A.D.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_manager__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* ========================================================================
 * ad-js framework
 * general-control.js v1.0.0
 * ========================================================================
 * Copyright 2017 A. D.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */




var ADGeneralControl = function (_ADControl) {
  _inherits(ADGeneralControl, _ADControl);

  function ADGeneralControl() {
    _classCallCheck(this, ADGeneralControl);

    return _possibleConstructorReturn(this, (ADGeneralControl.__proto__ || Object.getPrototypeOf(ADGeneralControl)).apply(this, arguments));
  }

  _createClass(ADGeneralControl, [{
    key: 'renderDom',
    value: function renderDom() {
      var json = this.getJson();
      var ctrl = document.createElement(json.c);
      var i = 0;
      var el = void 0;

      for (el in this.attr_) {
        if (this.attr_.hasOwnProperty(el)) {
          if (el === 'ad_inner_text') {
            ctrl.textContent = this.attr_[el];
          } else {
            ctrl.setAttribute(el, this.attr_[el]);
          }
        }
      }
      if (this.controls_ && this.built) {
        for (; el = this.controls_[i]; i++) {
          el.setState(this.state_, this.model_);
        }
      }
      this.root_ = ctrl;
      this.built_ = true;
    }
    // Implement interfaces...

  }, {
    key: 'guid',
    value: function guid() {
      return __WEBPACK_IMPORTED_MODULE_1__control_manager__["a" /* default */].guid();
    }
  }, {
    key: 'addContainer',
    value: function addContainer(id, container, parent, index) {
      __WEBPACK_IMPORTED_MODULE_1__control_manager__["a" /* default */].addContainer(id, container, parent, index);
    }
  }, {
    key: 'convertDomToJson',
    value: function convertDomToJson(domObj) {
      return __WEBPACK_IMPORTED_MODULE_1__control_manager__["a" /* default */].convertDomToJson(domObj);
    }
  }, {
    key: 'getControl',
    value: function getControl(tagName) {
      return __WEBPACK_IMPORTED_MODULE_1__control_manager__["a" /* default */].getControl(tagName);
    }
  }]);

  return ADGeneralControl;
}(__WEBPACK_IMPORTED_MODULE_0__control__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ADGeneralControl);
;

__WEBPACK_IMPORTED_MODULE_1__control_manager__["a" /* default */].registerControl('general-control', ADGeneralControl);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ========================================================================
 * ad-js framework
 * data-source.js v1.0.0
 * ========================================================================
 * Copyright 2017 A. D.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

/**
 * ADDataSource
 */
var ADDataSource = function () {
  function ADDataSource() {
    _classCallCheck(this, ADDataSource);
  }

  _createClass(ADDataSource, [{
    key: "getData",

    /**
     * getData - description
     *
     * @param  {Function} callback description
     * @param  {!Object} ...args  description
     */
    value: function getData() /* callback, ...args*/{
      // Subclasses shoud override this method.
    }
  }]);

  return ADDataSource;
}();

/* harmony default export */ __webpack_exports__["a"] = (ADDataSource);
;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ========================================================================
 * ad-js framework
 * module.js v1.0.0
 * ========================================================================
 * Copyright 2017 A. D.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

var ADModule = function () {
  function ADModule() {
    _classCallCheck(this, ADModule);
  }

  _createClass(ADModule, [{
    key: "exec",

    /**
     * exec - description
     *
     * @param  {Function} callback description
     * @param  {!Object} ...args  description
     */
    value: function exec() /* callback, ...args*/{
      // Subclasses shoud override this method.
    }
  }]);

  return ADModule;
}();

/* harmony default export */ __webpack_exports__["a"] = (ADModule);
;

/***/ })
/******/ ]);