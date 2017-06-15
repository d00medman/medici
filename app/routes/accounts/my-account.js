import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

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
      return this.get('store').findAll('account', {reload:true})
        .then((accounts) => {
          return accounts.findBy('editable', true);
        })
        .then((account) => {
          account.deleteRecord();
          account.get('isDeleted');
          return account.save()
          .then(() => this.transitionTo('create-account'))
          .then(() => {
            this.get('flashMessages')
            .success('You have deleted your account. Please make a new one if you wish to continue using Medici.');
          })
          .catch(() => {
            this.get('flashMessages')
            .danger('There was a problem. Please try again.');
          });
        });
    }
  }
});
