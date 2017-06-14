import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    donate(params){
      console.log('hits donate view account component ', params);
      this.sendAction('donate', params);
    },
  }
});
