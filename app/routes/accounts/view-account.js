import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return this.get('store').findRecord('account', params.account_id);
  },

  actions: {
    donate (params) {
      console.log('hits view account route ', params);
      return this.get('store').findAll('account', {reload:true})
        .then((accounts) => {
          return accounts.findBy('editable', true);
        })
        .then((account) => {
          params.patronId = account.id;
          const adapter = this.store.adapterFor('account');
          // return adapter.donate(params);
          adapter.recieve_donation(params);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
});
