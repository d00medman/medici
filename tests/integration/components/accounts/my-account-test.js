import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accounts/my-account', 'Integration | Component | accounts/my account', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accounts/my-account}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accounts/my-account}}
      template block text
    {{/accounts/my-account}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
