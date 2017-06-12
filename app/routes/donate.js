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
      // const adapter = this.store.adapterFor('account');
      // Hitting the same problem: ability to build relationally in the local DS broken
      let currentUser = this.get('auth.credentials.id');
      let targ = this.get('store').findRecord('user', currentUser);
      console.log(targ);
      let patron = this.get('store').findRecord('account');
      // console.log('hits route');
      // console.log(patron);
      // adapter.donate(params, accountId);
      // let adapter = app.adapters.donate.create();
      // return Donate.donate();
    }
  }
});
