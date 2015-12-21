import Ember from 'ember';

const sizes = ['large', 'wide', 'square', 'square', 'square', 'square', 'wide',
	'large', 'wide', 'square', 'square', 'square', 'wide', 'square'];

export default Ember.Controller.extend({
	postTiles: Ember.computed.map('model', function (post, index) {
		return {
			size: sizes[index % sizes.length],
			post: post
		};
	})
});
