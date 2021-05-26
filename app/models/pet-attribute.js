import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    icon: DS.attr('string'),
    index: DS.attr('number'),
    name: DS.attr('string'),
    value: DS.attr('string'),
});
