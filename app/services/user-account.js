import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  auth: Ember.inject.service(),
  currentUser: this.get('auth.credentials.id'),

  myAccount(){
    // return
  }
});
