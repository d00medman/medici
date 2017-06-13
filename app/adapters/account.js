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
  }
});
