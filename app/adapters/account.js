import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  donate (params) {
    const api = this.get('host');
    const url = `${api}/accounts/${params.patronId}/donate`;
    return this.ajax(url, 'PATCH', {data: params});
  },

  recieve_donation(params){
    console.log(params);
    const api = this.get('host');
    const url = `${api}/accounts/${params.clientId}/recieve_donation`;
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
