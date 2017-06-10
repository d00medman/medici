import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  params : {},

  actions:{
    submit () {
      console.log(this);
    },
  }
});
