import Ember from 'ember';

export default Ember.Route.extend({

  auth: Ember.inject.service(),

  model () {
    return this.get('store').findAll('account', {reload:true})
      .then((accounts) => {
        return accounts.findBy('editable', true);
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
  },

  actions: {
    updateAccount(params) {
      return this.get('store').findAll('account', {reload:true})
        .then((accounts) => {
          return accounts.findBy('editable', true);
        })
        .then((account) => {
          account.set('user_name', params.userName);
          return account.save()
          .then(() => {
            this.get('flashMessages')
            .success(`Username updated to ${params.userName}`);
          });
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.');
        });
    },

    deleteAccount() {

    }
  }


});
