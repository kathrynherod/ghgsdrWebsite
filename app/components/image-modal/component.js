import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    canNavigate:computed('imageList', 'index', function() {
        const imageList = this.get('imageList');

        return imageList && imageList.length
    }),

    showLeftArrow: computed('canNavigate', 'imageList', 'index', function() {
        const { canNavigate, index } = this.getProperties('canNavigate', 'index');

        return canNavigate && index > 0;
    }),

    showRightArrow: computed('canNavigate', 'imageList', 'index', function() {
        const { canNavigate, imageList, index } = this.getProperties('canNavigate', 'imageList', 'index');

        return canNavigate && index < imageList.length - 1;
    }),

    init() {
        this._super(...arguments);

        this.set('changePhotoOnKeyPress', this.get('changePhotoOnKeyPress').bind(this));
    },

    changePhotoOnKeyPress(e) {
        const { showLeftArrow, showRightArrow } = this.getProperties('showLeftArrow', 'showRightArrow');
        const next = e.key === 'ArrowRight';
        const previous = e.key === 'ArrowLeft';

        if (next && showRightArrow) {
            this.send('changePhoto', 'next');
        }

        if (previous && showLeftArrow) {
            this.send('changePhoto', 'previous');
        }
    },

    willInsertElement() {
        this._super(...arguments);

        window.addEventListener('keydown', this.get('changePhotoOnKeyPress'), false);
    },

    willDestroyElement() {
        this._super(...arguments);

        window.removeEventListener('keydown', this.get('changePhotoOnKeyPress'), false);
    },

    actions: {
        changePhoto(direction) {
            this.changePhoto(direction, this.get('index'))
        },
    },
});
