import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    url: DS.attr('string'),
});
