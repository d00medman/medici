import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    donate(params){
      // console.log('hits');
      // console.log(params);
      let patron = this.get('store').findRecord('account', 10);
      console.log(patron);
      // here is where I need to link to my adapter
      // patron.donate(params);
    }
  }
});
