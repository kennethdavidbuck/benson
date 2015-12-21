import Ember from 'ember';

const sizes = ['large', 'wide', 'square', 'square', 'square', 'square', 'wide',
	'large', 'wide', 'square', 'square', 'square', 'wide', 'square'];

export default Ember.Controller.extend({
	tiles: Ember.computed.map('model', function (post, index) {
		const {id, title} = post.getProperties('id', 'title');
		return {
			id: id,
			title: title,
			size: sizes[index % sizes.length]
		};
	})
});
