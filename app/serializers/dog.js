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

    normalize(typeClass, hash) {
        const modifiedHash = hash;

        modifiedHash.pet_attributes = modifiedHash.pet_attributes.map((attr) => {
            const modifiedAttr = attr;
            let icon;
            let index;

            switch (attr.name) {
                case 'Good with Big Dogs': {
                    modifiedHash.goodWithBigDogs = attr.value;
                    icon = 'dog'
                    index = 0;
                    break;
                }
                case 'Good with Small Dogs': {
                    modifiedHash.goodWithSmallDogs = attr.value;
                    icon = 'dog'
                    index = 1;
                    break;
                }
                case 'Good with Cats': {
                    modifiedHash.goodWithCats = attr.value;
                    icon = 'cat'
                    index = 3;
                    break;
                }
                case 'Good with Kids': {
                    modifiedHash.goodWithKids = attr.value;
                    icon = 'child'
                    index = 2;
                    break;
                }
                case 'Adoption Status': {
                    modifiedHash.adoptionStatus = attr.value;
                    icon = 'check'
                    index = 4;

                    break;
                }
            }

            modifiedAttr.icon = icon;
            modifiedAttr.id = `${attr.id}-${hash.id}`;
            modifiedAttr.index = index;

            return modifiedAttr;
        }).sortBy('index');

        return this._super(typeClass, modifiedHash)
    },
});
