import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('metro-tile', 'Integration | Component | metro-tile', {
	integration: true
});

test('it renders', function (assert) {

	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

	this.render(hbs`{{metro/metro-tile}}`);

	assert.equal(this.$().text().trim(), '');

	// Template block usage:" + EOL +
	this.render(hbs`
    {{#metro-tile}}
      template block text
    {{/metro-tile}}
  `);

	assert.equal(this.$().text().trim(), 'template block text');
});
