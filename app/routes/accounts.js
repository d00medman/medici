import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    // This needs to be tremendously simplified and hardcoded
    let targ = this.get('store').findRecord('account', 10);
    console.log(targ.user_name);
    return targ;
  },

});
