import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['tile-area'],
	classNameBindings: ['padding::no-padding'],
	padding: false
});
