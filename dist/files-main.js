/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/legacy/filelistSearch.js":
/*!*************************************************!*\
  !*** ./apps/files/src/legacy/filelistSearch.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/*
 * @copyright Copyright (c) 2021 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


(function () {
  const FilesPlugin = {
    attach(fileList) {
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('nextcloud:unified-search.search', _ref => {
        let {
          query
        } = _ref;
        fileList.setFilter(query);
      });
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('nextcloud:unified-search.reset', () => {
        this.query = null;
        fileList.setFilter('');
      });
    }
  };
  window.OC.Plugins.register('OCA.Files.FileList', FilesPlugin);
})();

/***/ }),

/***/ "./apps/files/src/legacy/navigationMapper.js":
/*!***************************************************!*\
  !*** ./apps/files/src/legacy/navigationMapper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




/**
 * Fetch and register the legacy files views
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const legacyViews = Object.values((0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('files', 'navigation', {}));
  if (legacyViews.length > 0) {
    _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Legacy files views detected. Processing...', legacyViews);
    legacyViews.forEach(view => {
      registerLegacyView(view);
      if (view.sublist) {
        view.sublist.forEach(subview => registerLegacyView({
          ...subview,
          parent: view.id
        }));
      }
    });
  }
}
const registerLegacyView = function (_ref) {
  let {
    id,
    name,
    order,
    icon,
    parent,
    classes = '',
    expanded,
    params
  } = _ref;
  OCP.Files.Navigation.register({
    id,
    name,
    order,
    params,
    parent,
    expanded: expanded === true,
    iconClass: icon ? "icon-".concat(icon) : 'nav-icon-' + id,
    legacy: true,
    sticky: classes.includes('pinned')
  });
};

/***/ }),

/***/ "./apps/files/src/logger.js":
/*!**********************************!*\
  !*** ./apps/files/src/logger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files').detectUser().build());

/***/ }),

/***/ "./apps/files/src/models/Setting.js":
/*!******************************************!*\
  !*** ./apps/files/src/models/Setting.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @copyright Copyright (c) 2019 Gary Kim <gary@garykim.dev>
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

class Setting {
  /**
   * Create a new files app setting
   *
   * @since 19.0.0
   * @param {string} name the name of this setting
   * @param {object} component the component
   * @param {Function} component.el function that returns an unmounted dom element to be added
   * @param {Function} [component.open] callback for when setting is added
   * @param {Function} [component.close] callback for when setting is closed
   */
  constructor(name, _ref) {
    let {
      el,
      open,
      close
    } = _ref;
    _defineProperty(this, "_close", void 0);
    _defineProperty(this, "_el", void 0);
    _defineProperty(this, "_name", void 0);
    _defineProperty(this, "_open", void 0);
    this._name = name;
    this._el = el;
    this._open = open;
    this._close = close;
    if (typeof this._open !== 'function') {
      this._open = () => {};
    }
    if (typeof this._close !== 'function') {
      this._close = () => {};
    }
  }
  get name() {
    return this._name;
  }
  get el() {
    return this._el;
  }
  get open() {
    return this._open;
  }
  get close() {
    return this._close;
  }
}

/***/ }),

/***/ "./apps/files/src/router/router.js":
/*!*****************************************!*\
  !*** ./apps/files/src/router/router.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
const router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  mode: 'history',
  // if index.php is in the url AND we got this far, then it's working:
  // let's keep using index.php in the url
  base: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/files', ''),
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    // Pretending we're using the default view
    alias: '/files'
  }, {
    path: '/:view/:fileid?',
    name: 'filelist',
    props: true
  }],
  // Custom stringifyQuery to prevent encoding of slashes in the url
  stringifyQuery(query) {
    const result = query_string__WEBPACK_IMPORTED_MODULE_1__["default"].stringify(query).replace(/%2F/gmi, '/');
    return result ? '?' + result : '';
  }
});
router.beforeEach((to, from, next) => {
  // TODO: Remove this when the legacy files list is removed
  try {
    var _window$OCP$Files, _window$OCP$Files$Nav, _views$find, _to$query, _from$query;
    const views = ((_window$OCP$Files = window.OCP.Files) === null || _window$OCP$Files === void 0 ? void 0 : (_window$OCP$Files$Nav = _window$OCP$Files.Navigation) === null || _window$OCP$Files$Nav === void 0 ? void 0 : _window$OCP$Files$Nav.views) || [];
    const isLegacy = ((_views$find = views.find(view => {
      var _to$params;
      return (view === null || view === void 0 ? void 0 : view.id) === (to === null || to === void 0 ? void 0 : (_to$params = to.params) === null || _to$params === void 0 ? void 0 : _to$params.view);
    })) === null || _views$find === void 0 ? void 0 : _views$find.legacy) === true;
    if (isLegacy && (to === null || to === void 0 ? void 0 : (_to$query = to.query) === null || _to$query === void 0 ? void 0 : _to$query.dir) !== (from === null || from === void 0 ? void 0 : (_from$query = from.query) === null || _from$query === void 0 ? void 0 : _from$query.dir)) {
      var _to$query2, _to$query3;
      // https://github.com/nextcloud/server/blob/1b422df12ac8eb26514849fb117e0dcf58623b88/apps/files/js/filelist.js#L2052-L2076
      window.OCA.Files.App.fileList.changeDirectory((to === null || to === void 0 ? void 0 : (_to$query2 = to.query) === null || _to$query2 === void 0 ? void 0 : _to$query2.dir) || '/', false, false, to === null || to === void 0 ? void 0 : (_to$query3 = to.query) === null || _to$query3 === void 0 ? void 0 : _to$query3.fileid, true);
    }
  } catch (error) {}
  next();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./apps/files/src/services/ServiceWorker.js":
/*!**************************************************!*\
  !*** ./apps/files/src/services/ServiceWorker.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/**
 * @copyright Copyright (c) 2019 Gary Kim <gary@garykim.dev>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', async () => {
      try {
        const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/files/preview-service-worker.js', {}, {
          noRewrite: true
        });
        const registration = await navigator.serviceWorker.register(url, {
          scope: '/'
        });
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('SW registered: ', {
          registration
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error('SW registration failed: ', {
          error
        });
      }
    });
  } else {
    _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Service Worker is not enabled on this browser.');
  }
});

/***/ }),

/***/ "./apps/files/src/services/Settings.js":
/*!*********************************************!*\
  !*** ./apps/files/src/services/Settings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @copyright Copyright (c) 2019 Gary Kim <gary@garykim.dev>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

class Settings {
  constructor() {
    _defineProperty(this, "_settings", void 0);
    this._settings = [];
    console.debug('OCA.Files.Settings initialized');
  }

  /**
   * Register a new setting
   *
   * @since 19.0.0
   * @param {OCA.Files.Settings.Setting} view element to add to settings
   * @return {boolean} whether registering was successful
   */
  register(view) {
    if (this._settings.filter(e => e.name === view.name).length > 0) {
      console.error('A setting with the same name is already registered');
      return false;
    }
    this._settings.push(view);
    return true;
  }

  /**
   * All settings elements
   *
   * @return {OCA.Files.Settings.Setting[]} All currently registered settings
   */
  get settings() {
    return this._settings;
  }
}

/***/ }),

/***/ "./apps/files/src/services/Templates.js":
/*!**********************************************!*\
  !*** ./apps/files/src/services/Templates.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFromTemplate": () => (/* binding */ createFromTemplate),
/* harmony export */   "getTemplates": () => (/* binding */ getTemplates)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



const getTemplates = async function () {
  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files/api/v1/templates'));
  return response.data.ocs.data;
};

/**
 * Create a new file from a specified template
 *
 * @param {string} filePath The new file destination path
 * @param {string} templatePath The template source path
 * @param {string} templateType The template type e.g 'user'
 */
const createFromTemplate = async function (filePath, templatePath, templateType) {
  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files/api/v1/templates/create'), {
    filePath,
    templatePath,
    templateType
  });
  return response.data.ocs.data;
};

/***/ }),

/***/ "./apps/files/src/templates.js":
/*!*************************************!*\
  !*** ./apps/files/src/templates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _utils_davUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/davUtils.js */ "./apps/files/src/utils/davUtils.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _views_TemplatePicker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/TemplatePicker.vue */ "./apps/files/src/views/TemplatePicker.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
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











// Set up logger
const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files').detectUser().build();

// Add translates functions
vue__WEBPACK_IMPORTED_MODULE_8__["default"].mixin({
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate,
    n: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translatePlural
  }
});

// Create document root
const TemplatePickerRoot = document.createElement('div');
TemplatePickerRoot.id = 'template-picker';
document.body.appendChild(TemplatePickerRoot);

// Retrieve and init templates
let templates = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('files', 'templates', []);
let templatesPath = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('files', 'templates_path', false);
logger.debug('Templates providers', templates);
logger.debug('Templates folder', {
  templatesPath
});

// Init vue app
const View = vue__WEBPACK_IMPORTED_MODULE_8__["default"].extend(_views_TemplatePicker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
const TemplatePicker = new View({
  name: 'TemplatePicker',
  propsData: {
    logger
  }
});
TemplatePicker.$mount('#template-picker');

// Init template engine after load to make sure it's the last injected entry
window.addEventListener('DOMContentLoaded', function () {
  if (!templatesPath) {
    logger.debug('Templates folder not initialized');
    const initTemplatesPlugin = {
      attach(menu) {
        // register the new menu entry
        menu.addMenuEntry({
          id: 'template-init',
          displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Set up templates folder'),
          templateName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Templates'),
          iconClass: 'icon-template-add',
          fileType: 'file',
          actionLabel: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Create new templates folder'),
          actionHandler(name) {
            initTemplatesFolder(name);
            menu.removeMenuEntry('template-init');
          }
        });
      }
    };
    OC.Plugins.register('OCA.Files.NewFileMenu', initTemplatesPlugin);
  }
});

// Init template files menu
templates.forEach((provider, index) => {
  const newTemplatePlugin = {
    attach(menu) {
      const fileList = menu.fileList;

      // only attach to main file list, public view is not supported yet
      if (fileList.id !== 'files' && fileList.id !== 'files.public') {
        return;
      }

      // register the new menu entry
      menu.addMenuEntry({
        id: "template-new-".concat(provider.app, "-").concat(index),
        displayName: provider.label,
        templateName: provider.label + provider.extension,
        iconClass: provider.iconClass || 'icon-file',
        fileType: 'file',
        actionLabel: provider.actionLabel,
        actionHandler(name) {
          TemplatePicker.open(name, provider);
        }
      });
    }
  };
  OC.Plugins.register('OCA.Files.NewFileMenu', newTemplatePlugin);
});

/**
 * Init the template directory
 *
 * @param {string} name the templates folder name
 */
const initTemplatesFolder = async function (name) {
  const templatePath = ((0,_utils_davUtils_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentDirectory)() + "/".concat(name)).replace('//', '/');
  try {
    logger.debug('Initializing the templates directory', {
      templatePath
    });
    const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_5__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateOcsUrl)('apps/files/api/v1/templates/path'), {
      templatePath,
      copySystemTemplates: true
    });

    // Go to template directory
    OCA.Files.App.currentFileList.changeDirectory(templatePath, true, true);
    templates = response.data.ocs.data.templates;
    templatesPath = response.data.ocs.data.template_path;
  } catch (error) {
    logger.error('Unable to initialize the templates directory');
    (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Unable to initialize the templates directory'));
  }
};

/***/ }),

/***/ "./apps/files/src/utils/davUtils.js":
/*!******************************************!*\
  !*** ./apps/files/src/utils/davUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentDirectory": () => (/* binding */ getCurrentDirectory),
/* harmony export */   "getRootPath": () => (/* binding */ getRootPath),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "isPublic": () => (/* binding */ isPublic)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



const getRootPath = function () {
  if ((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)()) {
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)("dav/files/".concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid));
  } else {
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)('webdav').replace('/remote.php', '/public.php');
  }
};
const isPublic = function () {
  return !(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();
};
const getToken = function () {
  return document.getElementById('sharingToken') && document.getElementById('sharingToken').value;
};

/**
 * Return the current directory, fallback to root
 *
 * @return {string}
 */
const getCurrentDirectory = function () {
  var _OCA, _OCA$Files, _OCA$Files$App, _OCA$Files$App$curren;
  const currentDirInfo = ((_OCA = OCA) === null || _OCA === void 0 ? void 0 : (_OCA$Files = _OCA.Files) === null || _OCA$Files === void 0 ? void 0 : (_OCA$Files$App = _OCA$Files.App) === null || _OCA$Files$App === void 0 ? void 0 : (_OCA$Files$App$curren = _OCA$Files$App.currentFileList) === null || _OCA$Files$App$curren === void 0 ? void 0 : _OCA$Files$App$curren.dirInfo) || {
    path: '/',
    name: ''
  };

  // Make sure we don't have double slashes
  return "".concat(currentDirInfo.path, "/").concat(currentDirInfo.name).replace(/\/\//gi, '/');
};

/***/ }),

/***/ "./apps/files/src/utils/fileUtils.js":
/*!*******************************************!*\
  !*** ./apps/files/src/utils/fileUtils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeFilePath": () => (/* binding */ encodeFilePath),
/* harmony export */   "extractFilePaths": () => (/* binding */ extractFilePaths)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

const encodeFilePath = function (path) {
  const pathSections = (path.startsWith('/') ? path : "/".concat(path)).split('/');
  let relativePath = '';
  pathSections.forEach(section => {
    if (section !== '') {
      relativePath += '/' + encodeURIComponent(section);
    }
  });
  return relativePath;
};

/**
 * Extract dir and name from file path
 *
 * @param {string} path the full path
 * @return {string[]} [dirPath, fileName]
 */
const extractFilePaths = function (path) {
  const pathSections = path.split('/');
  const fileName = pathSections[pathSections.length - 1];
  const dirPath = pathSections.slice(0, pathSections.length - 1).join('/');
  return [dirPath, fileName];
};


/***/ }),

/***/ "./core/src/OCP/accessibility.js":
/*!***************************************!*\
  !*** ./core/src/OCP/accessibility.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setPageHeading": () => (/* binding */ setPageHeading)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/**
 * @copyright Copyright (c) 2022 Joas Schilling <coding@schilljs.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
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



/**
 * Set the page heading
 *
 * @param {string} heading page title from the history api
 * @since 27.0.0
 */
function setPageHeading(heading) {
  const headingEl = document.getElementById('page-heading-level-1');
  if (headingEl) {
    headingEl.textContent = heading;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * @return {boolean} Whether the user opted-out of shortcuts so that they should not be registered
   */
  disableKeyboardShortcuts() {
    return (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('theming', 'shortcutsDisabled', false);
  },
  setPageHeading
});

/***/ }),

/***/ "./apps/files/src/actions/deleteAction.ts":
/*!************************************************!*\
  !*** ./apps/files/src/actions/deleteAction.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _mdi_svg_svg_trash_can_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/trash-can.svg?raw */ "./node_modules/@mdi/svg/svg/trash-can.svg?raw");
/* harmony import */ var _services_FileAction_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/FileAction.ts */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */









const queue = new p_queue__WEBPACK_IMPORTED_MODULE_8__["default"]({
  concurrency: 1
});
(0,_services_FileAction_ts__WEBPACK_IMPORTED_MODULE_5__.registerFileAction)(new _services_FileAction_ts__WEBPACK_IMPORTED_MODULE_5__.FileAction({
  id: 'delete',
  displayName(nodes, view) {
    return view.id === 'trashbin' ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files_trashbin', 'Delete permanently') : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Delete');
  },
  iconSvgInline: () => _mdi_svg_svg_trash_can_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
  enabled(nodes) {
    return nodes.length > 0 && nodes.map(node => node.permissions).every(permission => (permission & _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Permission.DELETE) !== 0);
  },
  async exec(node) {
    const {
      origin
    } = new URL(node.source);
    const encodedSource = origin + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_7__.encodePath)(node.source.slice(origin.length));
    try {
      await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](encodedSource);
      // Let's delete even if it's moved to the trashbin
      // since it has been removed from the current view
      //  and changing the view will trigger a reload anyway.
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:deleted', node);
      return true;
    } catch (error) {
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].error('Error while deleting a file', {
        error,
        source: node.source,
        node
      });
      return false;
    }
  },
  async execBatch(nodes, view, dir) {
    // Map each node to a promise that resolves with the result of exec(node)
    const promises = nodes.map(node => {
      // Create a promise that resolves with the result of exec(node)
      const promise = new Promise(resolve => {
        queue.add(async () => {
          const result = await this.exec(node, view, dir);
          resolve(result !== null ? result : false);
        });
      });
      return promise;
    });
    return Promise.all(promises);
  },
  order: 100
}));

/***/ }),

/***/ "./apps/files/src/actions/openFolderAction.ts":
/*!****************************************************!*\
  !*** ./apps/files/src/actions/openFolderAction.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/folder.svg?raw */ "./node_modules/@mdi/svg/svg/folder.svg?raw");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_FileAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/FileAction */ "./apps/files/src/services/FileAction.ts");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */





(0,_services_FileAction__WEBPACK_IMPORTED_MODULE_4__.registerFileAction)(new _services_FileAction__WEBPACK_IMPORTED_MODULE_4__.FileAction({
  id: 'open-folder',
  displayName(files) {
    // Only works on single node
    const displayName = files[0].attributes.displayName || files[0].basename;
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'Open folder {displayName}', {
      displayName
    });
  },
  iconSvgInline: () => _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
  enabled(nodes) {
    // Only works on single node
    if (nodes.length !== 1) {
      return false;
    }
    const node = nodes[0];
    return node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder && (node.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.READ) !== 0;
  },
  async exec(node, view, dir) {
    if (!node || node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder) {
      return false;
    }
    window.OCP.Files.Router.goToRoute(null, null, {
      dir: (0,path__WEBPACK_IMPORTED_MODULE_3__.join)(dir, node.basename)
    });
    return null;
  },
  async execBatch(nodes, view, dir) {
    return Promise.all(nodes.map(node => this.exec(node, view, dir)));
  },
  // Main action if enabled, meaning folders only
  order: -100,
  default: true
}));

/***/ }),

/***/ "./apps/files/src/actions/sidebarAction.ts":
/*!*************************************************!*\
  !*** ./apps/files/src/actions/sidebarAction.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_DETAILS": () => (/* binding */ ACTION_DETAILS)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_information_variant_svg_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/svg/svg/information-variant.svg?raw */ "./node_modules/@mdi/svg/svg/information-variant.svg?raw");
/* harmony import */ var _services_FileAction_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/FileAction.ts */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




const ACTION_DETAILS = 'details';
(0,_services_FileAction_ts__WEBPACK_IMPORTED_MODULE_2__.registerFileAction)(new _services_FileAction_ts__WEBPACK_IMPORTED_MODULE_2__.FileAction({
  id: ACTION_DETAILS,
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'Details'),
  iconSvgInline: () => _mdi_svg_svg_information_variant_svg_raw__WEBPACK_IMPORTED_MODULE_1__,
  // Sidebar currently supports user folder only, /files/USER
  enabled: files => {
    var _window, _window$OCA, _window$OCA$Files;
    return !!((_window = window) !== null && _window !== void 0 && (_window$OCA = _window.OCA) !== null && _window$OCA !== void 0 && (_window$OCA$Files = _window$OCA.Files) !== null && _window$OCA$Files !== void 0 && _window$OCA$Files.Sidebar) && files.some(node => {
      var _node$root;
      return (_node$root = node.root) === null || _node$root === void 0 ? void 0 : _node$root.startsWith('/files/');
    });
  },
  async exec(node) {
    try {
      var _window2, _window2$OCA, _window2$OCA$Files, _window2$OCA$Files$Si, _window2$OCA$Files$Si2;
      // TODO: migrate Sidebar to use a Node instead
      (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$OCA = _window2.OCA) === null || _window2$OCA === void 0 ? void 0 : (_window2$OCA$Files = _window2$OCA.Files) === null || _window2$OCA$Files === void 0 ? void 0 : (_window2$OCA$Files$Si = _window2$OCA$Files.Sidebar) === null || _window2$OCA$Files$Si === void 0 ? void 0 : (_window2$OCA$Files$Si2 = _window2$OCA$Files$Si.open) === null || _window2$OCA$Files$Si2 === void 0 ? void 0 : _window2$OCA$Files$Si2.call(_window2$OCA$Files$Si, node.path);
      return null;
    } catch (error) {
      _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('Error while opening sidebar', {
        error
      });
      return false;
    }
  },
  default: true,
  order: -50
}));

/***/ }),

/***/ "./apps/files/src/main.ts":
/*!********************************!*\
  !*** ./apps/files/src/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./apps/files/src/templates.js");
/* harmony import */ var _legacy_filelistSearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy/filelistSearch.js */ "./apps/files/src/legacy/filelistSearch.js");
/* harmony import */ var _actions_deleteAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/deleteAction */ "./apps/files/src/actions/deleteAction.ts");
/* harmony import */ var _actions_openFolderAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/openFolderAction */ "./apps/files/src/actions/openFolderAction.ts");
/* harmony import */ var _actions_sidebarAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/sidebarAction */ "./apps/files/src/actions/sidebarAction.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _views_FilesList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/FilesList.vue */ "./apps/files/src/views/FilesList.vue");
/* harmony import */ var _services_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/Navigation */ "./apps/files/src/services/Navigation.ts");
/* harmony import */ var _views_Navigation_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/Navigation.vue */ "./apps/files/src/views/Navigation.vue");
/* harmony import */ var _legacy_navigationMapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./legacy/navigationMapper.js */ "./apps/files/src/legacy/navigationMapper.js");
/* harmony import */ var _services_ServiceWorker_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/ServiceWorker.js */ "./apps/files/src/services/ServiceWorker.js");
/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router/router.js */ "./apps/files/src/router/router.js");
/* harmony import */ var _services_RouterService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/RouterService */ "./apps/files/src/services/RouterService.ts");
/* harmony import */ var _models_Setting_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/Setting.js */ "./apps/files/src/models/Setting.js");
/* harmony import */ var _services_Settings_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/Settings.js */ "./apps/files/src/services/Settings.js");
var _window$OCA$Files, _window$OCP$Files;
















// Init private and public Files namespace
window.OCA.Files = (_window$OCA$Files = window.OCA.Files) !== null && _window$OCA$Files !== void 0 ? _window$OCA$Files : {};
window.OCP.Files = (_window$OCP$Files = window.OCP.Files) !== null && _window$OCP$Files !== void 0 ? _window$OCP$Files : {};
// Expose router
const Router = new _services_RouterService__WEBPACK_IMPORTED_MODULE_11__["default"](_router_router_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
Object.assign(window.OCP.Files, {
  Router
});
// Init Pinia store
vue__WEBPACK_IMPORTED_MODULE_14__["default"].use(pinia__WEBPACK_IMPORTED_MODULE_15__.PiniaVuePlugin);
const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_15__.createPinia)();
// Init Navigation Service
const Navigation = new _services_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"]();
Object.assign(window.OCP.Files, {
  Navigation
});
vue__WEBPACK_IMPORTED_MODULE_14__["default"].prototype.$navigation = Navigation;
// Init Files App Settings Service
const Settings = new _services_Settings_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
Object.assign(window.OCA.Files, {
  Settings
});
Object.assign(window.OCA.Files.Settings, {
  Setting: _models_Setting_js__WEBPACK_IMPORTED_MODULE_12__["default"]
});
// Init Navigation View
const View = vue__WEBPACK_IMPORTED_MODULE_14__["default"].extend(_views_Navigation_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
const FilesNavigationRoot = new View({
  name: 'FilesNavigationRoot',
  propsData: {
    Navigation
  },
  router: _router_router_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  pinia
});
FilesNavigationRoot.$mount('#app-navigation-files');
// Init content list view
const ListView = vue__WEBPACK_IMPORTED_MODULE_14__["default"].extend(_views_FilesList_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
const FilesList = new ListView({
  name: 'FilesListRoot',
  router: _router_router_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  pinia
});
FilesList.$mount('#app-content-vue');
// Init legacy and new files views
(0,_legacy_navigationMapper_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
// Register preview service worker
(0,_services_ServiceWorker_js__WEBPACK_IMPORTED_MODULE_9__["default"])();

/***/ }),

/***/ "./apps/files/src/mixins/filesListWidth.ts":
/*!*************************************************!*\
  !*** ./apps/files/src/mixins/filesListWidth.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  data() {
    return {
      filesListWidth: null
    };
  },
  created() {
    const fileListEl = document.querySelector('#app-content-vue');
    this.$resizeObserver = new ResizeObserver(entries => {
      if (entries.length > 0 && entries[0].target === fileListEl) {
        this.filesListWidth = entries[0].contentRect.width;
      }
    });
    this.$resizeObserver.observe(fileListEl);
  },
  beforeDestroy() {
    this.$resizeObserver.disconnect();
  }
}));

/***/ }),

/***/ "./apps/files/src/mixins/filesSorting.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/mixins/filesSorting.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_viewConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/viewConfig */ "./apps/files/src/store/viewConfig.ts");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  computed: {
    ...(0,pinia__WEBPACK_IMPORTED_MODULE_2__.mapState)(_store_viewConfig__WEBPACK_IMPORTED_MODULE_0__.useViewConfigStore, ['getConfig', 'setSortingBy', 'toggleSortingDirection']),
    currentView() {
      return this.$navigation.active;
    },
    /**
     * Get the sorting mode for the current view
     */
    sortingMode() {
      var _this$getConfig, _this$currentView;
      return ((_this$getConfig = this.getConfig(this.currentView.id)) === null || _this$getConfig === void 0 ? void 0 : _this$getConfig.sorting_mode) || ((_this$currentView = this.currentView) === null || _this$currentView === void 0 ? void 0 : _this$currentView.defaultSortKey) || 'basename';
    },
    /**
     * Get the sorting direction for the current view
     */
    isAscSorting() {
      var _this$getConfig2;
      const sortingDirection = (_this$getConfig2 = this.getConfig(this.currentView.id)) === null || _this$getConfig2 === void 0 ? void 0 : _this$getConfig2.sorting_direction;
      return sortingDirection === 'asc';
    }
  },
  methods: {
    toggleSortBy(key) {
      // If we're already sorting by this key, flip the direction
      if (this.sortingMode === key) {
        this.toggleSortingDirection(this.currentView.id);
        return;
      }
      // else sort ASC by this new key
      this.setSortingBy(key, this.currentView.id);
    }
  }
}));

/***/ }),

/***/ "./apps/files/src/services/FileAction.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/services/FileAction.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileAction": () => (/* binding */ FileAction),
/* harmony export */   "getFileActions": () => (/* binding */ getFileActions),
/* harmony export */   "registerFileAction": () => (/* binding */ registerFileAction)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

class FileAction {
  constructor(action) {
    _defineProperty(this, "_action", void 0);
    this.validateAction(action);
    this._action = action;
  }
  get id() {
    return this._action.id;
  }
  get displayName() {
    return this._action.displayName;
  }
  get iconSvgInline() {
    return this._action.iconSvgInline;
  }
  get enabled() {
    return this._action.enabled;
  }
  get exec() {
    return this._action.exec;
  }
  get execBatch() {
    return this._action.execBatch;
  }
  get order() {
    return this._action.order;
  }
  get default() {
    return this._action.default;
  }
  get inline() {
    return this._action.inline;
  }
  get renderInline() {
    return this._action.renderInline;
  }
  validateAction(action) {
    if (!action.id || typeof action.id !== 'string') {
      throw new Error('Invalid id');
    }
    if (!action.displayName || typeof action.displayName !== 'function') {
      throw new Error('Invalid displayName function');
    }
    if (!action.iconSvgInline || typeof action.iconSvgInline !== 'function') {
      throw new Error('Invalid iconSvgInline function');
    }
    if (!action.exec || typeof action.exec !== 'function') {
      throw new Error('Invalid exec function');
    }
    // Optional properties --------------------------------------------
    if ('enabled' in action && typeof action.enabled !== 'function') {
      throw new Error('Invalid enabled function');
    }
    if ('execBatch' in action && typeof action.execBatch !== 'function') {
      throw new Error('Invalid execBatch function');
    }
    if ('order' in action && typeof action.order !== 'number') {
      throw new Error('Invalid order');
    }
    if ('default' in action && typeof action.default !== 'boolean') {
      throw new Error('Invalid default');
    }
    if ('inline' in action && typeof action.inline !== 'function') {
      throw new Error('Invalid inline function');
    }
    if ('renderInline' in action && typeof action.renderInline !== 'function') {
      throw new Error('Invalid renderInline function');
    }
  }
}
const registerFileAction = function (action) {
  if (typeof window._nc_fileactions === 'undefined') {
    window._nc_fileactions = [];
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].debug('FileActions initialized');
  }
  // Check duplicates
  if (window._nc_fileactions.find(search => search.id === action.id)) {
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("FileAction ".concat(action.id, " already registered"), {
      action
    });
    return;
  }
  window._nc_fileactions.push(action);
};
const getFileActions = function () {
  return window._nc_fileactions || [];
};

/***/ }),

/***/ "./apps/files/src/services/Navigation.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/services/Navigation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-svg */ "./node_modules/is-svg/index.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor() {
    _defineProperty(this, "_views", []);
    _defineProperty(this, "_currentView", null);
    _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Navigation service initialized');
  }
  register(view) {
    try {
      isValidNavigation(view);
      isUniqueNavigation(view, this._views);
    } catch (e) {
      if (e instanceof Error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error(e.message, {
          view
        });
      }
      throw e;
    }
    if (view.legacy) {
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].warn('Legacy view detected, please migrate to Vue');
    }
    if (view.iconClass) {
      view.legacy = true;
    }
    this._views.push(view);
  }
  remove(id) {
    const index = this._views.findIndex(view => view.id === id);
    if (index !== -1) {
      this._views.splice(index, 1);
    }
  }
  get views() {
    return this._views;
  }
  setActive(view) {
    this._currentView = view;
  }
  get active() {
    return this._currentView;
  }
});
/**
 * Make sure the given view is unique
 * and not already registered.
 */
const isUniqueNavigation = function (view, views) {
  if (views.find(search => search.id === view.id)) {
    throw new Error("Navigation id ".concat(view.id, " is already registered"));
  }
  return true;
};
/**
 * Typescript cannot validate an interface.
 * Please keep in sync with the Navigation interface requirements.
 */
const isValidNavigation = function (view) {
  if (!view.id || typeof view.id !== 'string') {
    throw new Error('Navigation id is required and must be a string');
  }
  if (!view.name || typeof view.name !== 'string') {
    throw new Error('Navigation name is required and must be a string');
  }
  /**
   * Legacy handle their content and icon differently
   * TODO: remove when support for legacy views is removed
   */
  if (!view.legacy) {
    if (!view.getContents || typeof view.getContents !== 'function') {
      throw new Error('Navigation getContents is required and must be a function');
    }
    if (!view.icon || typeof view.icon !== 'string' || !(0,is_svg__WEBPACK_IMPORTED_MODULE_0__["default"])(view.icon)) {
      throw new Error('Navigation icon is required and must be a valid svg string');
    }
  }
  if (!('order' in view) || typeof view.order !== 'number') {
    throw new Error('Navigation order is required and must be a number');
  }
  // Optional properties
  if (view.columns) {
    view.columns.forEach(isValidColumn);
  }
  if (view.emptyView && typeof view.emptyView !== 'function') {
    throw new Error('Navigation emptyView must be a function');
  }
  if (view.parent && typeof view.parent !== 'string') {
    throw new Error('Navigation parent must be a string');
  }
  if ('sticky' in view && typeof view.sticky !== 'boolean') {
    throw new Error('Navigation sticky must be a boolean');
  }
  if ('expanded' in view && typeof view.expanded !== 'boolean') {
    throw new Error('Navigation expanded must be a boolean');
  }
  if (view.defaultSortKey && typeof view.defaultSortKey !== 'string') {
    throw new Error('Navigation defaultSortKey must be a string');
  }
  return true;
};
/**
 * Typescript cannot validate an interface.
 * Please keep in sync with the Column interface requirements.
 */
const isValidColumn = function (column) {
  if (!column.id || typeof column.id !== 'string') {
    throw new Error('A column id is required');
  }
  if (!column.title || typeof column.title !== 'string') {
    throw new Error('A column title is required');
  }
  if (!column.render || typeof column.render !== 'function') {
    throw new Error('A render function is required');
  }
  // Optional properties
  if (column.sort && typeof column.sort !== 'function') {
    throw new Error('Column sortFunction must be a function');
  }
  if (column.summary && typeof column.summary !== 'function') {
    throw new Error('Column summary must be a function');
  }
  return true;
};

/***/ }),

/***/ "./apps/files/src/services/PreviewService.ts":
/*!***************************************************!*\
  !*** ./apps/files/src/services/PreviewService.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCachedPreview": () => (/* binding */ isCachedPreview)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
// The preview service worker cache name (see webpack config)
const SWCacheName = 'previews';
/**
 * Check if the preview is already cached by the service worker
 */
const isCachedPreview = function (previewUrl) {
  return caches.open(SWCacheName).then(function (cache) {
    return cache.match(previewUrl).then(function (response) {
      return !!response;
    });
  });
};

/***/ }),

/***/ "./apps/files/src/services/RouterService.ts":
/*!**************************************************!*\
  !*** ./apps/files/src/services/RouterService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RouterService)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class RouterService {
  constructor(router) {
    _defineProperty(this, "_router", void 0);
    this._router = router;
  }
  /**
   * Trigger a route change on the files app
   *
   * @param path the url path, eg: '/trashbin?dir=/Deleted'
   * @param replace replace the current history
   * @see https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
   */
  goTo(path) {
    let replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return this._router.push({
      path,
      replace
    });
  }
  /**
   * Trigger a route change on the files App
   *
   * @param name the route name
   * @param params the route parameters
   * @param query the url query parameters
   * @param replace replace the current history
   * @see https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
   */
  goToRoute(name, params, query, replace) {
    return this._router.push({
      name,
      query,
      params,
      replace
    });
  }
}

/***/ }),

/***/ "./apps/files/src/store/actionsmenu.ts":
/*!*********************************************!*\
  !*** ./apps/files/src/store/actionsmenu.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useActionsMenuStore": () => (/* binding */ useActionsMenuStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* eslint-disable */

const useActionsMenuStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('actionsmenu', {
  state: () => ({
    opened: null
  })
});

/***/ }),

/***/ "./apps/files/src/store/files.ts":
/*!***************************************!*\
  !*** ./apps/files/src/store/files.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilesStore": () => (/* binding */ useFilesStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");




const useFilesStore = function () {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.defineStore)('files', {
    state: () => ({
      files: {},
      roots: {}
    }),
    getters: {
      /**
       * Get a file or folder by id
       */
      getNode: state => id => state.files[id],
      /**
       * Get a list of files or folders by their IDs
       * Does not return undefined values
       */
      getNodes: state => ids => ids.map(id => state.files[id]).filter(Boolean),
      /**
       * Get a file or folder by id
       */
      getRoot: state => service => state.roots[service]
    },
    actions: {
      updateNodes(nodes) {
        // Update the store all at once
        const files = nodes.reduce((acc, node) => {
          if (!node.fileid) {
            _logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn('Trying to update/set a node without fileid', node);
            return acc;
          }
          acc[node.fileid] = node;
          return acc;
        }, {});
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].set(this, 'files', {
          ...this.files,
          ...files
        });
      },
      deleteNodes(nodes) {
        nodes.forEach(node => {
          if (node.fileid) {
            vue__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](this.files, node.fileid);
          }
        });
      },
      setRoot(_ref) {
        let {
          service,
          root
        } = _ref;
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.roots, service, root);
      },
      onDeletedNode(node) {
        this.deleteNodes([node]);
      }
    }
  });
  const fileStore = store(...arguments);
  // Make sure we only register the listeners once
  if (!fileStore._initialized) {
    // subscribe('files:node:created', fileStore.onCreatedNode)
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:node:deleted', fileStore.onDeletedNode);
    // subscribe('files:node:moved', fileStore.onMovedNode)
    // subscribe('files:node:updated', fileStore.onUpdatedNode)
    fileStore._initialized = true;
  }
  return fileStore;
};

/***/ }),

/***/ "./apps/files/src/store/keyboard.ts":
/*!******************************************!*\
  !*** ./apps/files/src/store/keyboard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeyboardStore": () => (/* binding */ useKeyboardStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* eslint-disable */


/**
 * Observe various events and save the current
 * special keys states. Useful for checking the
 * current status of a key when executing a method.
 */
const useKeyboardStore = function () {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('keyboard', {
    state: () => ({
      altKey: false,
      ctrlKey: false,
      metaKey: false,
      shiftKey: false
    }),
    actions: {
      onEvent(event) {
        if (!event) {
          event = window.event;
        }
        vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'altKey', !!event.altKey);
        vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'ctrlKey', !!event.ctrlKey);
        vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'metaKey', !!event.metaKey);
        vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'shiftKey', !!event.shiftKey);
      }
    }
  });
  const keyboardStore = store(...arguments);
  // Make sure we only register the listeners once
  if (!keyboardStore._initialized) {
    window.addEventListener('keydown', keyboardStore.onEvent);
    window.addEventListener('keyup', keyboardStore.onEvent);
    window.addEventListener('mousemove', keyboardStore.onEvent);
    keyboardStore._initialized = true;
  }
  return keyboardStore;
};

/***/ }),

/***/ "./apps/files/src/store/paths.ts":
/*!***************************************!*\
  !*** ./apps/files/src/store/paths.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePathsStore": () => (/* binding */ usePathsStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");


const usePathsStore = function () {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('paths', {
    state: () => ({
      paths: {}
    }),
    getters: {
      getPath: state => {
        return (service, path) => {
          if (!state.paths[service]) {
            return undefined;
          }
          return state.paths[service][path];
        };
      }
    },
    actions: {
      addPath(payload) {
        // If it doesn't exists, init the service state
        if (!this.paths[payload.service]) {
          vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.paths, payload.service, {});
        }
        // Now we can set the provided path
        vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.paths[payload.service], payload.path, payload.fileid);
      }
    }
  });
  const pathsStore = store(...arguments);
  // Make sure we only register the listeners once
  if (!pathsStore._initialized) {
    // TODO: watch folders to update paths?
    // subscribe('files:node:created', pathsStore.onCreatedNode)
    // subscribe('files:node:deleted', pathsStore.onDeletedNode)
    // subscribe('files:node:moved', pathsStore.onMovedNode)
    pathsStore._initialized = true;
  }
  return pathsStore;
};

/***/ }),

/***/ "./apps/files/src/store/selection.ts":
/*!*******************************************!*\
  !*** ./apps/files/src/store/selection.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelectionStore": () => (/* binding */ useSelectionStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* eslint-disable */


const useSelectionStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('selection', {
  state: () => ({
    selected: [],
    lastSelection: [],
    lastSelectedIndex: null
  }),
  actions: {
    /**
     * Set the selection of fileIds
     */
    set() {
      let selection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'selected', selection);
    },
    /**
     * Set the last selected index
     */
    setLastIndex() {
      let lastSelectedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      // Update the last selection if we provided a new selection starting point
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'lastSelection', lastSelectedIndex ? this.selected : []);
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'lastSelectedIndex', lastSelectedIndex);
    },
    /**
     * Reset the selection
     */
    reset() {
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'selected', []);
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'lastSelection', []);
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'lastSelectedIndex', null);
    }
  }
});

/***/ }),

/***/ "./apps/files/src/store/userconfig.ts":
/*!********************************************!*\
  !*** ./apps/files/src/store/userconfig.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUserConfigStore": () => (/* binding */ useUserConfigStore)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* eslint-disable */






const userConfig = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('files', 'config', {
  show_hidden: false,
  crop_image_previews: true
});
const useUserConfigStore = function () {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_4__.defineStore)('userconfig', {
    state: () => ({
      userConfig
    }),
    actions: {
      /**
       * Update the user config local store
       */
      onUpdate(key, value) {
        vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.userConfig, key, value);
      },
      /**
       * Update the user config local store AND on server side
       */
      async update(key, value) {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/files/api/v1/config/' + key), {
          value
        });
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files:config:updated', {
          key,
          value
        });
      }
    }
  });
  const userConfigStore = store(...arguments);
  // Make sure we only register the listeners once
  if (!userConfigStore._initialized) {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.subscribe)('files:config:updated', function (_ref) {
      let {
        key,
        value
      } = _ref;
      userConfigStore.onUpdate(key, value);
    });
    userConfigStore._initialized = true;
  }
  return userConfigStore;
};

/***/ }),

/***/ "./apps/files/src/store/viewConfig.ts":
/*!********************************************!*\
  !*** ./apps/files/src/store/viewConfig.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useViewConfigStore": () => (/* binding */ useViewConfigStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* eslint-disable */






const viewConfig = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('files', 'viewConfigs', {});
const useViewConfigStore = function () {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_4__.defineStore)('viewconfig', {
    state: () => ({
      viewConfig
    }),
    getters: {
      getConfig: state => view => state.viewConfig[view] || {}
    },
    actions: {
      /**
       * Update the view config local store
       */
      onUpdate(view, key, value) {
        if (!this.viewConfig[view]) {
          vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.viewConfig, view, {});
        }
        vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.viewConfig[view], key, value);
      },
      /**
       * Update the view config local store AND on server side
       */
      async update(view, key, value) {
        _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("/apps/files/api/v1/views/".concat(view, "/").concat(key)), {
          value
        });
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:viewconfig:updated', {
          view,
          key,
          value
        });
      },
      /**
       * Set the sorting key AND sort by ASC
       * The key param must be a valid key of a File object
       * If not found, will be searched within the File attributes
       */
      setSortingBy() {
        let key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'basename';
        let view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'files';
        // Save new config
        this.update(view, 'sorting_mode', key);
        this.update(view, 'sorting_direction', 'asc');
      },
      /**
       * Toggle the sorting direction
       */
      toggleSortingDirection() {
        let view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'files';
        const config = this.getConfig(view) || {
          'sorting_direction': 'asc'
        };
        const newDirection = config.sorting_direction === 'asc' ? 'desc' : 'asc';
        // Save new config
        this.update(view, 'sorting_direction', newDirection);
      }
    }
  });
  const viewConfigStore = store(...arguments);
  // Make sure we only register the listeners once
  if (!viewConfigStore._initialized) {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:viewconfig:updated', function (_ref) {
      let {
        view,
        key,
        value
      } = _ref;
      viewConfigStore.onUpdate(view, key, value);
    });
    viewConfigStore._initialized = true;
  }
  return viewConfigStore;
};

/***/ }),

/***/ "./apps/files/src/utils/hashUtils.ts":
/*!*******************************************!*\
  !*** ./apps/files/src/utils/hashUtils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hashCode": () => (/* binding */ hashCode)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const hashCode = function (str) {
  return str.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cancelable-promise */ "./node_modules/cancelable-promise/umd/CancelablePromise.js");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cancelable_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_material_design_icons_File_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/File.vue */ "./node_modules/vue-material-design-icons/File.vue");
/* harmony import */ var vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/Folder.vue */ "./node_modules/vue-material-design-icons/Folder.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_material_design_icons_Star_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-material-design-icons/Star.vue */ "./node_modules/vue-material-design-icons/Star.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _actions_sidebarAction_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/sidebarAction.ts */ "./apps/files/src/actions/sidebarAction.ts");
/* harmony import */ var _services_FileAction_ts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/FileAction.ts */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _utils_hashUtils_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/hashUtils.ts */ "./apps/files/src/utils/hashUtils.ts");
/* harmony import */ var _services_PreviewService_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/PreviewService.ts */ "./apps/files/src/services/PreviewService.ts");
/* harmony import */ var _store_actionsmenu_ts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/actionsmenu.ts */ "./apps/files/src/store/actionsmenu.ts");
/* harmony import */ var _store_files_ts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../store/files.ts */ "./apps/files/src/store/files.ts");
/* harmony import */ var _store_keyboard_ts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../store/keyboard.ts */ "./apps/files/src/store/keyboard.ts");
/* harmony import */ var _store_selection_ts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../store/selection.ts */ "./apps/files/src/store/selection.ts");
/* harmony import */ var _store_userconfig_ts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../store/userconfig.ts */ "./apps/files/src/store/userconfig.ts");
/* harmony import */ var _CustomElementRender_vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CustomElementRender.vue */ "./apps/files/src/components/CustomElementRender.vue");
/* harmony import */ var _CustomSvgIconRender_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./CustomSvgIconRender.vue */ "./apps/files/src/components/CustomSvgIconRender.vue");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");



























// The registered actions list
const actions = (0,_services_FileAction_ts__WEBPACK_IMPORTED_MODULE_15__.getFileActions)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_26__["default"].extend({
  name: 'FileEntry',
  components: {
    CustomElementRender: _CustomElementRender_vue__WEBPACK_IMPORTED_MODULE_23__["default"],
    CustomSvgIconRender: _CustomSvgIconRender_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
    FileIcon: vue_material_design_icons_File_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FolderIcon: vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_2__.Fragment,
    NcActionButton: (_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_9___default()),
    NcActions: (_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_10___default()),
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_11___default()),
    NcLoadingIcon: (_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_12___default()),
    StarIcon: vue_material_design_icons_Star_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    isSizeAvailable: {
      type: Boolean,
      default: false
    },
    source: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    nodes: {
      type: Array,
      required: true
    },
    filesListWidth: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const actionsMenuStore = (0,_store_actionsmenu_ts__WEBPACK_IMPORTED_MODULE_18__.useActionsMenuStore)();
    const filesStore = (0,_store_files_ts__WEBPACK_IMPORTED_MODULE_19__.useFilesStore)();
    const keyboardStore = (0,_store_keyboard_ts__WEBPACK_IMPORTED_MODULE_20__.useKeyboardStore)();
    const selectionStore = (0,_store_selection_ts__WEBPACK_IMPORTED_MODULE_21__.useSelectionStore)();
    const userConfigStore = (0,_store_userconfig_ts__WEBPACK_IMPORTED_MODULE_22__.useUserConfigStore)();
    return {
      actionsMenuStore,
      filesStore,
      keyboardStore,
      selectionStore,
      userConfigStore
    };
  },
  data() {
    return {
      backgroundFailed: false,
      backgroundImage: '',
      boundariesElement: document.querySelector('.app-content > .files-list'),
      loading: ''
    };
  },
  computed: {
    userConfig() {
      return this.userConfigStore.userConfig;
    },
    currentView() {
      return this.$navigation.active;
    },
    columns() {
      var _this$currentView;
      // Hide columns if the list is too small
      if (this.filesListWidth < 512) {
        return [];
      }
      return ((_this$currentView = this.currentView) === null || _this$currentView === void 0 ? void 0 : _this$currentView.columns) || [];
    },
    dir() {
      var _this$$route, _this$$route$query;
      // Remove any trailing slash but leave root slash
      return (((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$query = _this$$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.dir) || '/').replace(/^(.+)\/$/, '$1');
    },
    fileid() {
      var _this$source, _this$source$fileid, _this$source$fileid$t;
      return (_this$source = this.source) === null || _this$source === void 0 ? void 0 : (_this$source$fileid = _this$source.fileid) === null || _this$source$fileid === void 0 ? void 0 : (_this$source$fileid$t = _this$source$fileid.toString) === null || _this$source$fileid$t === void 0 ? void 0 : _this$source$fileid$t.call(_this$source$fileid);
    },
    extension() {
      var _this$source$attribut;
      if ((_this$source$attribut = this.source.attributes) !== null && _this$source$attribut !== void 0 && _this$source$attribut.displayName) {
        return (0,path__WEBPACK_IMPORTED_MODULE_3__.extname)(this.source.attributes.displayName);
      }
      return this.source.extension || '';
    },
    displayName() {
      const ext = this.extension;
      const name = this.source.attributes.displayName || this.source.basename;
      // Strip extension from name if defined
      return !ext ? name : name.slice(0, 0 - ext.length);
    },
    size() {
      const size = parseInt(this.source.size, 10) || 0;
      if (typeof size !== 'number' || size < 0) {
        return this.t('files', 'Pending');
      }
      return (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.formatFileSize)(size, true, true).replace('iB', 'B');
    },
    sizeOpacity() {
      const size = parseInt(this.source.size, 10) || 0;
      if (!size || size < 0) {
        return 1;
      }
      // Whatever theme is active, the contrast will pass WCAG AA
      // with color main text over main background and an opacity of 0.7
      const minOpacity = 0.7;
      const maxOpacitySize = 10 * 1024 * 1024;
      return minOpacity + (1 - minOpacity) * Math.pow(this.source.size / maxOpacitySize, 2);
    },
    linkAttrs() {
      if (this.enabledDefaultActions.length > 0) {
        const action = this.enabledDefaultActions[0];
        const displayName = action.displayName([this.source], this.currentView);
        return {
          class: ['files-list__row-default-action', 'files-list__row-action-' + action.id],
          role: 'button',
          title: displayName
        };
      }
      /**
       * A folder would never reach this point
       * as it has open-folder as default action.
       * Just to be safe, let's handle it.
       */
      if (this.source.type === 'folder') {
        const to = {
          ...this.$route,
          query: {
            dir: (0,path__WEBPACK_IMPORTED_MODULE_3__.join)(this.dir, this.source.basename)
          }
        };
        return {
          is: 'router-link',
          title: this.t('files', 'Open folder {name}', {
            name: this.displayName
          }),
          to
        };
      }
      return {
        href: this.source.source,
        // TODO: Use first action title ?
        title: this.t('files', 'Download file {name}', {
          name: this.displayName
        })
      };
    },
    selectedFiles() {
      return this.selectionStore.selected;
    },
    isSelected() {
      var _this$source2, _this$source2$fileid, _this$source2$fileid$;
      return this.selectedFiles.includes((_this$source2 = this.source) === null || _this$source2 === void 0 ? void 0 : (_this$source2$fileid = _this$source2.fileid) === null || _this$source2$fileid === void 0 ? void 0 : (_this$source2$fileid$ = _this$source2$fileid.toString) === null || _this$source2$fileid$ === void 0 ? void 0 : _this$source2$fileid$.call(_this$source2$fileid));
    },
    cropPreviews() {
      return this.userConfig.crop_image_previews;
    },
    previewUrl() {
      try {
        const url = new URL(window.location.origin + this.source.attributes.previewUrl);
        // Request tiny previews
        url.searchParams.set('x', '32');
        url.searchParams.set('y', '32');
        // Handle cropping
        url.searchParams.set('a', this.cropPreviews === true ? '0' : '1');
        return url.href;
      } catch (e) {
        return null;
      }
    },
    mimeIconUrl() {
      var _window$OC, _window$OC$MimeType, _window$OC$MimeType$g;
      const mimeType = this.source.mime || 'application/octet-stream';
      const mimeIconUrl = (_window$OC = window.OC) === null || _window$OC === void 0 ? void 0 : (_window$OC$MimeType = _window$OC.MimeType) === null || _window$OC$MimeType === void 0 ? void 0 : (_window$OC$MimeType$g = _window$OC$MimeType.getIconUrl) === null || _window$OC$MimeType$g === void 0 ? void 0 : _window$OC$MimeType$g.call(_window$OC$MimeType, mimeType);
      if (mimeIconUrl) {
        return "url(".concat(mimeIconUrl, ")");
      }
      return '';
    },
    enabledActions() {
      return actions.filter(action => !action.enabled || action.enabled([this.source], this.currentView)).sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    enabledInlineActions() {
      if (this.filesListWidth < 768) {
        return [];
      }
      return this.enabledActions.filter(action => {
        var _action$inline;
        return action === null || action === void 0 ? void 0 : (_action$inline = action.inline) === null || _action$inline === void 0 ? void 0 : _action$inline.call(action, this.source, this.currentView);
      });
    },
    enabledMenuActions() {
      if (this.filesListWidth < 768) {
        // If we have a default action, do not render the first one
        if (this.enabledDefaultActions.length > 0) {
          return this.enabledActions.slice(1);
        }
        return this.enabledActions;
      }
      const actions = [...this.enabledInlineActions, ...this.enabledActions.filter(action => !action.inline)];
      // If we have a default action, do not render the first one
      if (this.enabledDefaultActions.length > 0) {
        return actions.slice(1);
      }
      return actions;
    },
    enabledDefaultActions() {
      return [...this.enabledActions.filter(action => action.default)];
    },
    openedMenu: {
      get() {
        return this.actionsMenuStore.opened === this.uniqueId;
      },
      set(opened) {
        this.actionsMenuStore.opened = opened ? this.uniqueId : null;
      }
    },
    uniqueId() {
      return (0,_utils_hashUtils_ts__WEBPACK_IMPORTED_MODULE_16__.hashCode)(this.source.source);
    },
    isFavorite() {
      return this.source.attributes.favorite === 1;
    }
  },
  watch: {
    active(active, before) {
      if (active === false && before === true) {
        this.resetState();
        // When the row is not active anymore
        // remove the display from the row to prevent
        // keyboard interaction with it.
        this.$el.parentNode.style.display = 'none';
        return;
      }
      // Restore default tabindex
      this.$el.parentNode.style.display = '';
    },
    /**
     * When the source changes, reset the preview
     * and fetch the new one.
     */
    previewUrl() {
      this.clearImg();
      this.debounceIfNotCached();
    }
  },
  /**
   * The row is mounted once and reused as we scroll.
   */
  mounted() {
    var _this$$el$parentNode, _this$$el$parentNode$;
    // ⚠ Init the debounce function on mount and
    // not when the module is imported  to
    // avoid sharing between recycled components
    this.debounceGetPreview = (0,debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
      this.fetchAndApplyPreview();
    }, 150, false);
    // Fetch the preview on init
    this.debounceIfNotCached();
    // Right click watcher on tr
    (_this$$el$parentNode = this.$el.parentNode) === null || _this$$el$parentNode === void 0 ? void 0 : (_this$$el$parentNode$ = _this$$el$parentNode.addEventListener) === null || _this$$el$parentNode$ === void 0 ? void 0 : _this$$el$parentNode$.call(_this$$el$parentNode, 'contextmenu', this.onRightClick);
  },
  beforeDestroy() {
    this.resetState();
  },
  methods: {
    async debounceIfNotCached() {
      if (!this.previewUrl) {
        return;
      }
      // Check if we already have this preview cached
      const isCached = await (0,_services_PreviewService_ts__WEBPACK_IMPORTED_MODULE_17__.isCachedPreview)(this.previewUrl);
      if (isCached) {
        this.backgroundImage = "url(".concat(this.previewUrl, ")");
        this.backgroundFailed = false;
        return;
      }
      // We don't have this preview cached or it expired, requesting it
      this.debounceGetPreview();
    },
    fetchAndApplyPreview() {
      // Ignore if no preview
      if (!this.previewUrl) {
        return;
      }
      // If any image is being processed, reset it
      if (this.previewPromise) {
        this.clearImg();
      }
      // Store the promise to be able to cancel it
      this.previewPromise = new (cancelable_promise__WEBPACK_IMPORTED_MODULE_6___default())((resolve, reject, onCancel) => {
        const img = new Image();
        // If active, load the preview with higher priority
        img.fetchpriority = this.active ? 'high' : 'auto';
        img.onload = () => {
          this.backgroundImage = "url(".concat(this.previewUrl, ")");
          this.backgroundFailed = false;
          resolve(img);
        };
        img.onerror = () => {
          this.backgroundFailed = true;
          reject(img);
        };
        img.src = this.previewUrl;
        // Image loading has been canceled
        onCancel(() => {
          img.onerror = null;
          img.onload = null;
          img.src = '';
        });
      });
    },
    resetState() {
      // Reset loading state
      this.loading = '';
      // Reset the preview
      this.clearImg();
      // Close menu
      this.openedMenu = false;
    },
    clearImg() {
      this.backgroundImage = '';
      this.backgroundFailed = false;
      if (this.previewPromise) {
        this.previewPromise.cancel();
        this.previewPromise = null;
      }
    },
    async onActionClick(action) {
      const displayName = action.displayName([this.source], this.currentView);
      try {
        // Set the loading marker
        this.loading = action.id;
        vue__WEBPACK_IMPORTED_MODULE_26__["default"].set(this.source, '_loading', true);
        const success = await action.exec(this.source, this.currentView, this.dir);
        // If the action returns null, we stay silent
        if (success === null) {
          return;
        }
        if (success) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showSuccess)(this.t('files', '"{displayName}" action executed successfully', {
            displayName
          }));
          return;
        }
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)(this.t('files', '"{displayName}" action failed', {
          displayName
        }));
      } catch (e) {
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error('Error while executing action', {
          action,
          e
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)(this.t('files', '"{displayName}" action failed', {
          displayName
        }));
      } finally {
        // Reset the loading marker
        this.loading = '';
        vue__WEBPACK_IMPORTED_MODULE_26__["default"].set(this.source, '_loading', false);
      }
    },
    execDefaultAction(event) {
      if (this.enabledDefaultActions.length > 0) {
        event.preventDefault();
        event.stopPropagation();
        // Execute the first default action if any
        this.enabledDefaultActions[0].exec(this.source, this.currentView, this.dir);
      }
    },
    openDetailsIfAvailable(event) {
      const detailsAction = this.enabledDefaultActions.find(action => action.id === _actions_sidebarAction_ts__WEBPACK_IMPORTED_MODULE_14__.ACTION_DETAILS);
      if (detailsAction) {
        event.preventDefault();
        event.stopPropagation();
        detailsAction.exec(this.source, this.currentView);
      }
    },
    onSelectionChange(selection) {
      var _this$keyboardStore;
      const newSelectedIndex = this.index;
      const lastSelectedIndex = this.selectionStore.lastSelectedIndex;
      // Get the last selected and select all files in between
      if ((_this$keyboardStore = this.keyboardStore) !== null && _this$keyboardStore !== void 0 && _this$keyboardStore.shiftKey && lastSelectedIndex !== null) {
        const isAlreadySelected = this.selectedFiles.includes(this.fileid);
        const start = Math.min(newSelectedIndex, lastSelectedIndex);
        const end = Math.max(lastSelectedIndex, newSelectedIndex);
        const lastSelection = this.selectionStore.lastSelection;
        const filesToSelect = this.nodes.map(file => {
          var _file$fileid, _file$fileid$toString;
          return (_file$fileid = file.fileid) === null || _file$fileid === void 0 ? void 0 : (_file$fileid$toString = _file$fileid.toString) === null || _file$fileid$toString === void 0 ? void 0 : _file$fileid$toString.call(_file$fileid);
        }).slice(start, end + 1);
        // If already selected, update the new selection _without_ the current file
        const selection = [...lastSelection, ...filesToSelect].filter(fileId => !isAlreadySelected || fileId !== this.fileid);
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].debug('Shift key pressed, selecting all files in between', {
          start,
          end,
          filesToSelect,
          isAlreadySelected
        });
        // Keep previous lastSelectedIndex to be use for further shift selections
        this.selectionStore.set(selection);
        return;
      }
      _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].debug('Updating selection', {
        selection
      });
      this.selectionStore.set(selection);
      this.selectionStore.setLastIndex(newSelectedIndex);
    },
    // Open the actions menu on right click
    onRightClick(event) {
      // If already opened, fallback to default browser
      if (this.openedMenu) {
        return;
      }
      // If the clicked row is in the selection, open global menu
      const isMoreThanOneSelected = this.selectedFiles.length > 1;
      this.actionsMenuStore.opened = this.isSelected && isMoreThanOneSelected ? 'global' : this.uniqueId;
      // Prevent any browser defaults
      event.preventDefault();
      event.stopPropagation();
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate,
    formatFileSize: _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.formatFileSize
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _store_files_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/files.ts */ "./apps/files/src/store/files.ts");
/* harmony import */ var _store_paths_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/paths.ts */ "./apps/files/src/store/paths.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend({
  name: 'FilesListFooter',
  components: {},
  props: {
    isSizeAvailable: {
      type: Boolean,
      default: false
    },
    nodes: {
      type: Array,
      required: true
    },
    summary: {
      type: String,
      default: ''
    },
    filesListWidth: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const pathsStore = (0,_store_paths_ts__WEBPACK_IMPORTED_MODULE_3__.usePathsStore)();
    const filesStore = (0,_store_files_ts__WEBPACK_IMPORTED_MODULE_2__.useFilesStore)();
    return {
      filesStore,
      pathsStore
    };
  },
  computed: {
    currentView() {
      return this.$navigation.active;
    },
    dir() {
      var _this$$route, _this$$route$query;
      // Remove any trailing slash but leave root slash
      return (((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$query = _this$$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.dir) || '/').replace(/^(.+)\/$/, '$1');
    },
    currentFolder() {
      var _this$currentView;
      if (!((_this$currentView = this.currentView) !== null && _this$currentView !== void 0 && _this$currentView.id)) {
        return;
      }
      if (this.dir === '/') {
        return this.filesStore.getRoot(this.currentView.id);
      }
      const fileId = this.pathsStore.getPath(this.currentView.id, this.dir);
      return this.filesStore.getNode(fileId);
    },
    columns() {
      var _this$currentView2;
      // Hide columns if the list is too small
      if (this.filesListWidth < 512) {
        return [];
      }
      return ((_this$currentView2 = this.currentView) === null || _this$currentView2 === void 0 ? void 0 : _this$currentView2.columns) || [];
    },
    totalSize() {
      var _this$currentFolder;
      // If we have the size already, let's use it
      if ((_this$currentFolder = this.currentFolder) !== null && _this$currentFolder !== void 0 && _this$currentFolder.size) {
        return (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)(this.currentFolder.size, true, true).replace('iB', 'B');
      }
      // Otherwise let's compute it
      return (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)(this.nodes.reduce((total, node) => total + node.size || 0, 0), true, true).replace('iB', 'B');
    }
  },
  methods: {
    classForColumn(column) {
      return {
        'files-list__row-column-custom': true,
        ["files-list__row-".concat(this.currentView.id, "-").concat(column.id)]: true
      };
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _store_files_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/files.ts */ "./apps/files/src/store/files.ts");
/* harmony import */ var _store_selection_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selection.ts */ "./apps/files/src/store/selection.ts");
/* harmony import */ var _FilesListHeaderActions_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilesListHeaderActions.vue */ "./apps/files/src/components/FilesListHeaderActions.vue");
/* harmony import */ var _FilesListHeaderButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilesListHeaderButton.vue */ "./apps/files/src/components/FilesListHeaderButton.vue");
/* harmony import */ var _mixins_filesSorting_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/filesSorting.ts */ "./apps/files/src/mixins/filesSorting.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_8__["default"].extend({
  name: 'FilesListHeader',
  components: {
    FilesListHeaderButton: _FilesListHeaderButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1___default()),
    FilesListHeaderActions: _FilesListHeaderActions_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_mixins_filesSorting_ts__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    isSizeAvailable: {
      type: Boolean,
      default: false
    },
    nodes: {
      type: Array,
      required: true
    },
    filesListWidth: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const filesStore = (0,_store_files_ts__WEBPACK_IMPORTED_MODULE_2__.useFilesStore)();
    const selectionStore = (0,_store_selection_ts__WEBPACK_IMPORTED_MODULE_3__.useSelectionStore)();
    return {
      filesStore,
      selectionStore
    };
  },
  computed: {
    currentView() {
      return this.$navigation.active;
    },
    columns() {
      var _this$currentView;
      // Hide columns if the list is too small
      if (this.filesListWidth < 512) {
        return [];
      }
      return ((_this$currentView = this.currentView) === null || _this$currentView === void 0 ? void 0 : _this$currentView.columns) || [];
    },
    dir() {
      var _this$$route, _this$$route$query;
      // Remove any trailing slash but leave root slash
      return (((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$query = _this$$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.dir) || '/').replace(/^(.+)\/$/, '$1');
    },
    selectAllBind() {
      const label = this.isNoneSelected || this.isSomeSelected ? this.t('files', 'Select all') : this.t('files', 'Unselect all');
      return {
        'aria-label': label,
        checked: this.isAllSelected,
        indeterminate: this.isSomeSelected,
        title: label
      };
    },
    selectedNodes() {
      return this.selectionStore.selected;
    },
    isAllSelected() {
      return this.selectedNodes.length === this.nodes.length;
    },
    isNoneSelected() {
      return this.selectedNodes.length === 0;
    },
    isSomeSelected() {
      return !this.isAllSelected && !this.isNoneSelected;
    }
  },
  methods: {
    classForColumn(column) {
      return {
        'files-list__column': true,
        'files-list__column--sortable': !!column.sort,
        'files-list__row-column-custom': true,
        ["files-list__row-".concat(this.currentView.id, "-").concat(column.id)]: true
      };
    },
    onToggleAll(selected) {
      if (selected) {
        const selection = this.nodes.map(node => node.fileid.toString());
        _logger_js__WEBPACK_IMPORTED_MODULE_7__["default"].debug('Added all nodes to selection', {
          selection
        });
        this.selectionStore.setLastIndex(null);
        this.selectionStore.set(selection);
      } else {
        _logger_js__WEBPACK_IMPORTED_MODULE_7__["default"].debug('Cleared selection');
        this.selectionStore.reset();
      }
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _services_FileAction_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/FileAction.ts */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _store_actionsmenu_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actionsmenu.ts */ "./apps/files/src/store/actionsmenu.ts");
/* harmony import */ var _store_files_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/files.ts */ "./apps/files/src/store/files.ts");
/* harmony import */ var _store_selection_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/selection.ts */ "./apps/files/src/store/selection.ts");
/* harmony import */ var _mixins_filesListWidth_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/filesListWidth.ts */ "./apps/files/src/mixins/filesListWidth.ts");
/* harmony import */ var _CustomSvgIconRender_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CustomSvgIconRender.vue */ "./apps/files/src/components/CustomSvgIconRender.vue");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");













// The registered actions list
const actions = (0,_services_FileAction_ts__WEBPACK_IMPORTED_MODULE_5__.getFileActions)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_12__["default"].extend({
  name: 'FilesListHeaderActions',
  components: {
    CustomSvgIconRender: _CustomSvgIconRender_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    NcActions: (_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcActionButton: (_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcLoadingIcon: (_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4___default())
  },
  mixins: [_mixins_filesListWidth_ts__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    currentView: {
      type: Object,
      required: true
    },
    selectedNodes: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const actionsMenuStore = (0,_store_actionsmenu_ts__WEBPACK_IMPORTED_MODULE_6__.useActionsMenuStore)();
    const filesStore = (0,_store_files_ts__WEBPACK_IMPORTED_MODULE_7__.useFilesStore)();
    const selectionStore = (0,_store_selection_ts__WEBPACK_IMPORTED_MODULE_8__.useSelectionStore)();
    return {
      actionsMenuStore,
      filesStore,
      selectionStore
    };
  },
  data() {
    return {
      loading: null
    };
  },
  computed: {
    dir() {
      var _this$$route, _this$$route$query;
      // Remove any trailing slash but leave root slash
      return (((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$query = _this$$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.dir) || '/').replace(/^(.+)\/$/, '$1');
    },
    enabledActions() {
      return actions.filter(action => action.execBatch).filter(action => !action.enabled || action.enabled(this.nodes, this.currentView)).sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    nodes() {
      return this.selectedNodes.map(fileid => this.getNode(fileid)).filter(node => node);
    },
    areSomeNodesLoading() {
      return this.nodes.some(node => node._loading);
    },
    openedMenu: {
      get() {
        return this.actionsMenuStore.opened === 'global';
      },
      set(opened) {
        this.actionsMenuStore.opened = opened ? 'global' : null;
      }
    },
    inlineActions() {
      if (this.filesListWidth < 512) {
        return 0;
      }
      if (this.filesListWidth < 768) {
        return 1;
      }
      if (this.filesListWidth < 1024) {
        return 2;
      }
      return 3;
    }
  },
  methods: {
    /**
     * Get a cached note from the store
     *
     * @param {number} fileId the file id to get
     * @return {Folder|File}
     */
    getNode(fileId) {
      return this.filesStore.getNode(fileId);
    },
    async onActionClick(action) {
      const displayName = action.displayName(this.nodes, this.currentView);
      const selectionIds = this.selectedNodes;
      try {
        // Set loading markers
        this.loading = action.id;
        this.nodes.forEach(node => {
          vue__WEBPACK_IMPORTED_MODULE_12__["default"].set(node, '_loading', true);
        });
        // Dispatch action execution
        const results = await action.execBatch(this.nodes, this.currentView, this.dir);
        // Check if all actions returned null
        if (!results.some(result => result !== null)) {
          // If the actions returned null, we stay silent
          this.selectionStore.reset();
          return;
        }
        // Handle potential failures
        if (results.some(result => result === false)) {
          // Remove the failed ids from the selection
          const failedIds = selectionIds.filter((fileid, index) => results[index] === false);
          this.selectionStore.set(failedIds);
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(this.t('files', '"{displayName}" failed on some elements ', {
            displayName
          }));
          return;
        }
        // Show success message and clear selection
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(this.t('files', '"{displayName}" batch action executed successfully', {
          displayName
        }));
        this.selectionStore.reset();
      } catch (e) {
        _logger_js__WEBPACK_IMPORTED_MODULE_11__["default"].error('Error while executing action', {
          action,
          e
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(this.t('files', '"{displayName}" action failed', {
          displayName
        }));
      } finally {
        // Remove loading markers
        this.loading = null;
        this.nodes.forEach(node => {
          vue__WEBPACK_IMPORTED_MODULE_12__["default"].set(node, '_loading', false);
        });
      }
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_MenuDown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/MenuDown.vue */ "./node_modules/vue-material-design-icons/MenuDown.vue");
/* harmony import */ var vue_material_design_icons_MenuUp_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/MenuUp.vue */ "./node_modules/vue-material-design-icons/MenuUp.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _mixins_filesSorting_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/filesSorting.ts */ "./apps/files/src/mixins/filesSorting.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_5__["default"].extend({
  name: 'FilesListHeaderButton',
  components: {
    MenuDown: vue_material_design_icons_MenuDown_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MenuUp: vue_material_design_icons_MenuUp_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3___default())
  },
  mixins: [_mixins_filesSorting_ts__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  },
  methods: {
    sortAriaLabel(column) {
      const direction = this.isAscSorting ? this.t('files', 'ascending') : this.t('files', 'descending');
      return this.t('files', 'Sort list by {column} ({direction})', {
        column,
        direction
      });
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _FileEntry_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileEntry.vue */ "./apps/files/src/components/FileEntry.vue");
/* harmony import */ var _FilesListFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilesListFooter.vue */ "./apps/files/src/components/FilesListFooter.vue");
/* harmony import */ var _FilesListHeader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilesListHeader.vue */ "./apps/files/src/components/FilesListHeader.vue");
/* harmony import */ var _mixins_filesListWidth_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/filesListWidth.ts */ "./apps/files/src/mixins/filesListWidth.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_6__["default"].extend({
  name: 'FilesListVirtual',
  components: {
    RecycleScroller: vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.RecycleScroller,
    FileEntry: _FileEntry_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FilesListHeader: _FilesListHeader_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FilesListFooter: _FilesListFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_mixins_filesListWidth_ts__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: {
    currentView: {
      type: Object,
      required: true
    },
    nodes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      FileEntry: _FileEntry_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  computed: {
    files() {
      return this.nodes.filter(node => node.type === 'file');
    },
    summaryFile() {
      const count = this.files.length;
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translatePlural)('files', '{count} file', '{count} files', count, {
        count
      });
    },
    summaryFolder() {
      const count = this.nodes.length - this.files.length;
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translatePlural)('files', '{count} folder', '{count} folders', count, {
        count
      });
    },
    summary() {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', '{summaryFile} and {summaryFolder}', this);
    },
    isSizeAvailable() {
      // Hide size column on narrow screens
      if (this.filesListWidth < 768) {
        return false;
      }
      return this.nodes.some(node => node.attributes.size !== undefined);
    }
  },
  mounted() {
    // Make the root recycle scroller a table for proper semantics
    const slots = this.$el.querySelectorAll('.vue-recycle-scroller__slot');
    slots[0].setAttribute('role', 'thead');
    slots[1].setAttribute('role', 'tfoot');
  },
  methods: {
    getFileId(node) {
      return node.fileid;
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var natural_orderby__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! natural-orderby */ "./node_modules/natural-orderby/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppContent.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_material_design_icons_TrashCan_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/TrashCan.vue */ "./node_modules/vue-material-design-icons/TrashCan.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _store_files_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/files.ts */ "./apps/files/src/store/files.ts");
/* harmony import */ var _store_paths_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/paths.ts */ "./apps/files/src/store/paths.ts");
/* harmony import */ var _store_selection_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/selection.ts */ "./apps/files/src/store/selection.ts");
/* harmony import */ var _store_viewConfig_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/viewConfig.ts */ "./apps/files/src/store/viewConfig.ts");
/* harmony import */ var _components_BreadCrumbs_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/BreadCrumbs.vue */ "./apps/files/src/components/BreadCrumbs.vue");
/* harmony import */ var _components_FilesListVirtual_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/FilesListVirtual.vue */ "./apps/files/src/components/FilesListVirtual.vue");
/* harmony import */ var _mixins_filesSorting_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mixins/filesSorting.ts */ "./apps/files/src/mixins/filesSorting.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/* harmony import */ var _services_Navigation_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/Navigation.ts */ "./apps/files/src/services/Navigation.ts");



















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_17__["default"].extend({
  name: 'FilesList',
  components: {
    BreadCrumbs: _components_BreadCrumbs_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    FilesListVirtual: _components_FilesListVirtual_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    NcAppContent: (_nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4___default()),
    NcEmptyContent: (_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5___default()),
    NcLoadingIcon: (_nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_6___default()),
    TrashCan: vue_material_design_icons_TrashCan_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixins_filesSorting_ts__WEBPACK_IMPORTED_MODULE_14__["default"]],
  setup() {
    const pathsStore = (0,_store_paths_ts__WEBPACK_IMPORTED_MODULE_9__.usePathsStore)();
    const filesStore = (0,_store_files_ts__WEBPACK_IMPORTED_MODULE_8__.useFilesStore)();
    const selectionStore = (0,_store_selection_ts__WEBPACK_IMPORTED_MODULE_10__.useSelectionStore)();
    const viewConfigStore = (0,_store_viewConfig_ts__WEBPACK_IMPORTED_MODULE_11__.useViewConfigStore)();
    return {
      filesStore,
      pathsStore,
      selectionStore,
      viewConfigStore
    };
  },
  data() {
    return {
      loading: true,
      promise: null
    };
  },
  computed: {
    /** @return {Navigation} */
    currentView() {
      return this.$navigation.active || this.$navigation.views.find(view => view.id === 'files');
    },
    /**
     * The current directory query.
     *
     * @return {string}
     */
    dir() {
      var _this$$route, _this$$route$query;
      // Remove any trailing slash but leave root slash
      return (((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$query = _this$$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.dir) || '/').replace(/^(.+)\/$/, '$1');
    },
    /**
     * The current folder.
     *
     * @return {Folder|undefined}
     */
    currentFolder() {
      var _this$currentView;
      if (!((_this$currentView = this.currentView) !== null && _this$currentView !== void 0 && _this$currentView.id)) {
        return;
      }
      if (this.dir === '/') {
        return this.filesStore.getRoot(this.currentView.id);
      }
      const fileId = this.pathsStore.getPath(this.currentView.id, this.dir);
      return this.filesStore.getNode(fileId);
    },
    /**
     * The current directory contents.
     *
     * @return {Node[]}
     */
    dirContents() {
      var _this$currentView2, _this$currentFolder2;
      if (!this.currentView) {
        return [];
      }
      const customColumn = (((_this$currentView2 = this.currentView) === null || _this$currentView2 === void 0 ? void 0 : _this$currentView2.columns) || []).find(column => column.id === this.sortingMode);
      // Custom column must provide their own sorting methods
      if (customColumn !== null && customColumn !== void 0 && customColumn.sort && typeof customColumn.sort === 'function') {
        var _this$currentFolder;
        const results = [...(((_this$currentFolder = this.currentFolder) === null || _this$currentFolder === void 0 ? void 0 : _this$currentFolder._children) || []).map(this.getNode).filter(file => file)].sort(customColumn.sort);
        return this.isAscSorting ? results : results.reverse();
      }
      return (0,natural_orderby__WEBPACK_IMPORTED_MODULE_18__.orderBy)([...(((_this$currentFolder2 = this.currentFolder) === null || _this$currentFolder2 === void 0 ? void 0 : _this$currentFolder2._children) || []).map(this.getNode).filter(file => file)], [
      // Sort folders first if sorting by name
      ...(this.sortingMode === 'basename' ? [v => v.type !== 'folder'] : []),
      // Use sorting mode
      v => v[this.sortingMode],
      // Fallback to name
      v => v.basename], this.isAscSorting ? ['asc', 'asc', 'asc'] : ['desc', 'desc', 'desc']);
    },
    /**
     * The current directory is empty.
     */
    isEmptyDir() {
      return this.dirContents.length === 0;
    },
    /**
     * We are refreshing the current directory.
     * But we already have a cached version of it
     * that is not empty.
     */
    isRefreshing() {
      return this.currentFolder !== undefined && !this.isEmptyDir && this.loading;
    },
    /**
     * Route to the previous directory.
     */
    toPreviousDir() {
      const dir = this.dir.split('/').slice(0, -1).join('/') || '/';
      return {
        ...this.$route,
        query: {
          dir
        }
      };
    }
  },
  watch: {
    currentView(newView, oldView) {
      if ((newView === null || newView === void 0 ? void 0 : newView.id) === (oldView === null || oldView === void 0 ? void 0 : oldView.id)) {
        return;
      }
      _logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].debug('View changed', {
        newView,
        oldView
      });
      this.selectionStore.reset();
      this.fetchContent();
    },
    dir(newDir, oldDir) {
      var _this$$refs, _this$$refs$filesList;
      _logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].debug('Directory changed', {
        newDir,
        oldDir
      });
      // TODO: preserve selection on browsing?
      this.selectionStore.reset();
      this.fetchContent();
      // Scroll to top, force virtual scroller to re-render
      if ((_this$$refs = this.$refs) !== null && _this$$refs !== void 0 && (_this$$refs$filesList = _this$$refs.filesListVirtual) !== null && _this$$refs$filesList !== void 0 && _this$$refs$filesList.$el) {
        this.$refs.filesListVirtual.$el.scrollTop = 0;
      }
    }
  },
  methods: {
    async fetchContent() {
      var _this$currentView3, _this$promise;
      if ((_this$currentView3 = this.currentView) !== null && _this$currentView3 !== void 0 && _this$currentView3.legacy) {
        return;
      }
      this.loading = true;
      const dir = this.dir;
      const currentView = this.currentView;
      // If we have a cancellable promise ongoing, cancel it
      if (typeof ((_this$promise = this.promise) === null || _this$promise === void 0 ? void 0 : _this$promise.cancel) === 'function') {
        this.promise.cancel();
        _logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].debug('Cancelled previous ongoing fetch');
      }
      // Fetch the current dir contents
      /** @type {Promise<ContentsWithRoot>} */
      this.promise = currentView.getContents(dir);
      try {
        const {
          folder,
          contents
        } = await this.promise;
        _logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].debug('Fetched contents', {
          dir,
          folder,
          contents
        });
        // Update store
        this.filesStore.updateNodes(contents);
        // Define current directory children
        folder._children = contents.map(node => node.fileid);
        // If we're in the root dir, define the root
        if (dir === '/') {
          this.filesStore.setRoot({
            service: currentView.id,
            root: folder
          });
        } else
          // Otherwise, add the folder to the store
          if (folder.fileid) {
            this.filesStore.updateNodes([folder]);
            this.pathsStore.addPath({
              service: currentView.id,
              fileid: folder.fileid,
              path: dir
            });
          } else {
            // If we're here, the view API messed up
            _logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error('Invalid root folder returned', {
              dir,
              folder,
              currentView
            });
          }
        // Update paths store
        const folders = contents.filter(node => node.type === 'folder');
        folders.forEach(node => {
          this.pathsStore.addPath({
            service: currentView.id,
            fileid: node.fileid,
            path: (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(dir, node.basename)
          });
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_15__["default"].error('Error while fetching content', {
          error
        });
      } finally {
        this.loading = false;
      }
    },
    /**
     * Get a cached note from the store
     *
     * @param {number} fileId the file id to get
     * @return {Folder|File}
     */
    getNode(fileId) {
      return this.filesStore.getNode(fileId);
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_material_design_icons_Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Home.vue */ "./node_modules/vue-material-design-icons/Home.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcBreadcrumb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcBreadcrumb.js */ "./node_modules/@nextcloud/vue/dist/Components/NcBreadcrumb.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcBreadcrumb_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcBreadcrumb_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcBreadcrumbs.js */ "./node_modules/@nextcloud/vue/dist/Components/NcBreadcrumbs.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _store_files_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/files.ts */ "./apps/files/src/store/files.ts");
/* harmony import */ var _store_paths_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/paths.ts */ "./apps/files/src/store/paths.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_6__["default"].extend({
  name: 'BreadCrumbs',
  components: {
    Home: vue_material_design_icons_Home_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcBreadcrumbs: (_nextcloud_vue_dist_Components_NcBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcBreadcrumb: (_nextcloud_vue_dist_Components_NcBreadcrumb_js__WEBPACK_IMPORTED_MODULE_2___default())
  },
  props: {
    path: {
      type: String,
      default: '/'
    }
  },
  setup() {
    const filesStore = (0,_store_files_ts__WEBPACK_IMPORTED_MODULE_4__.useFilesStore)();
    const pathsStore = (0,_store_paths_ts__WEBPACK_IMPORTED_MODULE_5__.usePathsStore)();
    return {
      filesStore,
      pathsStore
    };
  },
  computed: {
    currentView() {
      return this.$navigation.active;
    },
    dirs() {
      const cumulativePath = acc => value => acc += "".concat(value, "/");
      // Generate a cumulative path for each path segment: ['/', '/foo', '/foo/bar', ...] etc
      const paths = this.path.split('/').filter(Boolean).map(cumulativePath('/'));
      // Strip away trailing slash
      return ['/', ...paths.map(path => path.replace(/^(.+)\/$/, '$1'))];
    },
    sections() {
      return this.dirs.map(dir => {
        const to = {
          ...this.$route,
          query: {
            dir
          }
        };
        return {
          dir,
          exact: true,
          name: this.getDirDisplayName(dir),
          to
        };
      });
    }
  },
  methods: {
    getNodeFromId(id) {
      return this.filesStore.getNode(id);
    },
    getFileIdFromPath(path) {
      var _this$currentView;
      return this.pathsStore.getPath((_this$currentView = this.currentView) === null || _this$currentView === void 0 ? void 0 : _this$currentView.id, path);
    },
    getDirDisplayName(path) {
      var _node$attributes;
      if (path === '/') {
        return t('files', 'Home');
      }
      const fileId = this.getFileIdFromPath(path);
      const node = this.getNodeFromId(fileId);
      return (node === null || node === void 0 ? void 0 : (_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.displayName) || (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(path);
    },
    onClick(to) {
      var _to$query;
      if ((to === null || to === void 0 ? void 0 : (_to$query = to.query) === null || _to$query === void 0 ? void 0 : _to$query.dir) === this.$route.query.dir) {
        this.$emit('reload');
      }
    },
    ariaLabel(section) {
      var _section$to, _section$to$query;
      if ((section === null || section === void 0 ? void 0 : (_section$to = section.to) === null || _section$to === void 0 ? void 0 : (_section$to$query = _section$to.query) === null || _section$to$query === void 0 ? void 0 : _section$to$query.dir) === this.$route.query.dir) {
        return t('files', 'Reload current directory');
      }
      return t('files', 'Go to the "{dir}" directory', section);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomElementRender.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomElementRender.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This component is used to render custom
 * elements provided by an API. Vue doesn't allow
 * to directly render an HTMLElement, so we can do
 * this magic here.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomElementRender',
  props: {
    source: {
      type: Object,
      required: true
    },
    currentView: {
      type: Object,
      required: true
    },
    render: {
      type: Function,
      required: true
    }
  },
  computed: {
    element() {
      return this.render(this.source, this.currentView);
    }
  },
  watch: {
    element() {
      this.$el.replaceWith(this.element);
      this.$el = this.element;
    }
  },
  mounted() {
    this.$el.replaceWith(this.element);
    this.$el = this.element;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
// eslint-disable-next-line import/named

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomSvgIconRender',
  props: {
    svg: {
      type: String,
      required: true
    }
  },
  watch: {
    svg() {
      this.$el.innerHTML = (0,dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize)(this.svg);
    }
  },
  mounted() {
    this.$el.innerHTML = (0,dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize)(this.svg);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var vue_material_design_icons_ChartPie_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/ChartPie.vue */ "./node_modules/vue-material-design-icons/ChartPie.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationItem.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationItem.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcProgressBar.js */ "./node_modules/@nextcloud/vue/dist/Components/NcProgressBar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationQuota',
  components: {
    ChartPie: vue_material_design_icons_ChartPie_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcAppNavigationItem: (_nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_8___default()),
    NcProgressBar: (_nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_9___default())
  },
  data() {
    return {
      loadingStorageStats: false,
      storageStats: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('files', 'storageStats', null)
    };
  },
  computed: {
    storageStatsTitle() {
      var _this$storageStats, _this$storageStats2, _this$storageStats3;
      const usedQuotaByte = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)((_this$storageStats = this.storageStats) === null || _this$storageStats === void 0 ? void 0 : _this$storageStats.used, false, true).replace('iB', 'B');
      const quotaByte = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)((_this$storageStats2 = this.storageStats) === null || _this$storageStats2 === void 0 ? void 0 : _this$storageStats2.quota, false, true).replace('iB', 'B');

      // If no quota set
      if (((_this$storageStats3 = this.storageStats) === null || _this$storageStats3 === void 0 ? void 0 : _this$storageStats3.quota) < 0) {
        return this.t('files', '{usedQuotaByte} used', {
          usedQuotaByte
        });
      }
      return this.t('files', '{used} of {quota} used', {
        used: usedQuotaByte,
        quota: quotaByte
      });
    },
    storageStatsTooltip() {
      if (!this.storageStats.relative) {
        return '';
      }
      return this.t('files', '{relative}% used', this.storageStats);
    }
  },
  beforeMount() {
    /**
     * Update storage stats every minute
     * TODO: remove when all views are migrated to Vue
     */
    setInterval(this.throttleUpdateStorageStats, 60 * 1000);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_11__.subscribe)('files:node:created', this.throttleUpdateStorageStats);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_11__.subscribe)('files:node:deleted', this.throttleUpdateStorageStats);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_11__.subscribe)('files:node:moved', this.throttleUpdateStorageStats);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_11__.subscribe)('files:node:updated', this.throttleUpdateStorageStats);
  },
  methods: {
    // From user input
    debounceUpdateStorageStats: (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce)(200, function (event) {
      this.updateStorageStats(event);
    }),
    // From interval or event bus
    throttleUpdateStorageStats: (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_4__.throttle)(1000, function (event) {
      this.updateStorageStats(event);
    }),
    /**
     * Update the storage stats
     * Throttled at max 1 refresh per minute
     *
     * @param {Event} [event = null] if user interaction
     */
    async updateStorageStats() {
      let event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.loadingStorageStats) {
        return;
      }
      this.loadingStorageStats = true;
      try {
        var _response$data;
        const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/files/api/v1/stats'));
        if (!(response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.data)) {
          throw new Error('Invalid storage stats');
        }
        this.storageStats = response.data.data;
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_10__["default"].error('Could not refresh storage stats', {
          error
        });
        // Only show to the user if it was manually triggered
        if (event) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__.showError)(t('files', 'Could not refresh storage stats'));
        }
      } finally {
        this.loadingStorageStats = false;
      }
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Setting',
  props: {
    el: {
      type: Function,
      required: true
    }
  },
  mounted() {
    this.$el.appendChild(this.el());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fileUtils.js */ "./apps/files/src/utils/fileUtils.js");
/* harmony import */ var _utils_davUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/davUtils.js */ "./apps/files/src/utils/davUtils.js");




// preview width generation
const previewWidth = 256;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TemplatePreview',
  inheritAttrs: false,
  props: {
    basename: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    fileid: {
      type: [String, Number],
      required: true
    },
    filename: {
      type: String,
      required: true
    },
    previewUrl: {
      type: String,
      default: null
    },
    hasPreview: {
      type: Boolean,
      default: true
    },
    mime: {
      type: String,
      required: true
    },
    ratio: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      failedPreview: false
    };
  },
  computed: {
    /**
     * Strip away extension from name
     *
     * @return {string}
     */
    nameWithoutExt() {
      return this.basename.indexOf('.') > -1 ? this.basename.split('.').slice(0, -1).join('.') : this.basename;
    },
    id() {
      return "template-picker-".concat(this.fileid);
    },
    realPreviewUrl() {
      // If original preview failed, fallback to mime icon
      if (this.failedPreview && this.mimeIcon) {
        return this.mimeIcon;
      }
      if (this.previewUrl) {
        return this.previewUrl;
      }
      // TODO: find a nicer standard way of doing this?
      if ((0,_utils_davUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPublic)()) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/apps/files_sharing/publicpreview/".concat((0,_utils_davUtils_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), "?fileId=").concat(this.fileid, "&file=").concat((0,_utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_1__.encodeFilePath)(this.filename), "&x=").concat(previewWidth, "&y=").concat(previewWidth, "&a=1"));
      }
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.fileid, "&x=").concat(previewWidth, "&y=").concat(previewWidth, "&a=1"));
    },
    mimeIcon() {
      return OC.MimeType.getIconUrl(this.mime);
    }
  },
  methods: {
    onCheck() {
      this.$emit('check', this.fileid);
    },
    onFailure() {
      this.failedPreview = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Cog.vue */ "./node_modules/vue-material-design-icons/Cog.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigation.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigation.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationItem.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppNavigationItem.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "./node_modules/@nextcloud/vue/dist/Components/NcIconSvgWrapper.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_src_OCP_accessibility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/src/OCP/accessibility.js */ "./core/src/OCP/accessibility.js");
/* harmony import */ var _store_viewConfig_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/viewConfig.ts */ "./apps/files/src/store/viewConfig.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger.js */ "./apps/files/src/logger.js");
/* harmony import */ var _services_Navigation_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/Navigation.ts */ "./apps/files/src/services/Navigation.ts");
/* harmony import */ var _components_NavigationQuota_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NavigationQuota.vue */ "./apps/files/src/components/NavigationQuota.vue");
/* harmony import */ var _Settings_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Settings.vue */ "./apps/files/src/views/Settings.vue");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Navigation',
  components: {
    Cog: vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NavigationQuota: _components_NavigationQuota_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    NcAppNavigation: (_nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcAppNavigationItem: (_nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_4___default()),
    NcIconSvgWrapper: (_nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_5___default()),
    SettingsModal: _Settings_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    Navigation: {
      type: _services_Navigation_ts__WEBPACK_IMPORTED_MODULE_9__["default"],
      required: true
    }
  },
  setup() {
    const viewConfigStore = (0,_store_viewConfig_ts__WEBPACK_IMPORTED_MODULE_7__.useViewConfigStore)();
    return {
      viewConfigStore
    };
  },
  data() {
    return {
      settingsOpened: false
    };
  },
  computed: {
    currentViewId() {
      var _this$$route, _this$$route$params;
      return ((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$params = _this$$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.view) || 'files';
    },
    /** @return {Navigation} */
    currentView() {
      return this.views.find(view => view.id === this.currentViewId);
    },
    /** @return {Navigation[]} */
    views() {
      return this.Navigation.views;
    },
    /** @return {Navigation[]} */
    parentViews() {
      return this.views
      // filter child views
      .filter(view => !view.parent)
      // sort views by order
      .sort((a, b) => {
        return a.order - b.order;
      });
    },
    /** @return {Navigation[]} */
    childViews() {
      return this.views
      // filter parent views
      .filter(view => !!view.parent)
      // create a map of parents and their children
      .reduce((list, view) => {
        list[view.parent] = [...(list[view.parent] || []), view];
        // Sort children by order
        list[view.parent].sort((a, b) => {
          return a.order - b.order;
        });
        return list;
      }, {});
    }
  },
  watch: {
    currentView(view, oldView) {
      // If undefined, it means we're initializing the view
      // This is handled by the legacy-view:initialized event
      // TODO: remove when legacy views are dropped
      if ((view === null || view === void 0 ? void 0 : view.id) === (oldView === null || oldView === void 0 ? void 0 : oldView.id)) {
        return;
      }
      this.Navigation.setActive(view);
      _logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].debug('Navigation changed', {
        id: view.id,
        view
      });
      this.showView(view, oldView);
    }
  },
  beforeMount() {
    if (this.currentView) {
      _logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].debug('Navigation mounted. Showing requested view', {
        view: this.currentView
      });
      this.showView(this.currentView);
    }
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:legacy-navigation:changed', this.onLegacyNavigationChanged);

    // TODO: remove this once the legacy navigation is gone
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:legacy-view:initialized', () => {
      _logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].debug('Legacy view initialized', {
        ...this.currentView
      });
      this.showView(this.currentView);
    });
  },
  methods: {
    /**
     * @param {Navigation} view the new active view
     * @param {Navigation} oldView the old active view
     */
    showView(view, oldView) {
      var _window, _window$OCA, _window$OCA$Files, _window$OCA$Files$Sid, _window$OCA$Files$Sid2;
      // Closing any opened sidebar
      (_window = window) === null || _window === void 0 ? void 0 : (_window$OCA = _window.OCA) === null || _window$OCA === void 0 ? void 0 : (_window$OCA$Files = _window$OCA.Files) === null || _window$OCA$Files === void 0 ? void 0 : (_window$OCA$Files$Sid = _window$OCA$Files.Sidebar) === null || _window$OCA$Files$Sid === void 0 ? void 0 : (_window$OCA$Files$Sid2 = _window$OCA$Files$Sid.close) === null || _window$OCA$Files$Sid2 === void 0 ? void 0 : _window$OCA$Files$Sid2.call(_window$OCA$Files$Sid);
      if (view !== null && view !== void 0 && view.legacy) {
        const newAppContent = document.querySelector('#app-content #app-content-' + this.currentView.id + '.viewcontainer');
        document.querySelectorAll('#app-content .viewcontainer').forEach(el => {
          el.classList.add('hidden');
        });
        newAppContent.classList.remove('hidden');

        // Triggering legacy navigation events
        const {
          dir = '/'
        } = OC.Util.History.parseUrlQuery();
        const params = {
          itemId: view.id,
          dir
        };
        _logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].debug('Triggering legacy navigation event', params);
        window.jQuery(newAppContent).trigger(new window.jQuery.Event('show', params));
        window.jQuery(newAppContent).trigger(new window.jQuery.Event('urlChanged', params));
      }
      this.Navigation.setActive(view);
      (0,_core_src_OCP_accessibility_js__WEBPACK_IMPORTED_MODULE_6__.setPageHeading)(view.name);
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:navigation:changed', view);
    },
    /**
     * Coming from the legacy files app.
     * TODO: remove when all views are migrated.
     *
     * @param {object} payload the payload
     * @param {string} [payload.id='files'] the view id
     * @param {boolean} [payload.silent=false] if true, the view will not be shown immediately
     */
    onLegacyNavigationChanged() {
      let {
        id = 'files',
        silent = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const view = this.Navigation.views.find(view => view.id === id);
      if (view && view.legacy && view.id !== this.currentView.id) {
        // Force update the current route as the request comes
        // from the legacy files app router
        this.$router.replace({
          ...this.$route,
          params: {
            view: view.id
          }
        });
        if (!silent) {
          this.Navigation.setActive(view);
          this.showView(view);
        }
      }
    },
    /**
     * Expand/collapse a a view with children and permanently
     * save this setting in the server.
     *
     * @param {Navigation} view the view to toggle
     */
    onToggleExpand(view) {
      // Invert state
      const isExpanded = this.isExpanded(view);
      // Update the view expanded state, might not be necessary
      view.expanded = !isExpanded;
      this.viewConfigStore.update(view.id, 'expanded', !isExpanded);
    },
    /**
     * Check if a view is expanded by user config
     * or fallback to the default value.
     *
     * @param {Navigation} view the view to check
     */
    isExpanded(view) {
      var _this$viewConfigStore;
      return typeof ((_this$viewConfigStore = this.viewConfigStore.getConfig(view.id)) === null || _this$viewConfigStore === void 0 ? void 0 : _this$viewConfigStore.expanded) === 'boolean' ? this.viewConfigStore.getConfig(view.id).expanded === true : view.expanded === true;
    },
    /**
     * Generate the route to a view
     *
     * @param {Navigation} view the view to toggle
     */
    generateToNavigation(view) {
      if (view.params) {
        const {
          dir,
          fileid
        } = view.params;
        return {
          name: 'filelist',
          params: view.params,
          query: {
            dir,
            fileid
          }
        };
      }
      return {
        name: 'filelist',
        params: {
          view: view.id
        }
      };
    },
    /**
     * Open the settings modal
     */
    openSettings() {
      this.settingsOpened = true;
    },
    /**
     * Close the settings modal
     */
    onSettingsClose() {
      this.settingsOpened = false;
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppSettingsDialog.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppSettingsDialog.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcAppSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_material_design_icons_Clipboard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Clipboard.vue */ "./node_modules/vue-material-design-icons/Clipboard.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcInputField_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcInputField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcInputField.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcInputField_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcInputField_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Setting_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Setting.vue */ "./apps/files/src/components/Setting.vue");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _store_userconfig_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/userconfig.ts */ "./apps/files/src/store/userconfig.ts");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Settings',
  components: {
    Clipboard: vue_material_design_icons_Clipboard_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcAppSettingsDialog: (_nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_0___default()),
    NcAppSettingsSection: (_nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_1___default()),
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcInputField: (_nextcloud_vue_dist_Components_NcInputField_js__WEBPACK_IMPORTED_MODULE_4___default()),
    Setting: _components_Setting_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const userConfigStore = (0,_store_userconfig_ts__WEBPACK_IMPORTED_MODULE_10__.useUserConfigStore)();
    return {
      userConfigStore
    };
  },
  data() {
    var _window$OCA, _window$OCA$Files, _window$OCA$Files$Set, _getCurrentUser;
    return {
      // Settings API
      settings: ((_window$OCA = window.OCA) === null || _window$OCA === void 0 ? void 0 : (_window$OCA$Files = _window$OCA.Files) === null || _window$OCA$Files === void 0 ? void 0 : (_window$OCA$Files$Set = _window$OCA$Files.Settings) === null || _window$OCA$Files$Set === void 0 ? void 0 : _window$OCA$Files$Set.settings) || [],
      // Webdav infos
      webdavUrl: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_6__.generateRemoteUrl)('dav/files/' + encodeURIComponent((_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_7__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid)),
      webdavDocs: '#',
      appPasswordUrl: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_6__.generateUrl)('/settings/user/security#generate-app-token-section'),
      webdavUrlCopied: false
    };
  },
  computed: {
    userConfig() {
      return this.userConfigStore.userConfig;
    }
  },
  beforeMount() {
    // Update the settings API entries state
    this.settings.forEach(setting => setting.open());
  },
  beforeDestroy() {
    // Update the settings API entries state
    this.settings.forEach(setting => setting.close());
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    setConfig(key, value) {
      this.userConfigStore.update(key, value);
    },
    async copyCloudId() {
      document.querySelector('input#webdav-url-input').select();
      if (!navigator.clipboard) {
        // Clipboard API not available
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_8__.showError)(t('files', 'Clipboard is not available'));
        return;
      }
      await navigator.clipboard.writeText(this.webdavUrl);
      this.webdavUrlCopied = true;
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_8__.showSuccess)(t('files', 'WebDAV URL copied to clipboard'));
      setTimeout(() => {
        this.webdavUrlCopied = false;
      }, 5000);
    },
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_9__.translate
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "./node_modules/@nextcloud/vue/dist/Components/NcModal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_davUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/davUtils.js */ "./apps/files/src/utils/davUtils.js");
/* harmony import */ var _services_Templates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Templates.js */ "./apps/files/src/services/Templates.js");
/* harmony import */ var _components_TemplatePreview_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TemplatePreview.vue */ "./apps/files/src/components/TemplatePreview.vue");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");







const border = 2;
const margin = 8;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TemplatePicker',
  components: {
    NcEmptyContent: (_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcModal: (_nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_3___default()),
    TemplatePreview: _components_TemplatePreview_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    logger: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // Check empty template by default
      checked: -1,
      loading: false,
      name: null,
      opened: false,
      provider: null
    };
  },
  computed: {
    /**
     * Strip away extension from name
     *
     * @return {string}
     */
    nameWithoutExt() {
      return this.name.indexOf('.') > -1 ? this.name.split('.').slice(0, -1).join('.') : this.name;
    },
    emptyTemplate() {
      var _this$provider, _this$provider2;
      return {
        basename: t('files', 'Blank'),
        fileid: -1,
        filename: this.t('files', 'Blank'),
        hasPreview: false,
        mime: ((_this$provider = this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.mimetypes[0]) || ((_this$provider2 = this.provider) === null || _this$provider2 === void 0 ? void 0 : _this$provider2.mimetypes)
      };
    },
    selectedTemplate() {
      return this.provider.templates.find(template => template.fileid === this.checked);
    },
    /**
     * Style css vars bin,d
     *
     * @return {object}
     */
    style() {
      // Fallback to 16:9 landscape ratio
      const ratio = this.provider.ratio ? this.provider.ratio : 1.77;
      // Landscape templates should be wider than tall ones
      // We fit 3 templates per row at max for landscape and 4 for portrait
      const width = ratio > 1 ? margin * 30 : margin * 20;
      return {
        '--margin': margin + 'px',
        '--width': width + 'px',
        '--border': border + 'px',
        '--fullwidth': width + 2 * margin + 2 * border + 'px',
        '--height': this.provider.ratio ? Math.round(width / this.provider.ratio) + 'px' : null
      };
    }
  },
  methods: {
    /**
     * Open the picker
     *
     * @param {string} name the file name to create
     * @param {object} provider the template provider picked
     */
    async open(name, provider) {
      this.checked = this.emptyTemplate.fileid;
      this.name = name;
      this.provider = provider;
      const templates = await (0,_services_Templates_js__WEBPACK_IMPORTED_MODULE_5__.getTemplates)();
      const fetchedProvider = templates.find(fetchedProvider => fetchedProvider.app === provider.app && fetchedProvider.label === provider.label);
      if (fetchedProvider === null) {
        throw new Error('Failed to match provider in results');
      }
      this.provider = fetchedProvider;

      // If there is no templates available, just create an empty file
      if (fetchedProvider.templates.length === 0) {
        this.onSubmit();
        return;
      }

      // Else, open the picker
      this.opened = true;
    },
    /**
     * Close the picker and reset variables
     */
    close() {
      this.checked = this.emptyTemplate.fileid;
      this.loading = false;
      this.name = null;
      this.opened = false;
      this.provider = null;
    },
    /**
     * Manages the radio template picker change
     *
     * @param {number} fileid the selected template file id
     */
    onCheck(fileid) {
      this.checked = fileid;
    },
    async onSubmit() {
      var _OCA, _OCA$Files, _OCA$Files$App;
      this.loading = true;
      const currentDirectory = (0,_utils_davUtils_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentDirectory)();
      const fileList = (_OCA = OCA) === null || _OCA === void 0 ? void 0 : (_OCA$Files = _OCA.Files) === null || _OCA$Files === void 0 ? void 0 : (_OCA$Files$App = _OCA$Files.App) === null || _OCA$Files$App === void 0 ? void 0 : _OCA$Files$App.currentFileList;

      // If the file doesn't have an extension, add the default one
      if (this.nameWithoutExt === this.name) {
        var _this$provider3, _this$provider4;
        this.logger.debug('Fixed invalid filename', {
          name: this.name,
          extension: (_this$provider3 = this.provider) === null || _this$provider3 === void 0 ? void 0 : _this$provider3.extension
        });
        this.name = this.name + ((_this$provider4 = this.provider) === null || _this$provider4 === void 0 ? void 0 : _this$provider4.extension);
      }
      try {
        var _this$selectedTemplat, _this$selectedTemplat2;
        const fileInfo = await (0,_services_Templates_js__WEBPACK_IMPORTED_MODULE_5__.createFromTemplate)((0,path__WEBPACK_IMPORTED_MODULE_0__.normalize)("".concat(currentDirectory, "/").concat(this.name)), (_this$selectedTemplat = this.selectedTemplate) === null || _this$selectedTemplat === void 0 ? void 0 : _this$selectedTemplat.filename, (_this$selectedTemplat2 = this.selectedTemplate) === null || _this$selectedTemplat2 === void 0 ? void 0 : _this$selectedTemplat2.templateType);
        this.logger.debug('Created new file', fileInfo);

        // Fetch FileInfo and model
        const data = await (fileList === null || fileList === void 0 ? void 0 : fileList.addAndFetchFileInfo(this.name).then((status, data) => data));
        const model = new OCA.Files.FileInfoModel(data, {
          filesClient: fileList === null || fileList === void 0 ? void 0 : fileList.filesClient
        });

        // Run default action
        const fileAction = OCA.Files.fileActions.getDefaultFileAction(fileInfo.mime, 'file', OC.PERMISSION_ALL);
        if (fileAction) {
          fileAction.action(fileInfo.basename, {
            $file: fileList === null || fileList === void 0 ? void 0 : fileList.findFileEl(this.name),
            dir: currentDirectory,
            fileList,
            fileActions: fileList === null || fileList === void 0 ? void 0 : fileList.fileActions,
            fileInfoModel: model
          });
        }
        this.close();
      } catch (error) {
        this.logger.error('Error while creating the new file from template');
        console.error(error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(this.t('files', 'Unable to create new file from template'));
      } finally {
        this.loading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcBreadcrumbs", {
    attrs: {
      "data-cy-files-content-breadcrumbs": ""
    }
  }, _vm._l(_vm.sections, function (section, index) {
    return _c("NcBreadcrumb", _vm._b({
      key: section.dir,
      attrs: {
        "aria-label": _vm.ariaLabel(section),
        title: _vm.ariaLabel(section)
      },
      nativeOn: {
        click: function ($event) {
          return _vm.onClick(section.to);
        }
      },
      scopedSlots: _vm._u([index === 0 ? {
        key: "icon",
        fn: function () {
          return [_c("Home", {
            attrs: {
              size: 20
            }
          })];
        },
        proxy: true
      } : null], null, true)
    }, "NcBreadcrumb", section, false));
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomElementRender.vue?vue&type=template&id=d4c538ac&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomElementRender.vue?vue&type=template&id=d4c538ac& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "custom-svg-icon"
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("Fragment", [_c("td", {
    staticClass: "files-list__row-checkbox"
  }, [_vm.active ? _c("NcCheckboxRadioSwitch", {
    attrs: {
      "aria-label": _vm.t("files", "Select the row for {displayName}", {
        displayName: _vm.displayName
      }),
      checked: _vm.selectedFiles,
      value: _vm.fileid,
      name: "selectedFiles"
    },
    on: {
      "update:checked": _vm.onSelectionChange
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("td", {
    staticClass: "files-list__row-name"
  }, [_c("a", _vm._b({
    ref: "name",
    on: {
      click: _vm.execDefaultAction
    }
  }, "a", _vm.linkAttrs, false), [_c("span", {
    staticClass: "files-list__row-icon"
  }, [_vm.source.type === "folder" ? _c("FolderIcon") : _vm.previewUrl && !_vm.backgroundFailed ? _c("span", {
    ref: "previewImg",
    staticClass: "files-list__row-icon-preview",
    style: {
      backgroundImage: _vm.backgroundImage
    }
  }) : _vm.mimeIconUrl ? _c("span", {
    staticClass: "files-list__row-icon-preview files-list__row-icon-preview--mime",
    style: {
      backgroundImage: _vm.mimeIconUrl
    }
  }) : _c("FileIcon"), _vm._v(" "), _vm.isFavorite ? _c("span", {
    staticClass: "files-list__row-icon-favorite",
    attrs: {
      "aria-label": _vm.t("files", "Favorite")
    }
  }, [_c("StarIcon", {
    attrs: {
      "aria-hidden": "true",
      size: 20
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("span", {
    staticClass: "files-list__row-name-text"
  }, [_c("span", {
    staticClass: "files-list__row-name-name",
    domProps: {
      textContent: _vm._s(_vm.displayName)
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "files-list__row-name-ext",
    domProps: {
      textContent: _vm._s(_vm.extension)
    }
  })])])]), _vm._v(" "), _c("td", {
    staticClass: "files-list__row-actions",
    class: "files-list__row-actions-".concat(_vm.uniqueId)
  }, [_vm.active ? _c("NcActions", {
    ref: "actionsMenu",
    attrs: {
      "boundaries-element": _vm.boundariesElement,
      container: _vm.boundariesElement,
      disabled: _vm.source._loading,
      "force-title": true,
      "force-menu": true,
      inline: _vm.enabledInlineActions.length,
      open: _vm.openedMenu
    },
    on: {
      "update:open": function ($event) {
        _vm.openedMenu = $event;
      }
    }
  }, _vm._l(_vm.enabledMenuActions, function (action) {
    return _c("NcActionButton", {
      key: action.id,
      class: "files-list__row-action-" + action.id,
      on: {
        click: function ($event) {
          return _vm.onActionClick(action);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function () {
          return [_vm.loading === action.id ? _c("NcLoadingIcon", {
            attrs: {
              size: 18
            }
          }) : _c("CustomSvgIconRender", {
            attrs: {
              svg: action.iconSvgInline([_vm.source], _vm.currentView)
            }
          })];
        },
        proxy: true
      }], null, true)
    }, [_vm._v("\n\t\t\t\t" + _vm._s(action.displayName([_vm.source], _vm.currentView)) + "\n\t\t\t")]);
  }), 1) : _vm._e()], 1), _vm._v(" "), _vm.isSizeAvailable ? _c("td", {
    staticClass: "files-list__row-size",
    style: {
      opacity: _vm.sizeOpacity
    },
    on: {
      click: _vm.openDetailsIfAvailable
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.size))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column) {
    var _vm$currentView;
    return _c("td", {
      key: column.id,
      staticClass: "files-list__row-column-custom",
      class: "files-list__row-".concat((_vm$currentView = _vm.currentView) === null || _vm$currentView === void 0 ? void 0 : _vm$currentView.id, "-").concat(column.id),
      on: {
        click: _vm.openDetailsIfAvailable
      }
    }, [_vm.active ? _c("CustomElementRender", {
      attrs: {
        "current-view": _vm.currentView,
        render: column.render,
        source: _vm.source
      }
    }) : _vm._e()], 1);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("tr", [_c("th", {
    staticClass: "files-list__row-checkbox"
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v(_vm._s(_vm.t("files", "Total rows summary")))])]), _vm._v(" "), _c("td", {
    staticClass: "files-list__row-name"
  }, [_c("span", {
    staticClass: "files-list__row-icon"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.summary))])]), _vm._v(" "), _c("td", {
    staticClass: "files-list__row-actions"
  }), _vm._v(" "), _vm.isSizeAvailable ? _c("td", {
    staticClass: "files-list__column files-list__row-size"
  }, [_c("span", [_vm._v(_vm._s(_vm.totalSize))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column) {
    var _column$summary;
    return _c("th", {
      key: column.id,
      class: _vm.classForColumn(column)
    }, [_c("span", [_vm._v(_vm._s((_column$summary = column.summary) === null || _column$summary === void 0 ? void 0 : _column$summary.call(column, _vm.nodes, _vm.currentView)))])]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("tr", [_c("th", {
    staticClass: "files-list__column files-list__row-checkbox"
  }, [_c("NcCheckboxRadioSwitch", _vm._b({
    on: {
      "update:checked": _vm.onToggleAll
    }
  }, "NcCheckboxRadioSwitch", _vm.selectAllBind, false))], 1), _vm._v(" "), !_vm.isNoneSelected ? _c("FilesListHeaderActions", {
    attrs: {
      "current-view": _vm.currentView,
      "selected-nodes": _vm.selectedNodes
    }
  }) : [_c("th", {
    staticClass: "files-list__column files-list__row-name files-list__column--sortable",
    on: {
      click: function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.toggleSortBy("basename");
      }
    }
  }, [_c("span", {
    staticClass: "files-list__row-icon"
  }), _vm._v(" "), _c("FilesListHeaderButton", {
    attrs: {
      name: _vm.t("files", "Name"),
      mode: "basename"
    }
  })], 1), _vm._v(" "), _c("th", {
    staticClass: "files-list__row-actions"
  }), _vm._v(" "), _vm.isSizeAvailable ? _c("th", {
    staticClass: "files-list__column files-list__row-size",
    class: {
      "files-list__column--sortable": _vm.isSizeAvailable
    }
  }, [_c("FilesListHeaderButton", {
    attrs: {
      name: _vm.t("files", "Size"),
      mode: "size"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.columns, function (column) {
    return _c("th", {
      key: column.id,
      class: _vm.classForColumn(column)
    }, [!!column.sort ? _c("FilesListHeaderButton", {
      attrs: {
        name: column.title,
        mode: column.id
      }
    }) : _c("span", [_vm._v("\n\t\t\t\t" + _vm._s(column.title) + "\n\t\t\t")])], 1);
  })]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("th", {
    staticClass: "files-list__column files-list__row-actions-batch",
    attrs: {
      colspan: "2"
    }
  }, [_c("NcActions", {
    ref: "actionsMenu",
    attrs: {
      disabled: !!_vm.loading || _vm.areSomeNodesLoading,
      "force-title": true,
      inline: _vm.inlineActions,
      "menu-title": _vm.inlineActions <= 1 ? _vm.t("files", "Actions") : null,
      open: _vm.openedMenu
    },
    on: {
      "update:open": function ($event) {
        _vm.openedMenu = $event;
      }
    }
  }, _vm._l(_vm.enabledActions, function (action) {
    return _c("NcActionButton", {
      key: action.id,
      class: "files-list__row-actions-batch-" + action.id,
      on: {
        click: function ($event) {
          return _vm.onActionClick(action);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function () {
          return [_vm.loading === action.id ? _c("NcLoadingIcon", {
            attrs: {
              size: 18
            }
          }) : _c("CustomSvgIconRender", {
            attrs: {
              svg: action.iconSvgInline(_vm.nodes, _vm.currentView)
            }
          })];
        },
        proxy: true
      }], null, true)
    }, [_vm._v("\n\t\t\t" + _vm._s(action.displayName(_vm.nodes, _vm.currentView)) + "\n\t\t")]);
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=template&id=75d362c6&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=template&id=75d362c6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcButton", {
    staticClass: "files-list__column-sort-button",
    class: {
      "files-list__column-sort-button--active": _vm.sortingMode === _vm.mode
    },
    attrs: {
      "aria-label": _vm.sortAriaLabel(_vm.name),
      type: "tertiary"
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.toggleSortBy(_vm.mode);
      }
    }
  }, [_vm.sortingMode !== _vm.mode || _vm.isAscSorting ? _c("MenuUp", {
    attrs: {
      slot: "icon"
    },
    slot: "icon"
  }) : _c("MenuDown", {
    attrs: {
      slot: "icon"
    },
    slot: "icon"
  }), _vm._v("\n\t" + _vm._s(_vm.name) + "\n")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("RecycleScroller", {
    ref: "recycleScroller",
    staticClass: "files-list",
    attrs: {
      "key-field": "source",
      items: _vm.nodes,
      "item-size": 55,
      "table-mode": true,
      "item-class": "files-list__row",
      "item-tag": "tr",
      "list-class": "files-list__body",
      "list-tag": "tbody",
      role: "table"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref) {
        let {
          item,
          active,
          index
        } = _ref;
        return [_c("FileEntry", {
          attrs: {
            active: active,
            index: index,
            "is-size-available": _vm.isSizeAvailable,
            "files-list-width": _vm.filesListWidth,
            nodes: _vm.nodes,
            source: item
          }
        })];
      }
    }, {
      key: "before",
      fn: function () {
        return [_c("caption", {
          staticClass: "hidden-visually"
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.currentView.caption || "") + "\n\t\t\t" + _vm._s(_vm.t("files", "This list is not fully rendered for performances reasons. The files will be rendered as you navigate through the list.")) + "\n\t\t")]), _vm._v(" "), _c("FilesListHeader", {
          attrs: {
            "files-list-width": _vm.filesListWidth,
            "is-size-available": _vm.isSizeAvailable,
            nodes: _vm.nodes
          }
        })];
      },
      proxy: true
    }, {
      key: "after",
      fn: function () {
        return [_c("FilesListFooter", {
          attrs: {
            "files-list-width": _vm.filesListWidth,
            "is-size-available": _vm.isSizeAvailable,
            nodes: _vm.nodes,
            summary: _vm.summary
          }
        })];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.storageStats ? _c("NcAppNavigationItem", {
    staticClass: "app-navigation-entry__settings-quota",
    class: {
      "app-navigation-entry__settings-quota--not-unlimited": _vm.storageStats.quota >= 0
    },
    attrs: {
      "aria-label": _vm.t("files", "Storage informations"),
      loading: _vm.loadingStorageStats,
      name: _vm.storageStatsTitle,
      title: _vm.storageStatsTooltip,
      "data-cy-files-navigation-settings-quota": ""
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.debounceUpdateStorageStats.apply(null, arguments);
      }
    }
  }, [_c("ChartPie", {
    attrs: {
      slot: "icon",
      size: 20
    },
    slot: "icon"
  }), _vm._v(" "), _vm.storageStats.quota >= 0 ? _c("NcProgressBar", {
    attrs: {
      slot: "extra",
      error: _vm.storageStats.relative > 80,
      value: Math.min(_vm.storageStats.relative, 100)
    },
    slot: "extra"
  }) : _vm._e()], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "template-picker__item"
  }, [_c("input", {
    staticClass: "radio",
    attrs: {
      id: _vm.id,
      type: "radio",
      name: "template-picker"
    },
    domProps: {
      checked: _vm.checked
    },
    on: {
      change: _vm.onCheck
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "template-picker__label",
    attrs: {
      for: _vm.id
    }
  }, [_c("div", {
    staticClass: "template-picker__preview",
    class: _vm.failedPreview ? "template-picker__preview--failed" : ""
  }, [_c("img", {
    staticClass: "template-picker__image",
    attrs: {
      src: _vm.realPreviewUrl,
      alt: "",
      draggable: "false"
    },
    on: {
      error: _vm.onFailure
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "template-picker__title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.nameWithoutExt) + "\n\t\t")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=template&id=02e51922&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=template&id=02e51922&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$currentView, _vm$currentView2;
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcAppContent", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !((_vm$currentView = _vm.currentView) !== null && _vm$currentView !== void 0 && _vm$currentView.legacy),
      expression: "!currentView?.legacy"
    }],
    class: {
      "app-content--hidden": (_vm$currentView2 = _vm.currentView) === null || _vm$currentView2 === void 0 ? void 0 : _vm$currentView2.legacy
    },
    attrs: {
      "data-cy-files-content": ""
    }
  }, [_c("div", {
    staticClass: "files-list__header"
  }, [_c("BreadCrumbs", {
    attrs: {
      path: _vm.dir
    },
    on: {
      reload: _vm.fetchContent
    }
  }), _vm._v(" "), _vm.isRefreshing ? _c("NcLoadingIcon", {
    staticClass: "files-list__refresh-icon"
  }) : _vm._e()], 1), _vm._v(" "), _vm.loading && !_vm.isRefreshing ? _c("NcLoadingIcon", {
    staticClass: "files-list__loading-icon",
    attrs: {
      size: 38,
      title: _vm.t("files", "Loading current folder")
    }
  }) : !_vm.loading && _vm.isEmptyDir ? _c("NcEmptyContent", {
    attrs: {
      title: _vm.t("files", "No files in here"),
      description: _vm.t("files", "No files or folders have been deleted yet"),
      "data-cy-files-content-empty": ""
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function () {
        return [_vm.dir !== "/" ? _c("NcButton", {
          attrs: {
            "aria-label": "t('files', 'Go to the previous folder')",
            type: "primary",
            to: _vm.toPreviousDir
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files", "Go back")) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "icon",
      fn: function () {
        return [_c("TrashCan")];
      },
      proxy: true
    }])
  }) : _c("FilesListVirtual", {
    ref: "filesListVirtual",
    attrs: {
      "current-view": _vm.currentView,
      nodes: _vm.dirContents
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=template&id=a8628012&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=template&id=a8628012&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcAppNavigation", {
    attrs: {
      "data-cy-files-navigation": ""
    },
    scopedSlots: _vm._u([{
      key: "list",
      fn: function () {
        return _vm._l(_vm.parentViews, function (view) {
          return _c("NcAppNavigationItem", {
            key: view.id,
            attrs: {
              "allow-collapse": true,
              "data-cy-files-navigation-item": view.id,
              icon: view.iconClass,
              open: _vm.isExpanded(view),
              pinned: view.sticky,
              title: view.name,
              to: _vm.generateToNavigation(view)
            },
            on: {
              "update:open": function ($event) {
                return _vm.onToggleExpand(view);
              }
            }
          }, [view.icon ? _c("NcIconSvgWrapper", {
            attrs: {
              slot: "icon",
              svg: view.icon
            },
            slot: "icon"
          }) : _vm._e(), _vm._v(" "), _vm._l(_vm.childViews[view.id], function (child) {
            return _c("NcAppNavigationItem", {
              key: child.id,
              attrs: {
                "data-cy-files-navigation-item": child.id,
                exact: true,
                icon: child.iconClass,
                title: child.name,
                to: _vm.generateToNavigation(child)
              }
            }, [child.icon ? _c("NcIconSvgWrapper", {
              attrs: {
                slot: "icon",
                svg: child.icon
              },
              slot: "icon"
            }) : _vm._e()], 1);
          })], 2);
        });
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("ul", {
          staticClass: "app-navigation-entry__settings"
        }, [_c("NavigationQuota"), _vm._v(" "), _c("NcAppNavigationItem", {
          attrs: {
            "aria-label": _vm.t("files", "Open the files app settings"),
            title: _vm.t("files", "Files settings"),
            "data-cy-files-navigation-settings-button": ""
          },
          on: {
            click: function ($event) {
              $event.preventDefault();
              $event.stopPropagation();
              return _vm.openSettings.apply(null, arguments);
            }
          }
        }, [_c("Cog", {
          attrs: {
            slot: "icon",
            size: 20
          },
          slot: "icon"
        })], 1)], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._v(" "), _c("SettingsModal", {
    attrs: {
      open: _vm.settingsOpened,
      "data-cy-files-navigation-settings": ""
    },
    on: {
      close: _vm.onSettingsClose
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcAppSettingsDialog", {
    attrs: {
      open: _vm.open,
      "show-navigation": true,
      title: _vm.t("files", "Files settings")
    },
    on: {
      "update:open": _vm.onClose
    }
  }, [_c("NcAppSettingsSection", {
    attrs: {
      id: "settings",
      title: _vm.t("files", "Files settings")
    }
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      checked: _vm.userConfig.show_hidden
    },
    on: {
      "update:checked": function ($event) {
        return _vm.setConfig("show_hidden", $event);
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("files", "Show hidden files")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      checked: _vm.userConfig.crop_image_previews
    },
    on: {
      "update:checked": function ($event) {
        return _vm.setConfig("crop_image_previews", $event);
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("files", "Crop image previews")) + "\n\t\t")])], 1), _vm._v(" "), _vm.settings.length !== 0 ? _c("NcAppSettingsSection", {
    attrs: {
      id: "more-settings",
      title: _vm.t("files", "Additional settings")
    }
  }, [_vm._l(_vm.settings, function (setting) {
    return [_c("Setting", {
      key: setting.name,
      attrs: {
        el: setting.el
      }
    })];
  })], 2) : _vm._e(), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "webdav",
      title: _vm.t("files", "WebDAV")
    }
  }, [_c("NcInputField", {
    attrs: {
      id: "webdav-url-input",
      "show-trailing-button": true,
      success: _vm.webdavUrlCopied,
      "trailing-button-label": _vm.t("files", "Copy to clipboard"),
      value: _vm.webdavUrl,
      readonly: "readonly",
      type: "url"
    },
    on: {
      focus: function ($event) {
        return $event.target.select();
      },
      "trailing-button-click": _vm.copyCloudId
    },
    scopedSlots: _vm._u([{
      key: "trailing-button-icon",
      fn: function () {
        return [_c("Clipboard", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("em", [_c("a", {
    staticClass: "setting-link",
    attrs: {
      href: _vm.webdavDocs,
      target: "_blank",
      rel: "noreferrer noopener"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files", "Use this address to access your Files via WebDAV")) + " ↗\n\t\t\t")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("em", [_c("a", {
    staticClass: "setting-link",
    attrs: {
      href: _vm.appPasswordUrl
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files", "If you have enabled 2FA, you must create and use a new app password by clicking here.")) + " ↗\n\t\t\t")])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.opened ? _c("NcModal", {
    staticClass: "templates-picker",
    attrs: {
      "clear-view-delay": -1,
      size: "large"
    },
    on: {
      close: _vm.close
    }
  }, [_c("form", {
    staticClass: "templates-picker__form",
    style: _vm.style,
    on: {
      submit: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.onSubmit.apply(null, arguments);
      }
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("files", "Pick a template for {name}", {
    name: _vm.nameWithoutExt
  })))]), _vm._v(" "), _c("ul", {
    staticClass: "templates-picker__list"
  }, [_c("TemplatePreview", _vm._b({
    attrs: {
      checked: _vm.checked === _vm.emptyTemplate.fileid
    },
    on: {
      check: _vm.onCheck
    }
  }, "TemplatePreview", _vm.emptyTemplate, false)), _vm._v(" "), _vm._l(_vm.provider.templates, function (template) {
    return _c("TemplatePreview", _vm._b({
      key: template.fileid,
      attrs: {
        checked: _vm.checked === template.fileid,
        ratio: _vm.provider.ratio
      },
      on: {
        check: _vm.onCheck
      }
    }, "TemplatePreview", template, false));
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "templates-picker__buttons"
  }, [_c("input", {
    staticClass: "primary",
    attrs: {
      type: "submit",
      "aria-label": _vm.t("files", "Create a new file with the selected template")
    },
    domProps: {
      value: _vm.t("files", "Create")
    }
  })])]), _vm._v(" "), _vm.loading ? _c("NcEmptyContent", {
    staticClass: "templates-picker__loading",
    attrs: {
      icon: "icon-loading"
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("files", "Creating file")) + "\n\t")]) : _vm._e()], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".breadcrumb[data-v-9f0aa34e] {\n  flex: 1 1 100% !important;\n  width: 100%;\n}\n.breadcrumb[data-v-9f0aa34e] a {\n  cursor: pointer !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".custom-svg-icon[data-v-6c70146b] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  justify-self: center;\n  width: 44px;\n  height: 44px;\n  opacity: 1;\n}\n.custom-svg-icon[data-v-6c70146b] svg {\n  height: 22px;\n  width: 22px;\n  fill: currentColor;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Hover effect on tbody lines only */\ntr[data-v-24fe7eff]:hover, tr[data-v-24fe7eff]:focus, tr[data-v-24fe7eff]:active {\n  background-color: var(--color-background-dark);\n}\n\n/* Preview not loaded animation effect */\n.files-list__row-icon-preview[data-v-24fe7eff]:not([style*=background]) {\n  background: var(--color-loading-dark);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tr[data-v-2c7ed299] {\n  padding-bottom: 300px;\n  border-top: 1px solid var(--color-border);\n  background-color: transparent !important;\n  border-bottom: none !important;\n}\ntd[data-v-2c7ed299] {\n  user-select: none;\n  color: var(--color-text-maxcontrast) !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".files-list__column[data-v-4db1368b] {\n  user-select: none;\n  color: var(--color-text-maxcontrast) !important;\n}\n.files-list__column--sortable[data-v-4db1368b] {\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".files-list__row-actions-batch[data-v-aeb8dcbc] {\n  flex: 1 1 100% !important;\n}\n.files-list__row-actions-batch[data-v-aeb8dcbc] .button-vue__wrapper {\n  width: 100%;\n}\n.files-list__row-actions-batch[data-v-aeb8dcbc] .button-vue__wrapper span.button-vue__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".files-list__column-sort-button {\n  margin: 0 calc(var(--cell-margin) * -1);\n  padding: 0 4px 0 16px !important;\n}\n.files-list__column-sort-button .button-vue__wrapper {\n  flex-direction: row-reverse;\n  width: 100%;\n}\n.files-list__column-sort-button .button-vue__icon {\n  transition-timing-function: linear;\n  transition-duration: 0.1s;\n  transition-property: opacity;\n  opacity: 0;\n}\n.files-list__column-sort-button .button-vue__text {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.files-list__column-sort-button--active .button-vue__icon, .files-list__column-sort-button:hover .button-vue__icon, .files-list__column-sort-button:focus .button-vue__icon, .files-list__column-sort-button:active .button-vue__icon {\n  opacity: 1 !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".files-list[data-v-2d34be06] {\n  --row-height: 55px;\n  --cell-margin: 14px;\n  --checkbox-padding: calc((var(--row-height) - var(--checkbox-size)) / 2);\n  --checkbox-size: 24px;\n  --clickable-area: 44px;\n  --icon-preview-size: 32px;\n  display: block;\n  overflow: auto;\n  height: 100%;\n}\n.files-list[data-v-2d34be06] tbody, .files-list[data-v-2d34be06] .vue-recycle-scroller__slot {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n}\n.files-list[data-v-2d34be06] .vue-recycle-scroller__slot[role=thead] {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  height: var(--row-height);\n  background-color: var(--color-main-background);\n}\n.files-list[data-v-2d34be06] tr {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border-bottom: 1px solid var(--color-border);\n}\n.files-list[data-v-2d34be06] td, .files-list[data-v-2d34be06] th {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  justify-content: left;\n  width: var(--row-height);\n  height: var(--row-height);\n  margin: 0;\n  padding: 0;\n  color: var(--color-text-maxcontrast);\n  border: none;\n}\n.files-list[data-v-2d34be06] td span, .files-list[data-v-2d34be06] th span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.files-list[data-v-2d34be06] .files-list__row-checkbox {\n  justify-content: center;\n}\n.files-list[data-v-2d34be06] .files-list__row-checkbox .checkbox-radio-switch {\n  display: flex;\n  justify-content: center;\n  --icon-size: var(--checkbox-size);\n}\n.files-list[data-v-2d34be06] .files-list__row-checkbox .checkbox-radio-switch label.checkbox-radio-switch__label {\n  width: var(--clickable-area);\n  height: var(--clickable-area);\n  margin: 0;\n  padding: calc((var(--clickable-area) - var(--checkbox-size)) / 2);\n}\n.files-list[data-v-2d34be06] .files-list__row-checkbox .checkbox-radio-switch .checkbox-radio-switch__icon {\n  margin: 0 !important;\n}\n.files-list[data-v-2d34be06] .files-list__row-icon {\n  position: relative;\n  display: flex;\n  overflow: visible;\n  align-items: center;\n  flex: 0 0 var(--icon-preview-size);\n  justify-content: center;\n  width: var(--icon-preview-size);\n  height: 100%;\n  margin-right: var(--checkbox-padding);\n  color: var(--color-primary-element);\n}\n.files-list[data-v-2d34be06] .files-list__row-icon > span {\n  justify-content: flex-start;\n}\n.files-list[data-v-2d34be06] .files-list__row-icon > span:not(.files-list__row-icon-favorite) svg {\n  width: var(--icon-preview-size);\n  height: var(--icon-preview-size);\n}\n.files-list[data-v-2d34be06] .files-list__row-icon-preview {\n  overflow: hidden;\n  width: var(--icon-preview-size);\n  height: var(--icon-preview-size);\n  border-radius: var(--border-radius);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n.files-list[data-v-2d34be06] .files-list__row-icon-favorite {\n  position: absolute;\n  top: 4px;\n  right: -8px;\n  color: #ffcc00;\n}\n.files-list[data-v-2d34be06] .files-list__row-name {\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n.files-list[data-v-2d34be06] .files-list__row-name a {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.files-list[data-v-2d34be06] .files-list__row-name a:focus .files-list__row-name-text, .files-list[data-v-2d34be06] .files-list__row-name a:focus-visible .files-list__row-name-text {\n  outline: 2px solid var(--color-main-text) !important;\n  border-radius: 20px;\n}\n.files-list[data-v-2d34be06] .files-list__row-name .files-list__row-name-text {\n  padding: 5px 10px;\n  margin-left: -10px;\n  display: inline-flex;\n}\n.files-list[data-v-2d34be06] .files-list__row-name .files-list__row-name-ext {\n  color: var(--color-text-maxcontrast);\n}\n.files-list[data-v-2d34be06] .files-list__row-actions {\n  width: auto;\n}\n.files-list[data-v-2d34be06] .files-list__row-actions ~ td, .files-list[data-v-2d34be06] .files-list__row-actions ~ th {\n  margin: 0 var(--cell-margin);\n}\n.files-list[data-v-2d34be06] .files-list__row-actions button .button-vue__text {\n  font-weight: normal;\n}\n.files-list[data-v-2d34be06] .files-list__row-actions button:not(:hover, :focus, :active) .button-vue__wrapper {\n  color: var(--color-text-maxcontrast);\n}\n.files-list[data-v-2d34be06] .files-list__row-size {\n  justify-content: flex-end;\n  width: calc(var(--row-height) * 1.5);\n  color: var(--color-main-text);\n}\n.files-list[data-v-2d34be06] .files-list__row-size .files-list__column-sort-button {\n  padding: 0 16px 0 4px !important;\n}\n.files-list[data-v-2d34be06] .files-list__row-size .files-list__column-sort-button .button-vue__wrapper {\n  flex-direction: row;\n}\n.files-list[data-v-2d34be06] .files-list__row-column-custom {\n  width: calc(var(--row-height) * 2);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-navigation-entry__settings-quota--not-unlimited[data-v-6f96f0a6] .app-navigation-entry__title {\n  margin-top: -4px;\n}\n.app-navigation-entry__settings-quota progress[data-v-6f96f0a6] {\n  position: absolute;\n  bottom: 10px;\n  margin-left: 44px;\n  width: calc(100% - 44px - 22px);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".template-picker__item[data-v-14e703d7] {\n  display: flex;\n}\n.template-picker__label[data-v-14e703d7] {\n  display: flex;\n  align-items: center;\n  flex: 1 1;\n  flex-direction: column;\n}\n.template-picker__label[data-v-14e703d7], .template-picker__label *[data-v-14e703d7] {\n  cursor: pointer;\n  user-select: none;\n}\n.template-picker__label[data-v-14e703d7]::before {\n  display: none !important;\n}\n.template-picker__preview[data-v-14e703d7] {\n  display: block;\n  overflow: hidden;\n  flex: 1 1;\n  width: var(--width);\n  min-height: var(--height);\n  max-height: var(--height);\n  padding: 0;\n  border: var(--border) solid var(--color-border);\n  border-radius: var(--border-radius-large);\n}\ninput:checked + label > .template-picker__preview[data-v-14e703d7] {\n  border-color: var(--color-primary-element);\n}\n.template-picker__preview--failed[data-v-14e703d7] {\n  display: flex;\n}\n.template-picker__image[data-v-14e703d7] {\n  max-width: 100%;\n  background-color: var(--color-main-background);\n  object-fit: cover;\n}\n.template-picker__preview--failed .template-picker__image[data-v-14e703d7] {\n  width: calc(var(--margin) * 8);\n  margin: auto;\n  background-color: transparent !important;\n  object-fit: initial;\n}\n.template-picker__title[data-v-14e703d7] {\n  overflow: hidden;\n  max-width: calc(var(--width) + 4px);\n  padding: var(--margin);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-content[data-v-02e51922] {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  max-height: 100%;\n}\n.app-content[data-v-02e51922]:not(.app-content--hidden) + #app-content {\n  display: none;\n}\n.files-list__header[data-v-02e51922] {\n  display: flex;\n  align-content: center;\n  flex: 0 0;\n  margin: 4px 4px 4px 50px;\n}\n.files-list__header > *[data-v-02e51922] {\n  flex: 0 0;\n}\n.files-list__refresh-icon[data-v-02e51922] {\n  flex: 0 0 44px;\n  width: 44px;\n  height: 44px;\n}\n.files-list__loading-icon[data-v-02e51922] {\n  margin: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-navigation[data-v-a8628012] .app-navigation-entry-icon {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.app-navigation > ul.app-navigation__list[data-v-a8628012] {\n  padding-bottom: var(--default-grid-baseline, 4px);\n}\n.app-navigation-entry__settings[data-v-a8628012] {\n  height: auto !important;\n  overflow: hidden !important;\n  padding-top: 0 !important;\n  flex: 0 0 auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".setting-link[data-v-de32ad74]:hover {\n  text-decoration: underline;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".templates-picker__form[data-v-70b9a7ea] {\n  padding: calc(var(--margin) * 2);\n  padding-bottom: 0;\n}\n.templates-picker__form h2[data-v-70b9a7ea] {\n  text-align: center;\n  font-weight: bold;\n  margin: var(--margin) 0 calc(var(--margin) * 2);\n}\n.templates-picker__list[data-v-70b9a7ea] {\n  display: grid;\n  grid-gap: calc(var(--margin) * 2);\n  grid-auto-columns: 1fr;\n  max-width: calc(var(--fullwidth) * 6);\n  grid-template-columns: repeat(auto-fit, var(--fullwidth));\n  grid-auto-rows: 1fr;\n  justify-content: center;\n}\n.templates-picker__buttons[data-v-70b9a7ea] {\n  display: flex;\n  justify-content: end;\n  padding: calc(var(--margin) * 2) var(--margin);\n  position: sticky;\n  bottom: 0;\n  background-image: linear-gradient(0, var(--gradient-main-background));\n}\n.templates-picker__buttons button[data-v-70b9a7ea], .templates-picker__buttons input[type=submit][data-v-70b9a7ea] {\n  height: 44px;\n}\n.templates-picker[data-v-70b9a7ea] .modal-container {\n  position: relative;\n}\n.templates-picker__loading[data-v-70b9a7ea] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background-color: var(--color-main-background-translucent);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* @keyframes preview-gradient-fade {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0.5;\n    }\n    100% {\n        opacity: 1;\n    }\n} */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/files/src/components/BreadCrumbs.vue":
/*!***************************************************!*\
  !*** ./apps/files/src/components/BreadCrumbs.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadCrumbs_vue_vue_type_template_id_9f0aa34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true& */ "./apps/files/src/components/BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true&");
/* harmony import */ var _BreadCrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadCrumbs.vue?vue&type=script&lang=js& */ "./apps/files/src/components/BreadCrumbs.vue?vue&type=script&lang=js&");
/* harmony import */ var _BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true& */ "./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BreadCrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadCrumbs_vue_vue_type_template_id_9f0aa34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BreadCrumbs_vue_vue_type_template_id_9f0aa34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f0aa34e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/BreadCrumbs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/CustomElementRender.vue":
/*!***********************************************************!*\
  !*** ./apps/files/src/components/CustomElementRender.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomElementRender_vue_vue_type_template_id_d4c538ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomElementRender.vue?vue&type=template&id=d4c538ac& */ "./apps/files/src/components/CustomElementRender.vue?vue&type=template&id=d4c538ac&");
/* harmony import */ var _CustomElementRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomElementRender.vue?vue&type=script&lang=js& */ "./apps/files/src/components/CustomElementRender.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomElementRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomElementRender_vue_vue_type_template_id_d4c538ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomElementRender_vue_vue_type_template_id_d4c538ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/CustomElementRender.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/CustomSvgIconRender.vue":
/*!***********************************************************!*\
  !*** ./apps/files/src/components/CustomSvgIconRender.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomSvgIconRender_vue_vue_type_template_id_6c70146b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true& */ "./apps/files/src/components/CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true&");
/* harmony import */ var _CustomSvgIconRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSvgIconRender.vue?vue&type=script&lang=js& */ "./apps/files/src/components/CustomSvgIconRender.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true& */ "./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomSvgIconRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomSvgIconRender_vue_vue_type_template_id_6c70146b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomSvgIconRender_vue_vue_type_template_id_6c70146b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6c70146b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/CustomSvgIconRender.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FileEntry.vue":
/*!*************************************************!*\
  !*** ./apps/files/src/components/FileEntry.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileEntry_vue_vue_type_template_id_24fe7eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true& */ "./apps/files/src/components/FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true&");
/* harmony import */ var _FileEntry_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileEntry.vue?vue&type=script&lang=ts& */ "./apps/files/src/components/FileEntry.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss& */ "./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss&");
/* harmony import */ var _FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css& */ "./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _FileEntry_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileEntry_vue_vue_type_template_id_24fe7eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileEntry_vue_vue_type_template_id_24fe7eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24fe7eff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/FileEntry.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FilesListFooter.vue":
/*!*******************************************************!*\
  !*** ./apps/files/src/components/FilesListFooter.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesListFooter_vue_vue_type_template_id_2c7ed299_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true& */ "./apps/files/src/components/FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true&");
/* harmony import */ var _FilesListFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesListFooter.vue?vue&type=script&lang=ts& */ "./apps/files/src/components/FilesListFooter.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss& */ "./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilesListFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesListFooter_vue_vue_type_template_id_2c7ed299_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesListFooter_vue_vue_type_template_id_2c7ed299_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c7ed299",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/FilesListFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FilesListHeader.vue":
/*!*******************************************************!*\
  !*** ./apps/files/src/components/FilesListHeader.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesListHeader_vue_vue_type_template_id_4db1368b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true& */ "./apps/files/src/components/FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true&");
/* harmony import */ var _FilesListHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesListHeader.vue?vue&type=script&lang=ts& */ "./apps/files/src/components/FilesListHeader.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss& */ "./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilesListHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesListHeader_vue_vue_type_template_id_4db1368b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesListHeader_vue_vue_type_template_id_4db1368b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4db1368b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/FilesListHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderActions.vue":
/*!**************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderActions.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesListHeaderActions_vue_vue_type_template_id_aeb8dcbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true& */ "./apps/files/src/components/FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true&");
/* harmony import */ var _FilesListHeaderActions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesListHeaderActions.vue?vue&type=script&lang=ts& */ "./apps/files/src/components/FilesListHeaderActions.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss& */ "./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilesListHeaderActions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesListHeaderActions_vue_vue_type_template_id_aeb8dcbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesListHeaderActions_vue_vue_type_template_id_aeb8dcbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aeb8dcbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/FilesListHeaderActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderButton.vue":
/*!*************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderButton.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesListHeaderButton_vue_vue_type_template_id_75d362c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesListHeaderButton.vue?vue&type=template&id=75d362c6& */ "./apps/files/src/components/FilesListHeaderButton.vue?vue&type=template&id=75d362c6&");
/* harmony import */ var _FilesListHeaderButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesListHeaderButton.vue?vue&type=script&lang=ts& */ "./apps/files/src/components/FilesListHeaderButton.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss& */ "./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilesListHeaderButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesListHeaderButton_vue_vue_type_template_id_75d362c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesListHeaderButton_vue_vue_type_template_id_75d362c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/FilesListHeaderButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FilesListVirtual.vue":
/*!********************************************************!*\
  !*** ./apps/files/src/components/FilesListVirtual.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesListVirtual_vue_vue_type_template_id_2d34be06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true& */ "./apps/files/src/components/FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true&");
/* harmony import */ var _FilesListVirtual_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesListVirtual.vue?vue&type=script&lang=ts& */ "./apps/files/src/components/FilesListVirtual.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss& */ "./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilesListVirtual_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesListVirtual_vue_vue_type_template_id_2d34be06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesListVirtual_vue_vue_type_template_id_2d34be06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2d34be06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/FilesListVirtual.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/NavigationQuota.vue":
/*!*******************************************************!*\
  !*** ./apps/files/src/components/NavigationQuota.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationQuota_vue_vue_type_template_id_6f96f0a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true& */ "./apps/files/src/components/NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true&");
/* harmony import */ var _NavigationQuota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationQuota.vue?vue&type=script&lang=js& */ "./apps/files/src/components/NavigationQuota.vue?vue&type=script&lang=js&");
/* harmony import */ var _NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true& */ "./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationQuota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationQuota_vue_vue_type_template_id_6f96f0a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationQuota_vue_vue_type_template_id_6f96f0a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f96f0a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/NavigationQuota.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/Setting.vue":
/*!***********************************************!*\
  !*** ./apps/files/src/components/Setting.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting.vue?vue&type=template&id=a0773f8e& */ "./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&");
/* harmony import */ var _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.vue?vue&type=script&lang=js& */ "./apps/files/src/components/Setting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/Setting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue":
/*!*******************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& */ "./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&");
/* harmony import */ var _TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplatePreview.vue?vue&type=script&lang=js& */ "./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& */ "./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14e703d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/TemplatePreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/views/FilesList.vue":
/*!********************************************!*\
  !*** ./apps/files/src/views/FilesList.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesList_vue_vue_type_template_id_02e51922_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesList.vue?vue&type=template&id=02e51922&scoped=true& */ "./apps/files/src/views/FilesList.vue?vue&type=template&id=02e51922&scoped=true&");
/* harmony import */ var _FilesList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesList.vue?vue&type=script&lang=ts& */ "./apps/files/src/views/FilesList.vue?vue&type=script&lang=ts&");
/* harmony import */ var _FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss& */ "./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilesList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesList_vue_vue_type_template_id_02e51922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesList_vue_vue_type_template_id_02e51922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "02e51922",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/views/FilesList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/views/Navigation.vue":
/*!*********************************************!*\
  !*** ./apps/files/src/views/Navigation.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_a8628012_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=a8628012&scoped=true& */ "./apps/files/src/views/Navigation.vue?vue&type=template&id=a8628012&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./apps/files/src/views/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss& */ "./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_a8628012_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_a8628012_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a8628012",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/views/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/views/Settings.vue":
/*!*******************************************!*\
  !*** ./apps/files/src/views/Settings.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=de32ad74&scoped=true& */ "./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./apps/files/src/views/Settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true& */ "./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "de32ad74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/views/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue":
/*!*************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& */ "./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&");
/* harmony import */ var _TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplatePicker.vue?vue&type=script&lang=js& */ "./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& */ "./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70b9a7ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/views/TemplatePicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FileEntry.vue?vue&type=script&lang=ts&":
/*!**************************************************************************!*\
  !*** ./apps/files/src/components/FileEntry.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEntry.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FilesListFooter.vue?vue&type=script&lang=ts&":
/*!********************************************************************************!*\
  !*** ./apps/files/src/components/FilesListFooter.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListFooter.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FilesListHeader.vue?vue&type=script&lang=ts&":
/*!********************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeader.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeader.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderActions.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderActions.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderActions.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderButton.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderButton.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderButton.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FilesListVirtual.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************!*\
  !*** ./apps/files/src/components/FilesListVirtual.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListVirtual.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/views/FilesList.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./apps/files/src/views/FilesList.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesList.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/BreadCrumbs.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./apps/files/src/components/BreadCrumbs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadCrumbs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/CustomElementRender.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/files/src/components/CustomElementRender.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomElementRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomElementRender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomElementRender.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomElementRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/CustomSvgIconRender.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/files/src/components/CustomSvgIconRender.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSvgIconRender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/NavigationQuota.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./apps/files/src/components/NavigationQuota.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuota.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/Setting.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./apps/files/src/components/Setting.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/views/Navigation.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./apps/files/src/views/Navigation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/views/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./apps/files/src/views/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./apps/files/src/components/BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_template_id_9f0aa34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_template_id_9f0aa34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_template_id_9f0aa34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=template&id=9f0aa34e&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/CustomElementRender.vue?vue&type=template&id=d4c538ac&":
/*!******************************************************************************************!*\
  !*** ./apps/files/src/components/CustomElementRender.vue?vue&type=template&id=d4c538ac& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomElementRender_vue_vue_type_template_id_d4c538ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomElementRender_vue_vue_type_template_id_d4c538ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomElementRender_vue_vue_type_template_id_d4c538ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomElementRender.vue?vue&type=template&id=d4c538ac& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomElementRender.vue?vue&type=template&id=d4c538ac&");


/***/ }),

/***/ "./apps/files/src/components/CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./apps/files/src/components/CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_template_id_6c70146b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_template_id_6c70146b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_template_id_6c70146b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=template&id=6c70146b&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./apps/files/src/components/FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_template_id_24fe7eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_template_id_24fe7eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_template_id_24fe7eff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=template&id=24fe7eff&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_template_id_2c7ed299_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_template_id_2c7ed299_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_template_id_2c7ed299_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=template&id=2c7ed299&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_template_id_4db1368b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_template_id_4db1368b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_template_id_4db1368b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=template&id=4db1368b&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_template_id_aeb8dcbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_template_id_aeb8dcbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_template_id_aeb8dcbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=template&id=aeb8dcbc&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderButton.vue?vue&type=template&id=75d362c6&":
/*!********************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderButton.vue?vue&type=template&id=75d362c6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_template_id_75d362c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_template_id_75d362c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_template_id_75d362c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderButton.vue?vue&type=template&id=75d362c6& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=template&id=75d362c6&");


/***/ }),

/***/ "./apps/files/src/components/FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_template_id_2d34be06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_template_id_2d34be06_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_template_id_2d34be06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=template&id=2d34be06&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./apps/files/src/components/NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_template_id_6f96f0a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_template_id_6f96f0a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_template_id_6f96f0a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=template&id=6f96f0a6&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&":
/*!******************************************************************************!*\
  !*** ./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_a0773f8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=template&id=a0773f8e& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/Setting.vue?vue&type=template&id=a0773f8e&");


/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_template_id_14e703d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=template&id=14e703d7&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/FilesList.vue?vue&type=template&id=02e51922&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./apps/files/src/views/FilesList.vue?vue&type=template&id=02e51922&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_template_id_02e51922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_template_id_02e51922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_template_id_02e51922_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesList.vue?vue&type=template&id=02e51922&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=template&id=02e51922&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/Navigation.vue?vue&type=template&id=a8628012&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./apps/files/src/views/Navigation.vue?vue&type=template&id=a8628012&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_a8628012_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_a8628012_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_a8628012_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=a8628012&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=template&id=a8628012&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_de32ad74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=de32ad74&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=template&id=de32ad74&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_template_id_70b9a7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=template&id=70b9a7ea&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbs_vue_vue_type_style_index_0_id_9f0aa34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/BreadCrumbs.vue?vue&type=style&index=0&id=9f0aa34e&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSvgIconRender_vue_vue_type_style_index_0_id_6c70146b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/CustomSvgIconRender.vue?vue&type=style&index=0&id=6c70146b&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_0_id_24fe7eff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=0&id=24fe7eff&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListFooter_vue_vue_type_style_index_0_id_2c7ed299_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListFooter.vue?vue&type=style&index=0&id=2c7ed299&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeader_vue_vue_type_style_index_0_id_4db1368b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeader.vue?vue&type=style&index=0&id=4db1368b&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderActions_vue_vue_type_style_index_0_id_aeb8dcbc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderActions.vue?vue&type=style&index=0&id=aeb8dcbc&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListHeaderButton_vue_vue_type_style_index_0_id_75d362c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListHeaderButton.vue?vue&type=style&index=0&id=75d362c6&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesListVirtual_vue_vue_type_style_index_0_id_2d34be06_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FilesListVirtual.vue?vue&type=style&index=0&id=2d34be06&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuota_vue_vue_type_style_index_0_id_6f96f0a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NavigationQuota.vue?vue&type=style&index=0&id=6f96f0a6&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePreview_vue_vue_type_style_index_0_id_14e703d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TemplatePreview.vue?vue&type=style&index=0&id=14e703d7&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesList_vue_vue_type_style_index_0_id_02e51922_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/FilesList.vue?vue&type=style&index=0&id=02e51922&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_a8628012_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Navigation.vue?vue&type=style&index=0&id=a8628012&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_de32ad74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/Settings.vue?vue&type=style&index=0&id=de32ad74&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplatePicker_vue_vue_type_style_index_0_id_70b9a7ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/views/TemplatePicker.vue?vue&type=style&index=0&id=70b9a7ea&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileEntry_vue_vue_type_style_index_1_id_24fe7eff_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileEntry.vue?vue&type=style&index=1&id=24fe7eff&lang=css&");


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
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + "8ddaf1c5ac4936c83e13" + "";
/******/ 		};
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nextcloud:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"files-main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files/src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files-main.js.map?v=db50e7179ba85b6aa178