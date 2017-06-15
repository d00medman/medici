import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  params: {},

  actions:{
    donate(accountId){
      this.get('params').clientId = accountId;
      this.sendAction('donate', this.get('params'));
    },

    reset () {
      this.set('params', {});
    },
  }
});
