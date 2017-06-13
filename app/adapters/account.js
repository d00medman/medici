import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  donate (params, accountId) {
    console.log(params);
    const api = this.get('host');
    const url = `${api}/accounts/${accountId}/donate`;
    return this.ajax(url, 'PATCH', {data: params});
  },

  recieve_donation(params, accountId){
    console.log(params);
    const api = this.get('host');
    const url = `${api}/accounts/${accountId}/recieve_donation`;
    return this.ajax(url, 'PATCH', {data: params});
  },

  // queryRecord(modelName, query){
  //   const api = this.get('host');
  //   const url = `${api}/accounts/my-account`
  //   return Ember.$.getJSON(url)
  // }

  // getAccountId(id){
  //   console.log(id);
  //   const api = this.get('host');
  //   const url = `${api}/accounts/my-account/${id}`;
  //   return this.ajax(url, 'GET');
  // }
});
