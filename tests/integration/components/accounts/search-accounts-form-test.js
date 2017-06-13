import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accounts/search-accounts-form', 'Integration | Component | accounts/search accounts form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accounts/search-accounts-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accounts/search-accounts-form}}
      template block text
    {{/accounts/search-accounts-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
