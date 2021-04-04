import DS from 'ember-data';
import DogModel from './dog';

export default DogModel.extend({
    meta: DS.attr(),
    hw_status: DS.attr('string'),
    current_location: DS.attr('string'),
    app_foster_date: DS.attr('date'),
    hw_treatment_date: DS.attr('date'),
    days_in_rescue: DS.attr('number'),
    app_adoption_date: DS.attr('date')
});
