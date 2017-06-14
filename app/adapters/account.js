import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  donate (params) {
    const api = this.get('host');
    const url = `${api}/accounts/${params.patronId}/donate`;
    return this.ajax(url, 'PATCH', {data: params});
  },

  recieve_donation(params){
    const api = this.get('host');
    const url = `${api}/accounts/${params.clientId}/recieve_donation`;
    return this.ajax(url, 'PATCH', {data: params});
  },

});
