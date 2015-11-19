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

	'use strict';
	
	var _Page = __webpack_require__(1);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	var _Page3 = __webpack_require__(3);
	
	var _Page4 = _interopRequireDefault(_Page3);
	
	var _Page5 = __webpack_require__(5);
	
	var _Page6 = _interopRequireDefault(_Page5);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	"use strict";
	var allModules = {};
	allModules.Page1 = React.createElement(_Page2.default, null);
	allModules.Page2 = React.createElement(_Page4.default, null);
	allModules.Page3 = React.createElement(_Page6.default, null);
	console.log(allModules);
	
	if (typeof document !== 'undefined') {
		ReactDOM.render(React.createElement(_Page6.default, null), document.getElementById('Page1'));
	}
	
	var cleanAllInterval = function cleanAllInterval() {
		for (var i = 1; i < 9999; i++) {
			clearInterval(i);
		}
	};
	var clearPreviousComponents = function clearPreviousComponents(arg) {
		ReactDOM.unmountComponentAtNode(document.getElementById(arg));
	};
	
	Reveal.addEventListener('slidechanged', function (event) {
	
		cleanAllInterval();
		var currentModule = event.currentSlide.attributes["id"].nodeValue,
		    prevModule = event.previousSlide.attributes["id"].nodeValue;
	
		var _loop = function _loop(key) {
			if (currentModule != key) {
				setTimeout(function () {
					clearPreviousComponents(key);
				}, 1200);
			}
		};
	
		for (var key in allModules) {
			_loop(key);
		};
	
		ReactDOM.render(allModules[currentModule], document.getElementById(currentModule));
	
		// if (event.previousSlide.attributes["data-state"]) {
		//     cleanAllInterval();
		//     event.previousSlide.children[0].innerHTML = ""
		// }
		// if (event.currentSlide.attributes["data-state"]) {
		//     var state = event.currentSlide.attributes["data-state"].nodeValue;
		//     ReactDOM.render(components[state.toString()], event.currentSlide.children[0]);
		//     components[state + "Fn"]()
		// }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Page = __webpack_require__(2);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page1 = (function (_React$Component) {
	  _inherits(Page1, _React$Component);
	
	  function Page1() {
	    _classCallCheck(this, Page1);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page1).apply(this, arguments));
	  }
	
	  _createClass(Page1, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: _Page2.default.container },
	        React.createElement("div", { className: _Page2.default.logoMbs }),
	        React.createElement(
	          "h2",
	          { className: _Page2.default.titleName },
	          "«Разработка и принятие ",
	          React.createElement("br", null),
	          "управленческих решений»"
	        ),
	        React.createElement(
	          "h2",
	          { className: _Page2.default.authorName },
	          "Казарин Валерий Петрович"
	        ),
	        React.createElement("div", { className: _Page2.default.pic, alt: "Обложка" })
	      );
	    }
	  }]);
	
	  return Page1;
	})(React.Component);
	
	exports.default = Page1;
	;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"_img":"Page1___img__cy35A","pic":"Page1__pic__2i4ll","_logoMbs":"Page1___logoMbs__2-D6f","logoMbs":"Page1__logoMbs__34U2_","titleName":"Page1__titleName__PLgkj","authorName":"Page1__authorName__vECnQ","container":"Page1__container__135K7"};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Page = __webpack_require__(4);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page2 = (function (_React$Component) {
	  _inherits(Page2, _React$Component);
	
	  function Page2() {
	    _classCallCheck(this, Page2);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page2).apply(this, arguments));
	  }
	
	  _createClass(Page2, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: _Page2.default.container },
	        React.createElement("div", { className: _Page2.default.logoMbs, src: "./img/Logo_MBS.svg", onerror: "this.onerror=null; this.src='./img/Logo_MBS.png'" }),
	        React.createElement(
	          "div",
	          { className: _Page2.default.mainText },
	          React.createElement(
	            "strong",
	            null,
	            "Moscow Business School"
	          ),
	          " – крупнейший центр бизнес-образования, осуществляющий профессиональную подготовку специалистов и руководителей российских и западных компаний. Слушателям предоставляется широкий выбор программ MBA, курсов повышения квалификации, семинаров и тренингов по самым востребованным направлениям. Обучение в Moscow Business School полностью соответствует современным образовательным стандартам и проводится с применением актуальных информационно-коммуникационных технологий."
	        ),
	        React.createElement("div", { className: _Page2.default.mainPic })
	      );
	    }
	  }]);
	
	  return Page2;
	})(React.Component);
	
	exports.default = Page2;
	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"_img":"Page2___img__2q5vo","mainPic":"Page2__mainPic__kih8S","_logoMbs":"Page2___logoMbs__3wGc7","logoMbs":"Page2__logoMbs__3i1Qf","mainText":"Page2__mainText__Q8Fnv","container":"Page2__container__3W86b"};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SlideShow = __webpack_require__(6);
	
	var _SlideShow2 = _interopRequireDefault(_SlideShow);
	
	var _Page = __webpack_require__(7);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	"use strict";
	
	//import styles from './Page3.scss';
	
	var Page3 = (function (_React$Component) {
	  _inherits(Page3, _React$Component);
	
	  function Page3() {
	    _classCallCheck(this, Page3);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page3).apply(this, arguments));
	  }
	
	  _createClass(Page3, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: _Page2.default.flexbox },
	        React.createElement(
	          'div',
	          { className: _Page2.default.p03 },
	          React.createElement('hr', null),
	          React.createElement(
	            'h1',
	            null,
	            'MBS Mobile'
	          ),
	          React.createElement(
	            'h4',
	            null,
	            'приложение для iPhone и Android'
	          ),
	          React.createElement(
	            'div',
	            { className: _Page2.default.flexbox },
	            React.createElement(
	              'h4',
	              null,
	              'Приложение в Google Play',
	              React.createElement('br', null),
	              React.createElement('img', { src: './img/p03/x2.png', alt: '' })
	            ),
	            React.createElement(
	              'h4',
	              null,
	              'Приложение в Applw Store',
	              React.createElement('br', null),
	              React.createElement('img', { src: './img/p03/x3.png', alt: '' })
	            )
	          ),
	          React.createElement(
	            'h3',
	            null,
	            'Скидка 15% на семинары Moscow Business School при регистрации через приложение.',
	            React.createElement('br', null),
	            'Приложение включает в себя каталог семинаров Moscow Business School, оно также предназначено для оперативного получения информации о специальных акциях, существующих услугах и сервисах.',
	            React.createElement('br', null),
	            'Действует скидка 15% на участие в семинарах Moscow Business School при регистрации через это приложение.'
	          )
	        ),
	        React.createElement('hr', null),
	        React.createElement(_SlideShow2.default, { num: 3, styles: _Page2.default, sourceToDir: './img/p03/' })
	      );
	    }
	  }]);
	
	  return Page3;
	})(React.Component);
	
	exports.default = Page3;
	;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var styles = {}; //import styles from './_SlideShow.scss';
	
	"use strict";
	
	var Image = React.createClass({
	  displayName: "Image",
	
	  render: function render() {
	    var className = "";
	    if (this.props.selected == 1 || this.props.selected == -this.props.num + 1) {
	      className = " animated05 fadeOut";
	    } else if (this.props.selected == 0) {
	      className = " animated05 fadeInRight";
	    }
	    return React.createElement("img", { className: styles.image + className, src: this.props.sourceToDir + this.props.index + ".png" });
	  }
	});
	
	var SlideShow = React.createClass({
	  displayName: "SlideShow",
	
	  getInitialState: function getInitialState() {
	    styles = this.props.styles;
	
	    return {
	      selectedIndex: 1,
	      interval: setInterval(this.onTimeInterval, 4000)
	    };
	  },
	
	  onTimeInterval: function onTimeInterval() {
	
	    this.setState({
	      selectedIndex: this.state.selectedIndex % this.props.num + 1
	    });
	  },
	
	  onClick: function onClick() {
	    clearInterval(this.state.interval);
	    this.setState({
	      selectedIndex: this.state.selectedIndex % this.props.num + 1,
	      interval: setInterval(this.onTimeInterval, 4000)
	    });
	  },
	
	  render: function render() {
	    var boards = Array(this.props.num);
	    for (var i = 0; i < boards.length; i++) {
	      boards[i] = 1;
	    };
	    boards = boards.map((function (val, key) {
	      var isSelected = this.state.selectedIndex % this.props.num - key;
	      return React.createElement(Image, { index: key + 1, selected: isSelected, key: key,
	        num: this.props.num, sourceToDir: this.props.sourceToDir });
	    }).bind(this));
	
	    return React.createElement(
	      "div",
	      { onClick: this.onClick, className: styles.images },
	      boards
	    );
	  }
	});
	
	exports.default = SlideShow;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"_img":"Page3___img__2elmR","_logoMbs":"Page3___logoMbs__zEqjB","images":"Page3__images__xYD0V","image":"Page3__image__33lsj","flexbox":"Page3__flexbox__2LDee","p03":"Page3__p03__3_LTG"};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map