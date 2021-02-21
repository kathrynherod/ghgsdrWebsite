import Controller from '@ember/controller';

export default Controller.extend({

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
