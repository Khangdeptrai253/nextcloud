/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/utils/fileUtils.js":
/*!*******************************************!*\
  !*** ./apps/files/src/utils/fileUtils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./apps/files_sharing/src/lib/SharePermissionsToolBox.js":
/*!***************************************************************!*\
  !*** ./apps/files_sharing/src/lib/SharePermissionsToolBox.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATOMIC_PERMISSIONS": () => (/* binding */ ATOMIC_PERMISSIONS),
/* harmony export */   "BUNDLED_PERMISSIONS": () => (/* binding */ BUNDLED_PERMISSIONS),
/* harmony export */   "addPermissions": () => (/* binding */ addPermissions),
/* harmony export */   "canTogglePermissions": () => (/* binding */ canTogglePermissions),
/* harmony export */   "hasPermissions": () => (/* binding */ hasPermissions),
/* harmony export */   "permissionsSetIsValid": () => (/* binding */ permissionsSetIsValid),
/* harmony export */   "subtractPermissions": () => (/* binding */ subtractPermissions),
/* harmony export */   "togglePermissions": () => (/* binding */ togglePermissions)
/* harmony export */ });
/**
 * @copyright 2022 Louis Chmn <louis@chmn.me>
 *
 * @author Louis Chmn <louis@chmn.me>
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

const ATOMIC_PERMISSIONS = {
  NONE: 0,
  READ: 1,
  UPDATE: 2,
  CREATE: 4,
  DELETE: 8,
  SHARE: 16
};
const BUNDLED_PERMISSIONS = {
  READ_ONLY: ATOMIC_PERMISSIONS.READ,
  UPLOAD_AND_UPDATE: ATOMIC_PERMISSIONS.READ | ATOMIC_PERMISSIONS.UPDATE | ATOMIC_PERMISSIONS.CREATE | ATOMIC_PERMISSIONS.DELETE,
  FILE_DROP: ATOMIC_PERMISSIONS.CREATE,
  ALL: ATOMIC_PERMISSIONS.UPDATE | ATOMIC_PERMISSIONS.CREATE | ATOMIC_PERMISSIONS.READ | ATOMIC_PERMISSIONS.DELETE | ATOMIC_PERMISSIONS.SHARE,
  ALL_FILE: ATOMIC_PERMISSIONS.UPDATE | ATOMIC_PERMISSIONS.READ | ATOMIC_PERMISSIONS.SHARE
};

/**
 * Return whether a given permissions set contains some permissions.
 *
 * @param {number} initialPermissionSet - the permissions set.
 * @param {number} permissionsToCheck - the permissions to check.
 * @return {boolean}
 */
function hasPermissions(initialPermissionSet, permissionsToCheck) {
  return initialPermissionSet !== ATOMIC_PERMISSIONS.NONE && (initialPermissionSet & permissionsToCheck) === permissionsToCheck;
}

/**
 * Return whether a given permissions set is valid.
 *
 * @param {number} permissionsSet - the permissions set.
 *
 * @return {boolean}
 */
function permissionsSetIsValid(permissionsSet) {
  // Must have at least READ or CREATE permission.
  if (!hasPermissions(permissionsSet, ATOMIC_PERMISSIONS.READ) && !hasPermissions(permissionsSet, ATOMIC_PERMISSIONS.CREATE)) {
    return false;
  }

  // Must have READ permission if have UPDATE or DELETE.
  if (!hasPermissions(permissionsSet, ATOMIC_PERMISSIONS.READ) && (hasPermissions(permissionsSet, ATOMIC_PERMISSIONS.UPDATE) || hasPermissions(permissionsSet, ATOMIC_PERMISSIONS.DELETE))) {
    return false;
  }
  return true;
}

/**
 * Add some permissions to an initial set of permissions.
 *
 * @param {number} initialPermissionSet - the initial permissions.
 * @param {number} permissionsToAdd - the permissions to add.
 *
 * @return {number}
 */
function addPermissions(initialPermissionSet, permissionsToAdd) {
  return initialPermissionSet | permissionsToAdd;
}

/**
 * Remove some permissions from an initial set of permissions.
 *
 * @param {number} initialPermissionSet - the initial permissions.
 * @param {number} permissionsToSubtract - the permissions to remove.
 *
 * @return {number}
 */
function subtractPermissions(initialPermissionSet, permissionsToSubtract) {
  return initialPermissionSet & ~permissionsToSubtract;
}

/**
 * Toggle some permissions from  an initial set of permissions.
 *
 * @param {number} initialPermissionSet - the permissions set.
 * @param {number} permissionsToToggle - the permissions to toggle.
 *
 * @return {number}
 */
function togglePermissions(initialPermissionSet, permissionsToToggle) {
  if (hasPermissions(initialPermissionSet, permissionsToToggle)) {
    return subtractPermissions(initialPermissionSet, permissionsToToggle);
  } else {
    return addPermissions(initialPermissionSet, permissionsToToggle);
  }
}

/**
 * Return whether some given permissions can be toggled from a permission set.
 *
 * @param {number} permissionSet - the initial permissions set.
 * @param {number} permissionsToToggle - the permissions to toggle.
 *
 * @return {boolean}
 */
function canTogglePermissions(permissionSet, permissionsToToggle) {
  return permissionsSetIsValid(togglePermissions(permissionSet, permissionsToToggle));
}

/***/ }),

/***/ "./apps/files_versions/src/files_versions_tab.js":
/*!*******************************************************!*\
  !*** ./apps/files_versions/src/files_versions_tab.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _views_VersionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/VersionTab.vue */ "./apps/files_versions/src/views/VersionTab.vue");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var _mdi_svg_svg_backup_restore_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/backup-restore.svg?raw */ "./node_modules/@mdi/svg/svg/backup-restore.svg?raw");
/**
 * @copyright 2022 Carl Schwan <carl@carlschwan.eu>
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





// eslint-disable-next-line n/no-missing-import, import/no-unresolved

vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.n = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translatePlural;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]);

// Init Sharing tab component
const View = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_views_VersionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
let TabInstance = null;
window.addEventListener('DOMContentLoaded', function () {
  var _OCA$Files;
  if (((_OCA$Files = OCA.Files) === null || _OCA$Files === void 0 ? void 0 : _OCA$Files.Sidebar) === undefined) {
    return;
  }
  OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({
    id: 'version_vue',
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_versions', 'Versions'),
    iconSvg: _mdi_svg_svg_backup_restore_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
    async mount(el, fileInfo, context) {
      if (TabInstance) {
        TabInstance.$destroy();
      }
      TabInstance = new View({
        // Better integration with vue parent component
        parent: context
      });
      // Only mount after we have all the info we need
      await TabInstance.update(fileInfo);
      TabInstance.$mount(el);
    },
    update(fileInfo) {
      TabInstance.update(fileInfo);
    },
    setIsActive(isActive) {
      TabInstance.setIsActive(isActive);
    },
    destroy() {
      TabInstance.$destroy();
      TabInstance = null;
    },
    enabled(fileInfo) {
      var _fileInfo$isDirectory;
      return !((_fileInfo$isDirectory = fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.isDirectory()) !== null && _fileInfo$isDirectory !== void 0 ? _fileInfo$isDirectory : true);
    }
  }));
});

/***/ }),

/***/ "./apps/files_versions/src/utils/davClient.js":
/*!****************************************************!*\
  !*** ./apps/files_versions/src/utils/davClient.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
var _getRequestToken;
/**
 * @copyright 2022 Louis Chemineau <mlouis@chmn.me>
 *
 * @author Louis Chemineau <mlouis@chmn.me>
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
 */




const rootPath = 'dav';

// init webdav client on default dav endpoint
const remote = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)(rootPath);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,webdav__WEBPACK_IMPORTED_MODULE_0__.createClient)(remote, {
  headers: {
    // Add this so the server knows it is an request from the browser
    'X-Requested-With': 'XMLHttpRequest',
    // Inject user auth
    requesttoken: (_getRequestToken = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)()) !== null && _getRequestToken !== void 0 ? _getRequestToken : ''
  }
}));

/***/ }),

/***/ "./apps/files_versions/src/utils/davRequest.js":
/*!*****************************************************!*\
  !*** ./apps/files_versions/src/utils/davRequest.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 Louis Chmn <louis@chmn.me>
 *
 * @author Louis Chmn <louis@chmn.me>
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\"?>\n<d:propfind xmlns:d=\"DAV:\"\n\txmlns:oc=\"http://owncloud.org/ns\"\n\txmlns:nc=\"http://nextcloud.org/ns\"\n\txmlns:ocs=\"http://open-collaboration-services.org/ns\">\n\t<d:prop>\n\t\t<d:getcontentlength />\n\t\t<d:getcontenttype />\n\t\t<d:getlastmodified />\n\t\t<d:getetag />\n\t\t<nc:version-label />\n\t\t<nc:has-preview />\n\t</d:prop>\n</d:propfind>");

/***/ }),

/***/ "./apps/files_versions/src/utils/logger.js":
/*!*************************************************!*\
  !*** ./apps/files_versions/src/utils/logger.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2022 Louis Chemineau <mlouis@chmn.me>
 *
 * @author Louis Chemineau <mlouis@chmn.me>
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
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files_version').detectUser().build());

/***/ }),

/***/ "./apps/files_versions/src/utils/versions.js":
/*!***************************************************!*\
  !*** ./apps/files_versions/src/utils/versions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteVersion": () => (/* binding */ deleteVersion),
/* harmony export */   "fetchVersions": () => (/* binding */ fetchVersions),
/* harmony export */   "restoreVersion": () => (/* binding */ restoreVersion),
/* harmony export */   "setVersionLabel": () => (/* binding */ setVersionLabel)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _files_src_utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../files/src/utils/fileUtils.js */ "./apps/files/src/utils/fileUtils.js");
/* harmony import */ var _utils_davClient_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/davClient.js */ "./apps/files_versions/src/utils/davClient.js");
/* harmony import */ var _utils_davRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/davRequest.js */ "./apps/files_versions/src/utils/davRequest.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/logger.js */ "./apps/files_versions/src/utils/logger.js");
/**
 * @copyright 2022 Louis Chemineau <mlouis@chmn.me>
 *
 * @author Louis Chemineau <mlouis@chmn.me>
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
 */










/**
 * @typedef {object} Version
 * @property {string} fileId - The id of the file associated to the version.
 * @property {string} label - 'Current version' or ''
 * @property {string} filename - File name relative to the version DAV endpoint
 * @property {string} basename - A base name generated from the mtime
 * @property {string} mime - Empty for the current version, else the actual mime type of the version
 * @property {string} etag - Empty for the current version, else the actual mime type of the version
 * @property {string} size - Human readable size
 * @property {string} type - 'file'
 * @property {number} mtime - Version creation date as a timestamp
 * @property {string} permissions - Only readable: 'R'
 * @property {boolean} hasPreview - Whether the version has a preview
 * @property {string} previewUrl - Preview URL of the version
 * @property {string} url - Download URL of the version
 * @property {string} source - The WebDAV endpoint of the ressource
 * @property {string|null} fileVersion - The version id, null for the current version
 */

/**
 * @param fileInfo
 * @return {Promise<Version[]>}
 */
async function fetchVersions(fileInfo) {
  var _getCurrentUser;
  const path = "/versions/".concat((_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid, "/versions/").concat(fileInfo.id);
  try {
    /** @type {import('webdav').ResponseDataDetailed<import('webdav').FileStat[]>} */
    const response = await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].getDirectoryContents(path, {
      data: _utils_davRequest_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      details: true
    });
    return response.data
    // Filter out root
    .filter(_ref => {
      let {
        mime
      } = _ref;
      return mime !== '';
    }).map(version => formatVersion(version, fileInfo));
  } catch (exception) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_7__["default"].error('Could not fetch version', {
      exception
    });
    throw exception;
  }
}

/**
 * Restore the given version
 *
 * @param {Version} version
 */
async function restoreVersion(version) {
  try {
    var _getCurrentUser2, _getCurrentUser3;
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_7__["default"].debug('Restoring version', {
      url: version.url
    });
    await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].moveFile("/versions/".concat((_getCurrentUser2 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser2 === void 0 ? void 0 : _getCurrentUser2.uid, "/versions/").concat(version.fileId, "/").concat(version.fileVersion), "/versions/".concat((_getCurrentUser3 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser3 === void 0 ? void 0 : _getCurrentUser3.uid, "/restore/target"));
  } catch (exception) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_7__["default"].error('Could not restore version', {
      exception
    });
    throw exception;
  }
}

/**
 * Format version
 *
 * @param {object} version - raw version received from the versions DAV endpoint
 * @param {object} fileInfo - file properties received from the files DAV endpoint
 * @return {Version}
 */
function formatVersion(version, fileInfo) {
  const mtime = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_3___default()(version.lastmod).unix() * 1000;
  let previewUrl = '';
  if (mtime === fileInfo.mtime) {
    // Version is the current one
    previewUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/core/preview?fileId={fileId}&c={fileEtag}&x=250&y=250&forceIcon=0&a=0', {
      fileId: fileInfo.id,
      fileEtag: fileInfo.etag
    });
  } else {
    previewUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/apps/files_versions/preview?file={file}&version={fileVersion}', {
      file: (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__.joinPaths)(fileInfo.path, fileInfo.name),
      fileVersion: version.basename
    });
  }
  return {
    fileId: fileInfo.id,
    label: version.props['version-label'],
    filename: version.filename,
    basename: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_3___default()(mtime).format('LLL'),
    mime: version.mime,
    etag: "".concat(version.props.getetag),
    size: version.size,
    type: version.type,
    mtime,
    permissions: 'R',
    hasPreview: version.props['has-preview'] === 1,
    previewUrl,
    url: (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__.joinPaths)('/remote.php/dav', version.filename),
    source: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateRemoteUrl)('dav') + (0,_files_src_utils_fileUtils_js__WEBPACK_IMPORTED_MODULE_4__.encodeFilePath)(version.filename),
    fileVersion: version.basename
  };
}

/**
 * @param {Version} version
 * @param {string} newLabel
 */
async function setVersionLabel(version, newLabel) {
  return await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].customRequest(version.filename, {
    method: 'PROPPATCH',
    data: "<?xml version=\"1.0\"?>\n\t\t\t\t\t<d:propertyupdate xmlns:d=\"DAV:\"\n\t\t\t\t\t\txmlns:oc=\"http://owncloud.org/ns\"\n\t\t\t\t\t\txmlns:nc=\"http://nextcloud.org/ns\"\n\t\t\t\t\t\txmlns:ocs=\"http://open-collaboration-services.org/ns\">\n\t\t\t\t\t<d:set>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<nc:version-label>".concat(newLabel, "</nc:version-label>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:set>\n\t\t\t\t\t</d:propertyupdate>")
  });
}

/**
 * @param {Version} version
 */
async function deleteVersion(version) {
  await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].deleteFile(version.filename);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_material_design_icons_BackupRestore_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/BackupRestore.vue */ "./node_modules/vue-material-design-icons/BackupRestore.vue");
/* harmony import */ var vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Download.vue */ "./node_modules/vue-material-design-icons/Download.vue");
/* harmony import */ var vue_material_design_icons_FileCompare_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/FileCompare.vue */ "./node_modules/vue-material-design-icons/FileCompare.vue");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_ImageOffOutline_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/ImageOffOutline.vue */ "./node_modules/vue-material-design-icons/ImageOffOutline.vue");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.module.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.esm.js");
/* harmony import */ var _files_sharing_src_lib_SharePermissionsToolBox_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../files_sharing/src/lib/SharePermissionsToolBox.js */ "./apps/files_sharing/src/lib/SharePermissionsToolBox.js");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Version',
  components: {
    NcActionLink: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.NcActionLink,
    NcActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.NcActionButton,
    NcListItem: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.NcListItem,
    NcModal: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.NcModal,
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.NcButton,
    NcTextField: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.NcTextField,
    BackupRestore: vue_material_design_icons_BackupRestore_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Download: vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FileCompare: vue_material_design_icons_FileCompare_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Pencil: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Check: vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ImageOffOutline: vue_material_design_icons_ImageOffOutline_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: {
    tooltip: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_7__.Tooltip
  },
  filters: {
    /**
     * @param {number} bytes
     * @return {string}
     */
    humanReadableSize(bytes) {
      return OC.Util.humanFileSize(bytes);
    },
    /**
     * @param {number} timestamp
     * @return {string}
     */
    humanDateFromNow(timestamp) {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_8___default()(timestamp).fromNow();
    }
  },
  props: {
    /** @type {Vue.PropOptions<import('../utils/versions.js').Version>} */
    version: {
      type: Object,
      required: true
    },
    fileInfo: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      default: false
    },
    isFirstVersion: {
      type: Boolean,
      default: false
    },
    loadPreview: {
      type: Boolean,
      default: false
    },
    canView: {
      type: Boolean,
      default: false
    },
    canCompare: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      previewLoaded: false,
      previewErrored: false,
      showVersionLabelForm: false,
      formVersionLabelValue: this.version.label,
      capabilities: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_12__.loadState)('core', 'capabilities', {
        files: {
          version_labeling: false,
          version_deletion: false
        }
      })
    };
  },
  computed: {
    /**
     * @return {string}
     */
    versionLabel() {
      var _this$version$label;
      const label = (_this$version$label = this.version.label) !== null && _this$version$label !== void 0 ? _this$version$label : '';
      if (this.isCurrent) {
        if (label === '') {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_9__.translate)('files_versions', 'Current version');
        } else {
          return "".concat(label, " (").concat((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_9__.translate)('files_versions', 'Current version'), ")");
        }
      }
      if (this.isFirstVersion && label === '') {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_9__.translate)('files_versions', 'Initial version');
      }
      return label;
    },
    /**
     * @return {string}
     */
    downloadURL() {
      if (this.isCurrent) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_11__.getRootUrl)() + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_10__.joinPaths)('/remote.php/webdav', this.fileInfo.path, this.fileInfo.name);
      } else {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_11__.getRootUrl)() + this.version.url;
      }
    },
    /** @return {string} */
    formattedDate() {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_8___default()(this.version.mtime).format('LLL');
    },
    /** @return {boolean} */
    enableLabeling() {
      return this.capabilities.files.version_labeling === true;
    },
    /** @return {boolean} */
    enableDeletion() {
      return this.capabilities.files.version_deletion === true;
    },
    /** @return {boolean} */
    hasDeletePermissions() {
      return (0,_files_sharing_src_lib_SharePermissionsToolBox_js__WEBPACK_IMPORTED_MODULE_14__.hasPermissions)(this.fileInfo.permissions, _nextcloud_files__WEBPACK_IMPORTED_MODULE_13__.Permission.DELETE);
    },
    /** @return {boolean} */
    hasUpdatePermissions() {
      return (0,_files_sharing_src_lib_SharePermissionsToolBox_js__WEBPACK_IMPORTED_MODULE_14__.hasPermissions)(this.fileInfo.permissions, _nextcloud_files__WEBPACK_IMPORTED_MODULE_13__.Permission.UPDATE);
    },
    /** @return {boolean} */
    isDownloadable() {
      if ((this.fileInfo.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_13__.Permission.READ) === 0) {
        return false;
      }

      // If the mount type is a share, ensure it got download permissions.
      if (this.fileInfo.mountType === 'shared') {
        const downloadAttribute = this.fileInfo.shareAttributes.find(attribute => attribute.scope === 'permissions' && attribute.key === 'download');
        if (downloadAttribute !== undefined && downloadAttribute.enabled === false) {
          return false;
        }
      }
      return true;
    }
  },
  methods: {
    openVersionLabelModal() {
      this.showVersionLabelForm = true;
      this.$nextTick(() => {
        this.$refs.labelInput.$el.getElementsByTagName('input')[0].focus();
      });
    },
    restoreVersion() {
      this.$emit('restore', this.version);
    },
    setVersionLabel(label) {
      this.formVersionLabelValue = label;
      this.showVersionLabelForm = false;
      this.$emit('label-update', this.version, label);
    },
    deleteVersion() {
      this.$emit('delete', this.version);
    },
    click() {
      if (!this.canView) {
        window.location = this.downloadURL;
        return;
      }
      this.$emit('click', {
        version: this.version
      });
    },
    compareVersion() {
      if (!this.canView) {
        throw new Error('Cannot compare version of this file');
      }
      this.$emit('compare', {
        version: this.version
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Mixins_isMobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Mixins/isMobile.js */ "./node_modules/@nextcloud/vue/dist/Mixins/isMobile.js");
/* harmony import */ var _nextcloud_vue_dist_Mixins_isMobile_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Mixins_isMobile_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _utils_versions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/versions.js */ "./apps/files_versions/src/utils/versions.js");
/* harmony import */ var _components_Version_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Version.vue */ "./apps/files_versions/src/components/Version.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VersionTab',
  components: {
    Version: _components_Version_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [(_nextcloud_vue_dist_Mixins_isMobile_js__WEBPACK_IMPORTED_MODULE_2___default())],
  data() {
    return {
      fileInfo: null,
      isActive: false,
      /** @type {import('../utils/versions.js').Version[]} */
      versions: [],
      loading: false
    };
  },
  computed: {
    /**
     * Order versions by mtime.
     * Put the current version at the top.
     *
     * @return {import('../utils/versions.js').Version[]}
     */
    orderedVersions() {
      return [...this.versions].sort((a, b) => {
        if (a.mtime === this.fileInfo.mtime) {
          return -1;
        } else if (b.mtime === this.fileInfo.mtime) {
          return 1;
        } else {
          return b.mtime - a.mtime;
        }
      });
    },
    /**
     * Return the mtime of the first version to display "Initial version" label
     *
     * @return {number}
     */
    initialVersionMtime() {
      return this.versions.map(version => version.mtime).reduce((a, b) => Math.min(a, b));
    },
    viewerFileInfo() {
      // We need to remap bitmask to dav permissions as the file info we have is converted through client.js
      let davPermissions = '';
      if (this.fileInfo.permissions & 1) {
        davPermissions += 'R';
      }
      if (this.fileInfo.permissions & 2) {
        davPermissions += 'W';
      }
      if (this.fileInfo.permissions & 8) {
        davPermissions += 'D';
      }
      return {
        ...this.fileInfo,
        mime: this.fileInfo.mimetype,
        basename: this.fileInfo.name,
        filename: this.fileInfo.path + '/' + this.fileInfo.name,
        permissions: davPermissions,
        fileid: this.fileInfo.id
      };
    },
    /** @return {boolean} */
    canView() {
      var _window$OCA$Viewer, _window$OCA$Viewer$mi;
      return (_window$OCA$Viewer = window.OCA.Viewer) === null || _window$OCA$Viewer === void 0 ? void 0 : (_window$OCA$Viewer$mi = _window$OCA$Viewer.mimetypesCompare) === null || _window$OCA$Viewer$mi === void 0 ? void 0 : _window$OCA$Viewer$mi.includes(this.fileInfo.mimetype);
    },
    canCompare() {
      return !this.isMobile;
    }
  },
  mounted() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.subscribe)('files_versions:restore:restored', this.fetchVersions);
  },
  beforeUnmount() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.unsubscribe)('files_versions:restore:restored', this.fetchVersions);
  },
  methods: {
    /**
     * Update current fileInfo and fetch new data
     *
     * @param {object} fileInfo the current file FileInfo
     */
    async update(fileInfo) {
      this.fileInfo = fileInfo;
      this.resetState();
      this.fetchVersions();
    },
    /**
     * @param {boolean} isActive whether the tab is active
     */
    async setIsActive(isActive) {
      this.isActive = isActive;
    },
    /**
     * Get the existing versions infos
     */
    async fetchVersions() {
      try {
        this.loading = true;
        this.versions = await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_5__.fetchVersions)(this.fileInfo);
      } finally {
        this.loading = false;
      }
    },
    /**
     * Handle restored event from Version.vue
     *
     * @param {import('../utils/versions.js').Version} version
     */
    async handleRestore(version) {
      // Update local copy of fileInfo as rendering depends on it.
      const oldFileInfo = this.fileInfo;
      this.fileInfo = {
        ...this.fileInfo,
        size: version.size,
        mtime: version.mtime
      };
      const restoreStartedEventState = {
        preventDefault: false,
        fileInfo: this.fileInfo,
        version
      };
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files_versions:restore:requested', restoreStartedEventState);
      if (restoreStartedEventState.preventDefault) {
        return;
      }
      try {
        await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_5__.restoreVersion)(version);
        if (version.label !== '') {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('files_versions', "".concat(version.label, " restored")));
        } else if (version.mtime === this.initialVersionMtime) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('files_versions', 'Initial version restored'));
        } else {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('files_versions', 'Version restored'));
        }
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files_versions:restore:restored', version);
      } catch (exception) {
        this.fileInfo = oldFileInfo;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('files_versions', 'Could not restore version'));
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files_versions:restore:failed', version);
      }
    },
    /**
     * Handle label-updated event from Version.vue
     *
     * @param {import('../utils/versions.js').Version} version
     * @param {string} newName
     */
    async handleLabelUpdate(version, newName) {
      const oldLabel = version.label;
      version.label = newName;
      try {
        await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_5__.setVersionLabel)(version, newName);
      } catch (exception) {
        version.label = oldLabel;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('files_versions', 'Could not set version name'));
      }
    },
    /**
     * Handle deleted event from Version.vue
     *
     * @param {import('../utils/versions.js').Version} version
     * @param {string} newName
     */
    async handleDelete(version) {
      const index = this.versions.indexOf(version);
      this.versions.splice(index, 1);
      try {
        await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_5__.deleteVersion)(version);
      } catch (exception) {
        this.versions.push(version);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('files_versions', 'Could not delete version'));
      }
    },
    /**
     * Reset the current view to its default state
     */
    resetState() {
      this.$set(this, 'versions', []);
    },
    openVersion(_ref) {
      let {
        version
      } = _ref;
      // Open current file view instead of read only
      if (version.mtime === this.fileInfo.mtime) {
        OCA.Viewer.open({
          fileInfo: this.viewerFileInfo
        });
        return;
      }

      // Versions previews are too small for our use case, so we override hasPreview and previewUrl
      // which makes the viewer render the original file.
      // We also point to the original filename if the version is the current one.
      const versions = this.versions.map(version => {
        var _getCurrentUser$uid, _getCurrentUser;
        return {
          ...version,
          filename: version.mtime === this.fileInfo.mtime ? path__WEBPACK_IMPORTED_MODULE_0___default().join('files', (_getCurrentUser$uid = (_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid) !== null && _getCurrentUser$uid !== void 0 ? _getCurrentUser$uid : '', this.fileInfo.path, this.fileInfo.name) : version.filename,
          hasPreview: false,
          previewUrl: undefined
        };
      });
      OCA.Viewer.open({
        fileInfo: versions.find(v => v.source === version.source),
        enableSidebar: false
      });
    },
    compareVersion(_ref2) {
      let {
        version
      } = _ref2;
      const versions = this.versions.map(version => ({
        ...version,
        hasPreview: false,
        previewUrl: undefined
      }));
      OCA.Viewer.compare(this.viewerFileInfo, versions.find(v => v.source === version.source));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("NcListItem", {
    staticClass: "version",
    attrs: {
      title: _vm.versionLabel,
      "force-display-actions": true,
      "data-files-versions-version": ""
    },
    on: {
      click: _vm.click
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [!(_vm.loadPreview || _vm.previewLoaded) ? _c("div", {
          staticClass: "version__image"
        }) : (_vm.isCurrent || _vm.version.hasPreview) && !_vm.previewErrored ? _c("img", {
          staticClass: "version__image",
          attrs: {
            src: _vm.version.previewUrl,
            alt: "",
            decoding: "async",
            fetchpriority: "low",
            loading: "lazy"
          },
          on: {
            load: function ($event) {
              _vm.previewLoaded = true;
            },
            error: function ($event) {
              _vm.previewErrored = true;
            }
          }
        }) : _c("div", {
          staticClass: "version__image"
        }, [_c("ImageOffOutline", {
          attrs: {
            size: 20
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "subtitle",
      fn: function () {
        return [_c("div", {
          staticClass: "version__info"
        }, [_c("span", {
          attrs: {
            title: _vm.formattedDate
          }
        }, [_vm._v(_vm._s(_vm._f("humanDateFromNow")(_vm.version.mtime)))]), _vm._v(" "), _c("span", {
          staticClass: "version__info__size"
        }, [_vm._v("•")]), _vm._v(" "), _c("span", {
          staticClass: "version__info__size"
        }, [_vm._v(_vm._s(_vm._f("humanReadableSize")(_vm.version.size)))])])];
      },
      proxy: true
    }, {
      key: "actions",
      fn: function () {
        return [_vm.enableLabeling && _vm.hasUpdatePermissions ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.openVersionLabelModal
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Pencil", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 3072546167)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.version.label === "" ? _vm.t("files_versions", "Name this version") : _vm.t("files_versions", "Edit version name")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isCurrent && _vm.canView && _vm.canCompare ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.compareVersion
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("FileCompare", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 1958207595)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Compare to current version")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isCurrent && _vm.hasUpdatePermissions ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.restoreVersion
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("BackupRestore", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 2239038444)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Restore version")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.isDownloadable ? _c("NcActionLink", {
          attrs: {
            href: _vm.downloadURL,
            "close-after-click": true,
            download: _vm.downloadURL
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Download", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 927269758)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Download version")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isCurrent && _vm.enableDeletion && _vm.hasDeletePermissions ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.deleteVersion
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Delete", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 2429175571)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Delete version")) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }])
  }), _vm._v(" "), _vm.showVersionLabelForm ? _c("NcModal", {
    attrs: {
      title: _vm.t("files_versions", "Name this version")
    },
    on: {
      close: function ($event) {
        _vm.showVersionLabelForm = false;
      }
    }
  }, [_c("form", {
    staticClass: "version-label-modal",
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.setVersionLabel(_vm.formVersionLabelValue);
      }
    }
  }, [_c("label", [_c("div", {
    staticClass: "version-label-modal__title"
  }, [_vm._v(_vm._s(_vm.t("files_versions", "Version name")))]), _vm._v(" "), _c("NcTextField", {
    ref: "labelInput",
    attrs: {
      value: _vm.formVersionLabelValue,
      placeholder: _vm.t("files_versions", "Version name"),
      "label-outside": true
    },
    on: {
      "update:value": function ($event) {
        _vm.formVersionLabelValue = $event;
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "version-label-modal__info"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Named versions are persisted, and excluded from automatic cleanups when your storage quota is full.")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "version-label-modal__actions"
  }, [_c("NcButton", {
    attrs: {
      disabled: _vm.formVersionLabelValue.trim().length === 0
    },
    on: {
      click: function ($event) {
        return _vm.setVersionLabel("");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("files_versions", "Remove version name")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary",
      "native-type": "submit"
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Check")];
      },
      proxy: true
    }], null, false, 2308323205)
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("files_versions", "Save version name")) + "\n\t\t\t\t")])], 1)])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("ul", {
    attrs: {
      "data-files-versions-versions-list": ""
    }
  }, _vm._l(_vm.orderedVersions, function (version) {
    return _c("Version", {
      key: version.mtime,
      attrs: {
        "can-view": _vm.canView,
        "can-compare": _vm.canCompare,
        "load-preview": _vm.isActive,
        version: version,
        "file-info": _vm.fileInfo,
        "is-current": version.mtime === _vm.fileInfo.mtime,
        "is-first-version": version.mtime === _vm.initialVersionMtime
      },
      on: {
        click: _vm.openVersion,
        compare: _vm.compareVersion,
        restore: _vm.handleRestore,
        "label-update": _vm.handleLabelUpdate,
        delete: _vm.handleDelete
      }
    });
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".version[data-v-52902ab2] {\n  display: flex;\n  flex-direction: row;\n}\n.version__info[data-v-52902ab2] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n}\n.version__info__size[data-v-52902ab2] {\n  color: var(--color-text-lighter);\n}\n.version__image[data-v-52902ab2] {\n  width: 3rem;\n  height: 3rem;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius-large);\n  display: flex;\n  justify-content: center;\n  color: var(--color-text-light);\n}\n.version-label-modal[data-v-52902ab2] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 250px;\n  padding: 16px;\n}\n.version-label-modal__title[data-v-52902ab2] {\n  margin-bottom: 12px;\n  font-weight: 600;\n}\n.version-label-modal__info[data-v-52902ab2] {\n  margin-top: 12px;\n  color: var(--color-text-maxcontrast);\n}\n.version-label-modal__actions[data-v-52902ab2] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 64px;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue":
/*!********************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Version.vue?vue&type=template&id=52902ab2&scoped=true& */ "./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&");
/* harmony import */ var _Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version.vue?vue&type=script&lang=js& */ "./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&");
/* harmony import */ var _Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& */ "./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "52902ab2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_versions/src/components/Version.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_versions/src/views/VersionTab.vue":
/*!******************************************************!*\
  !*** ./apps/files_versions/src/views/VersionTab.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VersionTab.vue?vue&type=template&id=48ce6666& */ "./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&");
/* harmony import */ var _VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionTab.vue?vue&type=script&lang=js& */ "./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.render,
  _VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_versions/src/views/VersionTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VersionTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=template&id=52902ab2&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&");


/***/ }),

/***/ "./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&":
/*!*************************************************************************************!*\
  !*** ./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VersionTab.vue?vue&type=template&id=48ce6666& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&");


/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&");


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
/******/ 			"files_versions-files_versions": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files_versions/src/files_versions_tab.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files_versions-files_versions.js.map?v=46cb5166b3dc2ef2f1bf