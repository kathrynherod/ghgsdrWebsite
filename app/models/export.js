import DS from 'ember-data';
import DogModel from './dog';

export default DogModel.extend({
    meta: DS.attr(),
});
