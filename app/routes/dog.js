import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
    store: service(),

    model(params) {
        const existingRecord = this.store.peekRecord('dog', params.id);

        return existingRecord ? existingRecord : this.store.query('dog', { status: 'fostered'})
            .then((dogs) => dogs.findBy('id', params.id));
    },

    setupController(controller, model) {
        controller.set('model', model);
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
