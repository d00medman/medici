import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // urlForRequest: function (account_id){
  //   const api = this.get('host');
  //   const url = `${api}/accounts/${account_id}/donate`;
  //   return url;
  // }

  donate () {
    console.log('hola');
    // const api = this.get('host');
    // const serialized = this.serialize(record, { includeId: true });
    // const accountId = serialized.account_id;
    // const url = `${api}/lists/${accountId}/items`;
    // const data = { item: serialized };
    //
    // return this.ajax(url, 'POST', { data });
  }
});
