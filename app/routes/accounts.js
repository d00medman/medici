import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    console.log(this.get('store').findRecord('account', 13));
    return [{
        id: 13,
        userName : 'BLACKBART',
        creator: false,
        contentType: 'nil',
        coinbaseEmail: 'borzaini@gmail.com'
      }];
    // let targ = this.get('store').findRecord('account', {user_id:12});
    // console.log(targ);
    // return targ;
    //  return this.get('store').findAll('account');
  },

});
