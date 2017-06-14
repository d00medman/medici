import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accounts/delete-account-button', 'Integration | Component | accounts/delete account button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accounts/delete-account-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accounts/delete-account-button}}
      template block text
    {{/accounts/delete-account-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
