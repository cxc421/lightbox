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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/LightBox.js":
/*!*********************************!*\
  !*** ./src/scripts/LightBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction deBounce(fn, delay) {\n  var key = null;\n  return function () {\n    clearTimeout(key);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    key = setTimeout.apply(void 0, [fn, delay].concat(args));\n  };\n}\n\nvar LightBox =\n/*#__PURE__*/\nfunction () {\n  function LightBox(imgPaths) {\n    _classCallCheck(this, LightBox);\n\n    var lightBoxWrapper = document.querySelector('.lightbox-wrapper');\n    var lightboxPages = lightBoxWrapper.querySelectorAll('.lightbox-page');\n    var sliderArea = lightBoxWrapper.querySelector('.lightbox-slider-area');\n    var leftIcon = sliderArea.querySelector('.left-icon');\n    var rightIcon = sliderArea.querySelector('.right-icon');\n    var cancelIcon = sliderArea.querySelector('.cancel-icon');\n    this.selectIdx = 0;\n    this.imgPaths = imgPaths;\n    this.lightBoxWrapper = lightBoxWrapper;\n    this.lightboxPages = lightboxPages;\n    this.initSlider(sliderArea);\n    leftIcon.addEventListener('click', this.toPrevSlider.bind(this));\n    rightIcon.addEventListener('click', this.toNextSlider.bind(this));\n    cancelIcon.addEventListener('click', this.hide.bind(this));\n    window.addEventListener('resize', deBounce(this.adjustSliderSize.bind(this), 50)); // window.addEventListener('resize', this.adjustSliderSize.bind(this));\n  }\n\n  _createClass(LightBox, [{\n    key: \"initSlider\",\n    value: function initSlider(sliderArea) {\n      this.imgPaths.forEach(function (imgPath, idx) {\n        var img = document.createElement('img');\n        img.className = 'lightbox-img';\n        img.id = 'lightbox-img-' + idx;\n        img.src = imgPath;\n        sliderArea.prepend(img);\n      });\n    }\n  }, {\n    key: \"toPrevSlider\",\n    value: function toPrevSlider() {\n      var newSelectIdx = this.selectIdx > 0 ? this.selectIdx - 1 : this.imgPaths.length - 1;\n      this.changeSlider(newSelectIdx);\n    }\n  }, {\n    key: \"toNextSlider\",\n    value: function toNextSlider() {\n      var newSelectIdx = this.selectIdx < this.imgPaths.length - 1 ? this.selectIdx + 1 : 0;\n      this.changeSlider(newSelectIdx);\n    }\n  }, {\n    key: \"changeSlider\",\n    value: function changeSlider(newSelectIdx) {\n      var oldSlider = this.lightBoxWrapper.querySelector('#lightbox-img-' + this.selectIdx);\n      var newSlider = this.lightBoxWrapper.querySelector('#lightbox-img-' + newSelectIdx);\n\n      if (!newSlider) {\n        throw new Error('changeSlider with unknown idx = ' + newSelectIdx);\n      }\n\n      oldSlider.style.display = 'none';\n      newSlider.style.display = 'block';\n      this.lightboxPages.forEach(function (dom) {\n        return dom.textContent = newSelectIdx + 1;\n      });\n      this.selectIdx = newSelectIdx;\n      this.adjustSliderSize(newSlider);\n    }\n  }, {\n    key: \"adjustSliderSize\",\n    value: function adjustSliderSize() {\n      // console.log({ idx: this.selectIdx });\n      var newSlider = this.lightBoxWrapper.querySelector('#lightbox-img-' + this.selectIdx);\n      var maxMobileScreenSize = 1024;\n      var naturalWidth = newSlider.naturalWidth,\n          naturalHeight = newSlider.naturalHeight;\n      var _document$body = document.body,\n          clientHeight = _document$body.clientHeight,\n          clientWidth = _document$body.clientWidth;\n\n      if (clientWidth < maxMobileScreenSize && clientWidth / clientHeight > naturalWidth / naturalHeight) {\n        document.body.classList.add('mobile-horizontal'); // console.log('mobile-horizontal');\n      } else {\n        document.body.classList.remove('mobile-horizontal'); // console.log('mobile-vertial');\n      }\n    }\n  }, {\n    key: \"show\",\n    value: function show(newSelectIdx) {\n      this.changeSlider(newSelectIdx);\n      this.lightBoxWrapper.style.display = 'block';\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.lightBoxWrapper.style.display = 'none';\n    }\n  }]);\n\n  return LightBox;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LightBox);\n\n//# sourceURL=webpack:///./src/scripts/LightBox.js?");

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LightBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightBox */ \"./src/scripts/LightBox.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar imgFolderPath = './assets/images/';\nvar imgNames = ['fox-02.jpg', 'fox-04.jpg', 'fox-01.jpg', 'fox-06.jpg', 'fox-05.jpg', 'fox-03.jpg'];\nvar imgSmallPaths = imgNames.map(function (imgName) {\n  return imgFolderPath + imgName.split('.').join('-s.');\n});\nvar imgBigPaths = imgNames.map(function (imgName) {\n  return imgFolderPath + imgName;\n});\nconsole.log(imgSmallPaths);\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.initPreviewBox();\n    console.log('A');\n    this.lightBox = new _LightBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"](imgBigPaths);\n    console.log('B');\n  }\n\n  _createClass(App, [{\n    key: \"initPreviewBox\",\n    value: function initPreviewBox() {\n      var _this = this;\n\n      var boxArea = document.querySelector('.img-box-area');\n      imgSmallPaths.forEach(function (imgPath, idx) {\n        var imgBox = document.createElement('div');\n        imgBox.className = 'img-box';\n        imgBox.addEventListener('click', function () {\n          _this.lightBox.show(idx);\n        });\n        var innerImg = document.createElement('div');\n        innerImg.style.backgroundImage = \"url(\".concat(imgPath, \")\");\n        imgBox.appendChild(innerImg);\n        boxArea.appendChild(imgBox);\n      });\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/scripts/app.js\");\n\nnew _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });