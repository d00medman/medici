import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accounts/donate-form', 'Integration | Component | accounts/donate form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{accounts/donate-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#accounts/donate-form}}
      template block text
    {{/accounts/donate-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
