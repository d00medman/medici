import Ember from 'ember';
// import Donate from 'app/adapters/donate.js';

export default Ember.Route.extend({

  auth: Ember.inject.service(),

  // model (){
  //   // breaks
  //   return this.get('store').findRecord('account', 10);
  // },

  actions: {
    donate(params){
      const adapter = this.store.adapterFor('account');
      adapter.donate(params);
      adapter.recieve_donation(params);
    }
  }
});
