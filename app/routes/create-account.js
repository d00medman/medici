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
      let account = this.get('store').createRecord('account', params);
      account.save();
    },
  },
});
