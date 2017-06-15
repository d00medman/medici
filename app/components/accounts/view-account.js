import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions:{
    donate(params){
      console.log('hits donate view account component ', params);
      this.sendAction('donate', params);
    },
  }
});
