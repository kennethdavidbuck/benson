import Ember from 'ember';

const {computed, getProperties} = Ember;

export default Ember.Controller.extend({
	tiles: computed.map('model', function (post) {
		return getProperties(post, 'id', 'title', 'teaser');
	})
});
