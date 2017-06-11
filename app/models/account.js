import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr('string'),
  content_type: DS.attr('string'),
  creator: DS.attr('boolean'),
  coinbase_email: DS.attr('string'),
  user: DS.belongsTo('user')
});
