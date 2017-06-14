import Ember from 'ember';

export default Ember.Component.extend({

  params: {},

  actions: {
    donate() {
      console.log('hits donate button component')
      console.log(this.get('params'))
      // let params.patronId = 1;
      // let params.clientId = 2;
      // this.sendAction('donate', this.get('params'));
    }
  }
});
