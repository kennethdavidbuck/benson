import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['data-role'],
	classNames: ['metro-tile'],
	classNameBindings: ['_size', 'transparent:ol-transparent'],
	'data-role': 'tile',
	_size: 'tile-square',
	size: Ember.computed({
		get: function () {
			return this.get('_size');
		},
		set: function (key, value) {
			const size =  `tile-${value || 'square'}`;
			this.set('_size', size);
			return size;
		}
	}),
	transparent: true
});
