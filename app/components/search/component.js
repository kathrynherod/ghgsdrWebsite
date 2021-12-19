import Component from '@ember/component';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';

export default Component.extend({
    attributeBindings: ['autocomplete'],
    autocomplete: 'off',

    /**
        Override for allowing an empty search field input to be submitted to the
        calling context. (Useful when wanting to _reset_ a search).

        @property allowEmpty
        @type {Boolean}
        @default false
     */
    allowEmpty: false,

    /**
        Applied to the search button for a11y purposes.

        @property buttonLabel
        @type {String}
        @default 'Search'
     */
    buttonLabel: computed('placeholder', function() {
        const { i18n, placeholder } = this.getProperties('i18n', 'placeholder');

        return placeholder || i18n.t('core_ui.LABEL_SEARCH');
    }),

    /**
        Defines action to be called when the form is submitted.
        Supports closure actions or action names defined in the
        component helper declaration.

        @property submitAction
        @type {String}
     */
    submitAction: null,

    /**
        Defines component tag name.

        @property tagName
        @type {String}
        @default 'form'
     */
    tagName: 'form',

    /**
        Stores the textbox value and submitted with `submitAction`. By setting
        this property to `oneWay('immutableValue')` we can introduce one-way
        binding by passing the context's representation of this value to the
        `immutableValue` property of this component.

        @property value
        @type {String}
     */
    value: oneWay('immutableValue'),

    /**
        Called on form submit and determines the action name and
        action method to be invoked (passing `value` along with
        the action call).

        @method submit
     */
    submit(e) {
        const action = this.get('submitAction');
        const value = this.get('value');

        e.preventDefault();

        action(value);
    },
});
