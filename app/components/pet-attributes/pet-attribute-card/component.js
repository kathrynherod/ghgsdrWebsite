import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['attribute'],
    classNameBindings: ['iconColor'],

    iconColor: computed('value', function() {
        const value = this.get('value');

        switch (value) {
            case 'Older Kids':
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
