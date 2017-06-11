import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let targ = this.get('store').findAll('user');
    console.log(targ);
    return targ;
  },
});
