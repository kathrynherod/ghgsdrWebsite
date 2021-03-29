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

    showVideos: computed('model.youTubeURLS', function() {
        const youTubeURLS = this.get('model.youTubeURLS');

        return youTubeURLS && youTubeURLS.length > 0;
    }),

    actions: {
        launchModal(dogName, imageUrl, index) {
            gtag('event', `${dogName}-image-clicked`, {
                'event_category': 'engagement',
                'event_label': imageUrl,
                'value': index,
            });
            this.setProperties({
                showModal: true,
                modalImageUrl: imageUrl,
                modalTitle: dogName,
            });
        },
    },
});
