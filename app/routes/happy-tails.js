import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
    store: service(),

    model(params) {
        return this.store.query('dog', { status: 'adopted', name: params.id });
    },

    afterModel(model) {
        $(document).attr('title', `${model.get('firstObject.name')} - GHGSDR`);
    },

    setupController(controller, model) {
        controller.set('model', model.get('firstObject'));
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
