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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./admin-page/src/style/style.less
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./admin-page/src/js/constructors/constructors.js
var createDiv = function createDiv(array) {
  var arr = [];
  array.forEach(function (object) {
    var div = document.createElement('div');
    object.id && (div.id = object.id);
    object["class"] && div.classList.add(object["class"]);
    arr.push(div);
  });
  return arr;
};
var creatureText = function creatureText(array) {
  var arr = [];
  array.forEach(function (object) {
    var textarea = document.createElement('textarea');
    object.id && (textarea.id = object.id);
    object.maxlength && (textarea.maxlength = object.maxlength);
    object.placeholder && (textarea.placeholder = object.placeholder);
    object["class"] && textarea.classList.add(object["class"]);
    object.required && (textarea.required = 'required');
    arr.push(textarea);
  });
  return arr;
};
var creatureInput = function creatureInput(array) {
  var arr = [];
  array.forEach(function (object) {
    var contentInput = document.createElement('input');
    object.id && (contentInput.id = object.id);
    object["class"] && contentInput.classList.add(object["class"]);
    arr.push(contentInput);
  });
  return arr;
};
// CONCATENATED MODULE: ./admin-page/src/js/admin-cascade/admin-cascade.js
var adminContainer = [{
  "class": "admin-container"
}];
var adminContent = [{
  "class": "admin-container__header"
}, {
  "class": "admin-container__body"
}];
var adminHeader = [{
  "class": "header-logo"
}, {
  "class": "header-name"
}, {
  "class": "header-btn",
  id: "btnCht"
}];
// CONCATENATED MODULE: ./admin-page/src/js/admin-body/adm-body.js
var registrationBody = [{
  "class": "body-registration"
}, {
  "class": "body-user-online"
}];
var registrationForm = [{
  "class": "body-registration__fromName"
}, {
  "class": "body-registration__fromIp"
}, {
  "class": "body-registration__btn"
}];
var registrationFormIp = [{
  "class": "reg-name"
}];
var registrationFormName = [{
  "class": "reg-ip"
}];
var registrationFormIpText = [{
  "class": "reg-name-text"
}];
var registrationFormNameText = [{
  "class": "reg-ip-text"
}];
// CONCATENATED MODULE: ./admin-page/src/js/View.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var View_View = function View() {
  var _this = this;

  _classCallCheck(this, View);

  _defineProperty(this, "initAdmin", function () {
    var _this$_rootAdmin, _containerAdmin$, _contentAdmin$, _contentAdmin$2, _bodyRegistration$, _formRegistration$, _formRegistration$2, _formRegistration$3, _formRegistration$4;

    var containerAdmin = createDiv(adminContainer);
    var contentAdmin = createDiv(adminContent);
    var headerAdmin = createDiv(adminHeader);
    var bodyRegistration = createDiv(registrationBody);
    var formRegistration = createDiv(registrationForm);
    var ipRegistrationForm = creatureInput(registrationFormIp);
    var nameRegistrationForm = creatureInput(registrationFormName);
    var textIpRegistrationForm = createDiv(registrationFormIpText);
    var textNameRegistrationForm = createDiv(registrationFormNameText);

    (_this$_rootAdmin = _this._rootAdmin).append.apply(_this$_rootAdmin, _toConsumableArray(containerAdmin));

    (_containerAdmin$ = containerAdmin[0]).append.apply(_containerAdmin$, _toConsumableArray(contentAdmin));

    (_contentAdmin$ = contentAdmin[0]).append.apply(_contentAdmin$, _toConsumableArray(headerAdmin));

    (_contentAdmin$2 = contentAdmin[1]).append.apply(_contentAdmin$2, _toConsumableArray(bodyRegistration));

    (_bodyRegistration$ = bodyRegistration[0]).append.apply(_bodyRegistration$, _toConsumableArray(formRegistration));

    (_formRegistration$ = formRegistration[0]).append.apply(_formRegistration$, _toConsumableArray(textIpRegistrationForm));

    (_formRegistration$2 = formRegistration[1]).append.apply(_formRegistration$2, _toConsumableArray(textNameRegistrationForm));

    (_formRegistration$3 = formRegistration[0]).append.apply(_formRegistration$3, _toConsumableArray(ipRegistrationForm));

    (_formRegistration$4 = formRegistration[1]).append.apply(_formRegistration$4, _toConsumableArray(nameRegistrationForm));

    headerAdmin[1].innerText = 'Star Chat';
    headerAdmin[2].innerText = 'Чат';
    textIpRegistrationForm[0].innerText = 'Имя';
    textNameRegistrationForm[0].innerText = 'IP адрес';
    formRegistration[2].innerText = 'зарегистрировать';
  });

  this._rootAdmin = document.getElementById('root-admin');
};

/* harmony default export */ var js_View = (View_View);
// CONCATENATED MODULE: ./admin-page/src/index.js

 // import Logik from "./js/logik";

var src_init = function init() {
  var viewAdmin = new js_View();
  viewAdmin.initAdmin();
}; // const logic = () => {
//
//     const Logik = new Logik();
//     Logik.comeToChat();
//
// };


src_init(); // logic();

var comeToChat = function comeToChat() {
  var btnCht = document.getElementById('btnCht');

  btnCht.onclick = function (e) {
    e.preventDefault();
    document.location.href = '../';
    console.log('asd');
  };
};

comeToChat();

/***/ })
/******/ ]);