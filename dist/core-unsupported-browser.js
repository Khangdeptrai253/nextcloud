/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./core/src/logger.js":
/*!****************************!*\
  !*** ./core/src/logger.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



const getLogger = user => {
  if (user === null) {
    return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').build();
  }
  return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').setUid(user.uid).build();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogger((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()));

/***/ }),

/***/ "./core/src/services/BrowserStorageService.js":
/*!****************************************************!*\
  !*** ./core/src/services/BrowserStorageService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/browser-storage */ "./node_modules/@nextcloud/browser-storage/dist/index.js");
/**
 * @copyright 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__.getBuilder)('core').clearOnLogout().persist().build());

/***/ }),

/***/ "./core/src/services/BrowsersListService.js":
/*!**************************************************!*\
  !*** ./core/src/services/BrowsersListService.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportedBrowsers": () => (/* binding */ supportedBrowsers),
/* harmony export */   "supportedBrowsersRegExp": () => (/* binding */ supportedBrowsersRegExp)
/* harmony export */ });
/* harmony import */ var browserslist_useragent_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browserslist-useragent-regexp */ "./node_modules/browserslist-useragent-regexp/dist/index.js");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browserslist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_browserslist_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/browserslist-config */ "./node_modules/@nextcloud/browserslist-config/browserlist.config.js");
/* harmony import */ var _nextcloud_browserslist_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_browserslist_config__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @copyright 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


// eslint-disable-next-line n/no-extraneous-import



// Generate a regex that matches user agents to detect incompatible browsers
const supportedBrowsersRegExp = (0,browserslist_useragent_regexp__WEBPACK_IMPORTED_MODULE_0__.getUserAgentRegex)({
  allowHigherVersions: true,
  browsers: (_nextcloud_browserslist_config__WEBPACK_IMPORTED_MODULE_2___default())
});
const supportedBrowsers = browserslist__WEBPACK_IMPORTED_MODULE_1___default()((_nextcloud_browserslist_config__WEBPACK_IMPORTED_MODULE_2___default()));

/***/ }),

/***/ "./core/src/unsupported-browser.js":
/*!*****************************************!*\
  !*** ./core/src/unsupported-browser.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_RedirectUnsupportedBrowsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/RedirectUnsupportedBrowsers.js */ "./core/src/utils/RedirectUnsupportedBrowsers.js");
/* harmony import */ var _services_BrowserStorageService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/BrowserStorageService.js */ "./core/src/services/BrowserStorageService.js");
/* harmony import */ var _views_UnsupportedBrowser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/UnsupportedBrowser.vue */ "./core/src/views/UnsupportedBrowser.vue");
/**
 * @copyright 2022 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */







// If the ignore token is set, redirect
if (_services_BrowserStorageService_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(_utils_RedirectUnsupportedBrowsers_js__WEBPACK_IMPORTED_MODULE_1__.browserStorageKey) === 'true') {
  window.location = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: '#unsupported-browser',
  // eslint-disable-next-line vue/match-component-file-name
  name: 'UnsupportedBrowserRoot',
  render: h => h(_views_UnsupportedBrowser_vue__WEBPACK_IMPORTED_MODULE_3__["default"])
}));

/***/ }),

/***/ "./core/src/utils/RedirectUnsupportedBrowsers.js":
/*!*******************************************************!*\
  !*** ./core/src/utils/RedirectUnsupportedBrowsers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "browserStorageKey": () => (/* binding */ browserStorageKey),
/* harmony export */   "testSupportedBrowser": () => (/* binding */ testSupportedBrowser)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _services_BrowsersListService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/BrowsersListService.js */ "./core/src/services/BrowsersListService.js");
/* harmony import */ var _services_BrowserStorageService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/BrowserStorageService.js */ "./core/src/services/BrowserStorageService.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./core/src/logger.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js */ "./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js")["Buffer"];
/**
 * @copyright 2022 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */





const browserStorageKey = 'unsupported-browser-ignore';
const redirectPath = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/unsupported');
const isBrowserOverridden = _services_BrowserStorageService_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(browserStorageKey) === 'true';

/**
 * Test the current browser user agent against our official browserslist config
 * and redirect if unsupported
 */
const testSupportedBrowser = function () {
  if (_services_BrowsersListService_js__WEBPACK_IMPORTED_MODULE_1__.supportedBrowsersRegExp.test(navigator.userAgent)) {
    _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('this browser is officially supported ! 🚀');
    return;
  }

  // If incompatible BUT ignored, let's keep going
  if (isBrowserOverridden) {
    _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('this browser is NOT supported but has been manually overridden ! ⚠️');
    return;
  }

  // If incompatible, NOT overridden AND NOT already on the warning page,
  // redirect to the unsupported warning page
  if (window.location.pathname.indexOf(redirectPath) === -1) {
    const redirectUrl = window.location.href.replace(window.location.origin, '');
    const base64Param = Buffer.from(redirectUrl).toString('base64');
    history.pushState(null, null, "".concat(redirectPath, "?redirect_url=").concat(base64Param));
    window.location.reload();
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_material_design_icons_Web_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Web.vue */ "./node_modules/vue-material-design-icons/Web.vue");
/* harmony import */ var _utils_RedirectUnsupportedBrowsers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/RedirectUnsupportedBrowsers.js */ "./core/src/utils/RedirectUnsupportedBrowsers.js");
/* harmony import */ var _services_BrowsersListService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/BrowsersListService.js */ "./core/src/services/BrowsersListService.js");
/* harmony import */ var _services_BrowserStorageService_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/BrowserStorageService.js */ "./core/src/services/BrowserStorageService.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger.js */ "./core/src/logger.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js */ "./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js")["Buffer"];









_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].debug('Supported browsers', {
  supportedBrowsers: _services_BrowsersListService_js__WEBPACK_IMPORTED_MODULE_6__.supportedBrowsers
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UnsupportedBrowser',
  components: {
    Web: vue_material_design_icons_Web_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcEmptyContent: (_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_3___default())
  },
  data() {
    return {
      agents: {}
    };
  },
  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    /**
     * Filter out or include mobile/desktop browsers depending
     * on the current user platform/device
     */
    filteredSupportedBrowsers() {
      return _services_BrowsersListService_js__WEBPACK_IMPORTED_MODULE_6__.supportedBrowsers.filter(browser => {
        if (!browser) {
          return false;
        }
        if (this.isMobile) {
          return this.isMobileBrowser(browser);
        }
        return !this.isMobileBrowser(browser);
      });
    },
    formattedBrowsersList() {
      const list = {};

      // supportedBrowsers is generated by webpack at compilation time
      this.filteredSupportedBrowsers.forEach(browser => {
        const [id, version] = browser.split(' ');
        if (!list[id] || list[id] < parseFloat(version, 10)) {
          list[id] = parseFloat(version, 10);
        }
      });
      return Object.keys(list).map(id => {
        var _this$agents$id, _this$agents$id2;
        if (!((_this$agents$id = this.agents[id]) !== null && _this$agents$id !== void 0 && _this$agents$id.browser)) {
          return null;
        }
        const version = list[id];
        const name = (_this$agents$id2 = this.agents[id]) === null || _this$agents$id2 === void 0 ? void 0 : _this$agents$id2.browser;
        return this.t('core', '{name} version {version} and above', {
          name,
          version
        });
      }).filter(entry => entry !== null);
    }
  },
  async beforeMount() {
    // Dynamic load big list of user agents
    // eslint-disable-next-line n/no-extraneous-import
    const {
      agents
    } = await __webpack_require__.e(/*! import() */ "core-common").then(__webpack_require__.t.bind(__webpack_require__, /*! caniuse-lite */ "./node_modules/caniuse-lite/dist/unpacker/index.js", 19));
    this.agents = agents;
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate,
    n: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translatePlural,
    // Set the flag allowing this browser and redirect to home
    forceBrowsing() {
      _services_BrowserStorageService_js__WEBPACK_IMPORTED_MODULE_7__["default"].setItem(_utils_RedirectUnsupportedBrowsers_js__WEBPACK_IMPORTED_MODULE_5__.browserStorageKey, true);

      // Redirect if there is the data
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('redirect_url')) {
        const redirectPath = Buffer.from(urlParams.get('redirect_url'), 'base64').toString() || '/';
        if (redirectPath.startsWith('/')) {
          window.location = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)(redirectPath);
          return;
        }
      }
      window.location = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/');
    },
    /**
     * Detect if the browserslist browser is a mobile one
     * https://github.com/browserslist/browserslist#query-composition
     *
     * @param {string} browser a valid browserlist browser. e.g `and_chr 90`
     */
    isMobileBrowser(browser) {
      browser = browser.toLowerCase();
      return browser.includes('and_') || browser.includes('android') || browser.includes('ios_') || browser.includes('mobile') || browser.includes('_mob') || browser.includes('samsung');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "content-unsupported-browser guest-box"
  }, [_c("NcEmptyContent", {
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Web")];
      },
      proxy: true
    }, {
      key: "action",
      fn: function () {
        return [_c("div", [_c("h2", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("core", "Your browser is not supported. Please upgrade to a newer version or a supported one.")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
          staticClass: "content-unsupported-browser__continue",
          attrs: {
            type: "primary"
          },
          on: {
            click: _vm.forceBrowsing
          }
        }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("core", "Continue with this unsupported browser")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("ul", {
          staticClass: "content-unsupported-browser__list"
        }, [_c("h3", [_vm._v(_vm._s(_vm.t("core", "Supported versions")))]), _vm._v(" "), _vm._l(_vm.formattedBrowsersList, function (browser) {
          return _c("li", {
            key: browser
          }, [_vm._v("\n\t\t\t\t\t" + _vm._s(browser) + "\n\t\t\t\t")]);
        })], 2)];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("core", "This browser is not supported")) + "\n\t\t")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content-unsupported-browser[data-v-4d32209e] {\n  display: flex;\n  justify-content: center;\n  width: 400px;\n  max-width: calc(90vw - 60px);\n  margin: auto;\n  padding: 30px;\n}\n.content-unsupported-browser .empty-content[data-v-4d32209e] {\n  margin: 0;\n}\n.content-unsupported-browser .empty-content[data-v-4d32209e] .empty-content__icon {\n  opacity: 1;\n}\n.content-unsupported-browser__continue[data-v-4d32209e] {\n  display: block;\n  margin: 30px auto;\n}\n.content-unsupported-browser__list[data-v-4d32209e] {\n  margin-top: 60px;\n  margin-bottom: 30px;\n}\n.content-unsupported-browser__list li[data-v-4d32209e] {\n  text-align: left;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./core/src/views/UnsupportedBrowser.vue":
/*!***********************************************!*\
  !*** ./core/src/views/UnsupportedBrowser.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UnsupportedBrowser_vue_vue_type_template_id_4d32209e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true& */ "./core/src/views/UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true&");
/* harmony import */ var _UnsupportedBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnsupportedBrowser.vue?vue&type=script&lang=js& */ "./core/src/views/UnsupportedBrowser.vue?vue&type=script&lang=js&");
/* harmony import */ var _UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true& */ "./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UnsupportedBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnsupportedBrowser_vue_vue_type_template_id_4d32209e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UnsupportedBrowser_vue_vue_type_template_id_4d32209e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d32209e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/views/UnsupportedBrowser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./core/src/views/UnsupportedBrowser.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./core/src/views/UnsupportedBrowser.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnsupportedBrowser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/views/UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./core/src/views/UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_template_id_4d32209e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_template_id_4d32209e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_template_id_4d32209e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=template&id=4d32209e&scoped=true&");


/***/ }),

/***/ "./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnsupportedBrowser_vue_vue_type_style_index_0_id_4d32209e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnsupportedBrowser.vue?vue&type=style&index=0&id=4d32209e&lang=scss&scoped=true&");


/***/ }),

/***/ "?3465":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"core-unsupported-browser": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./core/src/unsupported-browser.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-unsupported-browser.js.map?v=d6ace4b6a294057ee60d