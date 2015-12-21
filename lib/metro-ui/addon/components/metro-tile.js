import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['small:tile', 'wide:tile-wide', 'large:tile-large', 'transparent:ol-transparent'],
	type: 'small',
	wide: Ember.computed.equal('type', 'wide'),
	large: Ember.computed.equal('type', 'large'),
	small: Ember.computed('tileWide', 'tileLarge', function () {
		const {type, wide, large} = this.getProperties('type', 'wide', 'large');
		return type === 'small' || (!wide && !large);
	}),
	transparent: true
});
