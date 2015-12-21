import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['tile-group'],
	classNameBindings: ['padding::no-padding', 'margin::no-margin'],
	padding: false,
	margin: false
});
