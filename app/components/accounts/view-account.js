import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    donate(params){
      this.sendAction('donate', params);
    },
  }
});
