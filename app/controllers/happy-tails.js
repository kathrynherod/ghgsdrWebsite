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

    petAttrs: computed('model.pet_attributes', function() {
        const petAttrs = this.get('model.pet_attributes');
        const petAttrsObj = { };

        petAttrs.forEach(attr => {
            const { name, value } = attr.getProperties('name', 'value');

            if (name.includes('chip')) {
                petAttrsObj['microchip'] = value;
            }

            else if (name.includes('Spay')) {
                petAttrsObj['spayNeuter'] = value;
            }

            else if (name.includes('Heartworm')) {
                petAttrsObj['hwStatus'] = value;
            }

            else if (name.includes('Kids')) {
                petAttrsObj['kids'] = value;
            }

            else if (name.includes('Big Dogs')) {
                petAttrsObj['bigDogs'] = value;
            }

            else if (name.includes('Small Dogs')) {
                petAttrsObj['smallDogs'] = value;
            }

            else if (name.includes('Cats')) {
                petAttrsObj['cats'] = value;
            }

            else if (name.includes('House Trained')) {
                petAttrsObj['houseTrained'] = value;
            }

            else {
                petAttrsObj[name] = value;
            }
        })

        return petAttrsObj;
    }),

    actions: {
        downloadImages() {

            window.open(`https://awo.petstablished.com/awo/pets/${this.get('model.id')}/download_images`);
        },
    }
});