import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),

  actions: {
    model (params) {
      return this.get('store').findRecord('account', params.list_id);
    },

    createAccount (params) {
      console.log(params);
      let account = this.get('store').createRecord('account', params);
      console.log(account);
      account.save();

    // this.create(params)
    //   .then(() => this.transitionTo('application'))
    //   .then(() => {
    //     this.get('flashMessages')
    //     .success('Successfully signed-up! You have also been signed-in.');
    //   })
    //   .catch(() => {
    //     this.get('flashMessages')
    //     .danger('There was a problem. Please try again.');
    //   });
    },
  },
});
