import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
    store: service(),

    model() {
        return this.store.query('export', {})
    },

    afterModel() {
        $(document).attr('title', `Dog Stats - GHGSDR`);
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
