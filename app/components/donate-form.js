import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  params: {},

  actions:{
    submit () {
      this.sendAction('submit', this.get('params'));
    },

    reset () {
      this.set('params', {});
    },
  }
});
