import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),

  auth: Ember.inject.service(),

  actions: {
    model (params) {
      return this.get('store').findRecord('account', params.list_id);
    },

    createAccount (params) {
      let current_user = this.get('auth.credentials.id');
      let user = this.get('store').peekRecord('user', current_user);
      let account = this.get('store').createRecord('account', params);
      account.set('user', user);
      account.save()
      .then(() => this.transitionTo('accounts.my-account'))
      .then(() => {
        this.get('flashMessages')
        .success('account created');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('We were unable to create your account. Please fill in the proper forms and try again');
      });
    },
  },
});
