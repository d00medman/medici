import Ember from 'ember';

export default Ember.Component.extend({

  params: {},

  actions: {
    donate() {
      this.sendAction('donate', this.get('params'));
    }
  }
});
