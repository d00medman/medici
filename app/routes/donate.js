import Ember from 'ember';
// import Donate from 'app/adapters/donate.js';

export default Ember.Route.extend({

  // model (){
  //   // breaks
  //   return this.get('store').findRecord('account', 10);
  // },

  actions: {
    donate(params){
      let patron = this.get('store').findRecord('account', 10);
      console.log('hits route');
      console.log(patron);
      // let adapter = app.adapters.donate.create();
      // return Donate.donate();
    }
  }
});
