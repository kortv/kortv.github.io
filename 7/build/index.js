(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/***/ function(module, exports, __webpack_require__) {

	//import App from './components/App';
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsPage1Page1 = __webpack_require__(1);
	
	var _componentsPage1Page12 = _interopRequireDefault(_componentsPage1Page1);
	
	var _componentsPage2Page2 = __webpack_require__(3);
	
	var _componentsPage2Page22 = _interopRequireDefault(_componentsPage2Page2);
	
	//import Page3 from './components/Page3/Page3';
	
	if (typeof document !== 'undefined') {
	  //ReactDOM.render(<Page1 />, document.getElementById('p1'));
	  //ReactDOM.render(<Page2 />, document.getElementById('p2'));
	  //ReactDOM.render(<Page3 />, document.getElementById('p3'));
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Page1Css = __webpack_require__(2);
	
	var _Page1Css2 = _interopRequireDefault(_Page1Css);
	
	var Page1 = (function (_React$Component) {
	  _inherits(Page1, _React$Component);
	
	  function Page1() {
	    _classCallCheck(this, Page1);
	
	    _get(Object.getPrototypeOf(Page1.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(Page1, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: _Page1Css2["default"].flexbox },
	        React.createElement("img", { className: "flex-row " + _Page1Css2["default"].logoMbs, src: "img/Logo_MBS.svg", onerror: "this.url=img/Logo_MBS.png" }),
	        React.createElement(
	          "h2",
	          { className: "flex-row " + _Page1Css2["default"].titleName },
	          "«Разработка и принятие ",
	          React.createElement("br", null),
	          "управленческих решений»"
	        ),
	        React.createElement(
	          "div",
	          { className: "flex-row " + _Page1Css2["default"].authorName },
	          "Казарин Валерий Петрович"
	        ),
	        React.createElement("img", { className: "flex-row " + _Page1Css2["default"].pic, src: "img/p1/pic.png", alt: "Обложка" })
	      );
	    }
	  }]);
	
	  return Page1;
	})(React.Component);
	
	exports["default"] = Page1;
	;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"titleName":"Page1__titleName___QPvP0","authorName":"Page1__authorName___39JbX","pic":"Page1__pic___3Zz8G","logoMbs":"Page1__logoMbs___32zZ6","flexbox":"Page1__flexbox___BoJAw"};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Page2Css = __webpack_require__(4);
	
	var _Page2Css2 = _interopRequireDefault(_Page2Css);
	
	var Demo = (function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    _get(Object.getPrototypeOf(Demo.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(Demo, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: _Page2Css2["default"].root },
	        React.createElement("img", { id: "picp2", src: "img/p02/picp2.png" }),
	        React.createElement(
	          "div",
	          { id: "txt" },
	          React.createElement(
	            "strong",
	            null,
	            "Moscow Business School"
	          ),
	          " – крупнейший центр бизнес-образования, осуществляющий профессиональную подготовку специалистов и руководителей российских и западных компаний. Слушателям предоставляется широкий выбор программ MBA, курсов повышения квалификации, семинаров и тренингов по самым востребованным направлениям. Обучение в Moscow Business School полностью соответствует современным образовательным стандартам и проводится с применением актуальных информационно-коммуникационных технологий."
	        ),
	        React.createElement("img", { className: _Page2Css2["default"].logoMbs, src: "img/Logo_MBS.svg", onerror: "this.url=img/Logo_MBS.png" })
	      );
	    }
	  }]);
	
	  return Demo;
	})(React.Component);
	
	exports["default"] = Demo;
	;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"name":"Page2__name___3Xdei","authorName":"Page2__authorName___a-Aud","pic":"Page2__pic___1jUGz","logoMbs":"Page2__logoMbs___iT-AM"};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map