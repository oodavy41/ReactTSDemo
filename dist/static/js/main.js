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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./assets/texture.png */ \"./src/assets/texture.png\"));\n\n// Module\nexports.push([module.i, \"body {\\r\\n  --main-color: #effffb;\\r\\n  --sub-color: #50d890;\\r\\n  --title-color: #4f98ca;\\r\\n  --text-color: #272727;\\r\\n  background-color: var(--main-color);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n  background-size: 8%;\\r\\n  color: var(--text-color);\\r\\n}\\r\\n\\r\\n.page-cell {\\r\\n  position: relative;\\r\\n  font-size: 1.2em;\\r\\n  line-height: 2.5em;\\r\\n}\\r\\n.page-cell:before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  bottom: -2px;\\r\\n  height: 2px;\\r\\n  width: 100%;\\r\\n  background: var(--main-color);\\r\\n  transform: scale(0);\\r\\n  transition: all 0.3s;\\r\\n}\\r\\n.page-cell:hover:before {\\r\\n  transform: scale(1);\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/pageContainer/pageContainer.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/pageContainer/pageContainer.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".page-panel-wrap {\\r\\n  position: relative;\\r\\n  top: 3em;\\r\\n  left: 30%;\\r\\n  width: 50%;\\r\\n  min-width: 20em;\\r\\n  z-index: 2;\\r\\n  overflow: auto;\\r\\n  padding: 1em;\\r\\n  background: var(--main-color);\\r\\n  box-shadow: 1px 4px 4px 1px var(--sub-color);\\r\\n  border-radius: 5px;\\r\\n  transition: 0;\\r\\n}\\r\\n.page-panel-title {\\r\\n  color: var(--title-color);\\r\\n  font-size: 2em;\\r\\n  line-height: 3em;\\r\\n  margin: 0.5em 0 0 1em;\\r\\n}\\r\\n.page-panel-container {\\r\\n  margin: 0.3em;\\r\\n}\\r\\n@media only screen and (max-width: 750px) {\\r\\n  .page-panel-wrap {\\r\\n    top: 0em;\\r\\n    left: 2%;\\r\\n    width: 96%;\\r\\n    min-width: 20em;\\r\\n    padding: 0.2em;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/pageContainer/pageContainer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/slidePanel/slidePanel.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/slidePanel/slidePanel.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".panel-wrap {\\r\\n  position: fixed;\\r\\n  top: 8em;\\r\\n  margin-left: 15%;\\r\\n  padding-bottom: 6em;\\r\\n  z-index: 20;\\r\\n  overflow: visible;\\r\\n  width: 10em;\\r\\n  color: var(--main-color);\\r\\n  background: var(--sub-color);\\r\\n  border: 1px solid var(--sub-color);\\r\\n  box-shadow: 0 8px 12px 0 var(--sub-color);\\r\\n  border-radius: 2px;\\r\\n  transition: left 0.3s;\\r\\n}\\r\\n\\r\\n.panel-icon {\\r\\n  position: absolute;\\r\\n  border-radius: 2px;\\r\\n  background: var(--sub-color);\\r\\n  top: 0;\\r\\n  right: -1.5em;\\r\\n  font-size: 1.5em;\\r\\n  width: 1.5em;\\r\\n  line-height: 1.5em;\\r\\n  text-align: center;\\r\\n  transition: right 0.3s;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.panel-icon.animated {\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n.panel-layer {\\r\\n  z-index: 1;\\r\\n  margin: 2em;\\r\\n}\\r\\n@media only screen and (max-width: 1200px) {\\r\\n  .panel-wrap {\\r\\n    margin-left: 80px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 900px) {\\r\\n  .panel-wrap {\\r\\n    margin-left: 40px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 750px) {\\r\\n  .panel-icon {\\r\\n    display: block;\\r\\n  }\\r\\n  .panel-wrap {\\r\\n    left: -10em;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    margin: 0;\\r\\n  }\\r\\n  .panel-wrap.animated {\\r\\n    left: 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/slidePanel/slidePanel.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/uploadProgres/progress.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/uploadProgres/progress.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".progress-wrap {\\r\\n  box-shadow: 1px 2px 3px 1px var(--sub-color);\\r\\n  margin: 0.2em;\\r\\n}\\r\\n.progress-outer {\\r\\n  color: var(--title-color);\\r\\n  position: relative;\\r\\n  font-weight: bold;\\r\\n  overflow: hidden;\\r\\n}\\r\\n.progress-inner {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  background-color: var(--title-color);\\r\\n  opacity: 0.3;\\r\\n  transform: translateX(-100%);\\r\\n}\\r\\n.progress-close {\\r\\n  position: relative;\\r\\n  line-height: 1em;\\r\\n  top: -1.3em;\\r\\n  right: 0.5em;\\r\\n  float: right;\\r\\n  background-color: rgba(244, 67, 54, 0.8);\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  color: white;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/uploadProgres/progress.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/uploader/uploader.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/uploader/uploader.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".uploader-wrap {\\r\\n}\\r\\n.uploader-input {\\r\\n  margin: 0.5em 1.5em;\\r\\n}\\r\\n\\r\\n.uploader-input-element {\\r\\n  position: relative;\\r\\n  font-size: 1.2em;\\r\\n  line-height: 2.5em;\\r\\n  padding: 0.5em;\\r\\n  color: var(--text-color);\\r\\n  border: 1px solid var(--sub-color);\\r\\n  border-radius: 5px;\\r\\n  text-align: center;\\r\\n}\\r\\n.uploader-input-element.uploader-draging {\\r\\n  background-color: rgba(155, 255, 150, 0.5);\\r\\n}\\r\\n.uploader-input-html {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  opacity: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/uploader/uploader.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/videoCard/videoCard.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/videoCard/videoCard.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".video-card {\\r\\n  box-shadow: 2px 2px 3px 2px var(--sub-color);\\r\\n  padding: 10px;\\r\\n  margin: 20px;\\r\\n  border-radius: 5px;\\r\\n  min-width: 340px;\\r\\n  align-items: center;\\r\\n\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.video-element {\\r\\n  margin: 5px;\\r\\n}\\r\\n.video-title {\\r\\n  margin: 1em;\\r\\n  vertical-align: top;\\r\\n  display: inline-block;\\r\\n}\\r\\n@media only .video-card and (max-width: 400) {\\r\\n}\\r\\n@media only screen and (max-width: 400px) {\\r\\n  .video-card {\\r\\n    padding: 10px 3px;\\r\\n    margin: 20px 5px;\\r\\n  }\\r\\n  .video-element {\\r\\n    margin: 3px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/videoCard/videoCard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/showcase/showcase.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/showcase/showcase.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".showcase-masonry {\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/pages/showcase/showcase.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/upload/upload.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/upload/upload.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".upload-list {\\r\\n  color: var(--title-color);\\r\\n  font-weight: 600;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/pages/upload/upload.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./App.css */ \"./src/App.css\");\r\nvar slidePanel_1 = __webpack_require__(/*! @components/slidePanel */ \"./src/components/slidePanel/index.tsx\");\r\nvar upload_1 = __webpack_require__(/*! @src/pages/upload */ \"./src/pages/upload/index.tsx\");\r\nvar showcase_1 = __webpack_require__(/*! @pages/showcase */ \"./src/pages/showcase/index.tsx\");\r\nvar pages = [upload_1.default, showcase_1.default];\r\nvar names = [\"UpLoad\", \"Showcase\"];\r\nvar App = /** @class */ (function (_super) {\r\n    __extends(App, _super);\r\n    function App(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            url: 1\r\n        };\r\n        return _this;\r\n    }\r\n    App.prototype.changePage = function (index) {\r\n        this.setState({ url: index });\r\n    };\r\n    App.prototype.render = function () {\r\n        var _this = this;\r\n        var PageContext = pages[this.state.url];\r\n        return (React.createElement(\"div\", null,\r\n            React.createElement(\"h1\", { style: { textAlign: \"center\" } }, \"Test Title\"),\r\n            React.createElement(slidePanel_1.default, null, pages.map(function (page, index) {\r\n                return (React.createElement(\"div\", { className: \"page-cell\", onClick: function () {\r\n                        _this.changePage(index);\r\n                    } }, names[index]));\r\n            })),\r\n            React.createElement(PageContext, null)));\r\n    };\r\n    return App;\r\n}(React.Component));\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/assets/texture.png":
/*!********************************!*\
  !*** ./src/assets/texture.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAXCAMAAAAhvaEKAAAAM1BMVEUAAAAjIyMjIyMAAAAPDw8PDw8kJCQAAAAAAAAkJCQAAAAAAAA7OztAQEBHR0cxMTExMTFSK924AAAAEXRSTlMAFgAGEQAVAgsADwceICQaAKU/Wn8AAAIzSURBVHgBjZXhbuM4DIRJc0LNUkm77/+exaLApreIRdusLjH6/bAAmdSQozCWA10eGC4PdFnJBd7kOQ24rGgrh9Dkgf/aEZKAs22bYxnhEfIAuAwMoRxooIvU1xzLyMeu2hEepHDs2LWXesbT16p6FhAestKZCtx2nCXXS7ntxtI6GY5bPzqt1mFEQkGnkz216OGkjtBeXSjPdnVqkKQcdPhIg82d6Ztn3xPUt4xYXw9VDGk45RUdaNZ3GcOaEU1OCO+PJ3c/jJImn9HfucmgH7+nU+Amhs3sfg35EcBaF8zU5GeY9r4K+YsZIEml06QCXRbopEIAzgE8MNnvV1wuc/sEQoNU2eCXXD6K0r3/uctGuy/4vMtEs79f/5Xd64eo7KiK3z/lCfX6nIcn7iavMCBfjllLuqLJGeGWCcnYOMP8MGuU5/8XIWlTmpp3SdLvg84VqdSwpuaUiYxvxBiC5P13UlVawHkEdSrqXFGX5P3YtYBzVu3ZrW2HH6lLdzxzr6GUh5ABuF12e+l0CLbMXSX9f0GoSaJNJCuldjnlllkRuyEm5+SFlKR2e9JJIxWRh6F9L43lW0UH9v9roF63czIh10YNJznPTszhbR8TN5mxcj3apnW+1ELPdi2b2KsEzr7bA2bSdvY15vnpkmSIZerWlLOaPCi6Xe1bK0wB1JnLZAdFrFcZZpzzcCnK/MThpGVFEfUA4zorwfm7k6/HAvs2FKZPrGv7dKdplstICj2s+wdYtietbSOnTgAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/assets/texture.png?");

/***/ }),

/***/ "./src/components/pageContainer/index.tsx":
/*!************************************************!*\
  !*** ./src/components/pageContainer/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./pageContainer.css */ \"./src/components/pageContainer/pageContainer.css\");\r\nvar PagePanel = /** @class */ (function (_super) {\r\n    __extends(PagePanel, _super);\r\n    function PagePanel() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    PagePanel.prototype.render = function () {\r\n        var title = this.props.title;\r\n        return (React.createElement(\"div\", { className: \"page-panel-wrap\" },\r\n            React.createElement(\"div\", { className: \"page-panel-title \" }, title),\r\n            React.createElement(\"div\", { className: \"page-panel-container \" }, this.props.children)));\r\n    };\r\n    return PagePanel;\r\n}(React.Component));\r\nexports.default = PagePanel;\r\n\n\n//# sourceURL=webpack:///./src/components/pageContainer/index.tsx?");

/***/ }),

/***/ "./src/components/pageContainer/pageContainer.css":
/*!********************************************************!*\
  !*** ./src/components/pageContainer/pageContainer.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./pageContainer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/pageContainer/pageContainer.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/pageContainer/pageContainer.css?");

/***/ }),

/***/ "./src/components/slidePanel/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/slidePanel/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./slidePanel.css */ \"./src/components/slidePanel/slidePanel.css\");\r\nvar Panel = /** @class */ (function (_super) {\r\n    __extends(Panel, _super);\r\n    function Panel(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            visible: false\r\n        };\r\n        return _this;\r\n    }\r\n    Panel.prototype.render = function () {\r\n        var _this = this;\r\n        var visible = this.state.visible;\r\n        var animated = visible ? \"animated\" : \"\";\r\n        return (React.createElement(\"div\", { className: \"panel-wrap \" + animated, onClick: function () {\r\n                _this.setState({ visible: !_this.state.visible });\r\n            } },\r\n            React.createElement(\"div\", { className: \"panel-icon \" + animated }, visible ? \" < \" : \" > \"),\r\n            React.createElement(\"div\", { className: \"panel-layer\" }, this.props.children)));\r\n    };\r\n    return Panel;\r\n}(React.Component));\r\nexports.default = Panel;\r\n\n\n//# sourceURL=webpack:///./src/components/slidePanel/index.tsx?");

/***/ }),

/***/ "./src/components/slidePanel/slidePanel.css":
/*!**************************************************!*\
  !*** ./src/components/slidePanel/slidePanel.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./slidePanel.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/slidePanel/slidePanel.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/slidePanel/slidePanel.css?");

/***/ }),

/***/ "./src/components/uploadProgres/index.tsx":
/*!************************************************!*\
  !*** ./src/components/uploadProgres/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./progress.css */ \"./src/components/uploadProgres/progress.css\");\r\nvar Progress = /** @class */ (function (_super) {\r\n    __extends(Progress, _super);\r\n    function Progress() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Progress.prototype.render = function () {\r\n        var _a = this.props, progress = _a.progress, key = _a.key, onClose = _a.onClose;\r\n        return (React.createElement(\"div\", { className: \"progress-wrap\" },\r\n            React.createElement(\"div\", { className: \"progress-outer\" },\r\n                Math.round(progress * 100),\r\n                \"%\",\r\n                React.createElement(\"div\", { className: \"progress-inner\", style: { transform: \"translateX(\" + (Math.round(progress * 100) - 100) + \"%)\" } })),\r\n            React.createElement(\"button\", { className: \"progress-close\", onClick: onClose }, \"\\u00D7\")));\r\n    };\r\n    return Progress;\r\n}(React.Component));\r\nexports.default = Progress;\r\n\n\n//# sourceURL=webpack:///./src/components/uploadProgres/index.tsx?");

/***/ }),

/***/ "./src/components/uploadProgres/progress.css":
/*!***************************************************!*\
  !*** ./src/components/uploadProgres/progress.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./progress.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/uploadProgres/progress.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/uploadProgres/progress.css?");

/***/ }),

/***/ "./src/components/uploader/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/uploader/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./uploader.css */ \"./src/components/uploader/uploader.css\");\r\nvar inputUpload_1 = __webpack_require__(/*! ./inputUpload */ \"./src/components/uploader/inputUpload.tsx\");\r\nvar PagePanel = /** @class */ (function (_super) {\r\n    __extends(PagePanel, _super);\r\n    function PagePanel() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    PagePanel.prototype.render = function () {\r\n        var popFiles = this.props.popFiles;\r\n        return (React.createElement(\"div\", { className: \"uploader-wrap\" },\r\n            React.createElement(inputUpload_1.default, { popFileArray: popFiles })));\r\n    };\r\n    return PagePanel;\r\n}(React.Component));\r\nexports.default = PagePanel;\r\n\n\n//# sourceURL=webpack:///./src/components/uploader/index.tsx?");

/***/ }),

/***/ "./src/components/uploader/inputUpload.tsx":
/*!*************************************************!*\
  !*** ./src/components/uploader/inputUpload.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./uploader.css */ \"./src/components/uploader/uploader.css\");\r\nvar DragEndEvents = [\"dragend\", \"drop\", \"dragexit\", \"dragleave\"];\r\nvar InputUpload = /** @class */ (function (_super) {\r\n    __extends(InputUpload, _super);\r\n    function InputUpload(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.onInputChange = function (event) {\r\n            var popFileArray = _this.props.popFileArray;\r\n            popFileArray(_this.inputer.files);\r\n        };\r\n        _this.onDrag = function () {\r\n            _this.setState({ draging: true });\r\n        };\r\n        _this.endDrag = function () {\r\n            console.log(\"END\");\r\n            _this.setState({ draging: false });\r\n        };\r\n        _this.state = {\r\n            draging: false\r\n        };\r\n        return _this;\r\n    }\r\n    InputUpload.prototype.componentDidMount = function () {\r\n        var _this = this;\r\n        this.inputer && this.inputer.addEventListener(\"change\", this.onInputChange);\r\n        this.label && this.label.addEventListener(\"dragenter\", this.onDrag);\r\n        DragEndEvents.forEach(function (value) {\r\n            _this.label && _this.label.addEventListener(value, _this.endDrag);\r\n        });\r\n    };\r\n    InputUpload.prototype.componentWillUnmount = function () {\r\n        var _this = this;\r\n        this.inputer && this.inputer.removeEventListener(\"change\", this.onInputChange);\r\n        this.label && this.label.removeEventListener(\"dragenter\", this.onDrag);\r\n        DragEndEvents.forEach(function (value) {\r\n            _this.label && _this.label.removeEventListener(\"value\", _this.endDrag);\r\n        });\r\n    };\r\n    InputUpload.prototype.render = function () {\r\n        var _this = this;\r\n        var draging = this.state.draging;\r\n        return (React.createElement(\"div\", { className: \"uploader-input \" },\r\n            React.createElement(\"label\", { ref: function (ref) { return (_this.label = ref); }, className: \"uploader-input-element \" + (draging ? \"uploader-draging\" : \"\"), htmlFor: \"uploader-input-html\" },\r\n                \"\\u70B9\\u51FB\\u4E0A\\u4F20\\u6216\\u62D6\\u5165\\u89C6\\u9891\\u6587\\u4EF6\",\r\n                React.createElement(\"input\", { className: \"uploader-input-html\", id: \"uploader-input-html\", ref: function (ref) { return (_this.inputer = ref); }, type: \"file\", name: \"video\", accept: \"video/*\", multiple: true }))));\r\n    };\r\n    return InputUpload;\r\n}(React.Component));\r\nexports.default = InputUpload;\r\n\n\n//# sourceURL=webpack:///./src/components/uploader/inputUpload.tsx?");

/***/ }),

/***/ "./src/components/uploader/uploader.css":
/*!**********************************************!*\
  !*** ./src/components/uploader/uploader.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./uploader.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/uploader/uploader.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/uploader/uploader.css?");

/***/ }),

/***/ "./src/components/videoCard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/videoCard/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./videoCard.css */ \"./src/components/videoCard/videoCard.css\");\r\nvar viewPortHandler_1 = __webpack_require__(/*! ./viewPortHandler */ \"./src/components/videoCard/viewPortHandler.tsx\");\r\nvar VideoCard = /** @class */ (function (_super) {\r\n    __extends(VideoCard, _super);\r\n    function VideoCard(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.onCanPlay = function () {\r\n            var _a = _this.props, index = _a.index, playIndex = _a.playIndex;\r\n            index === playIndex && _this.videoElement.play();\r\n        };\r\n        _this.state = {\r\n            playing: false\r\n        };\r\n        return _this;\r\n    }\r\n    VideoCard.prototype.componentDidMount = function () {\r\n        var _a = this.props, onPlayed = _a.onPlayed, onClickPlay = _a.onClickPlay;\r\n        if (this.videoElement) {\r\n            this.videoElement.addEventListener(\"ended\", onPlayed);\r\n            this.videoElement.addEventListener(\"canplay\", this.onCanPlay);\r\n            this.videoElement.addEventListener(\"play\", onClickPlay);\r\n        }\r\n    };\r\n    VideoCard.prototype.componentDidUpdate = function () {\r\n        var _a = this.props, index = _a.index, playIndex = _a.playIndex;\r\n        if (index === playIndex) {\r\n            this.videoElement.paused && this.videoElement.play();\r\n        }\r\n        else {\r\n            this.videoElement.pause();\r\n        }\r\n    };\r\n    VideoCard.prototype.componentWillUnmount = function () {\r\n        var _a = this.props, onPlayed = _a.onPlayed, onClickPlay = _a.onClickPlay;\r\n        this.videoElement.removeEventListener(\"ended\", onPlayed);\r\n        this.videoElement.removeEventListener(\"canplay\", this.onCanPlay);\r\n        this.videoElement.removeEventListener(\"play\", onClickPlay);\r\n    };\r\n    VideoCard.prototype.render = function () {\r\n        var _this = this;\r\n        var _a = this.props, videoSrc = _a.videoSrc, index = _a.index;\r\n        return (React.createElement(\"div\", { className: \"video-card\" },\r\n            React.createElement(\"video\", { className: \"video-element\", ref: function (ref) { return (_this.videoElement = ref); }, src: videoSrc, controls: true, width: \"320\" }),\r\n            React.createElement(\"div\", { className: \"video-title\" }, \"Video \" + index,\r\n                React.createElement(\"br\", null),\r\n                \"12345678!@#$%^\")));\r\n    };\r\n    return VideoCard;\r\n}(React.Component));\r\nexports.default = viewPortHandler_1.default(VideoCard);\r\n\n\n//# sourceURL=webpack:///./src/components/videoCard/index.tsx?");

/***/ }),

/***/ "./src/components/videoCard/videoCard.css":
/*!************************************************!*\
  !*** ./src/components/videoCard/videoCard.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./videoCard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/videoCard/videoCard.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/videoCard/videoCard.css?");

/***/ }),

/***/ "./src/components/videoCard/viewPortHandler.tsx":
/*!******************************************************!*\
  !*** ./src/components/videoCard/viewPortHandler.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar handler = function (Component) {\r\n    return /** @class */ (function (_super) {\r\n        __extends(WithViewportHandler, _super);\r\n        function WithViewportHandler(props) {\r\n            var _this = _super.call(this, props) || this;\r\n            _this.onVisibilityChange = function (elements) {\r\n                var reportVisiblilty = _this.props.reportVisiblilty;\r\n                var visible = elements[0].isIntersecting;\r\n                if (visible && _this.state.unloaded) {\r\n                    _this.setState({ unloaded: false });\r\n                }\r\n                reportVisiblilty(visible);\r\n            };\r\n            _this.state = {\r\n                unloaded: true,\r\n                visibility: false\r\n            };\r\n            _this.viewObserver = new IntersectionObserver(_this.onVisibilityChange, { threshold: 0.5 });\r\n            return _this;\r\n        }\r\n        WithViewportHandler.prototype.componentDidMount = function () {\r\n            var reportVisiblilty = this.props.reportVisiblilty;\r\n            this.viewObserver.observe(this.container);\r\n        };\r\n        WithViewportHandler.prototype.componentWillUnmount = function () {\r\n            this.viewObserver.disconnect();\r\n        };\r\n        WithViewportHandler.prototype.render = function () {\r\n            var _this = this;\r\n            var reportVisiblilty = this.props.reportVisiblilty;\r\n            return React.createElement(\"div\", { ref: function (ref) { return (_this.container = ref); } }, this.state.unloaded ? \"\" : React.createElement(Component, __assign({}, this.props)));\r\n        };\r\n        return WithViewportHandler;\r\n    }(React.Component));\r\n};\r\nexports.default = handler;\r\n\n\n//# sourceURL=webpack:///./src/components/videoCard/viewPortHandler.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\r\nReactDOM.render(React.createElement(App_1.default, null), document.getElementById(\"root\"));\r\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/pages/showcase/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/showcase/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./showcase.css */ \"./src/pages/showcase/showcase.css\");\r\nvar videoRequest_1 = __webpack_require__(/*! @utils/videoRequest */ \"./src/utils/videoRequest.ts\");\r\nvar pageContainer_1 = __webpack_require__(/*! @components/pageContainer */ \"./src/components/pageContainer/index.tsx\");\r\nvar videoCard_1 = __webpack_require__(/*! @components/videoCard */ \"./src/components/videoCard/index.tsx\");\r\nvar playDely = 250;\r\nvar ShowCase = /** @class */ (function (_super) {\r\n    __extends(ShowCase, _super);\r\n    function ShowCase(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.stateList = [];\r\n        _this.getVisiblilty = function (visible, index) {\r\n            _this.stateList[index] = visible;\r\n            if (_this.state.playingIndex < 0 && visible) {\r\n                _this.playVideo(index);\r\n            }\r\n            _this.playVideoDely(visible, index);\r\n        };\r\n        _this.state = {\r\n            videoArray: videoRequest_1.default,\r\n            playingIndex: -1\r\n        };\r\n        _this.stateList = _this.state.videoArray.map(function () { return false; });\r\n        return _this;\r\n    }\r\n    ShowCase.prototype.componentDidMount = function () { };\r\n    ShowCase.prototype.render = function () {\r\n        var _this = this;\r\n        return (React.createElement(pageContainer_1.default, { title: \"ShowCase Page\" },\r\n            React.createElement(\"div\", { className: \"showcase-masonry\" }, this.state.videoArray.map(function (src, index) {\r\n                return (React.createElement(videoCard_1.default, { onPlayed: function () { return _this.onPlayEnd(index); }, onClickPlay: function () { return _this.onPlayForce(index); }, playIndex: _this.state.playingIndex, reportVisiblilty: function (visible) {\r\n                        _this.getVisiblilty(visible, index);\r\n                    }, key: index, index: index, videoSrc: src }));\r\n            }))));\r\n    };\r\n    ShowCase.prototype.playVideoDely = function (visible, index) {\r\n        var _this = this;\r\n        this.timeouter && clearTimeout(this.timeouter);\r\n        this.timeouter = setTimeout(function () {\r\n            !_this.stateList[_this.state.playingIndex] && _this.playTopVideo();\r\n        }, playDely);\r\n    };\r\n    ShowCase.prototype.onPlayForce = function (index) {\r\n        this.playVideo(index);\r\n    };\r\n    ShowCase.prototype.onPlayEnd = function (index) {\r\n        if (this.stateList[index + 1]) {\r\n            this.playVideo(index + 1);\r\n        }\r\n        else {\r\n            this.playTopVideo();\r\n        }\r\n    };\r\n    ShowCase.prototype.playVideo = function (index) {\r\n        this.setState({ playingIndex: index });\r\n    };\r\n    ShowCase.prototype.playTopVideo = function () {\r\n        this.setState({ playingIndex: this.stateList.findIndex(function (state) { return state; }) });\r\n    };\r\n    return ShowCase;\r\n}(React.Component));\r\nexports.default = ShowCase;\r\n\n\n//# sourceURL=webpack:///./src/pages/showcase/index.tsx?");

/***/ }),

/***/ "./src/pages/showcase/showcase.css":
/*!*****************************************!*\
  !*** ./src/pages/showcase/showcase.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./showcase.css */ \"./node_modules/css-loader/dist/cjs.js!./src/pages/showcase/showcase.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/showcase/showcase.css?");

/***/ }),

/***/ "./src/pages/upload/index.tsx":
/*!************************************!*\
  !*** ./src/pages/upload/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\n__webpack_require__(/*! ./upload.css */ \"./src/pages/upload/upload.css\");\r\nvar pageContainer_1 = __webpack_require__(/*! @components/pageContainer */ \"./src/components/pageContainer/index.tsx\");\r\nvar uploader_1 = __webpack_require__(/*! @components/uploader */ \"./src/components/uploader/index.tsx\");\r\nvar uploadProgres_1 = __webpack_require__(/*! @components/uploadProgres */ \"./src/components/uploadProgres/index.tsx\");\r\nvar fakeObj_1 = __webpack_require__(/*! @utils/fakeObj */ \"./src/utils/fakeObj.ts\");\r\nvar Upload = /** @class */ (function (_super) {\r\n    __extends(Upload, _super);\r\n    function Upload(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.uploadCounter = 0;\r\n        _this.errorCounter = 0;\r\n        _this.pushFiles = function (file) {\r\n            var array = _this.state.fileArray;\r\n            for (var i = 0; i < file.length; i++) {\r\n                _this.uploadCounter++;\r\n                var obj = new fakeObj_1.default(file.item(i), _this.onUploadClose, _this.onError, function () {\r\n                    _this.setState(__assign({}, _this.state));\r\n                });\r\n                array.push(obj);\r\n            }\r\n            _this.setState({ fileArray: array });\r\n        };\r\n        _this.removeFile = function (index) {\r\n            var array = _this.state.fileArray;\r\n            var removed = array.splice(index, 1);\r\n            removed[0].abort();\r\n            _this.setState({ fileArray: array });\r\n        };\r\n        _this.onUploadClose = function () {\r\n            _this.uploadCounter--;\r\n            if (_this.uploadCounter <= 0) {\r\n                setTimeout(function () {\r\n                    alert(\"\\u4E0A\\u4F20\\u6210\\u529F! \" + _this.errorCounter + \" \\u4E2A\\u5931\\u8D25\");\r\n                }, 500);\r\n            }\r\n        };\r\n        _this.onError = function () {\r\n            _this.errorCounter++;\r\n            _this.onUploadClose();\r\n        };\r\n        _this.state = {\r\n            fileArray: []\r\n        };\r\n        return _this;\r\n    }\r\n    Upload.prototype.render = function () {\r\n        var _this = this;\r\n        return (React.createElement(pageContainer_1.default, { title: \"Upload Page\" },\r\n            React.createElement(uploader_1.default, { popFiles: this.pushFiles }),\r\n            React.createElement(\"ol\", { className: \"upload-list\" }, this.state.fileArray.map(function (file, index) {\r\n                return (React.createElement(\"li\", { key: index },\r\n                    file.name,\r\n                    React.createElement(uploadProgres_1.default, { progress: file.progress, key: index, onClose: function () {\r\n                            _this.removeFile(index);\r\n                        } })));\r\n            }))));\r\n    };\r\n    return Upload;\r\n}(React.Component));\r\nexports.default = Upload;\r\n\n\n//# sourceURL=webpack:///./src/pages/upload/index.tsx?");

/***/ }),

/***/ "./src/pages/upload/upload.css":
/*!*************************************!*\
  !*** ./src/pages/upload/upload.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./upload.css */ \"./node_modules/css-loader/dist/cjs.js!./src/pages/upload/upload.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/upload/upload.css?");

/***/ }),

/***/ "./src/settings.json":
/*!***************************!*\
  !*** ./src/settings.json ***!
  \***************************/
/*! exports provided: uploadPath, downloadPath, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"uploadPath\\\":\\\"/upload\\\",\\\"downloadPath\\\":\\\"/download\\\"}\");\n\n//# sourceURL=webpack:///./src/settings.json?");

/***/ }),

/***/ "./src/utils/fakeObj.ts":
/*!******************************!*\
  !*** ./src/utils/fakeObj.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SET = __webpack_require__(/*! @src/settings.json */ \"./src/settings.json\");\r\nvar progressObj_1 = __webpack_require__(/*! ./progressObj */ \"./src/utils/progressObj.ts\");\r\nvar FakeObj = /** @class */ (function (_super) {\r\n    __extends(FakeObj, _super);\r\n    function FakeObj(file, onSuccess, onError, onProgress) {\r\n        var _this = _super.call(this, file, onSuccess, onError, onProgress) || this;\r\n        var formData = new FormData();\r\n        formData.append(\"file\", file);\r\n        _this.fakexhr = new Promise(function (resolve, reject) {\r\n            _this.progress = 0;\r\n            var timeouter = function () {\r\n                _this.progress += Math.random() * 0.1;\r\n                _this.progress = Math.min(_this.progress, 1);\r\n                onProgress(_this.progress);\r\n                if (_this.progress >= 1) {\r\n                    resolve(1);\r\n                    return;\r\n                }\r\n                return setTimeout(timeouter, Math.random() * 100);\r\n            };\r\n            _this.timeout = timeouter();\r\n        })\r\n            .then(function (v) {\r\n            onSuccess();\r\n        })\r\n            .catch(function (e) {\r\n            onError(e);\r\n        });\r\n        return _this;\r\n    }\r\n    FakeObj.prototype.abort = function () {\r\n        clearTimeout(this.timeout);\r\n    };\r\n    return FakeObj;\r\n}(progressObj_1.default));\r\nexports.default = FakeObj;\r\n\n\n//# sourceURL=webpack:///./src/utils/fakeObj.ts?");

/***/ }),

/***/ "./src/utils/progressObj.ts":
/*!**********************************!*\
  !*** ./src/utils/progressObj.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar progressObj = /** @class */ (function () {\r\n    function progressObj(file, onSuccess, onError, onProgress) {\r\n        this.name = file.name;\r\n        this.file = file;\r\n        this.progress = 0;\r\n        this.onProgress = onProgress;\r\n    }\r\n    return progressObj;\r\n}());\r\nexports.default = progressObj;\r\n\n\n//# sourceURL=webpack:///./src/utils/progressObj.ts?");

/***/ }),

/***/ "./src/utils/videoRequest.ts":
/*!***********************************!*\
  !*** ./src/utils/videoRequest.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar url = \"https://www.runoob.com/try/demo_source/movie.mp4\";\r\nvar array = [url, url, url, url, url, url, url, url, url, url, , url, url, url, url, url, url, url, url];\r\nexports.default = array;\r\n\n\n//# sourceURL=webpack:///./src/utils/videoRequest.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });