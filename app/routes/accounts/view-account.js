import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return this.get('store').findRecord('account', params.account_id);
  },

  actions: {
    donate (params) {
      console.log('hits view account route ', params);
    },
  }
});
