import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
    store: service(),

    model() {
        return this.store.query('dog', { status: 'fostered'});
    },

    setupController(controller, model) {
        controller.setProperties({
            adoptableDogs: model.toArray().filterBy('adoptionStatus', 'Available').sortBy('date_aquired'),
            comingSoonDogs: model.toArray().filterBy('adoptionStatus', 'Coming Soon').sortBy('date_aquired'),
        });
    },

    actions: {
        loading(transition) {
            const controller = this.controllerFor('index');

            controller.set('loading', true);

            transition.finally(() => {
                controller.set('loading', false);
            });
        },
    },
});
