import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['small:tile', 'wide:tile-wide', 'large:tile-large', 'transparent:ol-transparent'],
	type: 'small',
	wide: Ember.computed.equal('type', 'wide').readOnly(),
	large: Ember.computed.equal('type', 'large').readOnly(),
	small: Ember.computed('type', 'wide', 'large', function () {
		const {type, wide, large} = this.getProperties('type', 'wide', 'large');
		return type === 'small' || (!wide && !large);
	}).readOnly(),
	transparent: true
});
