import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),

  auth: Ember.inject.service(),

  actions: {
    model (params) {
      console.log('params.list_id');
      return this.get('store').findRecord('account', params.list_id);
    },

    createAccount (params) {
      // console.log(params);
      let current_user = this.get('auth.credentials.id');
      // console.log('current user ', current_user);
      // let user = this.get('store').peekRecord('user', current_user);
      // console.log(this.get('store').peekRecord('user', current_user));
      let user = this.get('store').peekRecord('user', current_user);
      let account = this.get('store').createRecord('account', params);
      account.set('user', user);
      // let account = this.get('store').createRecord('account', params);
      // console.log('account ', account);
      account.save()
      .then(() => this.transitionTo('accounts'))
      .then(() => {
        this.get('flashMessages')
        .success('account created');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
