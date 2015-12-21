import Ember from 'ember';

const {computed, getProperties} = Ember;

const sizes = ['large', 'wide', 'square', 'square', 'square', 'square', 'wide',
	'large', 'wide', 'square', 'square', 'square', 'wide', 'square'];

export default Ember.Controller.extend({
	tiles: computed.map('model', function (post, index) {
		const tile = getProperties(post, 'id', 'title');
		tile.size = sizes[index % sizes.length];
		return tile;
	})
});
