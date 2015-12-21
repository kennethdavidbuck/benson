import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
	classNameBindings: ['small:tile-small', 'square:tile', 'wide:tile-wide',
		'large:tile-large', 'transparent:ol-transparent'],
	type: 'square',
	small: computed.equal('type', 'small'),
	square: computed.equal('type', 'square'),
	wide: computed.equal('type', 'wide'),
	large: computed.equal('type', 'large'),
	transparent: true
});
