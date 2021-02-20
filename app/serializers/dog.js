import DS from 'ember-data';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default DS.JSONSerializer.extend(EmbeddedRecordsMixin, {
    attrs: {
        images: { embedded: 'always' },
        pet_attributes: { embedded: 'always' },
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const dogs = payload.collection;

        return this._super(store, primaryModelClass, dogs, id, requestType)
    },
});
