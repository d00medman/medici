import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr('string'),
  content_type: DS.attr('string'),
  creator: DS.attr('boolean'),
  user: DS.belongsTo('user'),
  editable: DS.attr('boolean')
});
