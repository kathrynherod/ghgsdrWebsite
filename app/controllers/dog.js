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
        launchModal(imageUrl, photoIndex) {
            const model = this.get('model');
            const {images, name } = model.getProperties('images', 'name');

            gtag('event', `${name}__image-${photoIndex}-clicked`, {
                'event_category': 'engagement',
                'event_label': imageUrl,
                'value': photoIndex,
            });
            this.setProperties({
                imageList: images,
                photoIndex,
                modalImageUrl: imageUrl,
                modalTitle: name,
                showModal: true,
            });
        },

        changePhoto(direction, currentIndex) {
            const imageList = this.get('model.images');
            const newIndex = direction === 'previous' ? currentIndex - 1 : currentIndex + 1;
            const newImage = imageList.objectAt(newIndex);

            this.setProperties({
                photoIndex: newIndex,
                modalImageUrl: newImage.get('url'),
            });
        },
    },
});
