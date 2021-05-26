import Component from '@ember/component';

export default Component.extend({
    actions: {
        toggleGoodWithBigDogs() {
            this.toggleGoodWithBigDogs();
        },

        toggleGoodWithSmallDogs() {
            this.toggleGoodWithSmallDogs();
        },

        toggleGoodWithKids() {
            this.toggleGoodWithKids();
        },

        toggleGoodWithCats() {
            this.toggleGoodWithCats();
        },

        noop() {},
    }
});
