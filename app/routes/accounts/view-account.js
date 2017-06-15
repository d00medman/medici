import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model(params){
    return this.get('store').findRecord('account', params.account_id);
  },

  actions: {
    donate (params) {
      return this.get('store').findAll('account', {reload:true})
        .then((accounts) => {
          return accounts.findBy('editable', true);
        })
        .then((account) => {
          params.patronId = account.id;
          const adapter = this.store.adapterFor('account');
          adapter.donate(params);
          adapter.recieve_donation(params);
        })
        .then(() => this.transitionTo('accounts.search-account'))
        .then(() => {
          this.get('flashMessages')
          .success('We have successfully sent your donation');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('Sorry, we were unable to send your donation');
        });
    },
  }
});
