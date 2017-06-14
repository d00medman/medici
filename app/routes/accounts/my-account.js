import Ember from 'ember';

export default Ember.Route.extend({

  auth: Ember.inject.service(),

  model () {
    return this.get('store').findAll('account', {reload:true})
      .then((accounts) => {
        let account = accounts.findBy('editable', true);
        return account;
      })
      .catch((error) => {
        console.log(error);
      });
    // return this.store.query('account', { filter: { user:  currentUser } })
    // .then((accounts) => {
    //     return accounts;
    //   })
    // .catch((error) => {
    //   console.log(error);
    // });
  },

  actions: {
    updateAccount(params) {
      console.log('in route: ', params);
    },
  }
});
