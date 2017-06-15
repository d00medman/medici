import Ember from 'ember';

export default Ember.Route.extend({

  auth: Ember.inject.service(),

  actions: {
    donate(params){
      const adapter = this.store.adapterFor('account');
      adapter.donate(params);
      adapter.recieve_donation(params);
    }
  }
});
