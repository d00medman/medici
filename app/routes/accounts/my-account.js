import Ember from 'ember';

export default Ember.Route.extend({

  auth: Ember.inject.service(),

  model () {
    let currentUser = this.get('auth.credentials.id');
    return this.store.query('account', { filter: { user:  currentUser } })
    .then((accounts) => {
        return accounts;
      })
    .catch((error) => {
      console.log(error);
    });
  },

  actions: {
    updateAccount(params) {
      console.log('in route: ', params)
    },
  }
});
