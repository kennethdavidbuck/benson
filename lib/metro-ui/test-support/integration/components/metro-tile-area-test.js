import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('metro-tile-area', 'Integration | Component | metro tile area', {
	integration: true
});

test('it renders', function (assert) {

	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

	this.render(hbs`{{metro-tile-area}}`);

	assert.equal(this.$().text().trim(), '');

	// Template block usage:" + EOL +
	this.render(hbs`
    {{#metro-tile-area}}
      template block text
    {{/metro-tile-area}}
  `);

	assert.equal(this.$().text().trim(), 'template block text');
});
