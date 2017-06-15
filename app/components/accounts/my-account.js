import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions:{
    submit(params){
      this.sendAction('submit', params);
    },

    delete(){
      this.sendAction('delete');
    }
  }
});
