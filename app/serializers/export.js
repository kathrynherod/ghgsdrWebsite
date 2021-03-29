import DS from 'ember-data';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default DS.JSONSerializer.extend(EmbeddedRecordsMixin, {
    attrs: {
        images: { embedded: 'always' },
        pet_attributes: { embedded: 'always' },
    },

    modelNameFromPayloadKey() {

        return `export`;
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        // const newPayload = {
        //     data: payload.collection,
        //     meta: payload.pagination,
        // };
        // debugger
        const newPayload = payload.collection;
        newPayload[0].meta = payload.pagination;

        return this._super(store, primaryModelClass, newPayload, id, requestType)
    },
});
