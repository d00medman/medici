import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    console.log('hits');
    return this.get('store').findRecord('account', params.account_id);
  }
});