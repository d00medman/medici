import Ember from 'ember';

export default Ember.Route.extend({

    auth: Ember.inject.service(),

  model (params) {
    // console.log(params);
    let currentUser = this.get('auth.credentials.id');
    // let user = this.store.peekRecord('user', currentUser);
    // user.get('account').then((account) => {
    //   console.log(account);
    // });
    // console.log('current user ', currentUser);
    // const adapter = this.store.adapterFor('account');
    // let targ = adapter.getAccountId(currentUser);
    // targ.then((accountId) => {
    //   return this.get('store').findRecord('account', accountId);
    // });
    // return adapter.getAccountId(currentUser);
    // let targ = (this.store.queryRecord('account', { filter: { user: { id:currentUser } } }));
    // let targ = (this.store.queryRecord('account', { filter: { user_id: currentUser} }));
    // console.log('targ: ', targ);
    // targ = targ.id;
    // This needs to be tremendously simplified and hardcoded
    // console.log(targ);
    // console.log(params);
    // let user = this.store.peekRecord('user', currentUser);
    // return this.store.queryRecord('account', { filter: { user: user} });
    // console.log(targ.user_name);
    // return targ;
    // return this.get('store').findRecord('account', targ);
    // let accountID = this.store.query('account', { filter: { user: { id:currentUser} } });
    // console.log(accountID.id);
    // return this.get('store').findRecord('account', accountID);
    return this.store.query('account', { filter: { user:  currentUser } })
    .then((accounts) => {
        return accounts;
      })
    .catch((error) => {
      console.log(error);
    });
  },
});
