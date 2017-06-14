import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  params: {},

  actions:{
    donate(accountId){
      this.get('params').clientId = accountId;
      console.log('hits donate form component ', this.get('params'));
      this.sendAction('donate', this.get('params'));
    },

    reset () {
      this.set('params', {});
    },
  }
});
