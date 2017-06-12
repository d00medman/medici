import Ember from 'ember';

export default Ember.Route.extend({

  // model () {
  //   return {
  //     user_name:"hello"
  //   };
  // },
  auth: Ember.inject.service(),

  model (params) {
    let current_user = this.get('auth.credentials.id');
    console.log('current user ', current_user);

    // This needs to be tremendously simplified and hardcoded
    // console.log('hits')
    // console.log(params);
    // let targ = this.get('store').findRecord('account');
    // console.log(targ.user_name);
    // return targ;
    return this.get('store').findRecord('account', 27);
  },

  // actions: {
  //   donate(params){
  //     let adapter = app.adapters.donate.create();
  //     return adapter.donate();
  //   }
  // }

});
