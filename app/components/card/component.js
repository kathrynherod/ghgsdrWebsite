import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['card'],

    bio: computed('description', function() {
        const description = this.get('description');

        return `${description.substring(0, 100)}...`
    }),
})
