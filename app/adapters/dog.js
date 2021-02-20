import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://quiet-meadow-73531.herokuapp.com/https://petstablished.com/api/v2/public/pets?public_key=43eb4fe251a66bbdb3042ec3dcddb7c7&search%5bstatus%5d=Fostered',

    pathForType(){
        return '';
    },
});
