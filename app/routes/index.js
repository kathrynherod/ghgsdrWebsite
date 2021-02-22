import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
    store: service(),

    model() {
        return this.store.query('dog', { status: 'fostered'});
    },

    setupController(controller, model) {
        const adoptableDogs = [];
        const comingSoonDogs = [];
        const adoptionPendingDogs = [];

        model.toArray().forEach((dog) => {
            const { status, adoptionStatus } = dog.getProperties('status', 'adoptionStatus');

            if (status === 'Pending Adoption' || status === 'Fostered - Pending Adoption') {
                adoptionPendingDogs.push(dog);
            } else if (status === 'Fostered' && adoptionStatus === 'Available') {
                adoptableDogs.push(dog);
            } else {
                comingSoonDogs.push(dog);
            }
        });

        controller.setProperties({
            adoptableDogs: adoptableDogs.sortBy('date_aquired'),
            comingSoonDogs: comingSoonDogs.sortBy('date_aquired'),
            adoptionPendingDogs,
        });
    },

    actions: {
        loading(transition) {
            const controller = this.controllerFor('index');

            controller.set('loading', true);

            transition.finally(() => {
                $("#initialPageLoading").remove();
                controller.set('loading', false);
            });
        },
    },
});
