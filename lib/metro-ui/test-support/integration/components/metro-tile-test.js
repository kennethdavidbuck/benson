import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('metro-tile', 'Integration | Component | metro-tile', {
	integration: true
});

test('it renders', function (assert) {

	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

	this.render(hbs`{{metro-tile}}`);

	assert.equal(this.$().text().trim(), '');

	// Template block usage:" + EOL +
	this.render(hbs`
    {{#metro-tile}}
      template block text
    {{/metro-tile}}
  `);

	assert.equal(this.$().text().trim(), 'template block text');
});

test('no size declaration creates square', function (assert) {
	assert.expect(1);

	this.render(hbs`{{metro-tile}}`);

	assert.ok(this.$().children().first().hasClass('tile'), 'should be standard square tile');
});

test('can declare small tile', function (assert) {
	assert.expect(1);

	this.render(hbs`{{metro-tile size="small"}}`);

	assert.ok(this.$().children().first().hasClass('tile-small'), 'should be a small tile');
});

test('can declare wide tile', function (assert) {
	assert.expect(1);

	this.render(hbs`{{metro-tile size="wide"}}`);

	assert.ok(this.$().children().first().hasClass('tile-wide'), 'should be a wide tile');
});

test('can declare large tile', function (assert) {
	assert.expect(1);

	this.render(hbs`{{metro-tile size="large"}}`);

	assert.ok(this.$().children().first().hasClass('tile-large'), 'should be a large tile');
});

test('is transparent by default', function (assert) {
	assert.expect(1);

	this.render(hbs`{{metro-tile}}`);

	assert.ok(this.$().children().first().hasClass('ol-transparent'), 'should be transparent');
});
