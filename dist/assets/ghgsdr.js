'use strict';



;define("ghgsdr/adapters/dog", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    proxy: 'https://quiet-meadow-73531.herokuapp.com/',
    host: Ember.computed(function () {
      const psUrl = 'https://petstablished.com/api/v2/public/pets?public_key=43eb4fe251a66bbdb3042ec3dcddb7c7';
      const queryParams = encodeURI(`&search[status]=Fostered,Fostered - Pending Adoption,Pending Adoption&pagination[limit]=50`);
      return `${this.proxy}${psUrl}${queryParams}`;
    }),

    pathForType() {
      return '';
    }

  });

  _exports.default = _default;
});
;define("ghgsdr/adapters/export", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    proxy: 'https://quiet-meadow-73531.herokuapp.com/',
    host: Ember.computed(function () {
      const psUrl = 'https://petstablished.com/api/v2/public/pets?public_key=43eb4fe251a66bbdb3042ec3dcddb7c7';
      return `${this.proxy}${psUrl}`;
    }),

    urlForQuery(query) {
      let queryParams;
      let limit = 25;

      if (query.type === 'intake') {
        queryParams = '&search[status]=Intake,Treatment,Boarding';
      } else if (query.type === 'fostered') {
        queryParams = '&search[status]=Fostered,Fostered - Pending Adoption,Pending Adoption';
      } else if (query.type === 'adopted') {
        queryParams = '&search[status]=Adopted';
        limit = 100;
      }

      queryParams = encodeURI(`${queryParams}&pagination[limit]=${limit}`);
      return `${this.host}${queryParams}`;
    },

    pathForType() {
      return '';
    }

  });

  _exports.default = _default;
});
;define("ghgsdr/app", ["exports", "ghgsdr/resolver", "ember-load-initializers", "ghgsdr/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("ghgsdr/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)'
  };
  _exports.default = _default;
});
;define("ghgsdr/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("ghgsdr/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("ghgsdr/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("ghgsdr/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("ghgsdr/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("ghgsdr/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("ghgsdr/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("ghgsdr/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("ghgsdr/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("ghgsdr/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("ghgsdr/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("ghgsdr/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("ghgsdr/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("ghgsdr/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ghgsdr/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("ghgsdr/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("ghgsdr/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("ghgsdr/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("ghgsdr/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("ghgsdr/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("ghgsdr/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("ghgsdr/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("ghgsdr/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("ghgsdr/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("ghgsdr/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("ghgsdr/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("ghgsdr/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("ghgsdr/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("ghgsdr/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("ghgsdr/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("ghgsdr/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("ghgsdr/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("ghgsdr/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("ghgsdr/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("ghgsdr/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("ghgsdr/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("ghgsdr/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("ghgsdr/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("ghgsdr/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("ghgsdr/components/card/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'li',
    classNames: ['card__item'],
    bio: Ember.computed('description', function () {
      const description = this.get('description');
      return Ember.String.htmlSafe(`${description[0].substring(0, 100)}...`);
    }),
    imageStyle: Ember.computed('defaultImage', function () {
      const defaultImage = this.get('defaultImage');
      return Ember.String.htmlSafe(`background-image: url(${defaultImage})`);
    }),
    actions: {
      launchModal(dogName, imageUrl) {
        this.launchModal(dogName, imageUrl);
      }

    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/card/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9cdGGzRk",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"card\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"card__image\"],[11,\"style\",[22,\"imageStyle\"]],[11,\"onClick\",[28,\"action\",[[23,0,[]],\"launchModal\",[24,[\"name\"]],[24,[\"defaultImage\"]]],null]],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"card__body\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"card__body__title\"],[8],[1,[22,\"name\"],false],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"card__body__text\"],[8],[0,\"\\n            \"],[1,[22,\"bio\"],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"card__body__text\"],[8],[0,\"\\n            \"],[1,[28,\"pet-attributes\",null,[[\"attributes\",\"showIcon\"],[[24,[\"attributes\"]],true]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"button\",true],[10,\"class\",\"btn btn--block card__body__btn\"],[11,\"onClick\",[22,\"readMore\"]],[8],[0,\"Read More\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/card/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("ghgsdr/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("ghgsdr/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
;define("ghgsdr/components/image-modal/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("ghgsdr/components/image-modal/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tWaVeOQo",
    "block": "{\"symbols\":[\"modal\"],\"statements\":[[4,\"bs-modal\",null,[[\"open\",\"title\",\"size\",\"onHidden\"],[[24,[\"showModal\"]],[24,[\"modalTitle\"]],\"lg\",[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"showModal\"]]],null],false],null]]],{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"header\"]],\"expected `modal.header` to be a contextual component but found a string. Did you mean `(component modal.header)`? ('ghgsdr/components/image-modal/template.hbs' @ L8:C7) \"],null]],null,{\"statements\":[[0,\"        \"],[1,[22,\"modalTitle\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"body\"]],\"expected `modal.body` to be a contextual component but found a string. Did you mean `(component modal.body)`? ('ghgsdr/components/image-modal/template.hbs' @ L11:C7) \"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\",true],[11,\"src\",[22,\"modalImageUrl\"]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"footer\"]],\"expected `modal.footer` to be a contextual component but found a string. Did you mean `(component modal.footer)`? ('ghgsdr/components/image-modal/template.hbs' @ L14:C7) \"],null]],null,{\"statements\":[[4,\"bs-button\",null,[[\"onClick\"],[[28,\"action\",[[23,0,[]],[23,1,[\"close\"]]],null]]],{\"statements\":[[0,\"            Close\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/image-modal/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/loader/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("ghgsdr/components/loader/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mh+RkJvZ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"svg\",true],[10,\"id\",\"svg-sprite\"],[8],[0,\"\\n\\t\"],[7,\"symbol\",true],[10,\"id\",\"paw\"],[10,\"viewBox\",\"0 0 249 209.32\"],[8],[0,\"\\n\\t\\t\"],[7,\"ellipse\",true],[10,\"cx\",\"27.917\"],[10,\"cy\",\"106.333\"],[10,\"stroke-width\",\"0\"],[10,\"rx\",\"27.917\"],[10,\"ry\",\"35.833\"],[8],[9],[0,\"\\n\\t\\t\"],[7,\"ellipse\",true],[10,\"cx\",\"84.75\"],[10,\"cy\",\"47.749\"],[10,\"stroke-width\",\"0\"],[10,\"rx\",\"34.75\"],[10,\"ry\",\"47.751\"],[8],[9],[0,\"\\n\\t\\t\"],[7,\"ellipse\",true],[10,\"cx\",\"162\"],[10,\"cy\",\"47.749\"],[10,\"stroke-width\",\"0\"],[10,\"rx\",\"34.75\"],[10,\"ry\",\"47.751\"],[8],[9],[0,\"\\n\\t\\t\"],[7,\"ellipse\",true],[10,\"cx\",\"221.083\"],[10,\"cy\",\"106.333\"],[10,\"stroke-width\",\"0\"],[10,\"rx\",\"27.917\"],[10,\"ry\",\"35.833\"],[8],[9],[0,\"\\n\\t\\t\"],[7,\"path\",true],[10,\"stroke-width\",\"0\"],[10,\"d\",\"M43.98 165.39s9.76-63.072 76.838-64.574c0 0 71.082-6.758 83.096 70.33 0 0 2.586 19.855-12.54 31.855 0 0-15.75 17.75-43.75-6.25 0 0-7.124-8.374-24.624-7.874 0 0-12.75-.125-21.5 6.625 0 0-16.375 18.376-37.75 12.75 0 0-28.29-7.72-19.77-42.86z\"],[8],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"ajax-loader\"],[8],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"paw\"],[8],[7,\"svg\",true],[10,\"class\",\"icon\"],[8],[7,\"use\",true],[10,\"xlink:href\",\"#paw\",\"http://www.w3.org/1999/xlink\"],[8],[9],[9],[9],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"paw\"],[8],[7,\"svg\",true],[10,\"class\",\"icon\"],[8],[7,\"use\",true],[10,\"xlink:href\",\"#paw\",\"http://www.w3.org/1999/xlink\"],[8],[9],[9],[9],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"paw\"],[8],[7,\"svg\",true],[10,\"class\",\"icon\"],[8],[7,\"use\",true],[10,\"xlink:href\",\"#paw\",\"http://www.w3.org/1999/xlink\"],[8],[9],[9],[9],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"paw\"],[8],[7,\"svg\",true],[10,\"class\",\"icon\"],[8],[7,\"use\",true],[10,\"xlink:href\",\"#paw\",\"http://www.w3.org/1999/xlink\"],[8],[9],[9],[9],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"paw\"],[8],[7,\"svg\",true],[10,\"class\",\"icon\"],[8],[7,\"use\",true],[10,\"xlink:href\",\"#paw\",\"http://www.w3.org/1999/xlink\"],[8],[9],[9],[9],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"paw\"],[8],[7,\"svg\",true],[10,\"class\",\"icon\"],[8],[7,\"use\",true],[10,\"xlink:href\",\"#paw\",\"http://www.w3.org/1999/xlink\"],[8],[9],[9],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/loader/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/navbar/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      toggleGoodWithBigDogs() {
        this.toggleGoodWithBigDogs();
      },

      toggleGoodWithSmallDogs() {
        this.toggleGoodWithSmallDogs();
      },

      toggleGoodWithKids() {
        this.toggleGoodWithKids();
      },

      toggleGoodWithCats() {
        this.toggleGoodWithCats();
      },

      noop() {}

    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/navbar/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aq+5ooL8",
    "block": "{\"symbols\":[\"dd\",\"ddm\",\"form\"],\"statements\":[[7,\"nav\",true],[10,\"class\",\"navbar\"],[8],[0,\"\\n    \"],[7,\"a\",true],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"/\"],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"https://www.ghgsdr.org/templates/ghgsdr/images/greater-houston-german-shepherd-dog-rescue-logo.jpg\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"title\"]]],null,{\"statements\":[[0,\"        \"],[7,\"span\",true],[11,\"class\",[29,[\"navbar-text \",[28,\"if\",[[24,[\"bigName\"]],\"large\"],null]]]],[8],[0,\"\\n            \"],[1,[22,\"title\"],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"filter\"],[8],[0,\"\\n\"],[4,\"unless\",[[24,[\"hideFilter\"]]],null,{\"statements\":[[4,\"bs-dropdown\",null,[[\"closeOnMenuClick\"],[false]],{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"toggle\"]],\"expected `dd.toggle` to be a contextual component but found a string. Did you mean `(component dd.toggle)`? ('ghgsdr/components/navbar/template.hbs' @ L13:C19) \"],null]],null,{\"statements\":[[0,\"                    Filter Dogs\\n                    \"],[7,\"span\",true],[10,\"class\",\"caret\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"menu\"]],\"expected `dd.menu` to be a contextual component but found a string. Did you mean `(component dd.menu)`? ('ghgsdr/components/navbar/template.hbs' @ L17:C19) \"],null]],null,{\"statements\":[[4,\"bs-form\",null,null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `ddm.item` to be a contextual component but found a string. Did you mean `(component ddm.item)`? ('ghgsdr/components/navbar/template.hbs' @ L21:C27) \"],null]],null,{\"statements\":[[0,\"                            Good with:\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[1,[23,2,[\"divider\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `ddm.item` to be a contextual component but found a string. Did you mean `(component ddm.item)`? ('ghgsdr/components/navbar/template.hbs' @ L25:C27) \"],null]],null,{\"statements\":[[0,\"                            \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"element\"]],\"expected `form.element` to be a contextual component but found a string. Did you mean `(component form.element)`? ('ghgsdr/components/navbar/template.hbs' @ L26:C30) \"],null]],[[\"controlType\",\"label\",\"property\",\"onChange\"],[\"checkbox\",\"Big Dogs\",\"goodWithBigDogs\",[28,\"action\",[[23,0,[]],\"toggleGoodWithBigDogs\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[1,[23,2,[\"divider\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `ddm.item` to be a contextual component but found a string. Did you mean `(component ddm.item)`? ('ghgsdr/components/navbar/template.hbs' @ L34:C27) \"],null]],null,{\"statements\":[[0,\"                            \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"element\"]],\"expected `form.element` to be a contextual component but found a string. Did you mean `(component form.element)`? ('ghgsdr/components/navbar/template.hbs' @ L35:C30) \"],null]],[[\"controlType\",\"label\",\"property\",\"onChange\"],[\"checkbox\",\"Small Dogs\",\"goodWithSmallDogs\",[28,\"action\",[[23,0,[]],\"toggleGoodWithSmallDogs\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[1,[23,2,[\"divider\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `ddm.item` to be a contextual component but found a string. Did you mean `(component ddm.item)`? ('ghgsdr/components/navbar/template.hbs' @ L43:C27) \"],null]],null,{\"statements\":[[0,\"                            \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"element\"]],\"expected `form.element` to be a contextual component but found a string. Did you mean `(component form.element)`? ('ghgsdr/components/navbar/template.hbs' @ L44:C30) \"],null]],[[\"controlType\",\"label\",\"property\",\"onChange\"],[\"checkbox\",\"Kids\",\"goodWithKids\",[28,\"action\",[[23,0,[]],\"toggleGoodWithKids\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[1,[23,2,[\"divider\"]],false],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `ddm.item` to be a contextual component but found a string. Did you mean `(component ddm.item)`? ('ghgsdr/components/navbar/template.hbs' @ L52:C27) \"],null]],null,{\"statements\":[[0,\"                            \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,3,[\"element\"]],\"expected `form.element` to be a contextual component but found a string. Did you mean `(component form.element)`? ('ghgsdr/components/navbar/template.hbs' @ L53:C30) \"],null]],[[\"controlType\",\"label\",\"property\",\"onChange\"],[\"checkbox\",\"Cats\",\"goodWithCats\",[28,\"action\",[[23,0,[]],\"toggleGoodWithCats\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/navbar/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/pet-attributes/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: ''
  });

  _exports.default = _default;
});
;define("ghgsdr/components/pet-attributes/pet-attribute-card/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['attribute'],
    classNameBindings: ['iconColor'],
    iconColor: Ember.computed('value', function () {
      const value = this.get('value');

      switch (value) {
        case 'Older Kids':
        case 'Not Sure':
          {
            return 'warning';
          }

        case 'Yes':
        case 'Available':
          {
            return 'success';
          }

        case 'No':
        case 'Coming Soon':
        case 'Not Available':
          {
            return 'danger';
          }
      }
    })
  });

  _exports.default = _default;
});
;define("ghgsdr/components/pet-attributes/pet-attribute-card/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AcVlTleO",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"fa-icon\",[[24,[\"icon\"]]],null],false],[0,\" \"],[1,[22,\"name\"],false],[0,\": \"],[1,[22,\"value\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/pet-attributes/pet-attribute-card/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/pet-attributes/pet-attribute-tr/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'tr'
  });

  _exports.default = _default;
});
;define("ghgsdr/components/pet-attributes/pet-attribute-tr/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vEbPpAD0",
    "block": "{\"symbols\":[],\"statements\":[[7,\"td\",true],[10,\"class\",\"name\"],[8],[1,[22,\"name\"],false],[0,\":\"],[9],[0,\"\\n\"],[7,\"td\",true],[8],[1,[22,\"value\"],false],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/pet-attributes/pet-attribute-tr/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/pet-attributes/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XnALllpe",
    "block": "{\"symbols\":[\"attribute\",\"index\"],\"statements\":[[4,\"each\",[[24,[\"attributes\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"showIcon\"]]],null,{\"statements\":[[4,\"if\",[[23,1,[\"icon\"]]],null,{\"statements\":[[0,\"            \"],[1,[28,\"pet-attributes/pet-attribute-card\",null,[[\"icon\",\"name\",\"value\"],[[23,1,[\"icon\"]],[23,1,[\"name\"]],[23,1,[\"value\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[28,\"pet-attributes/pet-attribute-tr\",null,[[\"name\",\"value\",\"index\"],[[23,1,[\"name\"]],[23,1,[\"value\"]],[23,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1,2]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/pet-attributes/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/components/table/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'table',
    classNames: ['table', 'table-striped', 'table-bordered']
  });

  _exports.default = _default;
});
;define("ghgsdr/components/table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iRDCwZzR",
    "block": "{\"symbols\":[\"dog\",\"index\"],\"statements\":[[7,\"thead\",true],[8],[0,\"\\n    \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"ID\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Dog Name\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Intake Date\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Days in Rescue\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Age\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Gender\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Came From\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Intake Person\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"HW Status\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"HW Treatment Start\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"Current Status\"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[1,[22,\"locationName\"],false],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[1,[22,\"status\"],false],[0,\" Date\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"dogs\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\",true],[8],[0,\"\\n            \"],[7,\"th\",true],[10,\"scope\",\"row\"],[8],[1,[23,1,[\"id\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[28,\"moment-format\",[[23,1,[\"date_aquired\"]],\"MM/DD/YYYY\"],null],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"days_in_rescue\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"numerical_age\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"sex\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"where_was_pet_originally_found\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"acquired_by\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"hw_status\"]],false],[9],[0,\"\\n\"],[4,\"if\",[[28,\"not\",[[23,1,[\"hw_treatment_date\"]]],null]],null,{\"statements\":[[0,\"                \"],[7,\"td\",true],[8],[0,\"N/A\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,1,[\"hw_treatment_date\"]],\"Unknown\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"td\",true],[8],[0,\"Unknown\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"td\",true],[8],[1,[28,\"moment-format\",[[23,1,[\"hw_treatment_date\"]],\"MM/DD/YYYY\"],null],false],[9],[0,\"\\n            \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"            \"],[7,\"td\",true],[8],[1,[23,1,[\"status\"]],false],[9],[0,\"\\n            \"],[7,\"td\",true],[8],[1,[23,1,[\"current_location\"]],false],[9],[0,\"\\n\"],[4,\"if\",[[28,\"eq\",[[24,[\"locationName\"]],\"Adopter\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"td\",true],[8],[1,[28,\"moment-format\",[[23,1,[\"app_adoption_date\"]],\"MM/DD/YYYY\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"status\"]],\"To Foster\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"td\",true],[8],[1,[28,\"moment-format\",[[23,1,[\"to_foster_date\"]],\"MM/DD/YYYY\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"td\",true],[8],[1,[28,\"moment-format\",[[23,1,[\"app_foster_date\"]],\"MM/DD/YYYY\"],null],false],[9],[0,\"\\n            \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/components/table/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/controllers/dog", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    htmlSafeBios: Ember.computed('model.description', function () {
      const description = this.get('model.description');
      const safeBios = [];
      description.forEach(desc => {
        safeBios.push(Ember.String.htmlSafe(desc));
      });
      return safeBios;
    }),
    showVideos: Ember.computed('model.youTubeURLS', function () {
      const youTubeURLS = this.get('model.youTubeURLS');
      return youTubeURLS && youTubeURLS.length > 0;
    }),
    actions: {
      launchModal(dogName, imageUrl, index) {
        gtag('event', `${dogName}__image-${index}-clicked`, {
          'event_category': 'engagement',
          'event_label': imageUrl,
          'value': index
        });
        this.setProperties({
          showModal: true,
          modalImageUrl: imageUrl,
          modalTitle: dogName
        });
      }

    }
  });

  _exports.default = _default;
});
;define("ghgsdr/controllers/export", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({});

  _exports.default = _default;
});
;define("ghgsdr/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    filteredDogs: Ember.computed('goodWithBigDogs', 'goodWithSmallDogs', 'goodWithKids', 'goodWithCats', function () {
      const {
        adoptableDogs,
        goodWithBigDogs,
        goodWithSmallDogs,
        goodWithKids,
        goodWithCats
      } = this.getProperties('adoptableDogs', 'goodWithBigDogs', 'goodWithSmallDogs', 'goodWithKids', 'goodWithCats');

      if (!goodWithBigDogs && !goodWithSmallDogs && !goodWithKids && !goodWithCats) {
        return adoptableDogs;
      }

      let filteredDogs = adoptableDogs;

      if (goodWithBigDogs) {
        filteredDogs = filteredDogs.filter(dog => dog.get('goodWithBigDogs') !== 'No');
      }

      if (goodWithSmallDogs) {
        filteredDogs = filteredDogs.filter(dog => dog.get('goodWithSmallDogs') !== 'No');
      }

      if (goodWithKids) {
        filteredDogs = filteredDogs.filter(dog => dog.get('goodWithKids') !== 'No');
      }

      if (goodWithCats) {
        filteredDogs = filteredDogs.filter(dog => dog.get('goodWithCats') !== 'No');
      }

      return filteredDogs;
    }),
    actions: {
      launchModal(dogName, imageUrl) {
        gtag('event', `${dogName}__image__clicked-from-index`, {
          'event_category': 'engagement',
          'event_label': dogName
        });
        this.setProperties({
          showModal: true,
          modalImageUrl: imageUrl,
          modalTitle: dogName
        });
      },

      toggleGoodWithBigDogs() {
        this.toggleProperty('goodWithBigDogs');
      },

      toggleGoodWithSmallDogs() {
        this.toggleProperty('goodWithSmallDogs');
      },

      toggleGoodWithKids() {
        this.toggleProperty('goodWithKids');
      },

      toggleGoodWithCats() {
        this.toggleProperty('goodWithCats');
      },

      readMore(dog) {
        gtag('event', `${dog.get('name')}__read-more-clicked`, {
          'event_category': 'engagement',
          'event_label': dog.get('name')
        });
        this.transitionToRoute('dog', dog.id);
      }

    }
  });

  _exports.default = _default;
});
;define("ghgsdr/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("ghgsdr/helpers/app-version", ["exports", "ghgsdr/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ghgsdr/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("ghgsdr/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
;define("ghgsdr/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("ghgsdr/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("ghgsdr/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("ghgsdr/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("ghgsdr/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define("ghgsdr/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("ghgsdr/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define("ghgsdr/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define("ghgsdr/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("ghgsdr/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("ghgsdr/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define("ghgsdr/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define("ghgsdr/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define("ghgsdr/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("ghgsdr/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("ghgsdr/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
;define("ghgsdr/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define("ghgsdr/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define("ghgsdr/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define("ghgsdr/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define("ghgsdr/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define("ghgsdr/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define("ghgsdr/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define("ghgsdr/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define("ghgsdr/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define("ghgsdr/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define("ghgsdr/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define("ghgsdr/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("ghgsdr/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define("ghgsdr/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("ghgsdr/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("ghgsdr/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("ghgsdr/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("ghgsdr/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("ghgsdr/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ghgsdr/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ghgsdr/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("ghgsdr/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("ghgsdr/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define("ghgsdr/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("ghgsdr/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ghgsdr/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ghgsdr/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ghgsdr/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("ghgsdr/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ghgsdr/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("ghgsdr/initializers/export-application-global", ["exports", "ghgsdr/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ghgsdr/initializers/load-bootstrap-config", ["exports", "ghgsdr/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("ghgsdr/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ghgsdr/models/dog", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    age: _emberData.default.attr('string'),
    acquired_by: _emberData.default.attr('string'),
    adoptionStatus: _emberData.default.attr('string'),
    current_location_zip: _emberData.default.attr('string'),
    date_aquired: _emberData.default.attr('date'),
    date_of_birth: _emberData.default.attr('date'),
    default_image_id: _emberData.default.attr('number'),
    description: _emberData.default.attr(),
    goodWithBigDogs: _emberData.default.attr('string'),
    goodWithSmallDogs: _emberData.default.attr('string'),
    goodWithCats: _emberData.default.attr('string'),
    goodWithKids: _emberData.default.attr('string'),
    has_special_need: _emberData.default.attr('string'),
    images: _emberData.default.hasMany('image', {
      async: false
    }),
    is_housebroken: _emberData.default.attr('string'),
    is_spayed: _emberData.default.attr('string'),
    last_update: null,
    name: _emberData.default.attr('string'),
    numerical_age: _emberData.default.attr('string'),
    pet_adoption_url: _emberData.default.attr('string'),
    pet_attributes: _emberData.default.hasMany('pet-attribute', {
      async: false
    }),
    pet_foster_url: _emberData.default.attr('string'),
    pet_image: _emberData.default.attr('string'),
    public_url: _emberData.default.attr('string'),
    sex: _emberData.default.attr('string'),
    shots_up_to_date: _emberData.default.attr('string'),
    special_needs: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    temperament: _emberData.default.attr('string'),
    updated_at: _emberData.default.attr('string'),
    url_id: _emberData.default.attr('string'),
    weight: _emberData.default.attr('string'),
    where_was_pet_originally_found: _emberData.default.attr('string'),
    youTubeURLS: _emberData.default.attr({
      async: false
    })
  });

  _exports.default = _default;
});
;define("ghgsdr/models/export", ["exports", "ember-data", "ghgsdr/models/dog"], function (_exports, _emberData, _dog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _dog.default.extend({
    meta: _emberData.default.attr(),
    hw_status: _emberData.default.attr('string'),
    current_location: _emberData.default.attr('string'),
    app_foster_date: _emberData.default.attr('date'),
    hw_treatment_date: _emberData.default.attr('date'),
    days_in_rescue: _emberData.default.attr('number'),
    app_adoption_date: _emberData.default.attr('date'),
    to_foster_date: _emberData.default.attr('date')
  });

  _exports.default = _default;
});
;define("ghgsdr/models/image", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    url: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("ghgsdr/models/pet-attribute", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({
    icon: _emberData.default.attr('string'),
    index: _emberData.default.attr('number'),
    name: _emberData.default.attr('string'),
    value: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("ghgsdr/models/youtube-url", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model
  } = _emberData.default;

  var _default = Model.extend({});

  _exports.default = _default;
});
;define("ghgsdr/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ghgsdr/router", ["exports", "ghgsdr/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('dog', {
      path: '/:id'
    });
    this.route('export');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("ghgsdr/routes/dog", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    store: Ember.inject.service(),

    model(params) {
      const existingRecord = this.store.peekRecord('dog', params.id);
      return existingRecord ? existingRecord : this.store.query('dog', {
        status: 'fostered'
      }).then(dogs => dogs.findBy('id', params.id));
    },

    afterModel(model) {
      (0, _jquery.default)(document).attr('title', `${model.get('name')} - GHGSDR`);
    },

    setupController(controller, model) {
      controller.set('model', model);
    },

    actions: {
      loading(transition) {
        const controller = this.controllerFor('index');
        controller.set('loading', true);
        transition.finally(() => {
          (0, _jquery.default)("#initialPageLoading").remove();
          controller.set('loading', false);
        });
      }

    }
  });

  _exports.default = _default;
});
;define("ghgsdr/routes/export", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    store: Ember.inject.service(),

    model() {
      const controller = this.controllerFor('index');
      controller.set('loading', true);
      return Ember.RSVP.hash({
        intake: this.store.query('export', {
          type: 'intake'
        }),
        fostered: this.store.query('export', {
          type: 'fostered'
        }),
        adopted: this.store.query('export', {
          type: 'adopted'
        })
      });
    },

    afterModel() {
      (0, _jquery.default)(document).attr('title', `Dog Stats - GHGSDR`);
      const controller = this.controllerFor('index');
      (0, _jquery.default)("#initialPageLoading").remove();
      controller.set('loading', false);
    },

    setupController(controller, model) {
      controller.setProperties({
        pendingAdoption: model.fostered.filterBy('status', 'Pending Adoption'),
        intake: model.intake,
        fostered: model.fostered.filterBy('status', 'Fostered'),
        adopted: model.adopted.filter(dog => {
          return dog.get('app_adoption_date').getUTCFullYear() === 2021;
        }).sortBy('app_adoption_date').reverse()
      });
    }

  });

  _exports.default = _default;
});
;define("ghgsdr/routes/index", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    store: Ember.inject.service(),

    model() {
      return this.store.query('dog', {
        status: 'fostered'
      });
    },

    setupController(controller, model) {
      const adoptableDogs = [];
      const comingSoonDogs = [];
      const adoptionPendingDogs = [];
      model.toArray().forEach(dog => {
        const {
          status,
          adoptionStatus
        } = dog.getProperties('status', 'adoptionStatus');

        if (status === 'Pending Adoption' || status === 'Fostered - Pending Adoption') {
          adoptionPendingDogs.push(dog);
        } else if (status === 'Fostered' && adoptionStatus === 'Available') {
          adoptableDogs.push(dog);
        } else {
          comingSoonDogs.push(dog);
        }
      });
      controller.setProperties({
        adoptableDogs: adoptableDogs.sortBy('date_aquired'),
        comingSoonDogs: comingSoonDogs.sortBy('date_aquired'),
        adoptionPendingDogs
      });
    },

    actions: {
      loading(transition) {
        const controller = this.controllerFor('index');
        controller.set('loading', true);
        transition.finally(() => {
          (0, _jquery.default)("#initialPageLoading").remove();
          (0, _jquery.default)(document).attr('title', `GHGSDR Dogs Available for Adoption`);
          controller.set('loading', false);
        });
      }

    }
  });

  _exports.default = _default;
});
;define("ghgsdr/serializers/dog", ["exports", "ember-data", "ember-data/serializers/embedded-records-mixin"], function (_exports, _emberData, _embeddedRecordsMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONSerializer.extend(_embeddedRecordsMixin.default, {
    attrs: {
      images: {
        embedded: 'always'
      },
      pet_attributes: {
        embedded: 'always'
      }
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      const dogs = payload.collection.filter(dog => {
        const dob = new Date(dog.date_of_birth);
        const today = new Date();
        const sixMonthsAgo = new Date(today.setMonth(today.getMonth() - 6));
        return dob <= sixMonthsAgo;
      });
      return this._super(store, primaryModelClass, dogs, id, requestType);
    },

    normalize(typeClass, hash) {
      const modifiedHash = hash;
      const isPendingAdoption = hash.status === 'Pending Adoption';
      modifiedHash.description = modifiedHash.description.match(/<p>.*?<\/p>/g) || ["<p>I don't have a bio yet, but keep checking back for more details about me!</p>"];
      modifiedHash.pet_attributes.push({
        name: 'Sex',
        value: modifiedHash.sex
      });
      modifiedHash.youTubeURLS = [];
      modifiedHash.youtube_urls.forEach(url => {
        if (url) {
          modifiedHash.youTubeURLS.push(url.replace('watch?v=', 'embed/'));
        }
      });
      modifiedHash.pet_attributes = modifiedHash.pet_attributes.filter(attr => attr.name !== 'Age' && attr.name !== 'HW Treatment Start Date');
      let age = modifiedHash.numerical_age.split(',')[0];

      if (age === '1 years') {
        age = '1 year';
      }

      modifiedHash.pet_attributes.push({
        name: 'Weight',
        value: modifiedHash.weight || 'unknown'
      }, {
        name: 'Age',
        value: age
      });
      modifiedHash.pet_attributes = modifiedHash.pet_attributes.map(attr => {
        const modifiedAttr = attr;
        let icon;
        let index;

        switch (attr.name) {
          case 'Sex':
            {
              attr.id = 0;
              index = 0;
              break;
            }

          case 'Age':
            {
              index = 1;
              break;
            }

          case 'Weight':
            {
              attr.id = 2;
              index = 2;
              break;
            }

          case 'Spayed/Neutered':
            {
              index = 3;
              break;
            }

          case 'Heartworm Status':
            {
              index = 4;
              break;
            }

          case 'Good with Kids':
            {
              modifiedHash.goodWithKids = attr.value;
              icon = 'child';
              index = 5;
              break;
            }

          case 'Good with Big Dogs':
            {
              modifiedHash.goodWithBigDogs = attr.value;
              icon = 'dog';
              index = 6;
              break;
            }

          case 'Good with Small Dogs':
            {
              modifiedHash.goodWithSmallDogs = attr.value;
              icon = 'dog';
              index = 7;
              break;
            }

          case 'Good with Cats':
            {
              modifiedHash.goodWithCats = attr.value;
              icon = 'cat';
              index = 8;
              break;
            }

          case 'House Trained':
            {
              index = 9;
              break;
            }

          case 'Adoption Status':
            {
              modifiedHash.adoptionStatus = attr.value;
              attr.value = isPendingAdoption ? 'Not Available' : attr.value;
              icon = attr.value === 'Available' ? 'check' : attr.value === 'Coming Soon' ? 'clock' : 'times';
              index = 10;
              break;
            }

          case 'Location':
            {
              modifiedAttr.value = attr.value ? attr.value : 'Houston';
              index = 11;
              break;
            }
        }

        modifiedAttr.icon = icon;
        modifiedAttr.id = `${attr.id}-${hash.id}`;
        modifiedAttr.index = index;
        return modifiedAttr;
      }).sortBy('index');
      return this._super(typeClass, modifiedHash);
    }

  });

  _exports.default = _default;
});
;define("ghgsdr/serializers/export", ["exports", "ember-data", "ember-data/serializers/embedded-records-mixin"], function (_exports, _emberData, _embeddedRecordsMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONSerializer.extend(_embeddedRecordsMixin.default, {
    attrs: {
      images: {
        embedded: 'always'
      },
      pet_attributes: {
        embedded: 'always'
      }
    },

    modelNameFromPayloadKey() {
      return `export`;
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      const newPayload = payload.collection;
      newPayload[0].meta = payload.pagination;
      return this._super(store, primaryModelClass, newPayload, id, requestType);
    },

    normalize(modelClass, resourceHash) {
      const modifiedHash = resourceHash;
      const hwStat = modifiedHash.pet_attributes.find(attr => attr.name === 'Heartworm Status');
      const hwTreatmentDate = modifiedHash.pet_attributes.find(attr => attr.name === 'HW Treatment Start Date');
      modifiedHash.hw_status = hwStat.value;
      modifiedHash.hw_treatment_date = hwStat.value === 'Positive' || hwStat.value === 'Treated' ? hwTreatmentDate && hwTreatmentDate.value ? hwTreatmentDate.value : 'need date' : null;
      modifiedHash.current_location = modifiedHash.current_location.split(',')[0];

      if (resourceHash.status === 'Adopted') {
        modifiedHash.days_in_rescue = Math.floor((new Date(modifiedHash.app_adoption_date) - new Date(modifiedHash.date_aquired)) / (60 * 60 * 24 * 1000));
      } else {
        modifiedHash.days_in_rescue = Math.floor((new Date() - new Date(modifiedHash.date_aquired)) / (60 * 60 * 24 * 1000));
      }

      if (resourceHash.status === 'Boarding') {
        modifiedHash.to_foster_date = new Date();
        modifiedHash.to_foster_date = modifiedHash.to_foster_date.toUTCString();
      } else if (resourceHash.status === 'Treatment' && new Date(modifiedHash.hw_treatment_date)) {
        const date = new Date(modifiedHash.hw_treatment_date);
        date.setDate(date.getDate() + 30);
        modifiedHash.to_foster_date = date.toUTCString();
      }

      return this._super(modelClass, modifiedHash);
    }

  });

  _exports.default = _default;
});
;define("ghgsdr/serializers/image", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONSerializer.extend({
    normalize(typeClass, hash) {
      const modifiedHash = hash;
      modifiedHash.url = hash.image.url;
      return this._super(typeClass, modifiedHash);
    }

  });

  _exports.default = _default;
});
;define("ghgsdr/serializers/pet-attribute", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONSerializer.extend({});

  _exports.default = _default;
});
;define("ghgsdr/serializers/youtube-url", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONSerializer.extend({});

  _exports.default = _default;
});
;define("ghgsdr/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("ghgsdr/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _media.default;
  _exports.default = _default;
});
;define("ghgsdr/services/moment", ["exports", "ember-moment/services/moment", "ghgsdr/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    get
  } = Ember;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});
;define("ghgsdr/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("ghgsdr/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("ghgsdr/templates/dog", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vUEZ5fzd",
    "block": "{\"symbols\":[\"url\",\"index\",\"bio\",\"image\",\"index\"],\"statements\":[[4,\"if\",[[24,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[1,[22,\"loader\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[28,\"navbar\",null,[[\"title\",\"hideFilter\",\"bigName\"],[[24,[\"model\",\"name\"]],true,true]]],false],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"image-gallery\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"images\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\",true],[10,\"class\",\"image-container\"],[8],[0,\"\\n                \"],[7,\"img\",true],[11,\"src\",[23,4,[\"url\"]]],[11,\"alt\",[24,[\"model\",\"name\"]]],[11,\"onClick\",[28,\"action\",[[23,0,[]],\"launchModal\",[24,[\"model\",\"name\"]],[23,4,[\"url\"]],[23,5,[]]],null]],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[4,5]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-md-6 col-lg-4\"],[8],[0,\"\\n            \"],[7,\"table\",true],[10,\"class\",\"table table-striped border\"],[8],[0,\"\\n                \"],[7,\"tbody\",true],[8],[0,\"\\n                    \"],[1,[28,\"pet-attributes\",null,[[\"attributes\",\"showIcon\"],[[24,[\"model\",\"pet_attributes\"]],false]]],false],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"bio col-12 col-md-6 col-lg-8\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"htmlSafeBios\"]]],null,{\"statements\":[[0,\"                \"],[1,[23,3,[]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"if\",[[24,[\"showVideos\"]]],null,{\"statements\":[[4,\"each\",[[24,[\"model\",\"youTubeURLS\"]]],null,{\"statements\":[[0,\"                    \"],[7,\"div\",true],[10,\"class\",\"video-container\"],[8],[0,\"\\n                        \"],[7,\"iframe\",true],[11,\"id\",[29,[[24,[\"model\",\"name\"]],\"-\",[23,2,[]]]]],[10,\"class\",\"video\"],[11,\"src\",[23,1,[]]],[11,\"title\",[24,[\"model\",\"name\"]]],[10,\"frameborder\",\"0\"],[10,\"allow\",\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"],[10,\"allowfullscreen\",\"\"],[8],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]},null],[0,\"            \"],[7,\"p\",true],[8],[0,\"Information last updated: \"],[1,[24,[\"model\",\"updated_at\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"showModal\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"image-modal\",null,[[\"showModal\",\"modalTitle\",\"modalImageUrl\",\"isVideo\"],[[24,[\"showModal\"]],[24,[\"modalTitle\"]],[24,[\"modalImageUrl\"]],[24,[\"isVideo\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/templates/dog.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/templates/export", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ql08UGbM",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Boarding/Treatment\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"table-responsive\"],[8],[0,\"\\n    \"],[1,[28,\"table\",null,[[\"dogs\",\"locationName\",\"status\"],[[24,[\"intake\"]],\"Location\",\"To Foster\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Fostered\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[28,\"table\",null,[[\"dogs\",\"locationName\",\"status\"],[[24,[\"fostered\"]],\"Foster\",\"Foster\"]]],false],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Pending Adoption\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[28,\"table\",null,[[\"dogs\",\"locationName\",\"status\"],[[24,[\"pendingAdoption\"]],\"Foster\",\"Foster\"]]],false],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Adopted\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[28,\"table\",null,[[\"dogs\",\"locationName\",\"status\"],[[24,[\"adopted\"]],\"Adopter\",\"Adoption\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/templates/export.hbs"
    }
  });

  _exports.default = _default;
});
;define("ghgsdr/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "O4JnS1KU",
    "block": "{\"symbols\":[\"dog\",\"dog\",\"dog\"],\"statements\":[[4,\"if\",[[24,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[1,[22,\"loader\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[28,\"navbar\",null,[[\"title\",\"toggleGoodWithBigDogs\",\"toggleGoodWithSmallDogs\",\"toggleGoodWithKids\",\"toggleGoodWithCats\"],[\"\",[28,\"action\",[[23,0,[]],\"toggleGoodWithBigDogs\"],null],[28,\"action\",[[23,0,[]],\"toggleGoodWithSmallDogs\"],null],[28,\"action\",[[23,0,[]],\"toggleGoodWithKids\"],null],[28,\"action\",[[23,0,[]],\"toggleGoodWithCats\"],null]]]],false],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n            \"],[7,\"h1\",true],[8],[0,\"Dogs Available for Adoption\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"content\"],[8],[0,\"\\n        \"],[7,\"ul\",true],[10,\"class\",\"card-container\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"filteredDogs\"]]],null,{\"statements\":[[0,\"                \"],[1,[28,\"card\",null,[[\"name\",\"description\",\"defaultImage\",\"attributes\",\"gender\",\"launchModal\",\"readMore\"],[[23,3,[\"name\"]],[23,3,[\"description\"]],[23,3,[\"pet_image\"]],[23,3,[\"pet_attributes\"]],[23,3,[\"sex\"]],[28,\"action\",[[23,0,[]],\"launchModal\"],null],[28,\"action\",[[23,0,[]],\"readMore\",[23,3,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"        \"],[9],[0,\"\\n\\n        \"],[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n            \"],[7,\"h1\",true],[8],[0,\"Dogs Available Soon for Adoption\"],[9],[0,\"\\n            \"],[7,\"p\",true],[8],[0,\"\\n                Dogs listed below are NOT currently ready for adoption, but will be soon.\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"ul\",true],[10,\"class\",\"card-container\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"comingSoonDogs\"]]],null,{\"statements\":[[0,\"                \"],[1,[28,\"card\",null,[[\"name\",\"description\",\"defaultImage\",\"attributes\",\"gender\",\"launchModal\",\"readMore\"],[[23,2,[\"name\"]],[23,2,[\"description\"]],[23,2,[\"pet_image\"]],[23,2,[\"pet_attributes\"]],[23,2,[\"sex\"]],[28,\"action\",[[23,0,[]],\"launchModal\"],null],[28,\"action\",[[23,0,[]],\"readMore\",[23,2,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n\\n        \"],[7,\"div\",true],[10,\"class\",\"divider\"],[8],[0,\"\\n            \"],[7,\"h1\",true],[8],[0,\"Dogs Pending Adoption\"],[9],[0,\"\\n            \"],[7,\"p\",true],[8],[0,\"\\n                Dogs listed below are NOT currently available for adoption.\\n                They have gone home with an adopter for a two week trial.\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"ul\",true],[10,\"class\",\"card-container\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"adoptionPendingDogs\"]]],null,{\"statements\":[[0,\"                \"],[1,[28,\"card\",null,[[\"name\",\"description\",\"defaultImage\",\"attributes\",\"gender\",\"launchModal\",\"readMore\"],[[23,1,[\"name\"]],[23,1,[\"description\"]],[23,1,[\"pet_image\"]],[23,1,[\"pet_attributes\"]],[23,1,[\"sex\"]],[28,\"action\",[[23,0,[]],\"launchModal\"],null],[28,\"action\",[[23,0,[]],\"readMore\",[23,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"showModal\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"image-modal\",null,[[\"showModal\",\"modalTitle\",\"modalImageUrl\"],[[24,[\"showModal\"]],[24,[\"modalTitle\"]],[24,[\"modalImageUrl\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ghgsdr/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('ghgsdr/config/environment', [], function() {
  var prefix = 'ghgsdr';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ghgsdr/app")["default"].create({"name":"ghgsdr","version":"0.0.0+17e01980"});
          }
        
//# sourceMappingURL=ghgsdr.map
