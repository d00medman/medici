import Ember from 'ember';

export default Ember.Route.extend({

  // model () {
  //   return {
  //     user_name:"hello"
  //   };
  // },

  model (params) {
    // This needs to be tremendously simplified and hardcoded
    // console.log('hits')
    // console.log(params.account_id);
    // let targ = this.get('store').findRecord('account', params.account_id);
    // console.log(targ.user_name);
    // return targ;
    return this.get('store').findRecord('account', 10);
  },

  // actions: {
  //   donate(params){
  //     let adapter = app.adapters.donate.create();
  //     return adapter.donate();
  //   }
  // }

});
