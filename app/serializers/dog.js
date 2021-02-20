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

        modifiedHash.description = hash.description.replaceAll(/<[^>]*>/g, '').replaceAll(/(&nbsp;)/g, ' ');
        modifiedHash.pet_attributes = modifiedHash.pet_attributes.map((attr) => {
            const modifiedAttr = attr;
            let icon;

            switch (attr.name) {
                case 'Good with Big Dogs': {
                    icon = 'dog'

                    break;
                }
                case 'Good with Small Dogs': {
                    icon = 'dog'

                    break;
                }
                case 'Good with Cats': {
                    icon = 'cat'

                    break;
                }
                case 'Good with Kids': {
                    icon = 'child'

                    break;
                }
                case 'Adoption Status': {
                    icon = 'check'

                    break;
                }
            }

            modifiedAttr.icon = icon;
            modifiedAttr.id = `${attr.id}-${hash.id}`;

            return modifiedAttr;
        });

        return this._super(typeClass, modifiedHash)
    },
});
