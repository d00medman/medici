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
    const url = `${api}/auth/coinbase`;
    // , {data: params}
    return this.ajax(url, 'GET');
  },

});
