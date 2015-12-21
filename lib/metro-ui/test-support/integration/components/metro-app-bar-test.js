import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('metro-app-bar', 'Integration | Component | metro app bar', {
	integration: true
});

test('it renders', function (assert) {

	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

	this.render(hbs`{{metro-app-bar}}`);

	assert.equal(this.$().text().trim(), '');

	// Template block usage:" + EOL +
	this.render(hbs`
    {{#metro-app-bar}}
      template block text
    {{/metro-app-bar}}
  `);

	assert.equal(this.$().text().trim(), 'template block text');
});
