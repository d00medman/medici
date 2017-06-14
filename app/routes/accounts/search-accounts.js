import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    searchAccount (params) {
      let userName = params.userName;
      console.log(userName);
      this.store.find('account', { user_name: userName })
      .then((account) => {
        console.log(account);
        this.get('flashMessages')
        .success('account retrieved');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
