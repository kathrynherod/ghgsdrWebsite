import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    normalize(typeClass, hash) {
        const modifiedHash = hash;

        modifiedHash.url = hash.image.url;

        return this._super(typeClass, modifiedHash);
    },
});
