(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var CatalogPage =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











/**
 * Faceted search view component
 */

var FacetedSearch =
/*#__PURE__*/
function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(event.currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");





var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};

    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');

      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }

    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');

  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }

  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwidXJsIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsIiQiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwidXJsVXRpbHMiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiUGFnZU1hbmFnZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm1vZGFsT3BlbiIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsImxlbmd0aCIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwidW5iaW5kRXZlbnRzIiwib24iLCJkb2N1bWVudCIsImhvb2tzIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJpbnB1dFRhZ05hbWVzIiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsImFkZENsYXNzIiwiY2xhc3NpZnlGb3JtIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJ0cmlnZ2VyIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIiwiaSIsInRlbXAiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJjb21wYXJlIiwiaHRtbCIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJjb21wYXJlQ291bnRlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiR0aGlzIiwicHJvZHVjdHNUb0NvbXBhcmUiLCJzaG93QWxlcnRNb2RhbCIsIiRjbGlja2VkQ2hlY2tlZElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7OztTQUNqQkMsYyxHQUFBLHdCQUFlQyxLQUFmLEVBQXNCO0FBQ2xCLFFBQU1DLEdBQUcsR0FBR0MsMENBQUcsQ0FBQ0MsS0FBSixDQUFVQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTFCLEVBQWdDLElBQWhDLENBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLENBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxhQUFQLENBQUQsQ0FBdUJDLFNBQXZCLEdBQW1DQyxLQUFuQyxDQUF5QyxHQUF6QyxDQUFwQjtBQUVBVixPQUFHLENBQUNXLEtBQUosQ0FBVUwsV0FBVyxDQUFDLENBQUQsQ0FBckIsSUFBNEJBLFdBQVcsQ0FBQyxDQUFELENBQXZDO0FBQ0EsV0FBT04sR0FBRyxDQUFDVyxLQUFKLENBQVVDLElBQWpCO0FBRUFiLFNBQUssQ0FBQ2MsY0FBTjtBQUNBVixVQUFNLENBQUNDLFFBQVAsR0FBa0JILDBDQUFHLENBQUNhLE1BQUosQ0FBVztBQUFFQyxjQUFRLEVBQUVmLEdBQUcsQ0FBQ2UsUUFBaEI7QUFBMEJDLFlBQU0sRUFBRUMseURBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJsQixHQUFHLENBQUNXLEtBQTlCO0FBQWxDLEtBQVgsQ0FBbEI7QUFDSCxHOzs7RUFWb0NRLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKekM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztJQUdNQyxhOzs7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEseUJBQVlDLGNBQVosRUFBNEJDLFFBQTVCLEVBQXNDQyxPQUF0QyxFQUErQztBQUFBOztBQUMzQyxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLDZCQUF1QixFQUFFLDRFQUROO0FBRW5CQyxxQkFBZSxFQUFFLHlCQUZFO0FBR25CQyx3QkFBa0IsRUFBRSx5Q0FIRDtBQUluQkMsdUJBQWlCLEVBQUUsd0JBSkE7QUFLbkJDLDBCQUFvQixFQUFFLHlCQUxIO0FBTW5CQyw2QkFBdUIsRUFBRSx1Q0FOTjtBQU9uQkMsZ0NBQTBCLEVBQUUsa0NBUFQ7QUFRbkJDLDRCQUFzQixFQUFFLG1CQVJMO0FBU25CQyxnQ0FBMEIsRUFBRSxvQ0FUVDtBQVVuQkMsZ0NBQTBCLEVBQUUsb0NBVlQ7QUFXbkJDLDRCQUFzQixFQUFFLCtDQVhMO0FBWW5CQyw4QkFBd0IsRUFBRSx3Q0FaUDtBQWFuQkMsV0FBSyxFQUFFQyw2REFBWSxDQUFDLFFBQUQsQ0FBWixDQUF1QixDQUF2QixDQWJZO0FBY25CQyxlQUFTLEVBQUU7QUFkUSxLQUF2QixDQUQyQyxDQWtCM0M7O0FBQ0EsU0FBS2xCLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUscURBQVMsRUFBVCxFQUFhQyxjQUFiLEVBQTZCRCxPQUE3QixDQUFmO0FBQ0EsU0FBS2lCLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixFQUEzQixDQXZCMkMsQ0F5QjNDOztBQUNBQyxnRUFBa0IsR0ExQnlCLENBNEIzQzs7QUFDQSxTQUFLQyxrQkFBTCxHQTdCMkMsQ0ErQjNDOztBQUNBcEMsS0FBQyxDQUFDLEtBQUtnQixPQUFMLENBQWFNLG9CQUFkLENBQUQsQ0FBcUNlLElBQXJDLENBQTBDLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUMxRCxXQUFJLENBQUNDLGtCQUFMLENBQXdCeEMsQ0FBQyxDQUFDdUMsT0FBRCxDQUF6QjtBQUNILEtBRkQsRUFoQzJDLENBb0MzQzs7QUFDQXZDLEtBQUMsQ0FBQyxLQUFLZ0IsT0FBTCxDQUFhRSx1QkFBZCxDQUFELENBQXdDbUIsSUFBeEMsQ0FBNkMsVUFBQ0MsS0FBRCxFQUFRRyxlQUFSLEVBQTRCO0FBQ3JFLFVBQU1DLGdCQUFnQixHQUFHMUMsQ0FBQyxDQUFDeUMsZUFBRCxDQUExQjtBQUNBLFVBQU1FLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQWpCLENBQXNCLHFCQUF0QixDQUFwQjs7QUFFQSxVQUFJRCxXQUFXLENBQUNFLFdBQWhCLEVBQTZCO0FBQ3pCLGFBQUksQ0FBQ1osZUFBTCxDQUFxQmEsSUFBckIsQ0FBMEJILFdBQVcsQ0FBQ0ksUUFBdEM7QUFDSDtBQUNKLEtBUEQsRUFyQzJDLENBOEMzQztBQUNBOztBQUNBQyxjQUFVLENBQUMsWUFBTTtBQUNiLFVBQUloRCxDQUFDLENBQUMsS0FBSSxDQUFDZ0IsT0FBTCxDQUFhSyxpQkFBZCxDQUFELENBQWtDNEIsRUFBbEMsQ0FBcUMsU0FBckMsQ0FBSixFQUFxRDtBQUNqRCxhQUFJLENBQUNDLGlCQUFMO0FBQ0g7QUFDSixLQUpTLENBQVYsQ0FoRDJDLENBc0QzQzs7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtFLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCRixJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNBLFNBQUtHLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkgsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLSSxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JKLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0ssYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CTCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUs3RCxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0I2RCxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLFNBQUtNLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCTixJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUVBLFNBQUtPLFVBQUw7QUFDSCxHLENBRUQ7Ozs7O1NBQ0FDLFcsR0FBQSxxQkFBWUMsT0FBWixFQUFxQjtBQUNqQixRQUFJQSxPQUFKLEVBQWE7QUFDVCxXQUFLOUMsUUFBTCxDQUFjOEMsT0FBZDtBQUNILEtBSGdCLENBS2pCOzs7QUFDQTFCLGdFQUFrQixHQU5ELENBUWpCOztBQUNBLFNBQUtDLGtCQUFMLEdBVGlCLENBV2pCOztBQUNBLFNBQUswQixzQkFBTDtBQUNBLFNBQUtDLDBCQUFMLEdBYmlCLENBZWpCOztBQUNBLFNBQUtKLFVBQUw7QUFDSCxHOztTQUVESyxVLEdBQUEsc0JBQWE7QUFBQTs7QUFDVGhFLEtBQUMsQ0FBQyxLQUFLZ0IsT0FBTCxDQUFhRyxlQUFkLENBQUQsQ0FBZ0M4QyxJQUFoQztBQUVBQyxrRUFBRyxDQUFDQyxPQUFKLENBQVl6RCxrREFBUSxDQUFDMEQsTUFBVCxFQUFaLEVBQStCLEtBQUt0RCxjQUFwQyxFQUFvRCxVQUFDdUQsR0FBRCxFQUFNUixPQUFOLEVBQWtCO0FBQ2xFN0QsT0FBQyxDQUFDLE1BQUksQ0FBQ2dCLE9BQUwsQ0FBYUcsZUFBZCxDQUFELENBQWdDbUQsSUFBaEM7O0FBRUEsVUFBSUQsR0FBSixFQUFTO0FBQ0wsY0FBTSxJQUFJRSxLQUFKLENBQVVGLEdBQVYsQ0FBTjtBQUNILE9BTGlFLENBT2xFOzs7QUFDQSxZQUFJLENBQUNULFdBQUwsQ0FBaUJDLE9BQWpCO0FBQ0gsS0FURDtBQVVILEc7O1NBRURXLGdCLEdBQUEsMEJBQWlCQyxRQUFqQixFQUEyQjtBQUN2QixRQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLElBQWQsQ0FBWCxDQUR1QixDQUd2Qjs7QUFDQSxTQUFLekMsbUJBQUwsR0FBMkIsc0RBQVUsS0FBS0EsbUJBQWYsRUFBb0N3QyxFQUFwQyxDQUEzQjtBQUNILEc7O1NBRURsQyxrQixHQUFBLDRCQUFtQmlDLFFBQW5CLEVBQTZCO0FBQ3pCLFFBQU1DLEVBQUUsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWMsSUFBZCxDQUFYO0FBQ0EsUUFBTUMsY0FBYyxHQUFHSCxRQUFRLENBQUM3QixJQUFULENBQWMsZ0JBQWQsQ0FBdkI7O0FBRUEsUUFBSWdDLGNBQUosRUFBb0I7QUFDaEIsV0FBSzFDLG1CQUFMLEdBQTJCLG9EQUFRLEtBQUtBLG1CQUFiLEVBQWtDLENBQUN3QyxFQUFELENBQWxDLENBQTNCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS3hDLG1CQUFMLEdBQTJCLHNEQUFVLEtBQUtBLG1CQUFmLEVBQW9Dd0MsRUFBcEMsQ0FBM0I7QUFDSDtBQUNKLEc7O1NBRURHLGdCLEdBQUEsMEJBQWlCSixRQUFqQixFQUEyQjtBQUN2QixRQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLElBQWQsQ0FBWCxDQUR1QixDQUd2Qjs7QUFDQSxRQUFJLHVEQUFXLEtBQUt6QyxtQkFBaEIsRUFBcUN3QyxFQUFyQyxDQUFKLEVBQThDO0FBQzFDLFdBQUtJLG1CQUFMLENBQXlCTCxRQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUNIOztBQUVELFNBQUtqQyxrQkFBTCxDQUF3QmlDLFFBQXhCO0FBRUEsV0FBTyxLQUFQO0FBQ0gsRzs7U0FFREssbUIsR0FBQSw2QkFBb0JMLFFBQXBCLEVBQThCO0FBQUE7O0FBQzFCLFFBQU1NLEtBQUssR0FBR04sUUFBUSxDQUFDN0IsSUFBVCxDQUFjLE9BQWQsQ0FBZDtBQUNBLFFBQU1vQyxRQUFRLEdBQUd0RSxrREFBUSxDQUFDMEQsTUFBVCxFQUFqQjs7QUFFQSxRQUFJLEtBQUt0RCxjQUFMLENBQW9CbUUsUUFBeEIsRUFBa0M7QUFDOUJmLG9FQUFHLENBQUNDLE9BQUosQ0FBWWEsUUFBWixFQUFzQjtBQUNsQkUsZ0JBQVEsRUFBRSxLQUFLcEUsY0FBTCxDQUFvQm1FLFFBRFo7QUFFbEJFLGNBQU0sRUFBRTtBQUNKQyxrQkFBUSxFQUFFTDtBQUROO0FBRlUsT0FBdEIsRUFLRyxVQUFDVixHQUFELEVBQU1nQixRQUFOLEVBQW1CO0FBQ2xCLFlBQUloQixHQUFKLEVBQVM7QUFDTCxnQkFBTSxJQUFJRSxLQUFKLENBQVVGLEdBQVYsQ0FBTjtBQUNIOztBQUVELGNBQUksQ0FBQ3JELE9BQUwsQ0FBYWMsS0FBYixDQUFtQndELElBQW5COztBQUNBLGNBQUksQ0FBQ3RFLE9BQUwsQ0FBYWdCLFNBQWIsR0FBeUIsSUFBekI7O0FBQ0EsY0FBSSxDQUFDaEIsT0FBTCxDQUFhYyxLQUFiLENBQW1CeUQsYUFBbkIsQ0FBaUNGLFFBQWpDO0FBQ0gsT0FiRDtBQWNIOztBQUVELFNBQUs3QyxrQkFBTCxDQUF3QmlDLFFBQXhCO0FBRUEsV0FBTyxLQUFQO0FBQ0gsRzs7U0FFRGYsZ0IsR0FBQSwwQkFBaUJsRSxLQUFqQixFQUF3QjtBQUNwQixRQUFNZ0csTUFBTSxHQUFHeEYsQ0FBQyxDQUFDLGVBQUQsQ0FBaEI7QUFDQSxRQUFNSSxLQUFLLEdBQUdKLENBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxhQUFQLENBQUQsQ0FBdUJ3RixHQUF2QixHQUE2QkMsV0FBN0IsRUFBZDtBQUVBRixVQUFNLENBQUNuRCxJQUFQLENBQVksVUFBQ0MsS0FBRCxFQUFRcUQsT0FBUixFQUFvQjtBQUM1QixVQUFNQyxJQUFJLEdBQUc1RixDQUFDLENBQUMyRixPQUFELENBQUQsQ0FBV0MsSUFBWCxHQUFrQkYsV0FBbEIsRUFBYjs7QUFDQSxVQUFJRSxJQUFJLENBQUNDLE9BQUwsQ0FBYXpGLEtBQWIsTUFBd0IsQ0FBQyxDQUE3QixFQUFnQztBQUM1QkosU0FBQyxDQUFDMkYsT0FBRCxDQUFELENBQVcxQixJQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0hqRSxTQUFDLENBQUMyRixPQUFELENBQUQsQ0FBV3JCLElBQVg7QUFDSDtBQUNKLEtBUEQ7QUFRSCxHOztTQUVEd0IsVyxHQUFBLHFCQUFZcEQsZ0JBQVosRUFBOEI7QUFDMUIsUUFBTUMsV0FBVyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0IscUJBQXRCLENBQXBCO0FBRUFELGVBQVcsQ0FBQzJDLElBQVo7QUFDSCxHOztTQUVEUyxhLEdBQUEsdUJBQWNyRCxnQkFBZCxFQUFnQztBQUM1QixRQUFNQyxXQUFXLEdBQUdELGdCQUFnQixDQUFDRSxJQUFqQixDQUFzQixxQkFBdEIsQ0FBcEI7QUFFQUQsZUFBVyxDQUFDcUQsS0FBWjtBQUNILEc7O1NBRUQ5QyxpQixHQUFBLDZCQUFvQjtBQUFBOztBQUNoQixRQUFNK0MsaUJBQWlCLEdBQUdqRyxDQUFDLENBQUMsS0FBS2dCLE9BQUwsQ0FBYUUsdUJBQWQsQ0FBM0I7QUFFQStFLHFCQUFpQixDQUFDNUQsSUFBbEIsQ0FBdUIsVUFBQ0MsS0FBRCxFQUFRRyxlQUFSLEVBQTRCO0FBQy9DLFVBQU1DLGdCQUFnQixHQUFHMUMsQ0FBQyxDQUFDeUMsZUFBRCxDQUExQjs7QUFFQSxZQUFJLENBQUNzRCxhQUFMLENBQW1CckQsZ0JBQW5CO0FBQ0gsS0FKRDtBQUtILEc7O1NBRUR3RCxlLEdBQUEsMkJBQWtCO0FBQUE7O0FBQ2QsUUFBTUQsaUJBQWlCLEdBQUdqRyxDQUFDLENBQUMsS0FBS2dCLE9BQUwsQ0FBYUUsdUJBQWQsQ0FBM0I7QUFFQStFLHFCQUFpQixDQUFDNUQsSUFBbEIsQ0FBdUIsVUFBQ0MsS0FBRCxFQUFRRyxlQUFSLEVBQTRCO0FBQy9DLFVBQU1DLGdCQUFnQixHQUFHMUMsQ0FBQyxDQUFDeUMsZUFBRCxDQUExQjs7QUFFQSxZQUFJLENBQUNxRCxXQUFMLENBQWlCcEQsZ0JBQWpCO0FBQ0gsS0FKRDtBQUtILEcsQ0FFRDs7O1NBQ0FOLGtCLEdBQUEsOEJBQXFCO0FBQ2pCLFFBQUlwQyxDQUFDLENBQUMsS0FBS2dCLE9BQUwsQ0FBYVMsc0JBQWQsQ0FBRCxDQUF1QzBFLE1BQXZDLEtBQWtELENBQXRELEVBQXlEO0FBQ3JEO0FBQ0g7O0FBRUQsUUFBTUMsU0FBUyxHQUFHQyxxREFBRyxFQUFyQjtBQUNBLFFBQU1DLFNBQVMsR0FBRztBQUNkQyxtQkFBYSxFQUFFLEtBQUt2RixPQUFMLENBQWFPLHVCQURkO0FBRWRpRixzQkFBZ0IsRUFBRSxLQUFLeEYsT0FBTCxDQUFhUSwwQkFGakI7QUFHZGlGLGtCQUFZLEVBQUUsS0FBS3pGLE9BQUwsQ0FBYVMsc0JBSGI7QUFJZGlGLHNCQUFnQixFQUFFLEtBQUsxRixPQUFMLENBQWFVLDBCQUpqQjtBQUtkaUYsc0JBQWdCLEVBQUUsS0FBSzNGLE9BQUwsQ0FBYVc7QUFMakIsS0FBbEI7QUFRQWlGLDBEQUFVLENBQUNDLHdCQUFYLENBQW9DVCxTQUFwQyxFQUErQ0UsU0FBL0M7QUFFQSxTQUFLUSxtQkFBTCxHQUEyQlYsU0FBM0I7QUFDSCxHOztTQUVEckMsMEIsR0FBQSxzQ0FBNkI7QUFBQTs7QUFDekIsUUFBTWdELFNBQVMsR0FBRy9HLENBQUMsQ0FBQyxLQUFLZ0IsT0FBTCxDQUFhTSxvQkFBZCxDQUFuQixDQUR5QixDQUd6Qjs7QUFDQXlGLGFBQVMsQ0FBQzFFLElBQVYsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDL0IsVUFBTWtDLFFBQVEsR0FBR3pFLENBQUMsQ0FBQ3VDLE9BQUQsQ0FBbEI7QUFDQSxVQUFNbUMsRUFBRSxHQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBYyxJQUFkLENBQVg7O0FBQ0EsVUFBTXFDLGNBQWMsR0FBRyx1REFBVyxNQUFJLENBQUM5RSxtQkFBaEIsRUFBcUN3QyxFQUFyQyxDQUF2Qjs7QUFFQSxVQUFJc0MsY0FBSixFQUFvQjtBQUNoQixjQUFJLENBQUN4RSxrQkFBTCxDQUF3QmlDLFFBQXhCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsY0FBSSxDQUFDRCxnQkFBTCxDQUFzQkMsUUFBdEI7QUFDSDtBQUNKLEtBVkQ7QUFXSCxHOztTQUVEWCxzQixHQUFBLGtDQUF5QjtBQUFBOztBQUNyQixRQUFNbUMsaUJBQWlCLEdBQUdqRyxDQUFDLENBQUMsS0FBS2dCLE9BQUwsQ0FBYUUsdUJBQWQsQ0FBM0I7QUFFQStFLHFCQUFpQixDQUFDNUQsSUFBbEIsQ0FBdUIsVUFBQ0MsS0FBRCxFQUFRRyxlQUFSLEVBQTRCO0FBQy9DLFVBQU1DLGdCQUFnQixHQUFHMUMsQ0FBQyxDQUFDeUMsZUFBRCxDQUExQjtBQUNBLFVBQU1FLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQWpCLENBQXNCLHFCQUF0QixDQUFwQjtBQUNBLFVBQU04QixFQUFFLEdBQUcvQixXQUFXLENBQUNJLFFBQXZCOztBQUNBLFVBQU1pRSxjQUFjLEdBQUcsdURBQVcsTUFBSSxDQUFDL0UsZUFBaEIsRUFBaUN5QyxFQUFqQyxDQUF2Qjs7QUFFQSxVQUFJc0MsY0FBSixFQUFvQjtBQUNoQixjQUFJLENBQUNqQixhQUFMLENBQW1CckQsZ0JBQW5CO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsY0FBSSxDQUFDb0QsV0FBTCxDQUFpQnBELGdCQUFqQjtBQUNIO0FBQ0osS0FYRDtBQVlILEc7O1NBRURpQixVLEdBQUEsc0JBQWE7QUFDVDtBQUNBLFNBQUtzRCxZQUFMLEdBRlMsQ0FJVDs7QUFDQWpILEtBQUMsQ0FBQ0osTUFBRCxDQUFELENBQVVzSCxFQUFWLENBQWEsYUFBYixFQUE0QixLQUFLL0QsYUFBakM7QUFDQW5ELEtBQUMsQ0FBQ21ILFFBQUQsQ0FBRCxDQUFZRCxFQUFaLENBQWUsT0FBZixFQUF3QixLQUFLbEcsT0FBTCxDQUFhWSxzQkFBckMsRUFBNkQsS0FBS3lCLGFBQWxFO0FBQ0FyRCxLQUFDLENBQUNtSCxRQUFELENBQUQsQ0FBWUQsRUFBWixDQUFlLG9CQUFmLEVBQXFDLEtBQUtsRyxPQUFMLENBQWFFLHVCQUFsRCxFQUEyRSxLQUFLb0MsaUJBQWhGO0FBQ0F0RCxLQUFDLENBQUNtSCxRQUFELENBQUQsQ0FBWUQsRUFBWixDQUFlLE9BQWYsRUFBd0IsS0FBS2xHLE9BQUwsQ0FBYWEsd0JBQXJDLEVBQStELEtBQUs2QixnQkFBcEU7QUFDQTFELEtBQUMsQ0FBQyxLQUFLZ0IsT0FBTCxDQUFhSSxrQkFBZCxDQUFELENBQW1DOEYsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsS0FBSzNELFlBQXBELEVBVFMsQ0FXVDs7QUFDQTZELG9FQUFLLENBQUNGLEVBQU4sQ0FBUyw2QkFBVCxFQUF3QyxLQUFLMUQsWUFBN0M7QUFDQTRELG9FQUFLLENBQUNGLEVBQU4sQ0FBUywrQkFBVCxFQUEwQyxLQUFLekQsYUFBL0M7QUFDQTJELG9FQUFLLENBQUNGLEVBQU4sQ0FBUyxrQkFBVCxFQUE2QixLQUFLM0gsY0FBbEM7QUFDSCxHOztTQUVEMEgsWSxHQUFBLHdCQUFlO0FBQ1g7QUFDQWpILEtBQUMsQ0FBQ0osTUFBRCxDQUFELENBQVV5SCxHQUFWLENBQWMsYUFBZCxFQUE2QixLQUFLbEUsYUFBbEM7QUFDQW5ELEtBQUMsQ0FBQ21ILFFBQUQsQ0FBRCxDQUFZRSxHQUFaLENBQWdCLE9BQWhCLEVBQXlCLEtBQUtyRyxPQUFMLENBQWFZLHNCQUF0QyxFQUE4RCxLQUFLeUIsYUFBbkU7QUFDQXJELEtBQUMsQ0FBQ21ILFFBQUQsQ0FBRCxDQUFZRSxHQUFaLENBQWdCLG9CQUFoQixFQUFzQyxLQUFLckcsT0FBTCxDQUFhRSx1QkFBbkQsRUFBNEUsS0FBS29DLGlCQUFqRjtBQUNBdEQsS0FBQyxDQUFDbUgsUUFBRCxDQUFELENBQVlFLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUIsS0FBS3JHLE9BQUwsQ0FBYWEsd0JBQXRDLEVBQWdFLEtBQUs2QixnQkFBckU7QUFDQTFELEtBQUMsQ0FBQyxLQUFLZ0IsT0FBTCxDQUFhSSxrQkFBZCxDQUFELENBQW1DaUcsR0FBbkMsQ0FBdUMsT0FBdkMsRUFBZ0QsS0FBSzlELFlBQXJELEVBTlcsQ0FRWDs7QUFDQTZELG9FQUFLLENBQUNDLEdBQU4sQ0FBVSw2QkFBVixFQUF5QyxLQUFLN0QsWUFBOUM7QUFDQTRELG9FQUFLLENBQUNDLEdBQU4sQ0FBVSwrQkFBVixFQUEyQyxLQUFLNUQsYUFBaEQ7QUFDQTJELG9FQUFLLENBQUNDLEdBQU4sQ0FBVSxrQkFBVixFQUE4QixLQUFLOUgsY0FBbkM7QUFDSCxHOztTQUVEZ0UsWSxHQUFBLHNCQUFhL0QsS0FBYixFQUFvQjtBQUNoQixRQUFNOEgsS0FBSyxHQUFHdEgsQ0FBQyxDQUFDUixLQUFLLENBQUNTLGFBQVAsQ0FBZjtBQUNBLFFBQU1SLEdBQUcsR0FBRzZILEtBQUssQ0FBQzNDLElBQU4sQ0FBVyxNQUFYLENBQVo7QUFFQW5GLFNBQUssQ0FBQ2MsY0FBTjtBQUNBZCxTQUFLLENBQUMrSCxlQUFOLEdBTGdCLENBT2hCOztBQUNBN0csc0RBQVEsQ0FBQzhHLE9BQVQsQ0FBaUIvSCxHQUFqQjtBQUNILEc7O1NBRUQ0RCxhLEdBQUEsdUJBQWM3RCxLQUFkLEVBQXFCO0FBQ2pCLFFBQU1pSSxPQUFPLEdBQUd6SCxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBUCxDQUFqQjtBQUNBLFFBQU13RSxRQUFRLEdBQUd6RSxDQUFDLENBQUN5SCxPQUFPLENBQUM5QyxJQUFSLENBQWEsTUFBYixDQUFELENBQWxCLENBRmlCLENBSWpCOztBQUNBbkYsU0FBSyxDQUFDYyxjQUFOLEdBTGlCLENBT2pCOztBQUNBLFNBQUt1RSxnQkFBTCxDQUFzQkosUUFBdEI7QUFDSCxHOztTQUVEakIsWSxHQUFBLHNCQUFhaEUsS0FBYixFQUFvQjtBQUNoQixRQUFNOEgsS0FBSyxHQUFHdEgsQ0FBQyxDQUFDUixLQUFLLENBQUNTLGFBQVAsQ0FBZjtBQUNBLFFBQU1SLEdBQUcsR0FBRzZILEtBQUssQ0FBQzNDLElBQU4sQ0FBVyxNQUFYLENBQVo7QUFFQW5GLFNBQUssQ0FBQ2MsY0FBTjtBQUVBZ0gsU0FBSyxDQUFDSSxXQUFOLENBQWtCLGFBQWxCLEVBTmdCLENBUWhCOztBQUNBaEgsc0RBQVEsQ0FBQzhHLE9BQVQsQ0FBaUIvSCxHQUFqQjs7QUFFQSxRQUFJLEtBQUt1QixPQUFMLENBQWFnQixTQUFqQixFQUE0QjtBQUN4QixXQUFLaEIsT0FBTCxDQUFhYyxLQUFiLENBQW1Ca0UsS0FBbkI7QUFDSDtBQUNKLEc7O1NBRUR6RyxjLEdBQUEsd0JBQWVDLEtBQWYsRUFBc0I7QUFDbEIsUUFBTUMsR0FBRyxHQUFHQywwQ0FBRyxDQUFDQyxLQUFKLENBQVVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsQ0FBQyxDQUFDUixLQUFLLENBQUNTLGFBQVAsQ0FBRCxDQUF1QkMsU0FBdkIsR0FBbUNDLEtBQW5DLENBQXlDLEdBQXpDLENBQXBCO0FBRUFWLE9BQUcsQ0FBQ1csS0FBSixDQUFVTCxXQUFXLENBQUMsQ0FBRCxDQUFyQixJQUE0QkEsV0FBVyxDQUFDLENBQUQsQ0FBdkM7QUFDQSxXQUFPTixHQUFHLENBQUNXLEtBQUosQ0FBVUMsSUFBakI7QUFFQWIsU0FBSyxDQUFDYyxjQUFOO0FBRUFJLHNEQUFRLENBQUM4RyxPQUFULENBQWlCOUgsMENBQUcsQ0FBQ2EsTUFBSixDQUFXO0FBQUVDLGNBQVEsRUFBRWYsR0FBRyxDQUFDZSxRQUFoQjtBQUEwQkMsWUFBTSxFQUFFQyxrREFBUSxDQUFDQyxnQkFBVCxDQUEwQmxCLEdBQUcsQ0FBQ1csS0FBOUI7QUFBbEMsS0FBWCxDQUFqQjtBQUNILEc7O1NBRURxRCxhLEdBQUEsdUJBQWNqRSxLQUFkLEVBQXFCO0FBQ2pCQSxTQUFLLENBQUNjLGNBQU47O0FBRUEsUUFBSSxDQUFDLEtBQUt3RyxtQkFBTCxDQUF5QmEsTUFBekIsQ0FBZ0N0Qiw2Q0FBRyxDQUFDdUIsU0FBSixDQUFjQyxLQUE5QyxDQUFMLEVBQTJEO0FBQ3ZEO0FBQ0g7O0FBRUQsUUFBTXBJLEdBQUcsR0FBR0MsMENBQUcsQ0FBQ0MsS0FBSixDQUFVQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTFCLEVBQWdDLElBQWhDLENBQVo7QUFDQSxRQUFJQyxXQUFXLEdBQUcrSCxTQUFTLENBQUM5SCxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBUCxDQUFELENBQXVCQyxTQUF2QixFQUFELENBQVQsQ0FBOENDLEtBQTlDLENBQW9ELEdBQXBELENBQWxCO0FBQ0FKLGVBQVcsR0FBR1csa0RBQVEsQ0FBQ3FILGdCQUFULENBQTBCaEksV0FBMUIsQ0FBZDs7QUFFQSxTQUFLLElBQU1pSSxHQUFYLElBQWtCakksV0FBbEIsRUFBK0I7QUFDM0IsVUFBSUEsV0FBVyxDQUFDa0ksY0FBWixDQUEyQkQsR0FBM0IsQ0FBSixFQUFxQztBQUNqQ3ZJLFdBQUcsQ0FBQ1csS0FBSixDQUFVNEgsR0FBVixJQUFpQmpJLFdBQVcsQ0FBQ2lJLEdBQUQsQ0FBNUI7QUFDSDtBQUNKOztBQUVEdEgsc0RBQVEsQ0FBQzhHLE9BQVQsQ0FBaUI5SCwwQ0FBRyxDQUFDYSxNQUFKLENBQVc7QUFBRUMsY0FBUSxFQUFFZixHQUFHLENBQUNlLFFBQWhCO0FBQTBCQyxZQUFNLEVBQUVDLGtEQUFRLENBQUNDLGdCQUFULENBQTBCbEIsR0FBRyxDQUFDVyxLQUE5QjtBQUFsQyxLQUFYLENBQWpCO0FBQ0gsRzs7U0FFRCtDLGEsR0FBQSx5QkFBZ0I7QUFDWixTQUFLYSxVQUFMO0FBQ0gsRzs7U0FFRFYsaUIsR0FBQSwyQkFBa0I5RCxLQUFsQixFQUF5QjtBQUNyQixRQUFNa0QsZ0JBQWdCLEdBQUcxQyxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBUCxDQUExQjtBQUNBLFFBQU0wQyxXQUFXLEdBQUdELGdCQUFnQixDQUFDRSxJQUFqQixDQUFzQixxQkFBdEIsQ0FBcEI7QUFDQSxRQUFNOEIsRUFBRSxHQUFHL0IsV0FBVyxDQUFDSSxRQUF2Qjs7QUFFQSxRQUFJSixXQUFXLENBQUNFLFdBQWhCLEVBQTZCO0FBQ3pCLFdBQUtaLGVBQUwsR0FBdUIsb0RBQVEsS0FBS0EsZUFBYixFQUE4QixDQUFDeUMsRUFBRCxDQUE5QixDQUF2QjtBQUNILEtBRkQsTUFFTztBQUNILFdBQUt6QyxlQUFMLEdBQXVCLHNEQUFVLEtBQUtBLGVBQWYsRUFBZ0N5QyxFQUFoQyxDQUF2QjtBQUNIO0FBQ0osRzs7Ozs7QUFHVTdELDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzWkE7QUFDQTtBQUVBLElBQU1xSCxhQUFhLEdBQUcsQ0FDbEIsT0FEa0IsRUFFbEIsUUFGa0IsRUFHbEIsVUFIa0IsQ0FBdEI7QUFNQTs7Ozs7OztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxjQUE5QixFQUE4QztBQUMxQyxNQUFNQyxNQUFNLEdBQUd0SSxDQUFDLENBQUNvSSxLQUFELENBQWhCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRCxNQUFNLENBQUNFLE1BQVAsT0FBa0JILGNBQWxCLENBQW5CO0FBQ0EsTUFBTUksT0FBTyxHQUFHSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxTQUFaLEVBQXVCaEQsV0FBdkIsRUFBaEI7QUFFQSxNQUFJaUQsU0FBUyxHQUFNTixjQUFOLFVBQXlCSSxPQUF0QztBQUNBLE1BQUlHLGlCQUFKLENBTjBDLENBUTFDOztBQUNBLE1BQUlILE9BQU8sS0FBSyxPQUFoQixFQUF5QjtBQUNyQixRQUFNSSxTQUFTLEdBQUdQLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLE1BQVosQ0FBbEI7O0FBRUEsUUFBSSx1REFBVyxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFFBQXRCLENBQVgsRUFBNENHLFNBQTVDLENBQUosRUFBNEQ7QUFDeEQ7QUFDQUYsZUFBUyxHQUFNTixjQUFOLFVBQXlCLHdEQUFZUSxTQUFaLENBQWxDO0FBQ0gsS0FIRCxNQUdPO0FBQ0g7QUFDQUQsdUJBQWlCLFFBQU1ELFNBQU4sR0FBa0IseURBQWFFLFNBQWIsQ0FBbkM7QUFDSDtBQUNKLEdBbkJ5QyxDQXFCMUM7OztBQUNBLFNBQU9OLFVBQVUsQ0FDWk8sUUFERSxDQUNPSCxTQURQLEVBRUZHLFFBRkUsQ0FFT0YsaUJBRlAsQ0FBUDtBQUdIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Qk8sU0FBU0csWUFBVCxDQUFzQnRDLFlBQXRCLEVBQW9DekYsT0FBcEMsRUFBa0Q7QUFBQSxNQUFkQSxPQUFjO0FBQWRBLFdBQWMsR0FBSixFQUFJO0FBQUE7O0FBQ3JELE1BQU1nSSxLQUFLLEdBQUdoSixDQUFDLENBQUN5RyxZQUFELENBQWY7QUFDQSxNQUFNd0MsT0FBTyxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV2hCLGFBQWEsQ0FBQ2lCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBWCxDQUFoQixDQUZxRCxDQUlyRDs7QUFKcUQsaUJBS1huSSxPQUxXO0FBQUEsdUNBSzdDcUgsY0FMNkM7QUFBQSxNQUs3Q0EsY0FMNkMsc0NBSzVCLFlBTDRCLDBCQU9yRDs7QUFDQVksU0FBTyxDQUFDNUcsSUFBUixDQUFhLFVBQUMrRyxFQUFELEVBQUtoQixLQUFMLEVBQWU7QUFDeEJELGlCQUFhLENBQUNDLEtBQUQsRUFBUUMsY0FBUixDQUFiO0FBQ0gsR0FGRDtBQUlBLFNBQU9XLEtBQVA7QUFDSDtBQUVEOzs7Ozs7QUFLQSxTQUFTSyxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUN4QixNQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ1osSUFBUCxDQUFZLE1BQVosRUFBb0JjLEtBQXBCLENBQTBCLFVBQTFCLENBQWhCOztBQUVBLE1BQUlELE9BQU8sSUFBSUEsT0FBTyxDQUFDcEQsTUFBUixLQUFtQixDQUFsQyxFQUFxQztBQUNqQyxXQUFPb0QsT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUNIOztBQUVELFNBQU8sRUFBUDtBQUNIO0FBRUQ7Ozs7OztBQUlBLFNBQVNFLHNCQUFULENBQWdDQyxXQUFoQyxFQUE2QztBQUN6QyxNQUFNSCxPQUFPLEdBQUdGLFVBQVUsQ0FBQ0ssV0FBRCxDQUExQjtBQUNBLE1BQU1DLGVBQWUsR0FBRztBQUNwQkMsUUFBSSxFQUFFLFFBRGM7QUFFcEJDLFFBQUksc0JBQW9CTixPQUZKO0FBR3BCTyxTQUFLLEVBQUU7QUFIYSxHQUF4QjtBQU1BSixhQUFXLENBQUNLLEtBQVosQ0FBa0IvSixDQUFDLENBQUMsV0FBRCxFQUFjMkosZUFBZCxDQUFuQjtBQUNIOztBQUVELElBQU0vQyxVQUFVLEdBQUc7QUFDZjs7Ozs7QUFLQW9ELG9CQUFrQixFQUFFLDRCQUFDNUQsU0FBRCxFQUFZNkQsS0FBWixFQUFzQjtBQUN0QyxRQUFJQSxLQUFKLEVBQVc7QUFDUDdELGVBQVMsQ0FBQzhELEdBQVYsQ0FBYztBQUNWQyxnQkFBUSxFQUFFRixLQURBO0FBRVZHLGdCQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBSzVFLEdBQUwsRUFBYTtBQUNuQixjQUFNNkUsTUFBTSxHQUFHQyxxREFBSyxDQUFDQyxLQUFOLENBQVkvRSxHQUFaLENBQWY7QUFFQTRFLFlBQUUsQ0FBQ0MsTUFBRCxDQUFGO0FBQ0gsU0FOUztBQU9WRyxvQkFBWSxFQUFFO0FBUEosT0FBZDtBQVNIO0FBQ0osR0FsQmM7O0FBb0JmOzs7Ozs7OztBQVFBQyx1QkFBcUIsRUFBRSwrQkFBQ3RFLFNBQUQsRUFBWXVFLGdCQUFaLEVBQThCQyxpQkFBOUIsRUFBaURDLFlBQWpELEVBQStEQyxVQUEvRCxFQUE4RTtBQUNqRyxRQUFNQyxTQUFTLEdBQUcvSyxDQUFDLENBQUMySyxnQkFBRCxDQUFuQjtBQUNBLFFBQU1LLG1CQUFtQixHQUFHLENBQ3hCO0FBQ0liLGNBQVEsRUFBRVEsZ0JBRGQ7QUFFSVAsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUs1RSxHQUFMLEVBQWE7QUFDbkIsWUFBTTZFLE1BQU0sR0FBRzdFLEdBQUcsQ0FBQ1UsTUFBbkI7O0FBRUEsWUFBSTJFLFVBQUosRUFBZ0I7QUFDWixpQkFBT1QsRUFBRSxDQUFDLElBQUQsQ0FBVDtBQUNIOztBQUVEQSxVQUFFLENBQUNDLE1BQUQsQ0FBRjtBQUNILE9BVkw7QUFXSUcsa0JBQVksRUFBRTtBQVhsQixLQUR3QixFQWN4QjtBQUNJTixjQUFRLEVBQUVRLGdCQURkO0FBRUlQLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUUsR0FBTCxFQUFhO0FBQ25CLFlBQU02RSxNQUFNLEdBQUc3RSxHQUFHLENBQUMrRCxLQUFKLENBQVUsSUFBSXlCLE1BQUosQ0FBV0osWUFBWSxDQUFDSyxLQUF4QixDQUFWLEtBQ1J6RixHQUFHLENBQUMrRCxLQUFKLENBQVUsSUFBSXlCLE1BQUosQ0FBV0osWUFBWSxDQUFDTSxPQUF4QixDQUFWLENBRFEsSUFFUjFGLEdBQUcsQ0FBQ1UsTUFBSixJQUFjMEUsWUFBWSxDQUFDTyxTQUZsQyxDQURtQixDQUtuQjs7QUFDQSxZQUFJTixVQUFVLElBQUlyRixHQUFHLENBQUNVLE1BQUosS0FBZSxDQUFqQyxFQUFvQztBQUNoQyxpQkFBT2tFLEVBQUUsQ0FBQyxJQUFELENBQVQ7QUFDSDs7QUFFREEsVUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxPQWJMO0FBY0lHLGtCQUFZLEVBQUVJLFlBQVksQ0FBQ1E7QUFkL0IsS0Fkd0IsRUE4QnhCO0FBQ0lsQixjQUFRLEVBQUVTLGlCQURkO0FBRUlSLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUUsR0FBTCxFQUFhO0FBQ25CLFlBQU02RSxNQUFNLEdBQUc3RSxHQUFHLENBQUNVLE1BQW5COztBQUVBLFlBQUkyRSxVQUFKLEVBQWdCO0FBQ1osaUJBQU9ULEVBQUUsQ0FBQyxJQUFELENBQVQ7QUFDSDs7QUFFREEsVUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxPQVZMO0FBV0lHLGtCQUFZLEVBQUU7QUFYbEIsS0E5QndCLEVBMkN4QjtBQUNJTixjQUFRLEVBQUVTLGlCQURkO0FBRUlSLGNBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUUsR0FBTCxFQUFhO0FBQ25CLFlBQU02RSxNQUFNLEdBQUc3RSxHQUFHLEtBQUtzRixTQUFTLENBQUN0RixHQUFWLEVBQXZCO0FBRUE0RSxVQUFFLENBQUNDLE1BQUQsQ0FBRjtBQUNILE9BTkw7QUFPSUcsa0JBQVksRUFBRTtBQVBsQixLQTNDd0IsQ0FBNUI7QUFzREFyRSxhQUFTLENBQUM4RCxHQUFWLENBQWNjLG1CQUFkO0FBQ0gsR0FyRmM7O0FBdUZmOzs7Ozs7Ozs7O0FBVUFuRSwwQkFBd0IsRUFBRSxrQ0FBQ1QsU0FBRCxFQUFZRSxTQUFaLEVBQTBCO0FBQUEsUUFFNUNDLGFBRjRDLEdBTzVDRCxTQVA0QyxDQUU1Q0MsYUFGNEM7QUFBQSxRQUc1Q0MsZ0JBSDRDLEdBTzVDRixTQVA0QyxDQUc1Q0UsZ0JBSDRDO0FBQUEsUUFJNUNDLFlBSjRDLEdBTzVDSCxTQVA0QyxDQUk1Q0csWUFKNEM7QUFBQSxRQUs1Q0MsZ0JBTDRDLEdBTzVDSixTQVA0QyxDQUs1Q0ksZ0JBTDRDO0FBQUEsUUFNNUNDLGdCQU40QyxHQU81Q0wsU0FQNEMsQ0FNNUNLLGdCQU40QztBQVNoRFAsYUFBUyxDQUFDa0YsU0FBVixDQUFvQjtBQUNoQkMsVUFBSSxFQUFFOUUsWUFEVTtBQUVoQitFLG1CQUFhLEVBQUUsSUFGQztBQUdoQkMsa0JBQVksRUFBRSxHQUhFLENBR0c7O0FBSEgsS0FBcEI7QUFNQXJGLGFBQVMsQ0FBQzhELEdBQVYsQ0FBYztBQUNWTyxrQkFBWSxFQUFFLHlDQURKO0FBRVZOLGNBQVEsRUFBRXhELGdCQUZBO0FBR1Z5RCxjQUFRLGVBQWF6RCxnQkFBYixTQUFpQ0Q7QUFIL0IsS0FBZDtBQU1BTixhQUFTLENBQUM4RCxHQUFWLENBQWM7QUFDVk8sa0JBQVksRUFBRSx5Q0FESjtBQUVWTixjQUFRLEVBQUV6RCxnQkFGQTtBQUdWMEQsY0FBUSxlQUFhekQsZ0JBQWIsU0FBaUNEO0FBSC9CLEtBQWQ7QUFNQU4sYUFBUyxDQUFDOEQsR0FBVixDQUFjO0FBQ1ZPLGtCQUFZLEVBQUUseUJBREo7QUFFVk4sY0FBUSxFQUFFekQsZ0JBRkE7QUFHVjBELGNBQVEsRUFBRTtBQUhBLEtBQWQ7QUFNQWhFLGFBQVMsQ0FBQzhELEdBQVYsQ0FBYztBQUNWTyxrQkFBWSxFQUFFLHlCQURKO0FBRVZOLGNBQVEsRUFBRXhELGdCQUZBO0FBR1Z5RCxjQUFRLEVBQUU7QUFIQSxLQUFkO0FBTUFoRSxhQUFTLENBQUM4RCxHQUFWLENBQWM7QUFDVk8sa0JBQVksRUFBRSwrQkFESjtBQUVWTixjQUFRLEVBQUUsQ0FBQ3hELGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FGQTtBQUdWMEQsY0FBUSxFQUFFO0FBSEEsS0FBZDtBQU1BaEUsYUFBUyxDQUFDc0YsaUJBQVYsQ0FBNEI7QUFDeEJ2QixjQUFRLEVBQUUsQ0FBQ3hELGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FEYztBQUV4QjhCLFlBQU0sRUFBRWhDLGdCQUZnQjtBQUd4Qm1GLGVBQVMsRUFBRXBGO0FBSGEsS0FBNUI7QUFLSCxHQW5KYzs7QUFxSmY7Ozs7O0FBS0FxRiwyQkFBeUIsRUFBRSxtQ0FBQ3hGLFNBQUQsRUFBWTZELEtBQVosRUFBc0I7QUFDN0MsUUFBSUEsS0FBSixFQUFXO0FBQ1A3RCxlQUFTLENBQUM4RCxHQUFWLENBQWM7QUFDVkMsZ0JBQVEsRUFBRUYsS0FEQTtBQUVWRyxnQkFBUSxFQUFFLFVBRkE7QUFHVkssb0JBQVksRUFBRTtBQUhKLE9BQWQ7QUFLSDtBQUNKLEdBbEtjOztBQW9LZjs7OztBQUlBb0Isd0JBQXNCLEVBQUUsZ0NBQUM1QixLQUFELEVBQVc7QUFDL0IsUUFBTTZCLGtCQUFrQixHQUFHOUwsQ0FBQyxtQkFBaUJpSyxLQUFLLENBQUNySCxJQUFOLENBQVcsV0FBWCxDQUFqQixTQUE1QjtBQUVBbUosVUFBTSxDQUFDQyxJQUFQLENBQVkzRiw0Q0FBRyxDQUFDNEYsT0FBaEIsRUFBeUJDLE9BQXpCLENBQWlDLFVBQUNwQyxLQUFELEVBQVc7QUFDeEMsVUFBSWdDLGtCQUFrQixDQUFDSyxRQUFuQixDQUE0QjlGLDRDQUFHLENBQUM0RixPQUFKLENBQVluQyxLQUFaLENBQTVCLENBQUosRUFBcUQ7QUFDakRnQywwQkFBa0IsQ0FBQ00sV0FBbkIsQ0FBK0IvRiw0Q0FBRyxDQUFDNEYsT0FBSixDQUFZbkMsS0FBWixDQUEvQjtBQUNIO0FBQ0osS0FKRDtBQUtIO0FBaExjLENBQW5COzs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUFBLElBQU1TLEtBQUssR0FBRztBQUNWQyxPQURVLGlCQUNKVixLQURJLEVBQ0c7QUFDVCxRQUFNdUMsRUFBRSxHQUFHLFlBQVg7QUFDQSxXQUFPQSxFQUFFLENBQUNDLElBQUgsQ0FBUXhDLEtBQVIsQ0FBUDtBQUNILEdBSlM7O0FBTVY7Ozs7O0FBS0F5QyxVQVhVLG9CQVdEekMsS0FYQyxFQVdNO0FBQ1osV0FBTyxLQUFLMEMsUUFBTCxDQUFjMUMsS0FBZCxDQUFQO0FBQ0gsR0FiUzs7QUFlVjs7Ozs7O0FBTUEwQyxVQXJCVSxvQkFxQkQxQyxLQXJCQyxFQXFCTTtBQUNaLFdBQU9BLEtBQUssQ0FBQzNELE1BQU4sR0FBZSxDQUF0QjtBQUNIO0FBdkJTLENBQWQ7QUEwQmVvRSxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNN0osUUFBUSxHQUFHO0FBQ2IwRCxRQUFNLEVBQUU7QUFBQSxnQkFBU3hFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlcsUUFBekIsR0FBb0NaLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlksTUFBcEQ7QUFBQSxHQURLO0FBR2IrRyxTQUFPLEVBQUUsaUJBQUMvSCxHQUFELEVBQVM7QUFDZEcsVUFBTSxDQUFDNk0sT0FBUCxDQUFlQyxTQUFmLENBQXlCLEVBQXpCLEVBQTZCdkYsUUFBUSxDQUFDd0YsS0FBdEMsRUFBNkNsTixHQUE3QztBQUNBTyxLQUFDLENBQUNKLE1BQUQsQ0FBRCxDQUFVZ04sT0FBVixDQUFrQixhQUFsQjtBQUNILEdBTlk7QUFRYkMsZUFBYSxFQUFFLHVCQUFDcE4sR0FBRCxFQUFNMEYsTUFBTixFQUFpQjtBQUM1QixRQUFNMkgsTUFBTSxHQUFHcE4sMENBQUcsQ0FBQ0MsS0FBSixDQUFVRixHQUFWLEVBQWUsSUFBZixDQUFmO0FBQ0EsUUFBSXNOLEtBQUosQ0FGNEIsQ0FJNUI7O0FBQ0FELFVBQU0sQ0FBQ3JNLE1BQVAsR0FBZ0IsSUFBaEI7O0FBRUEsU0FBS3NNLEtBQUwsSUFBYzVILE1BQWQsRUFBc0I7QUFDbEIsVUFBSUEsTUFBTSxDQUFDOEMsY0FBUCxDQUFzQjhFLEtBQXRCLENBQUosRUFBa0M7QUFDOUJELGNBQU0sQ0FBQzFNLEtBQVAsQ0FBYTJNLEtBQWIsSUFBc0I1SCxNQUFNLENBQUM0SCxLQUFELENBQTVCO0FBQ0g7QUFDSjs7QUFFRCxXQUFPck4sMENBQUcsQ0FBQ2EsTUFBSixDQUFXdU0sTUFBWCxDQUFQO0FBQ0gsR0F0Qlk7QUF3QmJuTSxrQkFBZ0IsRUFBRSwwQkFBQ3FNLFNBQUQsRUFBZTtBQUM3QixRQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBLFFBQUlqRixHQUFKOztBQUNBLFNBQUtBLEdBQUwsSUFBWWdGLFNBQVosRUFBdUI7QUFDbkIsVUFBSUEsU0FBUyxDQUFDL0UsY0FBVixDQUF5QkQsR0FBekIsQ0FBSixFQUFtQztBQUMvQixZQUFJa0YsS0FBSyxDQUFDQyxPQUFOLENBQWNILFNBQVMsQ0FBQ2hGLEdBQUQsQ0FBdkIsQ0FBSixFQUFtQztBQUMvQixjQUFJb0YsR0FBRyxTQUFQOztBQUVBLGVBQUtBLEdBQUwsSUFBWUosU0FBUyxDQUFDaEYsR0FBRCxDQUFyQixFQUE0QjtBQUN4QixnQkFBSWdGLFNBQVMsQ0FBQ2hGLEdBQUQsQ0FBVCxDQUFlQyxjQUFmLENBQThCbUYsR0FBOUIsQ0FBSixFQUF3QztBQUNwQ0gsaUJBQUcsVUFBUWpGLEdBQVIsU0FBZWdGLFNBQVMsQ0FBQ2hGLEdBQUQsQ0FBVCxDQUFlb0YsR0FBZixDQUFsQjtBQUNIO0FBQ0o7QUFDSixTQVJELE1BUU87QUFDSEgsYUFBRyxVQUFRakYsR0FBUixTQUFlZ0YsU0FBUyxDQUFDaEYsR0FBRCxDQUEzQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxXQUFPaUYsR0FBRyxDQUFDSSxTQUFKLENBQWMsQ0FBZCxDQUFQO0FBQ0gsR0E1Q1k7QUE4Q2J0RixrQkFBZ0IsRUFBRSwwQkFBQ2lGLFNBQUQsRUFBZTtBQUM3QixRQUFNN0gsTUFBTSxHQUFHLEVBQWY7O0FBRUEsU0FBSyxJQUFJbUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sU0FBUyxDQUFDN0csTUFBOUIsRUFBc0NtSCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFVBQU1DLElBQUksR0FBR1AsU0FBUyxDQUFDTSxDQUFELENBQVQsQ0FBYW5OLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBYjs7QUFFQSxVQUFJb04sSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXcEksTUFBZixFQUF1QjtBQUNuQixZQUFJK0gsS0FBSyxDQUFDQyxPQUFOLENBQWNoSSxNQUFNLENBQUNvSSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQXBCLENBQUosRUFBb0M7QUFDaENwSSxnQkFBTSxDQUFDb0ksSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFOLENBQWdCekssSUFBaEIsQ0FBcUJ5SyxJQUFJLENBQUMsQ0FBRCxDQUF6QjtBQUNILFNBRkQsTUFFTztBQUNIcEksZ0JBQU0sQ0FBQ29JLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBTixHQUFrQixDQUFDcEksTUFBTSxDQUFDb0ksSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFQLEVBQWtCQSxJQUFJLENBQUMsQ0FBRCxDQUF0QixDQUFsQjtBQUNIO0FBQ0osT0FORCxNQU1PO0FBQ0hwSSxjQUFNLENBQUNvSSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQU4sR0FBa0JBLElBQUksQ0FBQyxDQUFELENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxXQUFPcEksTUFBUDtBQUNIO0FBaEVZLENBQWpCO0FBbUVlekUsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBOztBQUVBLFNBQVM4TSxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3JDLE1BQU1wTCxLQUFLLEdBQUdtTCxPQUFPLENBQUM1SCxPQUFSLENBQWdCNkgsSUFBaEIsQ0FBZDs7QUFFQSxNQUFJcEwsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNabUwsV0FBTyxDQUFDRSxNQUFSLENBQWVyTCxLQUFmLEVBQXNCLENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTc0wsZ0JBQVQsQ0FBMEJILE9BQTFCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNyQ0QsU0FBTyxDQUFDM0ssSUFBUixDQUFhNEssSUFBYjtBQUNIOztBQUVELFNBQVNHLGdCQUFULENBQTBCSixPQUExQixFQUFtQ25HLEtBQW5DLEVBQTBDd0csVUFBMUMsRUFBc0Q7QUFDbEQsTUFBSUwsT0FBTyxDQUFDdEgsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN0QixRQUFJLENBQUNtQixLQUFLLENBQUNyRSxFQUFOLENBQVMsU0FBVCxDQUFMLEVBQTBCO0FBQ3RCcUUsV0FBSyxDQUFDd0IsUUFBTixDQUFlLE1BQWY7QUFDSDs7QUFDRHhCLFNBQUssQ0FBQzNDLElBQU4sQ0FBVyxNQUFYLEVBQXNCbUosVUFBVSxDQUFDQyxPQUFqQyxTQUE0Q04sT0FBTyxDQUFDdEUsSUFBUixDQUFhLEdBQWIsQ0FBNUM7QUFDQTdCLFNBQUssQ0FBQzRCLElBQU4sQ0FBVyxnQkFBWCxFQUE2QjhFLElBQTdCLENBQWtDUCxPQUFPLENBQUN0SCxNQUExQztBQUNILEdBTkQsTUFNTztBQUNIbUIsU0FBSyxDQUFDOEUsV0FBTixDQUFrQixNQUFsQjtBQUNIO0FBQ0o7O0FBRWMseUVBQVUwQixVQUFWLEVBQXNCO0FBQ2pDLE1BQUlHLFFBQUo7QUFFQSxNQUFNQyxRQUFRLEdBQUdsTyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVrSixJQUFWLENBQWUsb0NBQWYsQ0FBakI7QUFDQSxNQUFNaUYsWUFBWSxHQUFHbk8sQ0FBQyxDQUFDLHFCQUFELENBQXRCOztBQUVBLE1BQUlrTyxRQUFRLENBQUMvSCxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCOEgsWUFBUSxHQUFHLGtEQUFNQyxRQUFOLEVBQWdCLFVBQUF2SSxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDbUUsS0FBWjtBQUFBLEtBQXZCLENBQVg7QUFFQStELG9CQUFnQixDQUFDSSxRQUFELEVBQVdFLFlBQVgsRUFBeUJMLFVBQXpCLENBQWhCO0FBQ0g7O0FBRUQsTUFBTU0sY0FBYyxHQUFHSCxRQUFRLElBQUksRUFBbkM7QUFFQWpPLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtILEVBQVYsQ0FBYSxPQUFiLEVBQXNCLG1CQUF0QixFQUEyQyxVQUFBMUgsS0FBSyxFQUFJO0FBQ2hELFFBQU02TyxPQUFPLEdBQUc3TyxLQUFLLENBQUNTLGFBQU4sQ0FBb0I2SixLQUFwQztBQUNBLFFBQU13RSxtQkFBbUIsR0FBR3RPLENBQUMsQ0FBQyxxQkFBRCxDQUE3Qjs7QUFFQSxRQUFJUixLQUFLLENBQUNTLGFBQU4sQ0FBb0JzTyxPQUF4QixFQUFpQztBQUM3Qlgsc0JBQWdCLENBQUNRLGNBQUQsRUFBaUJDLE9BQWpCLENBQWhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hiLHNCQUFnQixDQUFDWSxjQUFELEVBQWlCQyxPQUFqQixDQUFoQjtBQUNIOztBQUVEUixvQkFBZ0IsQ0FBQ08sY0FBRCxFQUFpQkUsbUJBQWpCLEVBQXNDUixVQUF0QyxDQUFoQjtBQUNILEdBWEQ7QUFhQTlOLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtILEVBQVYsQ0FBYSxRQUFiLEVBQXVCLHdCQUF2QixFQUFpRCxVQUFBMUgsS0FBSyxFQUFJO0FBQ3RELFFBQU1nUCxLQUFLLEdBQUd4TyxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBUCxDQUFmO0FBQ0EsUUFBTXdPLGlCQUFpQixHQUFHRCxLQUFLLENBQUN0RixJQUFOLENBQVcsb0NBQVgsQ0FBMUI7O0FBRUEsUUFBSXVGLGlCQUFpQixDQUFDdEksTUFBbEIsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0J1SSxtRUFBYyxDQUFDLGtEQUFELENBQWQ7QUFDQWxQLFdBQUssQ0FBQ2MsY0FBTjtBQUNIO0FBQ0osR0FSRDtBQVVBTixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVrSCxFQUFWLENBQWEsT0FBYixFQUFzQixxQkFBdEIsRUFBNkMsWUFBTTtBQUMvQyxRQUFNeUgsb0JBQW9CLEdBQUczTyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVrSixJQUFWLENBQWUsb0NBQWYsQ0FBN0I7O0FBRUEsUUFBSXlGLG9CQUFvQixDQUFDeEksTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEN1SSxtRUFBYyxDQUFDLGtEQUFELENBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7QUFRSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICAgICAgICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcblxuICAgIHBhcnNlUXVlcnlQYXJhbXM6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBxdWVyeURhdGFbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbMF0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3RlbXBbMF1dKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0ucHVzaCh0ZW1wWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSBbcGFyYW1zW3RlbXBbMF1dLCB0ZW1wWzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IHRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgcHJvZHVjdHM7XG5cbiAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgIGlmICgkY2hlY2tlZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcHJvZHVjdHMgPSBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KHByb2R1Y3RzLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmVDb3VudGVyID0gcHJvZHVjdHMgfHwgW107XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==