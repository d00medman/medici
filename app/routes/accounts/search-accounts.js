import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    searchAccount (params) {

      this.get('store').findAll('account',{reload:true}).then((accounts) =>{
        if(accounts.findBy('user_name', params.userName)){
          let account = accounts.findBy('user_name', params.userName);
          return account.id;
        } else {
          this.get('flashMessages')
            .danger(`There is no account with the username ${params.userName}`);
        }
      });
      // this.store.query('account', { filter: { user_name: params.userName } })
      //   .then(accounts =>{
      //     let targ = accounts.get('firstObject').get('user_name') === params.userName;
      //     console.log(targ);
      // });

      // this.get('store').peekAll('account')
      // .then((accounts) => {
      //   return accounts.filterBy('user_name', params.userName);
      // })
      // .then((account) => {
      //   console.log(account);
      //   this.get('flashMessages')
      //   .success('account retrieved');
      // })
      // .catch(() => {
      //   this.get('flashMessages')
      //   .danger('There was a problem. Please try again.');
      // });
    }
  }
});
