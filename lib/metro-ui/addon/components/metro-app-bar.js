import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'header',
	classNameBindings: ['fixed:fixed-top'],
	classNames: ['app-bar'],
	fixed: false
});
