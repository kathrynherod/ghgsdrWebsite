import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
    store: service(),

    queryParams: {
        name: {
            refreshModel: true,
        },
    },

    model(params) {
        const { name } = params;

        if (name) {
            return this.store.query('dog', { status: 'adopted', name });
        }
    },

    afterModel() {
        $(document).attr('title', `Happy Tails Helper - GHGSDR`);
    },

    setupController(controller, model) {
        controller.set('dogs', model);
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

        refreshModel() {
            this.refresh();
        },
    },
});
