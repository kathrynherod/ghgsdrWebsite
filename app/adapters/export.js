import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
    proxy: 'https://quiet-meadow-73531.herokuapp.com/',

    host: computed(function() {
        const psUrl = 'https://petstablished.com/api/v2/public/pets?public_key=43eb4fe251a66bbdb3042ec3dcddb7c7';

        return `${this.proxy}${psUrl}`;
    }),

    urlForQuery (query) {
        const queryParams = encodeURI(`&pagination[limit]=200`);
        if (!query.page) {
            return `${this.host}${queryParams}`;
        }
    },

    pathForType(){
        return '';
    },
});
