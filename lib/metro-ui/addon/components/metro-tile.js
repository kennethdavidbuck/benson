import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
	classNameBindings: ['small:tile-small', 'square:tile', 'wide:tile-wide',
		'large:tile-large', 'transparent:ol-transparent'],
	size: 'square',
	small: computed.equal('size', 'small'),
	square: computed.equal('size', 'square'),
	wide: computed.equal('size', 'wide'),
	large: computed.equal('size', 'large'),
	transparent: true
});
