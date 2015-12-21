import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['small:tile-small', 'regular:tile', 'wide:tile-wide', 'large:tile-large', 'transparent:ol-transparent'],
	type: 'regular',
	regular: Ember.computed('type', 'small', 'wide', 'large', function () {
		const {type, small, wide, large} = this.getProperties('type', 'small', 'wide', 'large');
		return type === 'regular' || (!small && !wide && !large);
	}).readOnly(),
	wide: Ember.computed.equal('type', 'wide').readOnly(),
	large: Ember.computed.equal('type', 'large').readOnly(),
	small: Ember.computed.equal('type', 'small').readOnly(),
	transparent: true
});
