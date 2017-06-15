import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    searchAccount (params) {

      this.get('store').findAll('account',{reload:true})
      .then((accounts) => {
        if(accounts.findBy('user_name', params.userName)){
          let account = accounts.findBy('user_name', params.userName);
          return account.id;
        } else {
          this.get('flashMessages')
            .danger(`There is no account with the username ${params.userName}`);
        }
      })
      .then((accountId) => {
        if(accountId !=null){
          this.transitionTo('accounts.view-account', accountId);
        }
        // this.transitionTo(`accounts.view-account.${accountId}`);
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
