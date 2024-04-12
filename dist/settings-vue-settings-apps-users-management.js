/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/constants/AppsConstants.js":
/*!******************************************************!*\
  !*** ./apps/settings/src/constants/AppsConstants.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APPS_SECTION_ENUM": () => (/* binding */ APPS_SECTION_ENUM)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * @copyright 2022, Julia Kirschenheuter <julia.kirschenheuter@nextcloud.com>
 *
 * @author Julia Kirschenheuter <julia.kirschenheuter@nextcloud.com>
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



/** Enum of verification constants, according to Apps */
const APPS_SECTION_ENUM = Object.freeze({
  enabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Active apps'),
  disabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Disabled apps'),
  updates: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Updates'),
  'app-bundles': (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'App bundles'),
  featured: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Featured apps'),
  supported: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Supported apps') // From subscription
});

/***/ }),

/***/ "./apps/settings/src/logger.js":
/*!*************************************!*\
  !*** ./apps/settings/src/logger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('settings').detectUser().build());

/***/ }),

/***/ "./apps/settings/src/main-apps-users-management.js":
/*!*********************************************************!*\
  !*** ./apps/settings/src/main-apps-users-management.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "router": () => (/* reexport safe */ _router_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "store": () => (/* reexport safe */ _store_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var vuex_router_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-router-sync */ "./node_modules/vuex-router-sync/index.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./apps/settings/src/App.vue");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.js */ "./apps/settings/src/router.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/index.js */ "./apps/settings/src/store/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author rakekniven <mark.ziegler@rakekniven.de>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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







vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"], {
  defaultHtml: false
});
(0,vuex_router_sync__WEBPACK_IMPORTED_MODULE_1__.sync)(_store_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], _router_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

// CSP config for webpack dynamic chunk loading
// eslint-disable-next-line camelcase
__webpack_require__.nc = btoa(OC.requestToken);

// bind to window
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.t = t;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.n = n;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.OCA = OCA;
// eslint-disable-next-line camelcase
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.oc_userconfig = oc_userconfig;
const app = new vue__WEBPACK_IMPORTED_MODULE_5__["default"]({
  router: _router_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  store: _store_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"])
}).$mount('#content');


/***/ }),

/***/ "./apps/settings/src/router.js":
/*!*************************************!*\
  !*** ./apps/settings/src/router.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _constants_AppsConstants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/AppsConstants.js */ "./apps/settings/src/constants/AppsConstants.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index.js */ "./apps/settings/src/store/index.js");
/* harmony import */ var _core_src_OCP_accessibility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/src/OCP/accessibility.js */ "./core/src/OCP/accessibility.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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








// Dynamic loading
const Users = () => Promise.all(/*! import() | settings-users */[__webpack_require__.e("core-common"), __webpack_require__.e("settings-users")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Users.vue */ "./apps/settings/src/views/Users.vue"));
const Apps = () => Promise.all(/*! import() | settings-apps-view */[__webpack_require__.e("core-common"), __webpack_require__.e("settings-apps-view")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Apps.vue */ "./apps/settings/src/views/Apps.vue"));
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]);

/*
 * This is the list of routes where the vuejs app will
 * take over php to provide data
 * You need to forward the php routing (routes.php) to
 * the settings-vue template, where the vue-router will
 * ensure the proper route.
 * ⚠️ Routes needs to match the php routes.
 */
const baseTitle = document.title;
const router = new vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]({
  mode: 'history',
  // if index.php is in the url AND we got this far, then it's working:
  // let's keep using index.php in the url
  base: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)(''),
  linkActiveClass: 'active',
  routes: [{
    path: '/:index(index.php/)?settings/users',
    component: Users,
    props: true,
    name: 'users',
    meta: {
      title: () => {
        return t('settings', 'Active users');
      }
    },
    children: [{
      path: ':selectedGroup',
      name: 'group',
      meta: {
        title: to => {
          if (to.params.selectedGroup === 'admin') {
            return t('settings', 'Admins');
          }
          if (to.params.selectedGroup === 'disabled') {
            return t('settings', 'Disabled users');
          }
          return decodeURIComponent(to.params.selectedGroup);
        }
      },
      component: Users
    }]
  }, {
    path: '/:index(index.php/)?settings/apps',
    component: Apps,
    props: true,
    name: 'apps',
    meta: {
      title: () => {
        return t('settings', 'Your apps');
      }
    },
    children: [{
      path: ':category',
      name: 'apps-category',
      meta: {
        title: async to => {
          if (to.name === 'apps') {
            return t('settings', 'Your apps');
          }
          if (_constants_AppsConstants_js__WEBPACK_IMPORTED_MODULE_1__.APPS_SECTION_ENUM[to.params.category]) {
            return _constants_AppsConstants_js__WEBPACK_IMPORTED_MODULE_1__.APPS_SECTION_ENUM[to.params.category];
          }
          await _store_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('getCategories');
          const category = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].getters.getCategoryById(to.params.category);
          if (category.displayName) {
            return category.displayName;
          }
        }
      },
      component: Apps,
      children: [{
        path: ':id',
        name: 'apps-details',
        component: Apps
      }]
    }]
  }]
});
router.afterEach(async to => {
  var _to$meta$title, _to$meta;
  const metaTitle = await ((_to$meta$title = (_to$meta = to.meta).title) === null || _to$meta$title === void 0 ? void 0 : _to$meta$title.call(_to$meta, to));
  if (metaTitle) {
    document.title = "".concat(metaTitle, " - ").concat(baseTitle);
    (0,_core_src_OCP_accessibility_js__WEBPACK_IMPORTED_MODULE_3__.setPageHeading)(metaTitle);
  } else {
    document.title = baseTitle;
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./apps/settings/src/store/api.js":
/*!****************************************!*\
  !*** ./apps/settings/src/store/api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_password_confirmation_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/password-confirmation/dist/style.css */ "./node_modules/@nextcloud/password-confirmation/dist/style.css");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Sujith Haridasan <sujith.h@gmail.com>
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




const sanitize = function (url) {
  return url.replace(/\/$/, ''); // Remove last url slash
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * This Promise is used to chain a request that require an admin password confirmation
   * Since chaining Promise have a very precise behavior concerning catch and then,
   * you'll need to be careful when using it.
   * e.g
   * // store
   * action(context) {
   *   return api.requireAdmin().then((response) => {
   *     return api.get('url')
   *       .then((response) => {API success})
   *       .catch((error) => {API failure});
   *   }).catch((error) => {requireAdmin failure});
   * }
   * // vue
   * this.$store.dispatch('action').then(() => {always executed})
   *
   * Since Promise.then().catch().then() will always execute the last then
   * this.$store.dispatch('action').then will always be executed
   *
   * If you want requireAdmin failure to also catch the API request failure
   * you will need to throw a new error in the api.get.catch()
   *
   * e.g
   * api.requireAdmin().then((response) => {
   *   api.get('url')
   *     .then((response) => {API success})
   *     .catch((error) => {throw error;});
   * }).catch((error) => {requireAdmin OR API failure});
   *
   * @return {Promise}
   */
  requireAdmin() {
    return (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__.confirmPassword)();
  },
  get(url, options) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(sanitize(url), options);
  },
  post(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(sanitize(url), data);
  },
  patch(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(sanitize(url), data);
  },
  put(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(sanitize(url), data);
  },
  delete(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](sanitize(url), {
      params: data
    });
  }
});

/***/ }),

/***/ "./apps/settings/src/store/apps.js":
/*!*****************************************!*\
  !*** ./apps/settings/src/store/apps.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./apps/settings/src/store/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs/dist/index.css */ "./node_modules/@nextcloud/dialogs/dist/style.css");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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






const state = {
  apps: [],
  categories: [],
  updateCount: 0,
  loading: {},
  loadingList: false,
  gettingCategoriesPromise: null
};
const mutations = {
  APPS_API_FAILURE(state, error) {
    (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('settings', 'An error occurred during the request. Unable to proceed.') + '<br>' + error.error.response.data.data.message, {
      isHTML: true
    });
    console.error(state, error);
  },
  initCategories(state, _ref) {
    let {
      categories,
      updateCount
    } = _ref;
    state.categories = categories;
    state.updateCount = updateCount;
  },
  updateCategories(state, categoriesPromise) {
    state.gettingCategoriesPromise = categoriesPromise;
  },
  setUpdateCount(state, updateCount) {
    state.updateCount = updateCount;
  },
  addCategory(state, category) {
    state.categories.push(category);
  },
  appendCategories(state, categoriesArray) {
    // convert obj to array
    state.categories = categoriesArray;
  },
  setAllApps(state, apps) {
    state.apps = apps;
  },
  setError(state, _ref2) {
    let {
      appId,
      error
    } = _ref2;
    if (!Array.isArray(appId)) {
      appId = [appId];
    }
    appId.forEach(_id => {
      const app = state.apps.find(app => app.id === _id);
      app.error = error;
    });
  },
  clearError(state, _ref3) {
    let {
      appId,
      error
    } = _ref3;
    const app = state.apps.find(app => app.id === appId);
    app.error = null;
  },
  enableApp(state, _ref4) {
    let {
      appId,
      groups
    } = _ref4;
    const app = state.apps.find(app => app.id === appId);
    app.active = true;
    app.groups = groups;
  },
  disableApp(state, appId) {
    const app = state.apps.find(app => app.id === appId);
    app.active = false;
    app.groups = [];
    if (app.removable) {
      app.canUnInstall = true;
    }
  },
  uninstallApp(state, appId) {
    state.apps.find(app => app.id === appId).active = false;
    state.apps.find(app => app.id === appId).groups = [];
    state.apps.find(app => app.id === appId).needsDownload = true;
    state.apps.find(app => app.id === appId).installed = false;
    state.apps.find(app => app.id === appId).canUnInstall = false;
    state.apps.find(app => app.id === appId).canInstall = true;
  },
  updateApp(state, appId) {
    const app = state.apps.find(app => app.id === appId);
    const version = app.update;
    app.update = null;
    app.version = version;
    state.updateCount--;
  },
  resetApps(state) {
    state.apps = [];
  },
  reset(state) {
    state.apps = [];
    state.categories = [];
    state.updateCount = 0;
  },
  startLoading(state, id) {
    if (Array.isArray(id)) {
      id.forEach(_id => {
        vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(state.loading, _id, true);
      });
    } else {
      vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(state.loading, id, true);
    }
  },
  stopLoading(state, id) {
    if (Array.isArray(id)) {
      id.forEach(_id => {
        vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(state.loading, _id, false);
      });
    } else {
      vue__WEBPACK_IMPORTED_MODULE_4__["default"].set(state.loading, id, false);
    }
  }
};
const getters = {
  loading(state) {
    return function (id) {
      return state.loading[id];
    };
  },
  getCategories(state) {
    return state.categories;
  },
  getAllApps(state) {
    return state.apps;
  },
  getUpdateCount(state) {
    return state.updateCount;
  },
  getCategoryById: state => selectedCategoryId => {
    return state.categories.find(category => category.id === selectedCategoryId);
  }
};
const actions = {
  enableApp(context, _ref5) {
    let {
      appId,
      groups
    } = _ref5;
    let apps;
    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', apps);
      context.commit('startLoading', 'install');
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/enable'), {
        appIds: apps,
        groups
      }).then(response => {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        apps.forEach(_appId => {
          context.commit('enableApp', {
            appId: _appId,
            groups
          });
        });

        // check for server health
        return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('apps/files')).then(() => {
          if (response.data.update_required) {
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showInfo)(t('settings', 'The app has been enabled but needs to be updated. You will be redirected to the update page in 5 seconds.'), {
              onClick: () => window.location.reload(),
              close: false
            });
            setTimeout(function () {
              location.reload();
            }, 5000);
          }
        }).catch(() => {
          if (!Array.isArray(appId)) {
            context.commit('setError', {
              appId: apps,
              error: t('settings', 'Error: This app cannot be enabled because it makes the server unstable')
            });
          }
        });
      }).catch(error => {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        context.commit('setError', {
          appId: apps,
          error: error.response.data.data.message
        });
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },
  forceEnableApp(context, _ref6) {
    let {
      appId,
      groups
    } = _ref6;
    let apps;
    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(() => {
      context.commit('startLoading', apps);
      context.commit('startLoading', 'install');
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/force'), {
        appId
      }).then(response => {
        // TODO: find a cleaner solution
        location.reload();
      }).catch(error => {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        context.commit('setError', {
          appId: apps,
          error: error.response.data.data.message
        });
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },
  disableApp(context, _ref7) {
    let {
      appId
    } = _ref7;
    let apps;
    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', apps);
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/disable'), {
        appIds: apps
      }).then(response => {
        context.commit('stopLoading', apps);
        apps.forEach(_appId => {
          context.commit('disableApp', _appId);
        });
        return true;
      }).catch(error => {
        context.commit('stopLoading', apps);
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },
  uninstallApp(context, _ref8) {
    let {
      appId
    } = _ref8;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', appId);
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("settings/apps/uninstall/".concat(appId))).then(response => {
        context.commit('stopLoading', appId);
        context.commit('uninstallApp', appId);
        return true;
      }).catch(error => {
        context.commit('stopLoading', appId);
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },
  updateApp(context, _ref9) {
    let {
      appId
    } = _ref9;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', appId);
      context.commit('startLoading', 'install');
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("settings/apps/update/".concat(appId))).then(response => {
        context.commit('stopLoading', 'install');
        context.commit('stopLoading', appId);
        context.commit('updateApp', appId);
        return true;
      }).catch(error => {
        context.commit('stopLoading', appId);
        context.commit('stopLoading', 'install');
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },
  getAllApps(context) {
    context.commit('startLoading', 'list');
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/list')).then(response => {
      context.commit('setAllApps', response.data.apps);
      context.commit('stopLoading', 'list');
      return true;
    }).catch(error => context.commit('API_FAILURE', error));
  },
  async getCategories(context) {
    let {
      shouldRefetchCategories = false
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (shouldRefetchCategories || !context.state.gettingCategoriesPromise) {
      context.commit('startLoading', 'categories');
      try {
        const categoriesPromise = _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/categories'));
        context.commit('updateCategories', categoriesPromise);
        const categoriesPromiseResponse = await categoriesPromise;
        if (categoriesPromiseResponse.data.length > 0) {
          context.commit('appendCategories', categoriesPromiseResponse.data);
          context.commit('stopLoading', 'categories');
          return true;
        }
        context.commit('stopLoading', 'categories');
        return false;
      } catch (error) {
        context.commit('API_FAILURE', error);
      }
    }
    return context.state.gettingCategoriesPromise;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./apps/settings/src/store/index.js":
/*!******************************************!*\
  !*** ./apps/settings/src/store/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.js */ "./apps/settings/src/store/users.js");
/* harmony import */ var _apps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps.js */ "./apps/settings/src/store/apps.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./apps/settings/src/store/settings.js");
/* harmony import */ var _oc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oc.js */ "./apps/settings/src/store/oc.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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








vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_6__["default"]);
const debug = "development" !== 'production';
const mutations = {
  API_FAILURE(state, error) {
    try {
      const message = error.error.response.data.ocs.meta.message;
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)(t('settings', 'An error occurred during the request. Unable to proceed.') + '<br>' + message, {
        isHTML: true
      });
    } catch (e) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)(t('settings', 'An error occurred during the request. Unable to proceed.'));
    }
    console.error(state, error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_6__.Store({
  modules: {
    users: _users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    apps: _apps_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    settings: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    oc: _oc_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  strict: debug,
  mutations
}));

/***/ }),

/***/ "./apps/settings/src/store/oc.js":
/*!***************************************!*\
  !*** ./apps/settings/src/store/oc.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./apps/settings/src/store/api.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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



const state = {};
const mutations = {};
const getters = {};
const actions = {
  /**
   * Set application config in database
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.app Application name
   * @param {boolean} options.key Config key
   * @param {boolean} options.value Value to set
   * @return {Promise}
   */
  setAppConfig(context, _ref) {
    let {
      app,
      key,
      value
    } = _ref;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/provisioning_api/api/v1/config/apps/{app}/{key}', {
        app,
        key
      }), {
        value
      }).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      app,
      key,
      value,
      error
    }));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./apps/settings/src/store/settings.js":
/*!*********************************************!*\
  !*** ./apps/settings/src/store/settings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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

const state = {
  serverData: {}
};
const mutations = {
  setServerData(state, data) {
    state.serverData = data;
  }
};
const getters = {
  getServerData(state) {
    return state.serverData;
  }
};
const actions = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./apps/settings/src/store/users.js":
/*!******************************************!*\
  !*** ./apps/settings/src/store/users.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./apps/settings/src/store/api.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./apps/settings/src/logger.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Vincent Petry <vincent@nextcloud.com>
 * @author Stephan Orbaugh <stephan.orbaugh@nextcloud.com>
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





const orderGroups = function (groups, orderBy) {
  /* const SORT_USERCOUNT = 1;
   * const SORT_GROUPNAME = 2;
   * https://github.com/nextcloud/server/blob/208e38e84e1a07a49699aa90dc5b7272d24489f0/lib/private/Group/MetaData.php#L34
   */
  if (orderBy === 1) {
    return groups.sort((a, b) => a.usercount - a.disabled < b.usercount - b.disabled);
  } else {
    return groups.sort((a, b) => a.name.localeCompare(b.name));
  }
};
const defaults = {
  group: {
    id: '',
    name: '',
    usercount: 0,
    disabled: 0,
    canAdd: true,
    canRemove: true
  }
};
const state = {
  users: [],
  groups: [],
  orderBy: 1,
  minPasswordLength: 0,
  usersOffset: 0,
  usersLimit: 25,
  userCount: 0
};
const mutations = {
  appendUsers(state, usersObj) {
    // convert obj to array
    const users = state.users.concat(Object.keys(usersObj).map(userid => usersObj[userid]));
    state.usersOffset += state.usersLimit;
    state.users = users;
  },
  setPasswordPolicyMinLength(state, length) {
    state.minPasswordLength = length !== '' ? length : 0;
  },
  initGroups(state, _ref) {
    let {
      groups,
      orderBy,
      userCount
    } = _ref;
    state.groups = groups.map(group => Object.assign({}, defaults.group, group));
    state.orderBy = orderBy;
    state.userCount = userCount;
    state.groups = orderGroups(state.groups, state.orderBy);
  },
  addGroup(state, _ref2) {
    let {
      gid,
      displayName
    } = _ref2;
    try {
      if (typeof state.groups.find(group => group.id === gid) !== 'undefined') {
        return;
      }
      // extend group to default values
      const group = Object.assign({}, defaults.group, {
        id: gid,
        name: displayName
      });
      state.groups.push(group);
      state.groups = orderGroups(state.groups, state.orderBy);
    } catch (e) {
      console.error('Can\'t create group', e);
    }
  },
  renameGroup(state, _ref3) {
    let {
      gid,
      displayName
    } = _ref3;
    const groupIndex = state.groups.findIndex(groupSearch => groupSearch.id === gid);
    if (groupIndex >= 0) {
      const updatedGroup = state.groups[groupIndex];
      updatedGroup.name = displayName;
      state.groups.splice(groupIndex, 1, updatedGroup);
      state.groups = orderGroups(state.groups, state.orderBy);
    }
  },
  removeGroup(state, gid) {
    const groupIndex = state.groups.findIndex(groupSearch => groupSearch.id === gid);
    if (groupIndex >= 0) {
      state.groups.splice(groupIndex, 1);
    }
  },
  addUserGroup(state, _ref4) {
    let {
      userid,
      gid
    } = _ref4;
    const group = state.groups.find(groupSearch => groupSearch.id === gid);
    const user = state.users.find(user => user.id === userid);
    // increase count if user is enabled
    if (group && user.enabled && state.userCount > 0) {
      group.usercount++;
    }
    const groups = user.groups;
    groups.push(gid);
    state.groups = orderGroups(state.groups, state.orderBy);
  },
  removeUserGroup(state, _ref5) {
    let {
      userid,
      gid
    } = _ref5;
    const group = state.groups.find(groupSearch => groupSearch.id === gid);
    const user = state.users.find(user => user.id === userid);
    // lower count if user is enabled
    if (group && user.enabled && state.userCount > 0) {
      group.usercount--;
    }
    const groups = user.groups;
    groups.splice(groups.indexOf(gid), 1);
    state.groups = orderGroups(state.groups, state.orderBy);
  },
  addUserSubAdmin(state, _ref6) {
    let {
      userid,
      gid
    } = _ref6;
    const groups = state.users.find(user => user.id === userid).subadmin;
    groups.push(gid);
  },
  removeUserSubAdmin(state, _ref7) {
    let {
      userid,
      gid
    } = _ref7;
    const groups = state.users.find(user => user.id === userid).subadmin;
    groups.splice(groups.indexOf(gid), 1);
  },
  deleteUser(state, userid) {
    const userIndex = state.users.findIndex(user => user.id === userid);
    this.commit('updateUserCounts', {
      user: state.users[userIndex],
      actionType: 'remove'
    });
    state.users.splice(userIndex, 1);
  },
  addUserData(state, response) {
    const user = response.data.ocs.data;
    state.users.push(user);
    this.commit('updateUserCounts', {
      user,
      actionType: 'create'
    });
  },
  enableDisableUser(state, _ref8) {
    let {
      userid,
      enabled
    } = _ref8;
    const user = state.users.find(user => user.id === userid);
    user.enabled = enabled;
    this.commit('updateUserCounts', {
      user,
      actionType: enabled ? 'enable' : 'disable'
    });
  },
  // update active/disabled counts, groups counts
  updateUserCounts(state, _ref9) {
    let {
      user,
      actionType
    } = _ref9;
    // 0 is a special value
    if (state.userCount === 0) {
      return;
    }
    const disabledGroup = state.groups.find(group => group.id === 'disabled');
    switch (actionType) {
      case 'enable':
      case 'disable':
        disabledGroup.usercount += user.enabled ? -1 : 1; // update Disabled Users count
        state.userCount += user.enabled ? 1 : -1; // update Active Users count
        user.groups.forEach(userGroup => {
          const group = state.groups.find(groupSearch => groupSearch.id === userGroup);
          group.disabled += user.enabled ? -1 : 1; // update group disabled count
        });

        break;
      case 'create':
        state.userCount++; // increment Active Users count

        user.groups.forEach(userGroup => {
          state.groups.find(groupSearch => groupSearch.id === userGroup).usercount++; // increment group total count
        });

        break;
      case 'remove':
        if (user.enabled) {
          state.userCount--; // decrement Active Users count
          user.groups.forEach(userGroup => {
            const group = state.groups.find(groupSearch => groupSearch.id === userGroup);
            if (!group) {
              console.warn('User group ' + userGroup + ' does not exist during user removal');
              return;
            }
            group.usercount--; // decrement group total count
          });
        } else {
          disabledGroup.usercount--; // decrement Disabled Users count
          user.groups.forEach(userGroup => {
            const group = state.groups.find(groupSearch => groupSearch.id === userGroup);
            group.disabled--; // decrement group disabled count
          });
        }

        break;
      default:
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error("Unknown action type in updateUserCounts: '".concat(actionType, "'"));
      // not throwing error to interrupt execution as this is not fatal
    }
  },

  setUserData(state, _ref10) {
    let {
      userid,
      key,
      value
    } = _ref10;
    if (key === 'quota') {
      const humanValue = OC.Util.computerFileSize(value);
      state.users.find(user => user.id === userid)[key][key] = humanValue !== null ? humanValue : value;
    } else {
      state.users.find(user => user.id === userid)[key] = value;
    }
  },
  /**
   * Reset users list
   *
   * @param {object} state the store state
   */
  resetUsers(state) {
    state.users = [];
    state.usersOffset = 0;
  }
};
const getters = {
  getUsers(state) {
    return state.users;
  },
  getGroups(state) {
    return state.groups;
  },
  getSubadminGroups(state) {
    // Can't be subadmin of admin or disabled
    return state.groups.filter(group => group.id !== 'admin' && group.id !== 'disabled');
  },
  getPasswordPolicyMinLength(state) {
    return state.minPasswordLength;
  },
  getUsersOffset(state) {
    return state.usersOffset;
  },
  getUsersLimit(state) {
    return state.usersLimit;
  },
  getUserCount(state) {
    return state.userCount;
  }
};
const CancelToken = _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].CancelToken;
let searchRequestCancelSource = null;
const actions = {
  /**
   * search users
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.search Search amongst users
   * @return {Promise}
   */
  searchUsers(context, _ref11) {
    let {
      offset,
      limit,
      search
    } = _ref11;
    search = typeof search === 'string' ? search : '';
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset,
      limit,
      search
    })).catch(error => {
      if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
        context.commit('API_FAILURE', error);
      }
    });
  },
  /**
   * Get user details
   *
   * @param {object} context store context
   * @param {string} userId user id
   * @return {Promise}
   */
  getUser(context, userId) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)("cloud/users/".concat(userId))).catch(error => {
      if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
        context.commit('API_FAILURE', error);
      }
    });
  },
  /**
   * Get all users with full details
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.search Search amongst users
   * @param {string} options.group Get users from group
   * @return {Promise}
   */
  getUsers(context, _ref12) {
    let {
      offset,
      limit,
      search,
      group
    } = _ref12;
    if (searchRequestCancelSource) {
      searchRequestCancelSource.cancel('Operation canceled by another search request.');
    }
    searchRequestCancelSource = CancelToken.source();
    search = typeof search === 'string' ? search : '';

    /**
     * Adding filters in the search bar such as in:files, in:users, etc.
     * collides with this particular search, so we need to remove them
     * here and leave only the original search query
     */
    search = search.replace(/in:[^\s]+/g, '').trim();
    group = typeof group === 'string' ? group : '';
    if (group !== '') {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{group}/users/details?offset={offset}&limit={limit}&search={search}', {
        group: encodeURIComponent(group),
        offset,
        limit,
        search
      }), {
        cancelToken: searchRequestCancelSource.token
      }).then(response => {
        const usersCount = Object.keys(response.data.ocs.data.users).length;
        if (usersCount > 0) {
          context.commit('appendUsers', response.data.ocs.data.users);
        }
        return usersCount;
      }).catch(error => {
        if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
          context.commit('API_FAILURE', error);
        }
      });
    }
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset,
      limit,
      search
    }), {
      cancelToken: searchRequestCancelSource.token
    }).then(response => {
      const usersCount = Object.keys(response.data.ocs.data.users).length;
      if (usersCount > 0) {
        context.commit('appendUsers', response.data.ocs.data.users);
      }
      return usersCount;
    }).catch(error => {
      if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
        context.commit('API_FAILURE', error);
      }
    });
  },
  getGroups(context, _ref13) {
    let {
      offset,
      limit,
      search
    } = _ref13;
    search = typeof search === 'string' ? search : '';
    const limitParam = limit === -1 ? '' : "&limit=".concat(limit);
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups?offset={offset}&search={search}', {
      offset,
      search
    }) + limitParam).then(response => {
      if (Object.keys(response.data.ocs.data.groups).length > 0) {
        response.data.ocs.data.groups.forEach(function (group) {
          context.commit('addGroup', {
            gid: group,
            displayName: group
          });
        });
        return true;
      }
      return false;
    }).catch(error => context.commit('API_FAILURE', error));
  },
  /**
   * Get all users with full details
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.search -
   * @return {Promise}
   */
  getUsersFromList(context, _ref14) {
    let {
      offset,
      limit,
      search
    } = _ref14;
    search = typeof search === 'string' ? search : '';
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset,
      limit,
      search
    })).then(response => {
      if (Object.keys(response.data.ocs.data.users).length > 0) {
        context.commit('appendUsers', response.data.ocs.data.users);
        return true;
      }
      return false;
    }).catch(error => context.commit('API_FAILURE', error));
  },
  /**
   * Get all users with full details from a groupid
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {number} options.offset List offset to request
   * @param {number} options.limit List number to return from offset
   * @param {string} options.groupid -
   * @return {Promise}
   */
  getUsersFromGroup(context, _ref15) {
    let {
      groupid,
      offset,
      limit
    } = _ref15;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{groupId}/details?offset={offset}&limit={limit}', {
      groupId: encodeURIComponent(groupid),
      offset,
      limit
    })).then(response => context.commit('getUsersFromList', response.data.ocs.data.users)).catch(error => context.commit('API_FAILURE', error));
  },
  getPasswordPolicyMinLength(context) {
    if (OC.getCapabilities().password_policy && OC.getCapabilities().password_policy.minLength) {
      context.commit('setPasswordPolicyMinLength', OC.getCapabilities().password_policy.minLength);
      return OC.getCapabilities().password_policy.minLength;
    }
    return false;
  },
  /**
   * Add group
   *
   * @param {object} context store context
   * @param {string} gid Group id
   * @return {Promise}
   */
  addGroup(context, gid) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups'), {
        groupid: gid
      }).then(response => {
        context.commit('addGroup', {
          gid,
          displayName: gid
        });
        return {
          gid,
          displayName: gid
        };
      }).catch(error => {
        throw error;
      });
    }).catch(error => {
      context.commit('API_FAILURE', {
        gid,
        error
      });
      // let's throw one more time to prevent the view
      // from adding the user to a group that doesn't exists
      throw error;
    });
  },
  /**
   * Rename group
   *
   * @param {object} context store context
   * @param {string} groupid Group id
   * @param {string} displayName Group display name
   * @return {Promise}
   */
  renameGroup(context, _ref16) {
    let {
      groupid,
      displayName
    } = _ref16;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{groupId}', {
        groupId: encodeURIComponent(groupid)
      }), {
        key: 'displayname',
        value: displayName
      }).then(response => {
        context.commit('renameGroup', {
          gid: groupid,
          displayName
        });
        return {
          groupid,
          displayName
        };
      }).catch(error => {
        throw error;
      });
    }).catch(error => {
      context.commit('API_FAILURE', {
        groupid,
        error
      });
      // let's throw one more time to prevent the view
      // from renaming the group
      throw error;
    });
  },
  /**
   * Remove group
   *
   * @param {object} context store context
   * @param {string} gid Group id
   * @return {Promise}
   */
  removeGroup(context, gid) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{groupId}', {
        groupId: encodeURIComponent(gid)
      })).then(response => context.commit('removeGroup', gid)).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      gid,
      error
    }));
  },
  /**
   * Add user to group
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  addUserGroup(context, _ref17) {
    let {
      userid,
      gid
    } = _ref17;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/groups', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('addUserGroup', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Remove user from group
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  removeUserGroup(context, _ref18) {
    let {
      userid,
      gid
    } = _ref18;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/groups', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('removeUserGroup', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => {
      context.commit('API_FAILURE', {
        userid,
        error
      });
      // let's throw one more time to prevent
      // the view from removing the user row on failure
      throw error;
    });
  },
  /**
   * Add user to group admin
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  addUserSubAdmin(context, _ref19) {
    let {
      userid,
      gid
    } = _ref19;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/subadmins', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('addUserSubAdmin', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Remove user from group admin
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  removeUserSubAdmin(context, _ref20) {
    let {
      userid,
      gid
    } = _ref20;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/subadmins', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('removeUserSubAdmin', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Mark all user devices for remote wipe
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  wipeUserDevices(context, userid) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/wipe', {
        userid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Delete a user
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  deleteUser(context, userid) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
        userid
      })).then(response => context.commit('deleteUser', userid)).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Add a user
   *
   * @param {object} context store context
   * @param {Function} context.commit -
   * @param {Function} context.dispatch -
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.password User password
   * @param {string} options.displayName User display name
   * @param {string} options.email User email
   * @param {string} options.groups User groups
   * @param {string} options.subadmin User subadmin groups
   * @param {string} options.quota User email
   * @param {string} options.language User language
   * @param {string} options.manager User manager
   * @return {Promise}
   */
  addUser(_ref21, _ref22) {
    let {
      commit,
      dispatch
    } = _ref21;
    let {
      userid,
      password,
      displayName,
      email,
      groups,
      subadmin,
      quota,
      language,
      manager
    } = _ref22;
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users'), {
        userid,
        password,
        displayName,
        email,
        groups,
        subadmin,
        quota,
        language,
        manager
      }).then(response => dispatch('addUserData', userid || response.data.ocs.data.id)).catch(error => {
        throw error;
      });
    }).catch(error => {
      commit('API_FAILURE', {
        userid,
        error
      });
      throw error;
    });
  },
  /**
   * Get user data and commit addition
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  addUserData(context, userid) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
        userid
      })).then(response => context.commit('addUserData', response)).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Enable or disable user
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {boolean} options.enabled User enablement status
   * @return {Promise}
   */
  enableDisableUser(context, _ref23) {
    let {
      userid,
      enabled = true
    } = _ref23;
    const userStatus = enabled ? 'enable' : 'disable';
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/{userStatus}', {
        userid,
        userStatus
      })).then(response => context.commit('enableDisableUser', {
        userid,
        enabled
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },
  /**
   * Edit user data
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.key User field to edit
   * @param {string} options.value Value of the change
   * @return {Promise}
   */
  setUserData(context, _ref24) {
    let {
      userid,
      key,
      value
    } = _ref24;
    const allowedEmpty = ['email', 'displayname', 'manager'];
    if (['email', 'language', 'quota', 'displayname', 'password', 'manager'].indexOf(key) !== -1) {
      // We allow empty email or displayname
      if (typeof value === 'string' && (allowedEmpty.indexOf(key) === -1 && value.length > 0 || allowedEmpty.indexOf(key) !== -1)) {
        return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
          return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
            userid
          }), {
            key,
            value
          }).then(response => context.commit('setUserData', {
            userid,
            key,
            value
          })).catch(error => {
            throw error;
          });
        }).catch(error => context.commit('API_FAILURE', {
          userid,
          error
        }));
      }
    }
    return Promise.reject(new Error('Invalid request data'));
  },
  /**
   * Send welcome mail
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  sendWelcomeMail(context, userid) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/welcome', {
        userid
      })).then(response => true).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  beforeMount() {
    // importing server data into the store
    const serverDataElmt = document.getElementById('serverData');
    if (serverDataElmt !== null) {
      this.$store.commit('setServerData', JSON.parse(document.getElementById('serverData').dataset.server));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("router-view");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./apps/settings/src/App.vue":
/*!***********************************!*\
  !*** ./apps/settings/src/App.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f468116e& */ "./apps/settings/src/App.vue?vue&type=template&id=f468116e&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./apps/settings/src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/App.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./apps/settings/src/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/App.vue?vue&type=template&id=f468116e&":
/*!******************************************************************!*\
  !*** ./apps/settings/src/App.vue?vue&type=template&id=f468116e& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=f468116e& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e&");


/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27/%3e%3c/svg%3e";

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
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + {"_fd9c-_0fee-_0cc0-_aeb7":"8ddaf1c5ac4936c83e13","settings-users":"dba5a41165402506a98f","settings-apps-view":"1d6aaf54af11cf64a3db"}[chunkId] + "";
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
/******/ 			"settings-vue-settings-apps-users-management": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-apps-users-management.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-apps-users-management.js.map?v=adb4f6a900214740af1f