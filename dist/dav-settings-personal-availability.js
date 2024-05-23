/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/dav/src/dav/client.js":
/*!************************************!*\
  !*** ./apps/dav/src/dav/client.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClient": () => (/* binding */ getClient)
/* harmony export */ });
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/memoize.js */ "./node_modules/lodash/fp/memoize.js");
/* harmony import */ var lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/**
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
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






const getClient = lodash_fp_memoize_js__WEBPACK_IMPORTED_MODULE_2___default()(service => {
  // Add this so the server knows it is an request from the browser
  _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers["X-Requested-With"] = 'XMLHttpRequest';

  // force our axios
  const patcher = webdav__WEBPACK_IMPORTED_MODULE_0__.getPatcher();
  patcher.patch('request', _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return webdav__WEBPACK_IMPORTED_MODULE_0__.createClient((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateRemoteUrl)("dav/".concat(service, "/").concat((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().uid)));
});

/***/ }),

/***/ "./apps/dav/src/service/CalendarService.js":
/*!*************************************************!*\
  !*** ./apps/dav/src/service/CalendarService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findScheduleInboxAvailability": () => (/* binding */ findScheduleInboxAvailability),
/* harmony export */   "getEmptySlots": () => (/* binding */ getEmptySlots),
/* harmony export */   "saveScheduleInboxAvailability": () => (/* binding */ saveScheduleInboxAvailability)
/* harmony export */ });
/* harmony import */ var _dav_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dav/client.js */ "./apps/dav/src/dav/client.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./apps/dav/src/service/logger.js");
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/calendar-availability-vue */ "./node_modules/@nextcloud/calendar-availability-vue/dist/index.js");
/**
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
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





/**
 *
 */
function getEmptySlots() {
  return {
    MO: [],
    TU: [],
    WE: [],
    TH: [],
    FR: [],
    SA: [],
    SU: []
  };
}

/**
 *
 */
async function findScheduleInboxAvailability() {
  var _xml$multistatus, _xml$multistatus$resp, _xml$multistatus$resp2;
  const client = (0,_dav_client_js__WEBPACK_IMPORTED_MODULE_0__.getClient)('calendars');
  const response = await client.customRequest('inbox', {
    method: 'PROPFIND',
    data: "<?xml version=\"1.0\"?>\n\t\t\t<x0:propfind xmlns:x0=\"DAV:\">\n\t\t\t  <x0:prop>\n\t\t\t\t<x1:calendar-availability xmlns:x1=\"urn:ietf:params:xml:ns:caldav\"/>\n\t\t\t  </x0:prop>\n\t\t\t</x0:propfind>"
  });
  const xml = await (0,webdav__WEBPACK_IMPORTED_MODULE_2__.parseXML)(response.data);
  if (!xml) {
    return undefined;
  }
  const availability = xml === null || xml === void 0 ? void 0 : (_xml$multistatus = xml.multistatus) === null || _xml$multistatus === void 0 ? void 0 : (_xml$multistatus$resp = _xml$multistatus.response[0]) === null || _xml$multistatus$resp === void 0 ? void 0 : (_xml$multistatus$resp2 = _xml$multistatus$resp.propstat) === null || _xml$multistatus$resp2 === void 0 ? void 0 : _xml$multistatus$resp2.prop['calendar-availability'];
  if (!availability) {
    return undefined;
  }
  return (0,_nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_3__.vavailabilityToSlots)(availability);
}

/**
 * @param {any} slots -
 * @param {any} timezoneId -
 */
async function saveScheduleInboxAvailability(slots, timezoneId) {
  const all = [...Object.keys(slots).flatMap(dayId => slots[dayId].map(slot => ({
    ...slot,
    day: dayId
  })))];
  const vavailability = (0,_nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_3__.slotsToVavailability)(all, timezoneId);
  _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('New availability ical created', {
    vavailability
  });
  const client = (0,_dav_client_js__WEBPACK_IMPORTED_MODULE_0__.getClient)('calendars');
  await client.customRequest('inbox', {
    method: 'PROPPATCH',
    data: "<?xml version=\"1.0\"?>\n\t\t\t<x0:propertyupdate xmlns:x0=\"DAV:\">\n\t\t\t  <x0:set>\n\t\t\t\t<x0:prop>\n\t\t\t\t  <x1:calendar-availability xmlns:x1=\"urn:ietf:params:xml:ns:caldav\">".concat(vavailability, "</x1:calendar-availability>\n\t\t\t\t</x0:prop>\n\t\t\t  </x0:set>\n\t\t\t</x0:propertyupdate>")
  });
}

/***/ }),

/***/ "./apps/dav/src/service/PreferenceService.js":
/*!***************************************************!*\
  !*** ./apps/dav/src/service/PreferenceService.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableUserStatusAutomation": () => (/* binding */ disableUserStatusAutomation),
/* harmony export */   "enableUserStatusAutomation": () => (/* binding */ enableUserStatusAutomation)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright 2022 Joas Schilling <coding@schilljs.com>
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */




/**
 * Enable user status automation based on availability
 */
async function enableUserStatusAutomation() {
  return await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
    appId: 'dav',
    configKey: 'user_status_automation'
  }), {
    configValue: 'yes'
  });
}

/**
 * Disable user status automation based on availability
 */
async function disableUserStatusAutomation() {
  return await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
    appId: 'dav',
    configKey: 'user_status_automation'
  }));
}

/***/ }),

/***/ "./apps/dav/src/service/logger.js":
/*!****************************************!*\
  !*** ./apps/dav/src/service/logger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/*
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
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

const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('dav').detectUser().build();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ "./apps/dav/src/settings-personal-availability.js":
/*!********************************************************!*\
  !*** ./apps/dav/src/settings-personal-availability.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _views_Availability_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Availability.vue */ "./apps/dav/src/views/Availability.vue");



vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.$t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_views_Availability_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
new View({}).$mount('#settings-personal-availability');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-availability-vue */ "./node_modules/@nextcloud/calendar-availability-vue/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/CalendarService.js */ "./apps/dav/src/service/CalendarService.js");
/* harmony import */ var _service_PreferenceService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/PreferenceService.js */ "./apps/dav/src/service/PreferenceService.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcTimezonePicker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTimezonePicker.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTimezonePicker.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTimezonePicker_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcTimezonePicker_js__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Availability',
  components: {
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5___default()),
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_6___default()),
    CalendarAvailability: _nextcloud_calendar_availability_vue__WEBPACK_IMPORTED_MODULE_0__.CalendarAvailability,
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_7___default()),
    NcTimezonePicker: (_nextcloud_vue_dist_Components_NcTimezonePicker_js__WEBPACK_IMPORTED_MODULE_8___default())
  },
  data() {
    var _Intl$DateTimeFormat$, _Intl$DateTimeFormat, _Intl$DateTimeFormat$2;
    // Try to determine the current timezone, and fall back to UTC otherwise
    const defaultTimezoneId = (_Intl$DateTimeFormat$ = (_Intl$DateTimeFormat = new Intl.DateTimeFormat()) === null || _Intl$DateTimeFormat === void 0 ? void 0 : (_Intl$DateTimeFormat$2 = _Intl$DateTimeFormat.resolvedOptions()) === null || _Intl$DateTimeFormat$2 === void 0 ? void 0 : _Intl$DateTimeFormat$2.timeZone) !== null && _Intl$DateTimeFormat$ !== void 0 ? _Intl$DateTimeFormat$ : 'UTC';
    return {
      loading: true,
      saving: false,
      timezone: defaultTimezoneId,
      slots: (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.getEmptySlots)(),
      automated: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('dav', 'user_status_automation') === 'yes'
    };
  },
  async mounted() {
    try {
      const slotData = await (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.findScheduleInboxAvailability)();
      if (!slotData) {
        console.info('no availability is set');
        this.slots = (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.getEmptySlots)();
      } else {
        const {
          slots,
          timezoneId
        } = slotData;
        this.slots = slots;
        if (timezoneId) {
          this.timezone = timezoneId;
        }
        console.info('availability loaded', this.slots, this.timezoneId);
      }
    } catch (e) {
      console.error('could not load existing availability', e);
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('dav', 'Failed to load availability'));
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async save() {
      try {
        this.saving = true;
        await (0,_service_CalendarService_js__WEBPACK_IMPORTED_MODULE_3__.saveScheduleInboxAvailability)(this.slots, this.timezone);
        if (this.automated) {
          await (0,_service_PreferenceService_js__WEBPACK_IMPORTED_MODULE_4__.enableUserStatusAutomation)();
        } else {
          await (0,_service_PreferenceService_js__WEBPACK_IMPORTED_MODULE_4__.disableUserStatusAutomation)();
        }
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('dav', 'Saved availability'));
      } catch (e) {
        console.error('could not save availability', e);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('dav', 'Failed to save availability'));
      } finally {
        this.saving = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48&scoped=true& ***!
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
  return _c("NcSettingsSection", {
    attrs: {
      title: _vm.$t("dav", "Availability"),
      description: _vm.$t("dav", "If you configure your working hours, other users will see when you are out of office when they book a meeting.")
    }
  }, [_c("div", {
    staticClass: "time-zone"
  }, [_c("strong", [_vm._v("\n\t\t\t" + _vm._s(_vm.$t("dav", "Time zone:")) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "time-zone-text"
  }, [_c("NcTimezonePicker", {
    model: {
      value: _vm.timezone,
      callback: function ($$v) {
        _vm.timezone = $$v;
      },
      expression: "timezone"
    }
  })], 1)]), _vm._v(" "), _c("CalendarAvailability", {
    attrs: {
      slots: _vm.slots,
      loading: _vm.loading,
      "l10n-to": _vm.$t("dav", "to"),
      "l10n-delete-slot": _vm.$t("dav", "Delete slot"),
      "l10n-empty-day": _vm.$t("dav", "No working hours set"),
      "l10n-add-slot": _vm.$t("dav", "Add slot"),
      "l10n-monday": _vm.$t("dav", "Monday"),
      "l10n-tuesday": _vm.$t("dav", "Tuesday"),
      "l10n-wednesday": _vm.$t("dav", "Wednesday"),
      "l10n-thursday": _vm.$t("dav", "Thursday"),
      "l10n-friday": _vm.$t("dav", "Friday"),
      "l10n-saturday": _vm.$t("dav", "Saturday"),
      "l10n-sunday": _vm.$t("dav", "Sunday")
    },
    on: {
      "update:slots": function ($event) {
        _vm.slots = $event;
      }
    }
  }), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      checked: _vm.automated
    },
    on: {
      "update:checked": function ($event) {
        _vm.automated = $event;
      }
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("dav", 'Automatically set user status to "Do not disturb" outside of availability to mute all notifications.')) + "\n\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      disabled: _vm.loading || _vm.saving,
      type: "primary"
    },
    on: {
      click: _vm.save
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.$t("dav", "Save")) + "\n\t")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".availability-day[data-v-aad5ff48] {\n  padding: 0 10px 0 10px;\n  position: absolute;\n}\n.availability-slots[data-v-aad5ff48] {\n  display: flex;\n  white-space: nowrap;\n}\n.availability-slot[data-v-aad5ff48] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.availability-slot-group[data-v-aad5ff48] {\n  display: flex;\n  flex-direction: column;\n}\n[data-v-aad5ff48] .mx-input-wrapper {\n  width: 85px;\n}\n[data-v-aad5ff48] .mx-datepicker {\n  width: 97px;\n}\n[data-v-aad5ff48] .multiselect {\n  border: 1px solid var(--color-border-dark);\n  width: 120px;\n}\n.time-zone[data-v-aad5ff48] {\n  padding: 32px 12px 12px 0;\n}\n.grid-table[data-v-aad5ff48] {\n  display: grid;\n  margin-bottom: 32px;\n  grid-column-gap: 24px;\n  grid-row-gap: 6px;\n  grid-template-columns: min-content min-content min-content;\n}\n.button[data-v-aad5ff48] {\n  align-self: flex-end;\n}\n.label-weekday[data-v-aad5ff48] {\n  position: relative;\n  display: inline-flex;\n  padding-top: 4px;\n}\n.delete-slot[data-v-aad5ff48] {\n  background-color: transparent;\n  border: none;\n  padding-bottom: 12px;\n  opacity: 0.5;\n}\n.delete-slot[data-v-aad5ff48]:hover {\n  opacity: 1;\n}\n.add-another[data-v-aad5ff48] {\n  background-color: transparent;\n  border: none;\n  opacity: 0.5;\n  display: inline-flex;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 3px;\n}\n.add-another[data-v-aad5ff48]:hover {\n  opacity: 1;\n}\n.to-text[data-v-aad5ff48] {\n  padding-right: 12px;\n}\n.time-zone-text[data-v-aad5ff48] {\n  padding-left: 22px;\n}\n.empty-content[data-v-aad5ff48] {\n  color: var(--color-text-lighter);\n  margin-top: 4px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true& ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/dav/src/views/Availability.vue":
/*!*********************************************!*\
  !*** ./apps/dav/src/views/Availability.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Availability_vue_vue_type_template_id_aad5ff48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Availability.vue?vue&type=template&id=aad5ff48&scoped=true& */ "./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48&scoped=true&");
/* harmony import */ var _Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Availability.vue?vue&type=script&lang=js& */ "./apps/dav/src/views/Availability.vue?vue&type=script&lang=js&");
/* harmony import */ var _Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true& */ "./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Availability_vue_vue_type_template_id_aad5ff48_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Availability_vue_vue_type_template_id_aad5ff48_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aad5ff48",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/dav/src/views/Availability.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/dav/src/views/Availability.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./apps/dav/src/views/Availability.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Availability.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_aad5ff48_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_aad5ff48_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_template_id_aad5ff48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Availability.vue?vue&type=template&id=aad5ff48&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=template&id=aad5ff48&scoped=true&");


/***/ }),

/***/ "./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Availability_vue_vue_type_style_index_0_id_aad5ff48_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/dav/src/views/Availability.vue?vue&type=style&index=0&id=aad5ff48&lang=scss&scoped=true&");


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
/******/ 			"dav-settings-personal-availability": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/dav/src/settings-personal-availability.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dav-settings-personal-availability.js.map?v=901da40e0eb05e0c20f2