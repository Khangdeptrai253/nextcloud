/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/main-admin-security.js":
/*!**************************************************!*\
  !*** ./apps/settings/src/main-admin-security.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_AdminTwoFactor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AdminTwoFactor.vue */ "./apps/settings/src/components/AdminTwoFactor.vue");
/* harmony import */ var _components_Encryption_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Encryption.vue */ "./apps/settings/src/components/Encryption.vue");
/* harmony import */ var _store_admin_security_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/admin-security.js */ "./apps/settings/src/store/admin-security.js");
/**
 * @copyright Copyright (c) 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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







// eslint-disable-next-line camelcase
__webpack_require__.nc = btoa(OC.requestToken);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.t = t;

// Not used here but required for legacy templates
window.OC = window.OC || {};
window.OC.Settings = window.OC.Settings || {};
_store_admin_security_js__WEBPACK_IMPORTED_MODULE_3__["default"].replaceState((0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'mandatory2FAState'));
const View = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_components_AdminTwoFactor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
new View({
  store: _store_admin_security_js__WEBPACK_IMPORTED_MODULE_3__["default"]
}).$mount('#two-factor-auth-settings');
const EncryptionView = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_components_Encryption_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
new EncryptionView().$mount('#vue-admin-encryption');

/***/ }),

/***/ "./apps/settings/src/store/admin-security.js":
/*!***************************************************!*\
  !*** ./apps/settings/src/store/admin-security.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/**
 * @copyright 2019 Roeland Jago Douma <roeland@famdouma.nl>
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



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
const state = {
  enforced: false,
  enforcedGroups: [],
  excludedGroups: []
};
const mutations = {
  setEnforced(state, enabled) {
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state, 'enforced', enabled);
  },
  setEnforcedGroups(state, total) {
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state, 'enforcedGroups', total);
  },
  setExcludedGroups(state, used) {
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state, 'excludedGroups', used);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_1__.Store({
  strict: "development" !== 'production',
  state,
  mutations
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcMultiselect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcMultiselect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcMultiselect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcMultiselect_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcMultiselect_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AdminTwoFactor',
  components: {
    NcMultiselect: (_nextcloud_vue_dist_Components_NcMultiselect_js__WEBPACK_IMPORTED_MODULE_1___default()),
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4___default())
  },
  data() {
    return {
      loading: false,
      dirty: false,
      groups: [],
      loadingGroups: false,
      twoFactorAdminDoc: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('settings', 'two-factor-admin-doc')
    };
  },
  computed: {
    enforced: {
      get() {
        return this.$store.state.enforced;
      },
      set(val) {
        this.dirty = true;
        this.$store.commit('setEnforced', val);
      }
    },
    enforcedGroups: {
      get() {
        return this.$store.state.enforcedGroups;
      },
      set(val) {
        this.dirty = true;
        this.$store.commit('setEnforcedGroups', val);
      }
    },
    excludedGroups: {
      get() {
        return this.$store.state.excludedGroups;
      },
      set(val) {
        this.dirty = true;
        this.$store.commit('setExcludedGroups', val);
      }
    }
  },
  mounted() {
    // Groups are loaded dynamically, but the assigned ones *should*
    // be valid groups, so let's add them as initial state
    this.groups = lodash__WEBPACK_IMPORTED_MODULE_6___default().sortedUniq(lodash__WEBPACK_IMPORTED_MODULE_6___default().uniq(this.enforcedGroups.concat(this.excludedGroups)));

    // Populate the groups with a first set so the dropdown is not empty
    // when opening the page the first time
    this.searchGroup('');
  },
  methods: {
    searchGroup: lodash__WEBPACK_IMPORTED_MODULE_6___default().debounce(function (query) {
      this.loadingGroups = true;
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_7__.generateOcsUrl)('cloud/groups?offset=0&search={query}&limit=20', {
        query
      })).then(res => res.data.ocs).then(ocs => ocs.data.groups).then(groups => {
        this.groups = lodash__WEBPACK_IMPORTED_MODULE_6___default().sortedUniq(lodash__WEBPACK_IMPORTED_MODULE_6___default().uniq(this.groups.concat(groups)));
      }).catch(err => console.error('could not search groups', err)).then(() => {
        this.loadingGroups = false;
      });
    }, 500),
    saveChanges() {
      this.loading = true;
      const data = {
        enforced: this.enforced,
        enforcedGroups: this.enforcedGroups,
        excludedGroups: this.excludedGroups
      };
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_7__.generateUrl)('/settings/api/admin/twofactorauth'), data).then(resp => resp.data).then(state => {
        this.state = state;
        this.dirty = false;
      }).catch(err => {
        console.error('could not save changes', err);
      }).then(() => {
        this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_password_confirmation_dist_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/password-confirmation/dist/style.css */ "./node_modules/@nextcloud/password-confirmation/dist/style.css");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");










const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_5__.getLoggerBuilder)().setApp('settings').detectUser().build();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Encryption',
  components: {
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_2___default())
  },
  data() {
    const encryptionModules = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_4__.loadState)('settings', 'encryption-modules');
    return {
      encryptionReady: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_4__.loadState)('settings', 'encryption-ready'),
      encryptionEnabled: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_4__.loadState)('settings', 'encryption-enabled'),
      externalBackendsEnabled: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_4__.loadState)('settings', 'external-backends-enabled'),
      encryptionAdminDoc: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_4__.loadState)('settings', 'encryption-admin-doc'),
      encryptionModules,
      shouldDisplayWarning: false,
      migrating: false,
      defaultCheckedModule: Object.entries(encryptionModules).find(module => module[1].default)[0]
    };
  },
  computed: {
    migrationMessage() {
      return t('settings', 'You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please enable the "Default encryption module" and run {command}', {
        command: '"occ encryption:migrate"'
      });
    }
  },
  methods: {
    displayWarning() {
      if (!this.encryptionEnabled) {
        this.shouldDisplayWarning = !this.shouldDisplayWarning;
      } else {
        this.encryptionEnabled = false;
        this.shouldDisplayWarning = false;
      }
    },
    async update(key, value) {
      await (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_7__.confirmPassword)();
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_6__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {
        appId: 'core',
        key
      });
      try {
        var _data$ocs, _data$ocs$meta;
        const {
          data
        } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          value
        });
        this.handleResponse({
          status: (_data$ocs = data.ocs) === null || _data$ocs === void 0 ? void 0 : (_data$ocs$meta = _data$ocs.meta) === null || _data$ocs$meta === void 0 ? void 0 : _data$ocs$meta.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update server side encryption config'),
          error: e
        });
      }
    },
    async checkDefaultModule() {
      await this.update('default_encryption_module', this.defaultCheckedModule);
    },
    async enableEncryption() {
      this.encryptionEnabled = true;
      await this.update('encryption_enabled', 'yes');
    },
    async handleResponse(_ref) {
      let {
        status,
        errorMessage,
        error
      } = _ref;
      if (status !== 'ok') {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_9__.showError)(errorMessage);
        logger.error(errorMessage, {
          error
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcSettingsSection", {
    attrs: {
      title: _vm.t("settings", "Two-Factor Authentication"),
      description: _vm.t("settings", "Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system.")
    }
  }, [_vm.loading ? _c("p", [_c("span", {
    staticClass: "icon-loading-small two-factor-loading"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.t("settings", "Enforce two-factor authentication")))])]) : _c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "two-factor-enforced",
      checked: _vm.enforced,
      type: "switch"
    },
    on: {
      "update:checked": function ($event) {
        _vm.enforced = $event;
      }
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Enforce two-factor authentication")) + "\n\t")]), _vm._v(" "), _vm.enforced ? [_c("h3", [_vm._v(_vm._s(_vm.t("settings", "Limit to groups")))]), _vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Enforcement of two-factor authentication can be set for certain groups only.")) + "\n\t\t"), _c("p", {
    staticClass: "top-margin"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Two-factor authentication is enforced for all members of the following groups.")) + "\n\t\t")]), _vm._v(" "), _c("p", [_c("NcMultiselect", {
    attrs: {
      options: _vm.groups,
      placeholder: _vm.t("settings", "Enforced groups"),
      disabled: _vm.loading,
      multiple: true,
      searchable: true,
      loading: _vm.loadingGroups,
      "show-no-options": false,
      "close-on-select": false
    },
    on: {
      "search-change": _vm.searchGroup
    },
    model: {
      value: _vm.enforcedGroups,
      callback: function ($$v) {
        _vm.enforcedGroups = $$v;
      },
      expression: "enforcedGroups"
    }
  })], 1), _vm._v(" "), _c("p", {
    staticClass: "top-margin"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Two-factor authentication is not enforced for members of the following groups.")) + "\n\t\t")]), _vm._v(" "), _c("p", [_c("NcMultiselect", {
    attrs: {
      options: _vm.groups,
      placeholder: _vm.t("settings", "Excluded groups"),
      disabled: _vm.loading,
      multiple: true,
      searchable: true,
      loading: _vm.loadingGroups,
      "show-no-options": false,
      "close-on-select": false
    },
    on: {
      "search-change": _vm.searchGroup
    },
    model: {
      value: _vm.excludedGroups,
      callback: function ($$v) {
        _vm.excludedGroups = $$v;
      },
      expression: "excludedGroups"
    }
  })], 1), _vm._v(" "), _c("p", {
    staticClass: "top-margin"
  }, [_c("em", [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced.")) + "\n\t\t\t")])])] : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "top-margin"
  }, [_vm.dirty ? _c("NcButton", {
    attrs: {
      type: "primary",
      disabled: _vm.loading
    },
    on: {
      click: _vm.saveChanges
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Save changes")) + "\n\t\t")]) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcSettingsSection", {
    attrs: {
      title: _vm.t("settings", "Server-side encryption"),
      description: _vm.t("settings", "Server-side encryption makes it possible to encrypt files which are uploaded to this server. This comes with limitations like a performance penalty, so enable this only if needed."),
      "doc-url": _vm.encryptionAdminDoc
    }
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      checked: _vm.encryptionEnabled || _vm.shouldDisplayWarning,
      disabled: _vm.encryptionEnabled,
      type: "switch"
    },
    on: {
      "update:checked": _vm.displayWarning
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Enable server-side encryption")) + "\n\t")]), _vm._v(" "), _vm.shouldDisplayWarning && !_vm.encryptionEnabled ? _c("div", {
    staticClass: "notecard warning",
    attrs: {
      role: "alert"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.t("settings", "Please read carefully before activating server-side encryption:")))]), _vm._v(" "), _c("ul", [_c("li", [_vm._v(_vm._s(_vm.t("settings", "Once encryption is enabled, all files uploaded to the server from that point forward will be encrypted at rest on the server. It will only be possible to disable encryption at a later date if the active encryption module supports that function, and all pre-conditions (e.g. setting a recover key) are met.")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.t("settings", "Encryption alone does not guarantee security of the system. Please see documentation for more information about how the encryption app works, and the supported use cases.")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.t("settings", "Be aware that encryption always increases the file size.")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.t("settings", "It is always good to create regular backups of your data, in case of encryption make sure to backup the encryption keys along with your data.")))])]), _vm._v(" "), _c("p", {
    staticClass: "margin-bottom"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "This is the final warning: Do you really want to enable encryption?")) + "\n\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: function ($event) {
        return _vm.enableEncryption();
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Enable encryption")) + "\n\t\t")])], 1) : _vm._e(), _vm._v(" "), _vm.encryptionEnabled ? _c("div", [_vm.encryptionReady ? _c("div", [_vm.encryptionModules.length === 0 ? _c("p", [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "No encryption module loaded, please enable an encryption module in the app menu.")) + "\n\t\t\t")]) : [_c("h3", [_vm._v(_vm._s(_vm.t("settings", "Select default encryption module:")))]), _vm._v(" "), _c("fieldset", _vm._l(_vm.encryptionModules, function (module, id) {
    return _c("NcCheckboxRadioSwitch", {
      key: id,
      attrs: {
        checked: _vm.defaultCheckedModule,
        value: id,
        type: "radio",
        name: "default_encryption_module"
      },
      on: {
        "update:checked": [function ($event) {
          _vm.defaultCheckedModule = $event;
        }, _vm.checkDefaultModule]
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(module.displayName) + "\n\t\t\t\t\t")]);
  }), 1)]], 2) : _vm.externalBackendsEnabled ? _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.migrationMessage)
    }
  }) : _vm._e()]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".notecard.success[data-v-3f32f7f8] {\n  --note-background: rgba(var(--color-success-rgb), 0.2);\n  --note-theme: var(--color-success);\n}\n.notecard.error[data-v-3f32f7f8] {\n  --note-background: rgba(var(--color-error-rgb), 0.2);\n  --note-theme: var(--color-error);\n}\n.notecard.warning[data-v-3f32f7f8] {\n  --note-background: rgba(var(--color-warning-rgb), 0.2);\n  --note-theme: var(--color-warning);\n}\n#body-settings .notecard[data-v-3f32f7f8] {\n  color: var(--color-text-light);\n  background-color: var(--note-background);\n  border: 1px solid var(--color-border);\n  border-left: 4px solid var(--note-theme);\n  border-radius: var(--border-radius);\n  box-shadow: rgba(43, 42, 51, 0.05) 0px 1px 2px 0px;\n  margin: 1rem 0;\n  margin-top: 1rem;\n  padding: 1rem;\n}\nli[data-v-3f32f7f8] {\n  list-style-type: initial;\n  margin-left: 1rem;\n  padding: 0.25rem 0;\n}\n.margin-bottom[data-v-3f32f7f8] {\n  margin-bottom: 0.75rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.two-factor-loading[data-v-20893fad] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: -2px;\n\tmargin-right: 1px;\n}\n.top-margin[data-v-20893fad] {\n\tmargin-top: 0.5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue":
/*!*********************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminTwoFactor_vue_vue_type_template_id_20893fad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true& */ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true&");
/* harmony import */ var _AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTwoFactor.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css& */ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTwoFactor_vue_vue_type_template_id_20893fad_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminTwoFactor_vue_vue_type_template_id_20893fad_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "20893fad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/AdminTwoFactor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Encryption.vue":
/*!*****************************************************!*\
  !*** ./apps/settings/src/components/Encryption.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Encryption_vue_vue_type_template_id_3f32f7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true& */ "./apps/settings/src/components/Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true&");
/* harmony import */ var _Encryption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Encryption.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/Encryption.vue?vue&type=script&lang=js&");
/* harmony import */ var _Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true& */ "./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Encryption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Encryption_vue_vue_type_template_id_3f32f7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Encryption_vue_vue_type_template_id_3f32f7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f32f7f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Encryption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Encryption.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./apps/settings/src/components/Encryption.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Encryption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_template_id_20893fad_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_template_id_20893fad_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_template_id_20893fad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./apps/settings/src/components/Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_template_id_3f32f7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_template_id_3f32f7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_template_id_3f32f7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=template&id=3f32f7f8&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Encryption_vue_vue_type_style_index_0_id_3f32f7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Encryption.vue?vue&type=style&index=0&id=3f32f7f8&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_id_20893fad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&id=20893fad&scoped=true&lang=css&");


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
/******/ 			"settings-vue-settings-admin-security": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-admin-security.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-admin-security.js.map?v=0fdf91b70b8951c5d833