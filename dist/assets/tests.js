'use strict';

define("ghgsdr/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/dog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/dog.js should pass ESLint\n\n');
  });
  QUnit.test('adapters/export.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/export.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });
  QUnit.test('components/card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/card/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/image-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/image-modal/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/loader/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/loader/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/navbar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navbar/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/pet-attributes/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pet-attributes/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/pet-attributes/pet-attribute-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pet-attributes/pet-attribute-card/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/pet-attributes/pet-attribute-tr/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pet-attributes/pet-attribute-tr/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/search/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/search/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/table/component.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/dog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dog.js should pass ESLint\n\n25:13 - \'gtag\' is not defined. (no-undef)');
  });
  QUnit.test('controllers/export.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/export.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/happy-tails.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/happy-tails.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass ESLint\n\n39:13 - \'gtag\' is not defined. (no-undef)\n67:13 - \'gtag\' is not defined. (no-undef)');
  });
  QUnit.test('models/dog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dog.js should pass ESLint\n\n');
  });
  QUnit.test('models/export.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/export.js should pass ESLint\n\n');
  });
  QUnit.test('models/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/image.js should pass ESLint\n\n');
  });
  QUnit.test('models/pet-attribute.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pet-attribute.js should pass ESLint\n\n');
  });
  QUnit.test('models/youtube-url.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/youtube-url.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/dog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dog.js should pass ESLint\n\n');
  });
  QUnit.test('routes/export.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/export.js should pass ESLint\n\n');
  });
  QUnit.test('routes/happy-tails.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/happy-tails.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/dog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/dog.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/export.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/export.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/image.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/pet-attribute.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/pet-attribute.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/youtube-url.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/youtube-url.js should pass ESLint\n\n');
  });
});
define("ghgsdr/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ghgsdr/components/card/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/card/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/image-modal/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/image-modal/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/loader/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/loader/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/navbar/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/navbar/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/pet-attributes/pet-attribute-card/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/pet-attributes/pet-attribute-card/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/pet-attributes/pet-attribute-tr/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/pet-attributes/pet-attribute-tr/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/pet-attributes/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/pet-attributes/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/search/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/search/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/components/table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/components/table/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/templates/dog.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/templates/dog.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/templates/export.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/templates/export.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/templates/happy-tails.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/templates/happy-tails.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ghgsdr/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ghgsdr/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("ghgsdr/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/dog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/dog-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/dog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/dog-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/happy-tails-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/happy-tails-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/dog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/dog-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/image-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/pet-attribute-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/pet-attribute-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/youtube-url-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/youtube-url-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/dog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dog-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/happy-tails-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/happy-tails-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/dog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/dog-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/image-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/pet-attribute-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/pet-attribute-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/youtube-url-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/youtube-url-test.js should pass ESLint\n\n');
  });
});
define("ghgsdr/tests/test-helper", ["ghgsdr/app", "ghgsdr/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ghgsdr/tests/unit/adapters/dog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | dog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:dog');
      assert.ok(adapter);
    });
  });
});
define("ghgsdr/tests/unit/controllers/dog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | dog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:dog');
      assert.ok(controller);
    });
  });
});
define("ghgsdr/tests/unit/controllers/happy-tails-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | happy-tails', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:happy-tails');
      assert.ok(controller);
    });
  });
});
define("ghgsdr/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("ghgsdr/tests/unit/models/dog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | dog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('dog', {});
      assert.ok(model);
    });
  });
});
define("ghgsdr/tests/unit/models/image-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('image', {});
      assert.ok(model);
    });
  });
});
define("ghgsdr/tests/unit/models/pet-attribute-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | pet attribute', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('pet-attribute', {});
      assert.ok(model);
    });
  });
});
define("ghgsdr/tests/unit/models/youtube-url-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | youtube url', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('youtube-url', {});
      assert.ok(model);
    });
  });
});
define("ghgsdr/tests/unit/routes/dog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dog');
      assert.ok(route);
    });
  });
});
define("ghgsdr/tests/unit/routes/happy-tails-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | happy-tails', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:happy-tails');
      assert.ok(route);
    });
  });
});
define("ghgsdr/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("ghgsdr/tests/unit/serializers/dog-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | dog', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('dog');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('dog', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ghgsdr/tests/unit/serializers/image-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | image', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('image');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('image', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ghgsdr/tests/unit/serializers/pet-attribute-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | pet attribute', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('pet-attribute');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('pet-attribute', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ghgsdr/tests/unit/serializers/youtube-url-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | youtube url', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('youtube-url');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('youtube-url', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('ghgsdr/config/environment', [], function() {
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

require('ghgsdr/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
