import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr('string'),
  content_type: DS.attr('string'),
  creator: DS.attr('boolean'),
  // Not sure if I'll need these back in. As it stands, I can create w/o them, and need
  // to build too much to really test
  // coinbase_email: DS.attr('string'),
  user: DS.belongsTo('user')
});
