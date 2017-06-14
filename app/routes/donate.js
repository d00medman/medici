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

      // let patronId = 28; // currently hardcoded until I can figure out how to pass params to the routes
      // let clientId = 29; // currently hardcoded until I can figure out how to pass params to the routes
      adapter.donate(params);
      adapter.recieve_donation(params);
    }
  }
});
