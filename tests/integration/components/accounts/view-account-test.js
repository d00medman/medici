import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accounts/view-account', 'Integration | Component | accounts/view account', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accounts/view-account}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accounts/view-account}}
      template block text
    {{/accounts/view-account}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
