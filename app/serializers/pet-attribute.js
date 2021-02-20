import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    normalize(typeClass, hash) {
        const modifiedHash = hash;
        let icon;

        switch (hash.name) {
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

        modifiedHash.icon = icon;

        return this._super(typeClass, modifiedHash);
    },
});
