import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    let targ = this.get('store').findRecord('account', 10);
    console.log(targ.user_name);
    // return [{
    //     id: 13,
    //     userName : 'BLACKBART',
    //     creator: false,
    //     contentType: 'nil',
    //     coinbaseEmail: 'borzaini@gmail.com'
    //   }];
    // let targ = this.get('store').findRecord('account', {user_id:12});
    // console.log(targ);
    // return targ;
    return targ
  },

});
