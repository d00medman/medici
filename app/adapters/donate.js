import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // Not super confident about this adapter, not am I super confident about how I
  // am passing data through it.
  donate: function(store, type, record) {
    console.log('hits')
    // let api = this.get('host');
    // let serialized = this.serialize(record, {includeId: true});
    // let accountId = serialized.account_id;
    // let url = `${api}/accounts/${accountId}/donate`;
    // let data = {account: serialized};
    // return this.ajax(url, 'PATCH', {data});
  }
});
