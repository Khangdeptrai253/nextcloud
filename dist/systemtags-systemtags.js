/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/systemtags/src/app.js":
/*!************************************!*\
  !*** ./apps/systemtags/src/app.js ***!
  \************************************/
/***/ (() => {

/**
 * Copyright (c) 2015 Vincent Petry <pvince81@owncloud.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Vincent Petry <vincent@nextcloud.com>
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

(function () {
  if (!OCA.SystemTags) {
    /**
     * @namespace
     */
    OCA.SystemTags = {};
  }
  OCA.SystemTags.App = {
    initFileList($el) {
      if (this._fileList) {
        return this._fileList;
      }
      const tagsParam = new URL(window.location.href).searchParams.get('tags');
      const initialTags = tagsParam ? tagsParam.split(',').map(parseInt) : [];
      this._fileList = new OCA.SystemTags.FileList($el, {
        id: 'systemtags',
        fileActions: this._createFileActions(),
        config: OCA.Files.App.getFilesConfig(),
        // The file list is created when a "show" event is handled,
        // so it should be marked as "shown" like it would have been
        // done if handling the event with the file list already
        // created.
        shown: true,
        systemTagIds: initialTags
      });
      this._fileList.appName = t('systemtags', 'Tags');
      return this._fileList;
    },
    removeFileList() {
      if (this._fileList) {
        this._fileList.$fileList.empty();
      }
    },
    _createFileActions() {
      // inherit file actions from the files app
      const fileActions = new OCA.Files.FileActions();
      // note: not merging the legacy actions because legacy apps are not
      // compatible with the sharing overview and need to be adapted first
      fileActions.registerDefaultActions();
      fileActions.merge(OCA.Files.fileActions);
      if (!this._globalActionsInitialized) {
        // in case actions are registered later
        this._onActionsUpdated = _.bind(this._onActionsUpdated, this);
        OCA.Files.fileActions.on('setDefault.app-systemtags', this._onActionsUpdated);
        OCA.Files.fileActions.on('registerAction.app-systemtags', this._onActionsUpdated);
        this._globalActionsInitialized = true;
      }

      // when the user clicks on a folder, redirect to the corresponding
      // folder in the files app instead of opening it directly
      fileActions.register('dir', 'Open', OC.PERMISSION_READ, '', function (filename, context) {
        OCA.Files.App.setActiveView('files', {
          silent: true
        });
        OCA.Files.App.fileList.changeDirectory(OC.joinPaths(context.$file.attr('data-path'), filename), true, true);
      });
      fileActions.setDefault('dir', 'Open');
      return fileActions;
    },
    _onActionsUpdated(ev) {
      if (!this._fileList) {
        return;
      }
      if (ev.action) {
        this._fileList.fileActions.registerAction(ev.action);
      } else if (ev.defaultAction) {
        this._fileList.fileActions.setDefault(ev.defaultAction.mime, ev.defaultAction.name);
      }
    },
    /**
     * Destroy the app
     */
    destroy() {
      OCA.Files.fileActions.off('setDefault.app-systemtags', this._onActionsUpdated);
      OCA.Files.fileActions.off('registerAction.app-systemtags', this._onActionsUpdated);
      this.removeFileList();
      this._fileList = null;
      delete this._globalActionsInitialized;
    }
  };
})();
window.addEventListener('DOMContentLoaded', function () {
  $('#app-content-systemtagsfilter').on('show', function (e) {
    OCA.SystemTags.App.initFileList($(e.target));
  });
  $('#app-content-systemtagsfilter').on('hide', function () {
    OCA.SystemTags.App.removeFileList();
  });
});

/***/ }),

/***/ "./apps/systemtags/src/systemtags.js":
/*!*******************************************!*\
  !*** ./apps/systemtags/src/systemtags.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./apps/systemtags/src/app.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _systemtagsfilelist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./systemtagsfilelist.js */ "./apps/systemtags/src/systemtagsfilelist.js");
/* harmony import */ var _systemtagsfilelist_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_systemtagsfilelist_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_systemtagsfilelist_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/systemtagsfilelist.scss */ "./apps/systemtags/src/css/systemtagsfilelist.scss");
/**
 * @copyright Copyright (c) 2016 Roeland Jago Douma <roeland@famdouma.nl>
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




window.OCA.SystemTags = OCA.SystemTags;

/***/ }),

/***/ "./apps/systemtags/src/systemtagsfilelist.js":
/*!***************************************************!*\
  !*** ./apps/systemtags/src/systemtagsfilelist.js ***!
  \***************************************************/
/***/ (() => {

/**
 * Copyright (c) 2016 Vincent Petry <pvince81@owncloud.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Vincent Petry <vincent@nextcloud.com>
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

(function () {
  /**
   * @class OCA.SystemTags.FileList
   * @augments OCA.Files.FileList
   *
   * @classdesc SystemTags file list.
   * Contains a list of files filtered by system tags.
   *
   * @param {object} $el container element with existing markup for the .files-controls and a table
   * @param {Array} [options] map of options, see other parameters
   * @param {Array.<string>} [options.systemTagIds] array of system tag ids to
   * filter by
   */
  const FileList = function ($el, options) {
    this.initialize($el, options);
  };
  FileList.prototype = _.extend({}, OCA.Files.FileList.prototype, /** @lends OCA.SystemTags.FileList.prototype */{
    id: 'systemtagsfilter',
    appName: t('systemtags', 'Tagged files'),
    /**
     * Array of system tag ids to filter by
     *
     * @type {Array.<string>}
     */
    _systemTagIds: [],
    _lastUsedTags: [],
    _clientSideSort: true,
    _allowSelection: false,
    _filterField: null,
    /**
     * @private
     * @param {object} $el container element
     * @param {object} [options] map of options, see other parameters
     */
    initialize($el, options) {
      OCA.Files.FileList.prototype.initialize.apply(this, arguments);
      if (this.initialized) {
        return;
      }
      if (options && options.systemTagIds) {
        this._systemTagIds = options.systemTagIds;
      }
      OC.Plugins.attach('OCA.SystemTags.FileList', this);
      const $controls = this.$el.find('.files-controls').empty();
      _.defer(_.bind(this._getLastUsedTags, this));
      this._initFilterField($controls);
    },
    destroy() {
      this.$filterField.remove();
      OCA.Files.FileList.prototype.destroy.apply(this, arguments);
    },
    _getLastUsedTags() {
      const self = this;
      $.ajax({
        type: 'GET',
        url: OC.generateUrl('/apps/systemtags/lastused'),
        success(response) {
          self._lastUsedTags = response;
        }
      });
    },
    _initFilterField($container) {
      const self = this;
      this.$filterField = $('<input type="hidden" name="tags"/>');
      this.$filterField.val(this._systemTagIds.join(','));
      $container.append(this.$filterField);
      this.$filterField.select2({
        placeholder: t('systemtags', 'Select tags to filter by'),
        allowClear: false,
        multiple: true,
        toggleSelect: true,
        separator: ',',
        query: _.bind(this._queryTagsAutocomplete, this),
        id(tag) {
          return tag.id;
        },
        initSelection(element, callback) {
          const val = $(element).val().trim();
          if (val) {
            const tagIds = val.split(',');
            const tags = [];
            OC.SystemTags.collection.fetch({
              success() {
                _.each(tagIds, function (tagId) {
                  const tag = OC.SystemTags.collection.get(tagId);
                  if (!_.isUndefined(tag)) {
                    tags.push(tag.toJSON());
                  }
                });
                callback(tags);
                self._onTagsChanged({
                  target: element
                });
              }
            });
          } else {
            // eslint-disable-next-line n/no-callback-literal
            callback([]);
          }
        },
        formatResult(tag) {
          return OC.SystemTags.getDescriptiveTag(tag);
        },
        formatSelection(tag) {
          return OC.SystemTags.getDescriptiveTag(tag).outerHTML;
        },
        sortResults(results) {
          results.sort(function (a, b) {
            const aLastUsed = self._lastUsedTags.indexOf(a.id);
            const bLastUsed = self._lastUsedTags.indexOf(b.id);
            if (aLastUsed !== bLastUsed) {
              if (bLastUsed === -1) {
                return -1;
              }
              if (aLastUsed === -1) {
                return 1;
              }
              return aLastUsed < bLastUsed ? -1 : 1;
            }

            // Both not found
            return OC.Util.naturalSortCompare(a.name, b.name);
          });
          return results;
        },
        escapeMarkup(m) {
          // prevent double markup escape
          return m;
        },
        formatNoMatches() {
          return t('systemtags', 'No tags found');
        }
      });
      this.$filterField.parent().children('.select2-container').attr('aria-expanded', 'false');
      this.$filterField.on('select2-open', () => {
        this.$filterField.parent().children('.select2-container').attr('aria-expanded', 'true');
      });
      this.$filterField.on('select2-close', () => {
        this.$filterField.parent().children('.select2-container').attr('aria-expanded', 'false');
      });
      this.$filterField.on('change', _.bind(this._onTagsChanged, this));
      return this.$filterField;
    },
    /**
     * Autocomplete function for dropdown results
     *
     * @param {object} query select2 query object
     */
    _queryTagsAutocomplete(query) {
      OC.SystemTags.collection.fetch({
        success() {
          const results = OC.SystemTags.collection.filterByName(query.term);
          query.callback({
            results: _.invoke(results, 'toJSON')
          });
        }
      });
    },
    /**
     * Event handler for when the URL changed
     *
     * @param {Event} e the urlchanged event
     */
    _onUrlChanged(e) {
      if (e.dir) {
        const tags = _.filter(e.dir.split('/'), function (val) {
          return val.trim() !== '';
        });
        this.$filterField.select2('val', tags || []);
        this._systemTagIds = tags;
        this.reload();
      }
    },
    _onTagsChanged(ev) {
      const val = $(ev.target).val().trim();
      if (val !== '') {
        this._systemTagIds = val.split(',');
      } else {
        this._systemTagIds = [];
      }
      this.$el.trigger($.Event('changeDirectory', {
        dir: this._systemTagIds.join('/')
      }));
      this.reload();
    },
    updateEmptyContent() {
      const dir = this.getCurrentDirectory();
      if (dir === '/') {
        // root has special permissions
        if (!this._systemTagIds.length) {
          // no tags selected
          this.$el.find('.emptyfilelist.emptycontent').html('<div class="icon-systemtags"></div>' + '<h2>' + t('systemtags', 'Please select tags to filter by') + '</h2>');
        } else {
          // tags selected but no results
          this.$el.find('.emptyfilelist.emptycontent').html('<div class="icon-systemtags"></div>' + '<h2>' + t('systemtags', 'No files found for the selected tags') + '</h2>');
        }
        this.$el.find('.emptyfilelist.emptycontent').toggleClass('hidden', !this.isEmpty);
        this.$el.find('.files-filestable thead th').toggleClass('hidden', this.isEmpty);
      } else {
        OCA.Files.FileList.prototype.updateEmptyContent.apply(this, arguments);
      }
    },
    getDirectoryPermissions() {
      return OC.PERMISSION_READ | OC.PERMISSION_DELETE;
    },
    updateStorageStatistics() {
      // no op because it doesn't have
      // storage info like free space / used space
    },
    reload() {
      // there is only root
      this._setCurrentDir('/', false);
      if (!this._systemTagIds.length) {
        // don't reload
        this.updateEmptyContent();
        this.setFiles([]);
        return $.Deferred().resolve();
      }
      this._selectedFiles = {};
      this._selectionSummary.clear();
      if (this._currentFileModel) {
        this._currentFileModel.off();
      }
      this._currentFileModel = null;
      this.$el.find('.select-all').prop('checked', false);
      this.showMask();
      this._reloadCall = this.filesClient.getFilteredFiles({
        systemTagIds: this._systemTagIds
      }, {
        properties: this._getWebdavProperties()
      });
      if (this._detailsView) {
        // close sidebar
        this._updateDetailsView(null);
      }
      const callBack = this.reloadCallback.bind(this);
      return this._reloadCall.then(callBack, callBack);
    },
    reloadCallback(status, result) {
      if (result) {
        // prepend empty dir info because original handler
        result.unshift({});
      }
      return OCA.Files.FileList.prototype.reloadCallback.call(this, status, result);
    }
  });
  OCA.SystemTags.FileList = FileList;
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/systemtags/src/css/systemtagsfilelist.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/systemtags/src/css/systemtagsfilelist.scss ***!
  \**************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * Copyright (c) 2016\n *\n * This file is licensed under the Affero General Public License version 3\n * or later.\n *\n * See the COPYING-README file.\n *\n */\n#app-content-systemtagsfilter .select2-container {\n  width: 30%;\n  margin-left: 10px;\n}\n\n#app-sidebar .app-sidebar-header__action .tag-label {\n  cursor: pointer;\n  padding: 13px 0;\n  display: flex;\n  color: var(--color-text-light);\n  position: relative;\n  margin-top: -20px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./apps/systemtags/src/css/systemtagsfilelist.scss":
/*!*********************************************************!*\
  !*** ./apps/systemtags/src/css/systemtagsfilelist.scss ***!
  \*********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_systemtagsfilelist_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./systemtagsfilelist.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/systemtags/src/css/systemtagsfilelist.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_systemtagsfilelist_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_systemtagsfilelist_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_systemtagsfilelist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_systemtagsfilelist_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"systemtags-systemtags": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/systemtags/src/systemtags.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=systemtags-systemtags.js.map?v=11dd723c503ba4b93488