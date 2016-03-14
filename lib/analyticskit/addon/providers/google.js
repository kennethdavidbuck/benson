import Ember from 'ember';

/*global window*/

export default Ember.Object.extend({

	google: (function (ga) {
		return ga || function () {};
	}(window.ga)),

	track(eventName, options = {}) {
		this.get('google')('send', eventName, options);
	}
});
