import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // urlForRequest: function (account_id){
  //   const api = this.get('host');
  //   const url = `${api}/accounts/${account_id}/donate`;
  //   return url;
  // }

  donate (params, accountId) {
    console.log(params);
    const api = this.get('host');
    const url = `${api}/accounts/${accountId}/donate`;

    // const serialized = this.serialize(params);
    // console.log(serialized);

    // const serialized = this.serialize(record, { includeId: true });
    // const accountId = serialized.account_id;
    // console.log(serialized);
    // console.log(accountId);
    // const url = `${api}/lists/${accountId}/items`;
    // const data = { item: serialized };
    //
    return this.ajax(url, 'PATCH', {data: params});
  }
});
