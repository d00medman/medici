import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchAccount (params) {
      console.log(params);
    }
  }
});
