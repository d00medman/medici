import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accounts/update-account', 'Integration | Component | accounts/update account', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accounts/update-account}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accounts/update-account}}
      template block text
    {{/accounts/update-account}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
