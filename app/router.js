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


  // this.route('accounts');
  this.route('accounts', function(){
    this.route('my-account');
    // this.route('my-account', { path: '/my-account/:account_id' });
    this.route('view-account', {path:'/view-account/:account_id'});
    this.route('search-accounts');
    this.route('donate');
  });
  // this.route('accounts', function(){
  //   this.route('/:account_id', {path:'/my-account'});
  //   this.route('my-account', {path:'/:account_id'});
  // });
  this.route('donate');
});

export default Router;
