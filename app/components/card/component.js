import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({
    tagName: 'li',
    classNames: ['card__item'],

    bio: computed('description', function() {
        const description = this.get('description');

        return htmlSafe(`${description[0].substring(0, 100)}...`);
    }),

    imageStyle: computed('defaultImage', function() {
        const defaultImage = this.get('defaultImage');

        return htmlSafe(`background-image: url(${defaultImage})`);
    }),

    actions: {
        launchModal(dogName, imageUrl) {
            this.launchModal(dogName, imageUrl);
        },
    },
})
