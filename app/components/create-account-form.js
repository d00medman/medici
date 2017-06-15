import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  isClient: false,

  params : {},

  actions:{
    submit () {
      if(this.get('isClient') === false) {
        this.get('params').creator = false;
        this.get('params').content_type = null;
      }
      this.sendAction('submit', this.get('params'));
    },

    reset () {
      this.set('params', {});
    },

    isClient () {
      this.toggleProperty('isClient');
    }
  }
});
