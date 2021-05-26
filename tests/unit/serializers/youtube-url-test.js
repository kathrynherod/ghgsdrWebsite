import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | youtube url', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('youtube-url');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('youtube-url', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
