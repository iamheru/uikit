(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UIkit"] = factory();
	else
		root["UIkit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/js/uikit.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(/*! ./lib/util */ 1);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _dom = __webpack_require__(/*! ./lib/dom */ 2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _support = __webpack_require__(/*! ./lib/support */ 3);
	
	var _support2 = _interopRequireDefault(_support);
	
	var _component = __webpack_require__(/*! ./lib/component */ 4);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UI = {};
	
	UI.util = _util2.default;
	UI.dom = _dom2.default;
	UI.support = _support2.default;
	UI.component = (0, _component2.default)(UI);
	
	exports.default = UI;
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./src/js/lib/util.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dom = __webpack_require__(/*! ./dom */ 2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    extend: function extend(out) {
	
	        out = out || {};
	
	        for (var i = 1; i < arguments.length; i++) {
	
	            var _obj = arguments[i];
	
	            if (!_obj) continue;
	
	            for (var key in _obj) {
	                if (_obj.hasOwnProperty(key)) {
	                    if (_typeof(_obj[key]) === 'object') {
	                        this.extend(out[key], _obj[key]);
	                    } else {
	                        out[key] = _obj[key];
	                    }
	                }
	            }
	        }
	
	        return out;
	    },
	    type: function type() {
	        return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
	    },
	    isFullscreen: function isFullscreen() {
	        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
	    },
	    str2json: function str2json(str) {
	        try {
	            return new Function("", "var json = " + str + "; return JSON.parse(JSON.stringify(json));")();
	        } catch (e) {
	            return false;
	        }
	    },
	    debounce: function debounce(func, wait, immediate) {
	        var timeout;
	        return function () {
	            var context = this,
	                args = arguments;
	            var later = function later() {
	                timeout = null;
	                if (!immediate) func.apply(context, args);
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) func.apply(context, args);
	        };
	    },
	    isInView: function isInView(element, options) {
	
	        var $element = (0, _dom2.default)(element),
	            $win = (0, _dom2.default)(window);
	
	        if (!$element.is(':visible')) {
	            return false;
	        }
	
	        var window_left = $win.scrollLeft(),
	            window_top = $win.scrollTop(),
	            offset = $element.offset(),
	            left = offset.left,
	            top = offset.top;
	
	        options = _dom2.default.extend({ topoffset: 0, leftoffset: 0 }, options);
	
	        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() && left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    attributes: function attributes(element) {
	
	        element = element[0] || element;
	
	        var attributes = {};
	
	        for (var i = 0; i < element.attributes.length; i++) {
	            attributes[element.attributes[i].name] = this.str2json(element.attributes[i].value);
	        }
	
	        return attributes;
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!***************************!*\
  !*** ./src/js/lib/dom.js ***!
  \***************************/
/***/ function(module, exports) {

	"use strict";
	
	// small DOM pimping
	
	NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;
	
	var $ = window.jQuery;
	
	$.$doc = $(document);
	$.$win = $(window);
	$.$html = $('html');
	
	$.watch = function (el, fn, config) {
	    var observer = new MutationObserver(fn);
	    observer.observe(el, config || { attributes: true, childList: true, characterData: true });
	    return observer;
	};
	
	$.register = function (name, def) {
	    document.registerElement(name, { prototype: Object.assign(Object.create(HTMLElement.prototype), def || {}) });
	};
	
	module.exports = $;

/***/ },
/* 3 */
/*!*******************************!*\
  !*** ./src/js/lib/support.js ***!
  \*******************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    mutationobserver: global.MutationObserver || global.WebKitMutationObserver || null,
	    touch: 'ontouchstart' in document || global.DocumentTouch && document instanceof global.DocumentTouch || global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0 || //IE 10
	    global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0 || //IE >=11
	    false
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/*!*********************************!*\
  !*** ./src/js/lib/component.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	
	Example:
	
	UIkit.component('alert', {
	
	    webcomponent: true,
	
	    props: {
	        close: false
	    },
	
	    created: function () {
	        console.log('created');
	    },
	
	    attached: function () {
	        console.log('attached');
	        console.log(this.$el);
	        console.log(this.close);
	    },
	
	    detached: function () {}
	
	});
	
	*/
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (container) {
	
	    if (container) {
	        collection = container;
	    }
	
	    return register;
	};
	
	var _dom = __webpack_require__(/*! ./dom */ 2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _support = __webpack_require__(/*! ./support */ 3);
	
	var _support2 = _interopRequireDefault(_support);
	
	var _util = __webpack_require__(/*! ./util */ 1);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _domRegisterElement = __webpack_require__(/*! ./polyfill/dom-register-element */ 5);
	
	var _domRegisterElement2 = _interopRequireDefault(_domRegisterElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var collection = {};
	var components = {};
	
	var registerElement = function registerElement(name, def) {
	
	    var webcomponent = _dom2.default.extend({
	        prototype: Object.create(HTMLElement.prototype),
	        tag: name
	    }, def);
	
	    if (typeof webcomponent.prototype == 'string') {
	        webcomponent.prototype = Object.create(window[webcomponent.prototype]);
	    }
	
	    _util2.default.extend(webcomponent.prototype, {
	
	        attachedCallback: function attachedCallback() {
	            collection[name](this, _util2.default.attributes(this)); // attached is called in the constructor
	        },
	        detachedCallback: function detachedCallback() {
	            collection[name](this).detached();
	        },
	        attributeChangedCallback: function attributeChangedCallback() {
	            collection[name](this).attributeChanged.apply(this, arguments);
	        }
	    });
	
	    document.registerElement('uk-' + webcomponent.tag, { prototype: webcomponent.prototype });
	};
	
	function register(name, def) {
	
	    var fn = function fn(element, options) {
	
	        var $this = this;
	
	        this.$el = (0, _dom2.default)(element).data(name, this);
	        this.$opts = _dom2.default.extend(true, {}, this.props, options);
	
	        Object.keys(this.props).forEach(function (prop) {
	            $this[prop] = $this.$opts[prop];
	        });
	
	        this.created();
	        this.attached();
	        this.init();
	
	        this.$trigger('init.uk.component', [name, this]);
	
	        return this;
	    };
	
	    _dom2.default.extend(true, fn.prototype, {
	
	        props: {},
	
	        init: function init() {},
	
	        // triggerd as webcomponent
	        attached: function attached() {},
	        created: function created() {},
	        detached: function detached() {},
	
	        attributeChanged: function attributeChanged() {},
	
	        $on: function $on(a1, a2, a3) {
	            return (0, _dom2.default)(this.$el || this).on(a1, a2, a3);
	        },
	        $one: function $one(a1, a2, a3) {
	            return (0, _dom2.default)(this.$el || this).one(a1, a2, a3);
	        },
	        $off: function $off(evt) {
	            return (0, _dom2.default)(this.$el || this).off(evt);
	        },
	        $trigger: function $trigger(evt, params) {
	            return (0, _dom2.default)(this.$el || this).trigger(evt, params);
	        },
	        $find: function $find(selector) {
	            return (0, _dom2.default)(this.$el ? this.$el : []).find(selector);
	        },
	        $proxy: function $proxy(obj, methods) {
	
	            var $this = this;
	
	            methods.split(' ').forEach(function (method) {
	                if (!$this[method]) $this[method] = function () {
	                    return obj[method].apply(obj, arguments);
	                };
	            });
	        },
	        $mixin: function $mixin(obj, methods) {
	
	            var $this = this;
	
	            methods.split(' ').forEach(function (method) {
	                if (!$this[method]) $this[method] = obj[method].bind($this);
	            });
	        }
	    }, def);
	
	    components[name] = fn;
	    collection[name] = function (element, options) {
	
	        element = (0, _dom2.default)(element);
	
	        element.each(function (idx) {
	            if (!(0, _dom2.default)(element).data(name)) {
	                return new fn(element, options);
	            }
	        });
	
	        return element.eq(0).data(name);
	    };
	
	    if (def.webcomponent) {
	        registerElement(name, def.webcomponent);
	    }
	
	    return fn;
	};
	
	exports.components = components;
	
	;
	module.exports = exports['default'];

/***/ },
/* 5 */
/*!*****************************************************!*\
  !*** ./src/js/lib/polyfill/dom-register-element.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	/*!
	Copyright (C) 2014-2015 by WebReflection
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	
	*/
	(function (window, document, Object, REGISTER_ELEMENT) {
	  'use strict';
	
	  // in case it's there or already patched
	
	  if (REGISTER_ELEMENT in document) return;
	
	  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
	  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
	  // THIS FILE IS JUST WRAPPED UP RESULTING IN
	  // build/document-register-element.js
	  // and its .max.js counter part
	
	  var
	  // IE < 11 only + old WebKit for attributes + feature detection
	  EXPANDO_UID = '__' + REGISTER_ELEMENT + (Math.random() * 10e4 >> 0),
	
	  // shortcuts and costants
	  ATTACHED = 'attached',
	      DETACHED = 'detached',
	      EXTENDS = 'extends',
	      ADDITION = 'ADDITION',
	      MODIFICATION = 'MODIFICATION',
	      REMOVAL = 'REMOVAL',
	      DOM_ATTR_MODIFIED = 'DOMAttrModified',
	      DOM_CONTENT_LOADED = 'DOMContentLoaded',
	      DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
	      PREFIX_TAG = '<',
	      PREFIX_IS = '=',
	
	  // valid and invalid node names
	  validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	      invalidNames = ['ANNOTATION-XML', 'COLOR-PROFILE', 'FONT-FACE', 'FONT-FACE-SRC', 'FONT-FACE-URI', 'FONT-FACE-FORMAT', 'FONT-FACE-NAME', 'MISSING-GLYPH'],
	
	  // registered types and their prototypes
	  types = [],
	      protos = [],
	
	  // to query subnodes
	  query = '',
	
	  // html shortcut used to feature detect
	  documentElement = document.documentElement,
	
	  // ES5 inline helpers || basic patches
	  indexOf = types.indexOf || function (v) {
	    for (var i = this.length; i-- && this[i] !== v;) {}
	    return i;
	  },
	
	  // other helpers / shortcuts
	  OP = Object.prototype,
	      hOP = OP.hasOwnProperty,
	      iPO = OP.isPrototypeOf,
	      defineProperty = Object.defineProperty,
	      gOPD = Object.getOwnPropertyDescriptor,
	      gOPN = Object.getOwnPropertyNames,
	      gPO = Object.getPrototypeOf,
	      sPO = Object.setPrototypeOf,
	
	  // jshint proto: true
	  hasProto = !!Object.__proto__,
	
	  // used to create unique instances
	  create = Object.create || function Bridge(proto) {
	    // silly broken polyfill probably ever used but short enough to work
	    return proto ? (Bridge.prototype = proto, new Bridge()) : this;
	  },
	
	  // will set the prototype if possible
	  // or copy over all properties
	  setPrototype = sPO || (hasProto ? function (o, p) {
	    o.__proto__ = p;
	    return o;
	  } : gOPN && gOPD ? function () {
	    function setProperties(o, p) {
	      for (var key, names = gOPN(p), i = 0, length = names.length; i < length; i++) {
	        key = names[i];
	        if (!hOP.call(o, key)) {
	          defineProperty(o, key, gOPD(p, key));
	        }
	      }
	    }
	    return function (o, p) {
	      do {
	        setProperties(o, p);
	      } while ((p = gPO(p)) && !iPO.call(p, o));
	      return o;
	    };
	  }() : function (o, p) {
	    for (var key in p) {
	      o[key] = p[key];
	    }
	    return o;
	  }),
	
	  // DOM shortcuts and helpers, if any
	
	  MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
	      HTMLElementPrototype = (window.HTMLElement || window.Element || window.Node).prototype,
	      IE8 = !iPO.call(HTMLElementPrototype, documentElement),
	      isValidNode = IE8 ? function (node) {
	    return node.nodeType === 1;
	  } : function (node) {
	    return iPO.call(HTMLElementPrototype, node);
	  },
	      targets = IE8 && [],
	      cloneNode = HTMLElementPrototype.cloneNode,
	      setAttribute = HTMLElementPrototype.setAttribute,
	      removeAttribute = HTMLElementPrototype.removeAttribute,
	
	  // replaced later on
	  createElement = document.createElement,
	
	  // shared observer for all attributes
	  attributesObserver = MutationObserver && {
	    attributes: true,
	    characterData: true,
	    attributeOldValue: true
	  },
	
	  // useful to detect only if there's no MutationObserver
	  DOMAttrModified = MutationObserver || function (e) {
	    doesNotSupportDOMAttrModified = false;
	    documentElement.removeEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
	  },
	
	  // will both be used to make DOMNodeInserted asynchronous
	  asapQueue,
	      rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
	    setTimeout(fn, 10);
	  },
	
	  // internal flags
	  setListener = false,
	      doesNotSupportDOMAttrModified = true,
	      dropDomContentLoaded = true,
	
	  // needed for the innerHTML helper
	  notFromInnerHTMLHelper = true,
	
	  // optionally defined later on
	  onSubtreeModified,
	      callDOMAttrModified,
	      getAttributesMirror,
	      observer,
	
	  // based on setting prototype capability
	  // will check proto or the expando attribute
	  // in order to setup the node once
	  patchIfNotAlready,
	      patch;
	
	  if (sPO || hasProto) {
	    patchIfNotAlready = function patchIfNotAlready(node, proto) {
	      if (!iPO.call(proto, node)) {
	        setupNode(node, proto);
	      }
	    };
	    patch = setupNode;
	  } else {
	    patchIfNotAlready = function patchIfNotAlready(node, proto) {
	      if (!node[EXPANDO_UID]) {
	        node[EXPANDO_UID] = Object(true);
	        setupNode(node, proto);
	      }
	    };
	    patch = patchIfNotAlready;
	  }
	  if (IE8) {
	    doesNotSupportDOMAttrModified = false;
	    (function () {
	      var descriptor = gOPD(HTMLElementPrototype, 'addEventListener'),
	          addEventListener = descriptor.value,
	          patchedRemoveAttribute = function patchedRemoveAttribute(name) {
	        var e = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
	        e.attrName = name;
	        e.prevValue = this.getAttribute(name);
	        e.newValue = null;
	        e[REMOVAL] = e.attrChange = 2;
	        removeAttribute.call(this, name);
	        this.dispatchEvent(e);
	      },
	          patchedSetAttribute = function patchedSetAttribute(name, value) {
	        var had = this.hasAttribute(name),
	            old = had && this.getAttribute(name),
	            e = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
	        setAttribute.call(this, name, value);
	        e.attrName = name;
	        e.prevValue = had ? old : null;
	        e.newValue = value;
	        if (had) {
	          e[MODIFICATION] = e.attrChange = 1;
	        } else {
	          e[ADDITION] = e.attrChange = 0;
	        }
	        this.dispatchEvent(e);
	      },
	          onPropertyChange = function onPropertyChange(e) {
	        // jshint eqnull:true
	        var node = e.currentTarget,
	            superSecret = node[EXPANDO_UID],
	            propertyName = e.propertyName,
	            event;
	        if (superSecret.hasOwnProperty(propertyName)) {
	          superSecret = superSecret[propertyName];
	          event = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
	          event.attrName = superSecret.name;
	          event.prevValue = superSecret.value || null;
	          event.newValue = superSecret.value = node[propertyName] || null;
	          if (event.prevValue == null) {
	            event[ADDITION] = event.attrChange = 0;
	          } else {
	            event[MODIFICATION] = event.attrChange = 1;
	          }
	          node.dispatchEvent(event);
	        }
	      };
	      descriptor.value = function (type, handler, capture) {
	        if (type === DOM_ATTR_MODIFIED && this.attributeChangedCallback && this.setAttribute !== patchedSetAttribute) {
	          this[EXPANDO_UID] = {
	            className: {
	              name: 'class',
	              value: this.className
	            }
	          };
	          this.setAttribute = patchedSetAttribute;
	          this.removeAttribute = patchedRemoveAttribute;
	          addEventListener.call(this, 'propertychange', onPropertyChange);
	        }
	        addEventListener.call(this, type, handler, capture);
	      };
	      defineProperty(HTMLElementPrototype, 'addEventListener', descriptor);
	    })();
	  } else if (!MutationObserver) {
	    documentElement.addEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
	    documentElement.setAttribute(EXPANDO_UID, 1);
	    documentElement.removeAttribute(EXPANDO_UID);
	    if (doesNotSupportDOMAttrModified) {
	      onSubtreeModified = function onSubtreeModified(e) {
	        var node = this,
	            oldAttributes,
	            newAttributes,
	            key;
	        if (node === e.target) {
	          oldAttributes = node[EXPANDO_UID];
	          node[EXPANDO_UID] = newAttributes = getAttributesMirror(node);
	          for (key in newAttributes) {
	            if (!(key in oldAttributes)) {
	              // attribute was added
	              return callDOMAttrModified(0, node, key, oldAttributes[key], newAttributes[key], ADDITION);
	            } else if (newAttributes[key] !== oldAttributes[key]) {
	              // attribute was changed
	              return callDOMAttrModified(1, node, key, oldAttributes[key], newAttributes[key], MODIFICATION);
	            }
	          }
	          // checking if it has been removed
	          for (key in oldAttributes) {
	            if (!(key in newAttributes)) {
	              // attribute removed
	              return callDOMAttrModified(2, node, key, oldAttributes[key], newAttributes[key], REMOVAL);
	            }
	          }
	        }
	      };
	      callDOMAttrModified = function callDOMAttrModified(attrChange, currentTarget, attrName, prevValue, newValue, action) {
	        var e = {
	          attrChange: attrChange,
	          currentTarget: currentTarget,
	          attrName: attrName,
	          prevValue: prevValue,
	          newValue: newValue
	        };
	        e[action] = attrChange;
	        onDOMAttrModified(e);
	      };
	      getAttributesMirror = function getAttributesMirror(node) {
	        for (var attr, name, result = {}, attributes = node.attributes, i = 0, length = attributes.length; i < length; i++) {
	          attr = attributes[i];
	          name = attr.name;
	          if (name !== 'setAttribute') {
	            result[name] = attr.value;
	          }
	        }
	        return result;
	      };
	    }
	  }
	
	  function loopAndVerify(list, action) {
	    for (var i = 0, length = list.length; i < length; i++) {
	      verifyAndSetupAndAction(list[i], action);
	    }
	  }
	
	  function loopAndSetup(list) {
	    for (var i = 0, length = list.length, node; i < length; i++) {
	      node = list[i];
	      patch(node, protos[getTypeIndex(node)]);
	    }
	  }
	
	  function executeAction(action) {
	    return function (node) {
	      if (isValidNode(node)) {
	        verifyAndSetupAndAction(node, action);
	        loopAndVerify(node.querySelectorAll(query), action);
	      }
	    };
	  }
	
	  function getTypeIndex(target) {
	    var is = target.getAttribute('is'),
	        nodeName = target.nodeName.toUpperCase(),
	        i = indexOf.call(types, is ? PREFIX_IS + is.toUpperCase() : PREFIX_TAG + nodeName);
	    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
	  }
	
	  function isInQSA(name, type) {
	    return -1 < query.indexOf(name + '[is="' + type + '"]');
	  }
	
	  function onDOMAttrModified(e) {
	    var node = e.currentTarget,
	        attrChange = e.attrChange,
	        attrName = e.attrName,
	        target = e.target;
	    if (notFromInnerHTMLHelper && (!target || target === node) && node.attributeChangedCallback && attrName !== 'style' & e.prevValue !== e.newValue) {
	      node.attributeChangedCallback(attrName, attrChange === e[ADDITION] ? null : e.prevValue, attrChange === e[REMOVAL] ? null : e.newValue);
	    }
	  }
	
	  function onDOMNode(action) {
	    var executor = executeAction(action);
	    return function (e) {
	      asapQueue.push(executor, e.target);
	    };
	  }
	
	  function onReadyStateChange(e) {
	    if (dropDomContentLoaded) {
	      dropDomContentLoaded = false;
	      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	    }
	    loopAndVerify((e.target || document).querySelectorAll(query), e.detail === DETACHED ? DETACHED : ATTACHED);
	    if (IE8) purge();
	  }
	
	  function patchedSetAttribute(name, value) {
	    // jshint validthis:true
	    var self = this;
	    setAttribute.call(self, name, value);
	    onSubtreeModified.call(self, { target: self });
	  }
	
	  function setupNode(node, proto) {
	    setPrototype(node, proto);
	    if (observer) {
	      observer.observe(node, attributesObserver);
	    } else {
	      if (doesNotSupportDOMAttrModified) {
	        node.setAttribute = patchedSetAttribute;
	        node[EXPANDO_UID] = getAttributesMirror(node);
	        node.addEventListener(DOM_SUBTREE_MODIFIED, onSubtreeModified);
	      }
	      node.addEventListener(DOM_ATTR_MODIFIED, onDOMAttrModified);
	    }
	    if (node.createdCallback && notFromInnerHTMLHelper) {
	      node.created = true;
	      node.createdCallback();
	      node.created = false;
	    }
	  }
	
	  function purge() {
	    for (var node, i = 0, length = targets.length; i < length; i++) {
	      node = targets[i];
	      if (!documentElement.contains(node)) {
	        length--;
	        targets.splice(i--, 1);
	        verifyAndSetupAndAction(node, DETACHED);
	      }
	    }
	  }
	
	  function throwTypeError(type) {
	    throw new Error('A ' + type + ' type is already registered');
	  }
	
	  function verifyAndSetupAndAction(node, action) {
	    var fn,
	        i = getTypeIndex(node);
	    if (-1 < i) {
	      patchIfNotAlready(node, protos[i]);
	      i = 0;
	      if (action === ATTACHED && !node[ATTACHED]) {
	        node[DETACHED] = false;
	        node[ATTACHED] = true;
	        i = 1;
	        if (IE8 && indexOf.call(targets, node) < 0) {
	          targets.push(node);
	        }
	      } else if (action === DETACHED && !node[DETACHED]) {
	        node[ATTACHED] = false;
	        node[DETACHED] = true;
	        i = 1;
	      }
	      if (i && (fn = node[action + 'Callback'])) fn.call(node);
	    }
	  }
	
	  // set as enumerable, writable and configurable
	  document[REGISTER_ELEMENT] = function registerElement(type, options) {
	    upperType = type.toUpperCase();
	    if (!setListener) {
	      // only first time document.registerElement is used
	      // we need to set this listener
	      // setting it by default might slow down for no reason
	      setListener = true;
	      if (MutationObserver) {
	        observer = function (attached, detached) {
	          function checkEmAll(list, callback) {
	            for (var i = 0, length = list.length; i < length; callback(list[i++])) {}
	          }
	          return new MutationObserver(function (records) {
	            for (var current, node, newValue, i = 0, length = records.length; i < length; i++) {
	              current = records[i];
	              if (current.type === 'childList') {
	                checkEmAll(current.addedNodes, attached);
	                checkEmAll(current.removedNodes, detached);
	              } else {
	                node = current.target;
	                if (notFromInnerHTMLHelper && node.attributeChangedCallback && current.attributeName !== 'style') {
	                  newValue = node.getAttribute(current.attributeName);
	                  if (newValue !== current.oldValue) {
	                    node.attributeChangedCallback(current.attributeName, current.oldValue, newValue);
	                  }
	                }
	              }
	            }
	          });
	        }(executeAction(ATTACHED), executeAction(DETACHED));
	        observer.observe(document, {
	          childList: true,
	          subtree: true
	        });
	      } else {
	        asapQueue = [];
	        rAF(function ASAP() {
	          while (asapQueue.length) {
	            asapQueue.shift().call(null, asapQueue.shift());
	          }
	          rAF(ASAP);
	        });
	        document.addEventListener('DOMNodeInserted', onDOMNode(ATTACHED));
	        document.addEventListener('DOMNodeRemoved', onDOMNode(DETACHED));
	      }
	
	      document.addEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	      document.addEventListener('readystatechange', onReadyStateChange);
	
	      document.createElement = function (localName, typeExtension) {
	        var node = createElement.apply(document, arguments),
	            name = '' + localName,
	            i = indexOf.call(types, (typeExtension ? PREFIX_IS : PREFIX_TAG) + (typeExtension || name).toUpperCase()),
	            setup = -1 < i;
	        if (typeExtension) {
	          node.setAttribute('is', typeExtension = typeExtension.toLowerCase());
	          if (setup) {
	            setup = isInQSA(name.toUpperCase(), typeExtension);
	          }
	        }
	        notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
	        if (setup) patch(node, protos[i]);
	        return node;
	      };
	
	      HTMLElementPrototype.cloneNode = function (deep) {
	        var node = cloneNode.call(this, !!deep),
	            i = getTypeIndex(node);
	        if (-1 < i) patch(node, protos[i]);
	        if (deep) loopAndSetup(node.querySelectorAll(query));
	        return node;
	      };
	    }
	
	    if (-2 < indexOf.call(types, PREFIX_IS + upperType) + indexOf.call(types, PREFIX_TAG + upperType)) {
	      throwTypeError(type);
	    }
	
	    if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
	      throw new Error('The type ' + type + ' is invalid');
	    }
	
	    var constructor = function constructor() {
	      return extending ? document.createElement(nodeName, upperType) : document.createElement(nodeName);
	    },
	        opt = options || OP,
	        extending = hOP.call(opt, EXTENDS),
	        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
	        upperType,
	        i;
	
	    if (extending && -1 < indexOf.call(types, PREFIX_TAG + nodeName)) {
	      throwTypeError(nodeName);
	    }
	
	    i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
	
	    query = query.concat(query.length ? ',' : '', extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName);
	
	    constructor.prototype = protos[i] = hOP.call(opt, 'prototype') ? opt.prototype : create(HTMLElementPrototype);
	
	    loopAndVerify(document.querySelectorAll(query), ATTACHED);
	
	    return constructor;
	  };
	})(window, document, Object, 'registerElement');

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uikit.js.map