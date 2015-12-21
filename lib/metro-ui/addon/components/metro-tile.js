import Ember from 'ember';

const {computed} = Ember;

const validSizes = {
	small: true,
	square: true,
	wide: true,
	large: true
};

export default Ember.Component.extend({
	classNameBindings: ['small:tile-small', 'square:tile', 'wide:tile-wide',
		'large:tile-large', 'transparent:ol-transparent'],
	_size: computed('size', 'index', 'sizes.length', function () {
		const size = this.get('size');
		return validSizes[size] ? size : 'square';
	}),
	size: 'square',
	small: computed.equal('_size', 'small'),
	square: computed.equal('_size', 'square'),
	wide: computed.equal('_size', 'wide'),
	large: computed.equal('_size', 'large'),
	transparent: true
});
