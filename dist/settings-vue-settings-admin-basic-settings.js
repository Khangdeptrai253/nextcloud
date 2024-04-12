/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/constants/AccountPropertyConstants.js":
/*!*****************************************************************!*\
  !*** ./apps/settings/src/constants/AccountPropertyConstants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCOUNT_PROPERTY_ENUM": () => (/* binding */ ACCOUNT_PROPERTY_ENUM),
/* harmony export */   "ACCOUNT_PROPERTY_READABLE_ENUM": () => (/* binding */ ACCOUNT_PROPERTY_READABLE_ENUM),
/* harmony export */   "ACCOUNT_SETTING_PROPERTY_ENUM": () => (/* binding */ ACCOUNT_SETTING_PROPERTY_ENUM),
/* harmony export */   "ACCOUNT_SETTING_PROPERTY_READABLE_ENUM": () => (/* binding */ ACCOUNT_SETTING_PROPERTY_READABLE_ENUM),
/* harmony export */   "DEFAULT_ADDITIONAL_EMAIL_SCOPE": () => (/* binding */ DEFAULT_ADDITIONAL_EMAIL_SCOPE),
/* harmony export */   "NAME_READABLE_ENUM": () => (/* binding */ NAME_READABLE_ENUM),
/* harmony export */   "PROFILE_READABLE_ENUM": () => (/* binding */ PROFILE_READABLE_ENUM),
/* harmony export */   "PROPERTY_READABLE_KEYS_ENUM": () => (/* binding */ PROPERTY_READABLE_KEYS_ENUM),
/* harmony export */   "PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM": () => (/* binding */ PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM),
/* harmony export */   "SCOPE_ENUM": () => (/* binding */ SCOPE_ENUM),
/* harmony export */   "SCOPE_PROPERTY_ENUM": () => (/* binding */ SCOPE_PROPERTY_ENUM),
/* harmony export */   "SCOPE_SUFFIX": () => (/* binding */ SCOPE_SUFFIX),
/* harmony export */   "UNPUBLISHED_READABLE_PROPERTIES": () => (/* binding */ UNPUBLISHED_READABLE_PROPERTIES),
/* harmony export */   "VALIDATE_EMAIL_REGEX": () => (/* binding */ VALIDATE_EMAIL_REGEX),
/* harmony export */   "VERIFICATION_ENUM": () => (/* binding */ VERIFICATION_ENUM)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

/*
 * SYNC to be kept in sync with `lib/public/Accounts/IAccountManager.php`
 */



/** Enum of account properties */
const ACCOUNT_PROPERTY_ENUM = Object.freeze({
  ADDRESS: 'address',
  AVATAR: 'avatar',
  BIOGRAPHY: 'biography',
  DISPLAYNAME: 'displayname',
  EMAIL_COLLECTION: 'additional_mail',
  EMAIL: 'email',
  HEADLINE: 'headline',
  NOTIFICATION_EMAIL: 'notify_email',
  FEDIVERSE: 'fediverse',
  ORGANISATION: 'organisation',
  PHONE: 'phone',
  PROFILE_ENABLED: 'profile_enabled',
  ROLE: 'role',
  TWITTER: 'twitter',
  WEBSITE: 'website'
});

/** Enum of account properties to human readable account property names */
const ACCOUNT_PROPERTY_READABLE_ENUM = Object.freeze({
  ADDRESS: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Location'),
  AVATAR: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Profile picture'),
  BIOGRAPHY: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'About'),
  DISPLAYNAME: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Full name'),
  EMAIL_COLLECTION: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Additional email'),
  EMAIL: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Email'),
  HEADLINE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Headline'),
  ORGANISATION: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Organisation'),
  PHONE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Phone number'),
  PROFILE_ENABLED: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Profile'),
  ROLE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Role'),
  TWITTER: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Twitter'),
  FEDIVERSE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Fediverse (e.g. Mastodon)'),
  WEBSITE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Website')
});
const NAME_READABLE_ENUM = Object.freeze({
  [ACCOUNT_PROPERTY_ENUM.ADDRESS]: ACCOUNT_PROPERTY_READABLE_ENUM.ADDRESS,
  [ACCOUNT_PROPERTY_ENUM.AVATAR]: ACCOUNT_PROPERTY_READABLE_ENUM.AVATAR,
  [ACCOUNT_PROPERTY_ENUM.BIOGRAPHY]: ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY,
  [ACCOUNT_PROPERTY_ENUM.DISPLAYNAME]: ACCOUNT_PROPERTY_READABLE_ENUM.DISPLAYNAME,
  [ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION]: ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL_COLLECTION,
  [ACCOUNT_PROPERTY_ENUM.EMAIL]: ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL,
  [ACCOUNT_PROPERTY_ENUM.HEADLINE]: ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE,
  [ACCOUNT_PROPERTY_ENUM.ORGANISATION]: ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION,
  [ACCOUNT_PROPERTY_ENUM.PHONE]: ACCOUNT_PROPERTY_READABLE_ENUM.PHONE,
  [ACCOUNT_PROPERTY_ENUM.PROFILE_ENABLED]: ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED,
  [ACCOUNT_PROPERTY_ENUM.ROLE]: ACCOUNT_PROPERTY_READABLE_ENUM.ROLE,
  [ACCOUNT_PROPERTY_ENUM.TWITTER]: ACCOUNT_PROPERTY_READABLE_ENUM.TWITTER,
  [ACCOUNT_PROPERTY_ENUM.FEDIVERSE]: ACCOUNT_PROPERTY_READABLE_ENUM.FEDIVERSE,
  [ACCOUNT_PROPERTY_ENUM.WEBSITE]: ACCOUNT_PROPERTY_READABLE_ENUM.WEBSITE
});

/** Enum of profile specific sections to human readable names */
const PROFILE_READABLE_ENUM = Object.freeze({
  PROFILE_VISIBILITY: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Profile visibility')
});

/** Enum of readable account properties to account property keys used by the server */
const PROPERTY_READABLE_KEYS_ENUM = Object.freeze({
  [ACCOUNT_PROPERTY_READABLE_ENUM.ADDRESS]: ACCOUNT_PROPERTY_ENUM.ADDRESS,
  [ACCOUNT_PROPERTY_READABLE_ENUM.AVATAR]: ACCOUNT_PROPERTY_ENUM.AVATAR,
  [ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY]: ACCOUNT_PROPERTY_ENUM.BIOGRAPHY,
  [ACCOUNT_PROPERTY_READABLE_ENUM.DISPLAYNAME]: ACCOUNT_PROPERTY_ENUM.DISPLAYNAME,
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL_COLLECTION]: ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION,
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL]: ACCOUNT_PROPERTY_ENUM.EMAIL,
  [ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE]: ACCOUNT_PROPERTY_ENUM.HEADLINE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION]: ACCOUNT_PROPERTY_ENUM.ORGANISATION,
  [ACCOUNT_PROPERTY_READABLE_ENUM.PHONE]: ACCOUNT_PROPERTY_ENUM.PHONE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED]: ACCOUNT_PROPERTY_ENUM.PROFILE_ENABLED,
  [ACCOUNT_PROPERTY_READABLE_ENUM.ROLE]: ACCOUNT_PROPERTY_ENUM.ROLE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.TWITTER]: ACCOUNT_PROPERTY_ENUM.TWITTER,
  [ACCOUNT_PROPERTY_READABLE_ENUM.FEDIVERSE]: ACCOUNT_PROPERTY_ENUM.FEDIVERSE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.WEBSITE]: ACCOUNT_PROPERTY_ENUM.WEBSITE
});

/**
 * Enum of account setting properties
 *
 * Account setting properties unlike account properties do not support scopes*
 */
const ACCOUNT_SETTING_PROPERTY_ENUM = Object.freeze({
  LANGUAGE: 'language',
  LOCALE: 'locale'
});

/** Enum of account setting properties to human readable setting properties */
const ACCOUNT_SETTING_PROPERTY_READABLE_ENUM = Object.freeze({
  LANGUAGE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Language'),
  LOCALE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Locale')
});

/** Enum of scopes */
const SCOPE_ENUM = Object.freeze({
  PRIVATE: 'v2-private',
  LOCAL: 'v2-local',
  FEDERATED: 'v2-federated',
  PUBLISHED: 'v2-published'
});

/** Enum of readable account properties to supported scopes */
const PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM = Object.freeze({
  [ACCOUNT_PROPERTY_READABLE_ENUM.ADDRESS]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.AVATAR]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.DISPLAYNAME]: [SCOPE_ENUM.LOCAL],
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL_COLLECTION]: [SCOPE_ENUM.LOCAL],
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL]: [SCOPE_ENUM.LOCAL],
  [ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.PHONE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.ROLE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.TWITTER]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.FEDIVERSE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.WEBSITE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE]
});

/** List of readable account properties which aren't published to the lookup server */
const UNPUBLISHED_READABLE_PROPERTIES = Object.freeze([ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY, ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE, ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION, ACCOUNT_PROPERTY_READABLE_ENUM.ROLE]);

/** Scope suffix */
const SCOPE_SUFFIX = 'Scope';

/**
 * Enum of scope names to properties
 *
 * Used for federation control*
 */
const SCOPE_PROPERTY_ENUM = Object.freeze({
  [SCOPE_ENUM.PRIVATE]: {
    name: SCOPE_ENUM.PRIVATE,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Private'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Only visible to people matched via phone number integration through Talk on mobile'),
    tooltipDisabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Not available as this property is required for core functionality including file sharing and calendar invitations'),
    iconClass: 'icon-phone'
  },
  [SCOPE_ENUM.LOCAL]: {
    name: SCOPE_ENUM.LOCAL,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Local'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Only visible to people on this instance and guests'),
    // tooltipDisabled is not required here as this scope is supported by all account properties
    iconClass: 'icon-password'
  },
  [SCOPE_ENUM.FEDERATED]: {
    name: SCOPE_ENUM.FEDERATED,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Federated'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Only synchronize to trusted servers'),
    tooltipDisabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Not available as federation has been disabled for your account, contact your system administrator if you have any questions'),
    iconClass: 'icon-contacts-dark'
  },
  [SCOPE_ENUM.PUBLISHED]: {
    name: SCOPE_ENUM.PUBLISHED,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Published'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Synchronize to trusted servers and the global and public address book'),
    tooltipDisabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions'),
    iconClass: 'icon-link'
  }
});

/** Default additional email scope */
const DEFAULT_ADDITIONAL_EMAIL_SCOPE = SCOPE_ENUM.LOCAL;

/** Enum of verification constants, according to IAccountManager */
const VERIFICATION_ENUM = Object.freeze({
  NOT_VERIFIED: 0,
  VERIFICATION_IN_PROGRESS: 1,
  VERIFIED: 2
});

/**
 * Email validation regex
 *
 * Sourced from https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/blob/71e62ca48841d2246a1b531e7e84f5a01f15e615/src/regexp/ascii.ts*
 */
// eslint-disable-next-line no-control-regex
const VALIDATE_EMAIL_REGEX = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/i;

/***/ }),

/***/ "./apps/settings/src/logger.js":
/*!*************************************!*\
  !*** ./apps/settings/src/logger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./apps/settings/src/main-admin-basic-settings.js":
/*!********************************************************!*\
  !*** ./apps/settings/src/main-admin-basic-settings.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs/dist/index.css */ "./node_modules/@nextcloud/dialogs/dist/style.css");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.js */ "./apps/settings/src/logger.js");
/* harmony import */ var _components_BasicSettings_ProfileSettings_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BasicSettings/ProfileSettings.vue */ "./apps/settings/src/components/BasicSettings/ProfileSettings.vue");
/* harmony import */ var _components_BasicSettings_BackgroundJob_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BasicSettings/BackgroundJob.vue */ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue");
/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
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









__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getRequestToken)());
const profileEnabledGlobally = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('settings', 'profileEnabledGlobally', true);
vue__WEBPACK_IMPORTED_MODULE_7__["default"].mixin({
  props: {
    logger: _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate
  }
});
const BackgroundJobView = vue__WEBPACK_IMPORTED_MODULE_7__["default"].extend(_components_BasicSettings_BackgroundJob_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
new BackgroundJobView().$mount('#vue-admin-background-job');
if (profileEnabledGlobally) {
  const ProfileSettingsView = vue__WEBPACK_IMPORTED_MODULE_7__["default"].extend(_components_BasicSettings_ProfileSettings_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  new ProfileSettingsView().$mount('#vue-admin-profile-settings');
}

/***/ }),

/***/ "./apps/settings/src/service/ProfileService.js":
/*!*****************************************************!*\
  !*** ./apps/settings/src/service/ProfileService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveProfileDefault": () => (/* binding */ saveProfileDefault),
/* harmony export */   "saveProfileParameterVisibility": () => (/* binding */ saveProfileParameterVisibility)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_password_confirmation_dist_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/password-confirmation/dist/style.css */ "./node_modules/@nextcloud/password-confirmation/dist/style.css");
/**
 * @copyright 2021 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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







/**
 * Save the visibility of the profile parameter
 *
 * @param {string} paramId the profile parameter ID
 * @param {string} visibility the visibility
 * @return {object}
 */
const saveProfileParameterVisibility = async (paramId, visibility) => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('/profile/{userId}', {
    userId
  });
  await (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__.confirmPassword)();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    paramId,
    visibility
  });
  return res.data;
};

/**
 * Save profile default
 *
 * @param {boolean} isEnabled the default
 * @return {object}
 */
const saveProfileDefault = async isEnabled => {
  // Convert to string for compatibility
  isEnabled = isEnabled ? '1' : '0';
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {
    appId: 'settings',
    key: 'profile_enabled_by_default'
  });
  await (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__.confirmPassword)();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
    value: isEnabled
  });
  return res.data;
};

/***/ }),

/***/ "./apps/settings/src/utils/validate.js":
/*!*********************************************!*\
  !*** ./apps/settings/src/utils/validate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateBoolean": () => (/* binding */ validateBoolean),
/* harmony export */   "validateEmail": () => (/* binding */ validateEmail),
/* harmony export */   "validateLanguage": () => (/* binding */ validateLanguage),
/* harmony export */   "validateLocale": () => (/* binding */ validateLocale),
/* harmony export */   "validateUrl": () => (/* binding */ validateUrl)
/* harmony export */ });
/* harmony import */ var _constants_AccountPropertyConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/AccountPropertyConstants.js */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

/*
 * Frontend validators, less strict than backend validators
 *
 * TODO add nice validation errors for Profile page settings modal
 */



/**
 * Validate the email input
 *
 * Compliant with PHP core FILTER_VALIDATE_EMAIL validator*
 *
 * Reference implementation https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/blob/71e62ca48841d2246a1b531e7e84f5a01f15e615/src/index.ts*
 *
 * @param {string} input the input
 * @return {boolean}
 */
function validateEmail(input) {
  return typeof input === 'string' && _constants_AccountPropertyConstants_js__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_EMAIL_REGEX.test(input) && input.slice(-1) !== '\n' && input.length <= 320 && encodeURIComponent(input).replace(/%../g, 'x').length <= 320;
}

/**
 * Validate the URL input
 *
 * @param {string} input the input
 * @return {boolean}
 */
function validateUrl(input) {
  try {
    // eslint-disable-next-line no-new
    new URL(input);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Validate the language input
 *
 * @param {object} input the input
 * @return {boolean}
 */
function validateLanguage(input) {
  return input.code !== '' && input.name !== '' && input.name !== undefined;
}

/**
 * Validate the locale input
 *
 * @param {object} input the input
 * @return {boolean}
 */
function validateLocale(input) {
  return input.code !== '' && input.name !== '' && input.name !== undefined;
}

/**
 * Validate boolean input
 *
 * @param {boolean} input the input
 * @return {boolean}
 */
function validateBoolean(input) {
  return typeof input === 'boolean';
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_password_confirmation_dist_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/password-confirmation/dist/style.css */ "./node_modules/@nextcloud/password-confirmation/dist/style.css");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");










const lastCron = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'lastCron');
const cronMaxAge = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'cronMaxAge', '');
const backgroundJobsMode = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'backgroundJobsMode', 'cron');
const cliBasedCronPossible = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'cliBasedCronPossible', true);
const cliBasedCronUser = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'cliBasedCronUser', 'www-data');
const backgroundJobsDocUrl = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'backgroundJobsDocUrl');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BackgroundJob',
  components: {
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcNoteCard: (_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_4___default())
  },
  data() {
    return {
      lastCron,
      cronMaxAge,
      backgroundJobsMode,
      cliBasedCronPossible,
      cliBasedCronUser,
      backgroundJobsDocUrl,
      relativeTime: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_5___default()(lastCron * 1000).fromNow(),
      maxAgeRelativeTime: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_5___default()(cronMaxAge * 1000).fromNow()
    };
  },
  computed: {
    cronLabel() {
      let desc = t('settings', 'Use system cron service to call the cron.php file every 5 minutes. Recommended for all instances.');
      if (this.cliBasedCronPossible) {
        desc += ' ' + t('settings', 'The cron.php needs to be executed by the system user "{user}".', {
          user: this.cliBasedCronUser
        });
      }
      return desc;
    },
    oldExecution() {
      return Date.now() / 1000 - this.lastCron > 600;
    },
    longExecutionNotCron() {
      return Date.now() / 1000 - this.cronMaxAge > 12 * 3600 && this.backgroundJobsMode !== 'cron';
    },
    longExecutionCron() {
      return Date.now() / 1000 - this.cronMaxAge > 24 * 3600 && this.backgroundJobsMode === 'cron';
    }
  },
  methods: {
    async onBackgroundJobModeChanged(backgroundJobsMode) {
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_7__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {
        appId: 'core',
        key: 'backgroundjobs_mode'
      });
      await (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_8__.confirmPassword)();
      try {
        var _data$ocs, _data$ocs$meta;
        const {
          data
        } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, {
          value: backgroundJobsMode
        });
        this.handleResponse({
          status: (_data$ocs = data.ocs) === null || _data$ocs === void 0 ? void 0 : (_data$ocs$meta = _data$ocs.meta) === null || _data$ocs$meta === void 0 ? void 0 : _data$ocs$meta.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update background job mode'),
          error: e
        });
      }
    },
    async handleResponse(_ref) {
      let {
        status,
        errorMessage,
        error
      } = _ref;
      if (status === 'ok') {
        await this.deleteError();
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(errorMessage);
        console.error(errorMessage, error);
      }
    },
    async deleteError() {
      // clear cron errors on background job mode change
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_7__.generateOcsUrl)('/apps/provisioning_api/api/v1/config/apps/{appId}/{key}', {
        appId: 'core',
        key: 'cronErrors'
      });
      await (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_8__.confirmPassword)();
      try {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"](url);
      } catch (error) {
        console.error(error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _service_ProfileService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ProfileService.js */ "./apps/settings/src/service/ProfileService.js");
/* harmony import */ var _utils_validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validate.js */ "./apps/settings/src/utils/validate.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logger.js */ "./apps/settings/src/logger.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_5__);






const profileEnabledByDefault = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'profileEnabledByDefault', true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProfileSettings',
  components: {
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_5___default())
  },
  data() {
    return {
      initialProfileEnabledByDefault: profileEnabledByDefault
    };
  },
  methods: {
    async onProfileDefaultChange(isEnabled) {
      if ((0,_utils_validate_js__WEBPACK_IMPORTED_MODULE_3__.validateBoolean)(isEnabled)) {
        await this.updateProfileDefault(isEnabled);
      }
    },
    async updateProfileDefault(isEnabled) {
      try {
        var _responseData$ocs, _responseData$ocs$met;
        const responseData = await (0,_service_ProfileService_js__WEBPACK_IMPORTED_MODULE_2__.saveProfileDefault)(isEnabled);
        this.handleResponse({
          isEnabled,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update profile default setting'),
          error: e
        });
      }
    },
    handleResponse(_ref) {
      let {
        isEnabled,
        status,
        errorMessage,
        error
      } = _ref;
      if (status === 'ok') {
        this.initialProfileEnabledByDefault = isEnabled;
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(errorMessage);
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error(errorMessage, error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("NcSettingsSection", {
    attrs: {
      title: _vm.t("settings", "Background jobs"),
      description: _vm.t("settings", "For the server to work properly, it's important to configure background jobs correctly. Cron is the recommended setting. Please see the documentation for more information."),
      "doc-url": _vm.backgroundJobsDocUrl
    }
  }, [_vm.lastCron !== 0 ? [_vm.oldExecution ? _c("NcNoteCard", {
    attrs: {
      type: "error"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Last job execution ran {time}. Something seems wrong.", {
    time: _vm.relativeTime
  })) + "\n\t\t")]) : _vm.longExecutionCron ? _c("NcNoteCard", {
    attrs: {
      type: "warning"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Some jobs have not been executed since {maxAgeRelativeTime}. Please consider increasing the execution frequency.", {
    maxAgeRelativeTime: _vm.maxAgeRelativeTime
  })) + "\n\t\t")]) : _vm.longExecutionNotCron ? _c("NcNoteCard", {
    attrs: {
      type: "warning"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Some jobs have not been executed since {maxAgeRelativeTime}. Please consider switching to system cron.", {
    maxAgeRelativeTime: _vm.maxAgeRelativeTime
  })) + "\n\t\t")]) : _c("NcNoteCard", {
    attrs: {
      type: "success"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Last job ran {relativeTime}.", {
    relativeTime: _vm.relativeTime
  })) + "\n\t\t")])] : _c("NcNoteCard", {
    attrs: {
      type: "error"
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Background job did not run yet!")) + "\n\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    staticClass: "ajaxSwitch",
    attrs: {
      type: "radio",
      checked: _vm.backgroundJobsMode,
      name: "backgroundJobsMode",
      value: "ajax"
    },
    on: {
      "update:checked": [function ($event) {
        _vm.backgroundJobsMode = $event;
      }, _vm.onBackgroundJobModeChanged]
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "AJAX")) + "\n\t")]), _vm._v(" "), _c("em", [_vm._v(_vm._s(_vm.t("settings", "Execute one task with each page loaded. Use case: Single user instance.")))]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "radio",
      checked: _vm.backgroundJobsMode,
      name: "backgroundJobsMode",
      value: "webcron"
    },
    on: {
      "update:checked": [function ($event) {
        _vm.backgroundJobsMode = $event;
      }, _vm.onBackgroundJobModeChanged]
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Webcron")) + "\n\t")]), _vm._v(" "), _c("em", [_vm._v(_vm._s(_vm.t("settings", "cron.php is registered at a webcron service to call cron.php every 5 minutes over HTTP. Use case: Very small instance (1–5 users depending on the usage).")))]), _vm._v(" "), _vm.cliBasedCronPossible ? _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "radio",
      checked: _vm.backgroundJobsMode,
      value: "cron",
      name: "backgroundJobsMode"
    },
    on: {
      "update:checked": [function ($event) {
        _vm.backgroundJobsMode = $event;
      }, _vm.onBackgroundJobModeChanged]
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Cron (Recommended)")) + "\n\t")]) : _vm._e(), _vm._v(" "), _vm.cliBasedCronPossible ? _c("em", [_vm._v(_vm._s(_vm.cronLabel))]) : _c("em", [_vm._v("\n\t\t{{ t('settings', 'To run this you need the PHP POSIX extension. See {linkstart}PHP documentation{linkend} for more details.', {\n\t\t\tlinkstart: '"), _c("a", {
    attrs: {
      href: "https://www.php.net/manual/en/book.posix.php"
    }
  }, [_vm._v("',\n\t\t\tlinkend: '")]), _vm._v("',\n\t\t}) }}\n\t")])], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "section",
    attrs: {
      id: "profile-settings"
    }
  }, [_c("h2", {
    staticClass: "inlineblock"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Profile")) + "\n\t")]), _vm._v(" "), _c("p", {
    staticClass: "settings-hint"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Enable or disable profile by default for new users.")) + "\n\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      checked: _vm.initialProfileEnabledByDefault
    },
    on: {
      "update:checked": [function ($event) {
        _vm.initialProfileEnabledByDefault = $event;
      }, _vm.onProfileDefaultChange]
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Enable")) + "\n\t")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".error[data-v-09f7e380] {\n  margin-top: 8px;\n  padding: 5px;\n  border-radius: var(--border-radius);\n  color: var(--color-primary-element-text);\n  background-color: var(--color-error);\n  width: initial;\n}\n.warning[data-v-09f7e380] {\n  margin-top: 8px;\n  padding: 5px;\n  border-radius: var(--border-radius);\n  color: var(--color-primary-element-text);\n  background-color: var(--color-warning);\n  width: initial;\n}\n.ajaxSwitch[data-v-09f7e380] {\n  margin-top: 1rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue":
/*!**********************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/BackgroundJob.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackgroundJob_vue_vue_type_template_id_09f7e380_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true& */ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true&");
/* harmony import */ var _BackgroundJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundJob.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=script&lang=js&");
/* harmony import */ var _BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true& */ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BackgroundJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackgroundJob_vue_vue_type_template_id_09f7e380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackgroundJob_vue_vue_type_template_id_09f7e380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "09f7e380",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/BasicSettings/BackgroundJob.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/ProfileSettings.vue":
/*!************************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/ProfileSettings.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileSettings_vue_vue_type_template_id_5d2af286_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true& */ "./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true&");
/* harmony import */ var _ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSettings.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSettings_vue_vue_type_template_id_5d2af286_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileSettings_vue_vue_type_template_id_5d2af286_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5d2af286",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/BasicSettings/ProfileSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundJob.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_template_id_09f7e380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_template_id_09f7e380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_template_id_09f7e380_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=template&id=09f7e380&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_template_id_5d2af286_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_template_id_5d2af286_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_template_id_5d2af286_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/ProfileSettings.vue?vue&type=template&id=5d2af286&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundJob_vue_vue_type_style_index_0_id_09f7e380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/BasicSettings/BackgroundJob.vue?vue&type=style&index=0&id=09f7e380&lang=scss&scoped=true&");


/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
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
/******/ 			"settings-vue-settings-admin-basic-settings": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-admin-basic-settings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-admin-basic-settings.js.map?v=a184c24cb6eb8109cc5f