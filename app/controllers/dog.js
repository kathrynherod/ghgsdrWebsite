import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
    htmlSafeBios: computed('model.description', function() {
        const description = this.get('model.description');
        const safeBios = []

        description.forEach(desc => {
            safeBios.push(htmlSafe(desc));
        });

        return safeBios;
    }),

    actions: {
        launchModal(dogName, imageUrl) {
            this.setProperties({
                showModal: true,
                modalImageUrl: imageUrl,
                modalTitle: dogName,
            });
        },
    },
});
