import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'p',
    classNames: ['card__body__text'],
    classNameBindings: ['iconColor'],

    iconColor: computed('value', function() {
        const value = this.get('value');

        switch (value) {
            case 'Not Sure': {
                return 'warning';
            }
            case 'Yes':
            case 'Available': {
                return 'success';
            }
            case 'No':
            case 'Coming Soon': {
                return 'danger'
            }
        }
    }),
})
