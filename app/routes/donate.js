import Ember from 'ember';
// import Donate from 'app/adapters/donate.js';

export default Ember.Route.extend({

  // model (){
  //   // breaks
  //   return this.get('store').findRecord('account', 10);
  // },

  actions: {
    donate(params){
      const adapter = this.store.adapterFor('account');
      // let patron = this.get('store').findRecord('account', 10);
      // console.log('hits route');
      // console.log(patron);
      adapter.donate();
      // let adapter = app.adapters.donate.create();
      // return Donate.donate();
    }
  }
});
