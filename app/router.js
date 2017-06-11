import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('create-account');
  this.route('accounts');
  // this.route('accounts', function(){
  //   this.route('my-account');
  // });
  this.route('donate');
});

export default Router;
