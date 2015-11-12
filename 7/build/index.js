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
	allModules.Page1 = React.createElement(_Page2.default, {
			__source: {
					fileName: '../../../src/index.js',
					lineNumber: 9
			}
	});
	allModules.Page2 = React.createElement(_Page4.default, {
			__source: {
					fileName: '../../../src/index.js',
					lineNumber: 10
			}
	});
	allModules.Page3 = React.createElement(_Page6.default, {
			__source: {
					fileName: '../../../src/index.js',
					lineNumber: 11
			}
	});
	console.log(allModules);
	
	if (typeof document !== 'undefined') {
			ReactDOM.render(React.createElement(_Page2.default, {
					__source: {
							fileName: '../../../src/index.js',
							lineNumber: 15
					}
			}), document.getElementById('Page1'));
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
	        { className: _Page2.default.container, __source: {
	            fileName: "../../../src/components/Page1/Page1.js",
	            lineNumber: 7
	          }
	        },
	        React.createElement("div", { className: _Page2.default.logoMbs, __source: {
	            fileName: "../../../src/components/Page1/Page1.js",
	            lineNumber: 8
	          }
	        }),
	        React.createElement(
	          "h2",
	          { className: _Page2.default.titleName, __source: {
	              fileName: "../../../src/components/Page1/Page1.js",
	              lineNumber: 9
	            }
	          },
	          "«Разработка и принятие ",
	          React.createElement("br", {
	            __source: {
	              fileName: "../../../src/components/Page1/Page1.js",
	              lineNumber: 9
	            }
	          }),
	          "управленческих решений»"
	        ),
	        React.createElement(
	          "h2",
	          { className: _Page2.default.authorName, __source: {
	              fileName: "../../../src/components/Page1/Page1.js",
	              lineNumber: 10
	            }
	          },
	          "Казарин Валерий Петрович"
	        ),
	        React.createElement("div", { className: _Page2.default.pic, alt: "Обложка", __source: {
	            fileName: "../../../src/components/Page1/Page1.js",
	            lineNumber: 11
	          }
	        })
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
	module.exports = {"_img":"cy35AJKyC6Y1xbFvRRZyO","pic":"_2i4llQUARZX_LQ-DH7k94A","_logoMbs":"_2-D6fVggfWjmO2ZnztT0gA","logoMbs":"_34U2_3XFwAFkaMM7Q2fahw","titleName":"PLgkjsaacb261V0UVbcqJ","authorName":"vECnQTF_dqzxxw9KafAoK","container":"_135K778qxTTeHjhmpYhUzp"};

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
	        { className: _Page2.default.container, __source: {
	            fileName: "../../../src/components/Page2/Page2.js",
	            lineNumber: 7
	          }
	        },
	        React.createElement("div", { className: _Page2.default.logoMbs, src: "./img/Logo_MBS.svg", onerror: "this.onerror=null; this.src='./img/Logo_MBS.png'", __source: {
	            fileName: "../../../src/components/Page2/Page2.js",
	            lineNumber: 8
	          }
	        }),
	        React.createElement(
	          "div",
	          { className: _Page2.default.mainText, __source: {
	              fileName: "../../../src/components/Page2/Page2.js",
	              lineNumber: 9
	            }
	          },
	          React.createElement(
	            "strong",
	            {
	              __source: {
	                fileName: "../../../src/components/Page2/Page2.js",
	                lineNumber: 10
	              }
	            },
	            "Moscow Business School"
	          ),
	          " – крупнейший центр бизнес-образования, осуществляющий профессиональную подготовку специалистов и руководителей российских и западных компаний. Слушателям предоставляется широкий выбор программ MBA, курсов повышения квалификации, семинаров и тренингов по самым востребованным направлениям. Обучение в Moscow Business School полностью соответствует современным образовательным стандартам и проводится с применением актуальных информационно-коммуникационных технологий."
	        ),
	        React.createElement("div", { className: _Page2.default.mainPic, __source: {
	            fileName: "../../../src/components/Page2/Page2.js",
	            lineNumber: 12
	          }
	        })
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
	module.exports = {"_img":"_2q5voGORRarPgGS6H2LQdA","mainPic":"kih8SoNfe-aehtNcOYVSi","_logoMbs":"_3wGc7fym2gIUihBU8LD7gW","logoMbs":"_3i1QfsUd5kmnPGvyfh1gR","mainText":"Q8Fnv76CCvzC1wmUC9k4z","container":"_3W86b2XZfe1uX4wWh-OXk1"};

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
	        { className: _Page2.default.flexbox, __source: {
	            fileName: '../../../src/components/Page3/Page3.js',
	            lineNumber: 11
	          }
	        },
	        React.createElement(
	          'div',
	          {
	            __source: {
	              fileName: '../../../src/components/Page3/Page3.js',
	              lineNumber: 12
	            }
	          },
	          React.createElement(
	            'h1',
	            {
	              __source: {
	                fileName: '../../../src/components/Page3/Page3.js',
	                lineNumber: 13
	              }
	            },
	            'MBS Mobile'
	          ),
	          React.createElement(
	            'h6',
	            {
	              __source: {
	                fileName: '../../../src/components/Page3/Page3.js',
	                lineNumber: 14
	              }
	            },
	            'приложение для iPhone и Android'
	          ),
	          React.createElement(
	            'h4',
	            {
	              __source: {
	                fileName: '../../../src/components/Page3/Page3.js',
	                lineNumber: 15
	              }
	            },
	            'Скидка 15% на семинары Moscow Business School при регистрации через приложение.',
	            React.createElement('br', {
	              __source: {
	                fileName: '../../../src/components/Page3/Page3.js',
	                lineNumber: 15
	              }
	            }),
	            'Приложение включает в себя каталог семинаров Moscow Business School, оно также предназначено для оперативного получения информации о специальных акциях, существующих услугах и сервисах.',
	            React.createElement('br', {
	              __source: {
	                fileName: '../../../src/components/Page3/Page3.js',
	                lineNumber: 16
	              }
	            }),
	            'Действует скидка 15% на участие в семинарах Moscow Business School при регистрации через это приложение.'
	          )
	        ),
	        React.createElement('hr', {
	          __source: {
	            fileName: '../../../src/components/Page3/Page3.js',
	            lineNumber: 20
	          }
	        }),
	        React.createElement(_SlideShow2.default, { num: 3, styles: _Page2.default, sourceToDir: './img/p03/', __source: {
	            fileName: '../../../src/components/Page3/Page3.js',
	            lineNumber: 21
	          }
	        })
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
	    return React.createElement("img", { className: styles.image + className, src: this.props.sourceToDir + this.props.index + ".png", __source: {
	        fileName: "../../../src/components/_SlideShow/_SlideShow.js",
	        lineNumber: 14
	      }
	    });
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
	    var boards = Array(this.props.num).fill(1).map((function (val, key) {
	      var isSelected = this.state.selectedIndex % this.props.num - key;
	      return React.createElement(Image, { index: key + 1, selected: isSelected, key: key,
	        num: this.props.num, sourceToDir: this.props.sourceToDir, __source: {
	          fileName: "../../../src/components/_SlideShow/_SlideShow.js",
	          lineNumber: 47
	        }
	      });
	    }).bind(this));
	
	    return React.createElement(
	      "div",
	      { onClick: this.onClick, className: styles.images, __source: {
	          fileName: "../../../src/components/_SlideShow/_SlideShow.js",
	          lineNumber: 52
	        }
	      },
	      boards
	    );
	  }
	});
	
	exports.default = SlideShow;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"_img":"_2elmR5BCVTrPH2oaTD8NiD","_logoMbs":"zEqjB6YcLyYAxw2nel13s","images":"xYD0V__XhLafR1Sl4kZla","image":"_33lsjA82hAOYGKsOAJ7bTO","flexbox":"_2LDeedRWMznUQAAif9lNdU"};

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