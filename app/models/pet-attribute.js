import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    icon: DS.attr('string'),
    name: DS.attr('string'),
    value: DS.attr('string'),
});
