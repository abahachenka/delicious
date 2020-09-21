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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_page_header_page_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

$(document).ready(() => {
  Object(_components_page_header_page_header_js__WEBPACK_IMPORTED_MODULE_0__["initHeaderMenu"])();
  Object(_components_page_header_page_header_js__WEBPACK_IMPORTED_MODULE_0__["initHeaderSearch"])();
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHeaderMenu", function() { return initHeaderMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHeaderSearch", function() { return initHeaderSearch; });
/**
 * Initializes the top menu event handlers
 */
function initHeaderMenu() {
  const $pageHeaderBurger = $('.page-header__burger');
  const $pageHeaderMenu = $('.page-header__menu');
  const $body = $('body'); // toggle menu on burger click

  $pageHeaderBurger.click(e => {
    $pageHeaderBurger.toggleClass('menu__icon-active');
    $pageHeaderMenu.toggleClass('menu-active');
    $body.toggleClass('lock');
  }); // close the menu when user clicks outside the menu area

  $(document).mouseup(e => {
    if ($pageHeaderMenu.hasClass('menu-active') && !$pageHeaderBurger.is(e.target) && !$pageHeaderMenu.is(e.target) // if the target of the click isn't the container...
    && $pageHeaderMenu.has(e.target).length === 0) {
      // ... nor a descendant of the container
      $pageHeaderMenu.removeClass('menu-active');
      $pageHeaderBurger.removeClass('menu__icon-active');
      $body.removeClass('lock');
    }
  }); // close the menu when window leaves the mobile breakpoint

  $(window).resize(() => {
    if ($(window).width() >= 768) {
      $pageHeaderMenu.removeClass('menu-active');
      $pageHeaderBurger.removeClass('menu__icon-active');
    }
  });
}
/**
 * Initializes the search event handlers
*/

function initHeaderSearch() {
  const $searchContainer = $('.page-header__search');
  const searchActiveClass = 'search_active';
  $('.page-header__search-icon').click(e => {
    let isActive = $searchContainer.hasClass(searchActiveClass);

    if (!isActive) {
      let $searchInput = $searchContainer.find('input')[0];
      setTimeout(function () {
        $searchInput.focus();
      }, 100);
    }

    $searchContainer.toggleClass(searchActiveClass);
  }); // Close search panel on clicking outside the panel

  $(document).mouseup(e => {
    if ($searchContainer.hasClass(searchActiveClass) && !$searchContainer.is(e.target) // if the target of the click isn't the container...
    && $searchContainer.has(e.target).length === 0) {
      // ... nor a descendant of the container
      $searchContainer.removeClass(searchActiveClass);
    }
  });
}

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map