import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    filteredDogs: computed('goodWithBigDogs', 'goodWithSmallDogs', 'goodWithKids', 'goodWithCats', function() {
        const {
            adoptableDogs, goodWithBigDogs, goodWithSmallDogs, goodWithKids, goodWithCats,
        } = this.getProperties(
            'adoptableDogs', 'goodWithBigDogs', 'goodWithSmallDogs', 'goodWithKids', 'goodWithCats',
        );

        if (!goodWithBigDogs && !goodWithSmallDogs && !goodWithKids && !goodWithCats) {
            return adoptableDogs;
        }

        let filteredDogs = adoptableDogs;

        if (goodWithBigDogs) {
            filteredDogs = filteredDogs.filter((dog) => dog.get('goodWithBigDogs') !== 'No');
        }

        if (goodWithSmallDogs) {
            filteredDogs = filteredDogs.filter((dog) => dog.get('goodWithSmallDogs') !== 'No');
        }

        if (goodWithKids) {
            filteredDogs = filteredDogs.filter((dog) => dog.get('goodWithKids') !== 'No');
        }

        if (goodWithCats) {
            filteredDogs = filteredDogs.filter((dog) => dog.get('goodWithCats') !== 'No');
        }

        return filteredDogs;
    }),

    actions: {
        launchModal(dogName, imageUrl) {
            gtag('event', 'image-clicked-from-index', {
                'event_category': 'engagement',
                'event_label': dogName,
            });
            this.setProperties({
                showModal: true,
                modalImageUrl: imageUrl,
                modalTitle: dogName,
            });
        },

        toggleGoodWithBigDogs() {
            this.toggleProperty('goodWithBigDogs');
        },

        toggleGoodWithSmallDogs() {
            this.toggleProperty('goodWithSmallDogs');
        },

        toggleGoodWithKids() {
            this.toggleProperty('goodWithKids');
        },

        toggleGoodWithCats() {
            this.toggleProperty('goodWithCats');
        },

        readMore(dog) {
            gtag('event', 'read-more-clicked', {
                'event_category': 'engagement',
                'event_label': dog.get('name'),
            });

            this.transitionToRoute('dog', dog.id);
        },
    },
});
