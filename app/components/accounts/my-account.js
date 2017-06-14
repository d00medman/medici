import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit(params){
      this.sendAction('submit', params);
    },
  }
});
