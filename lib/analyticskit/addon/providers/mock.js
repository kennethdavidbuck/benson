import Ember from 'ember';

export default Ember.Object.extend({

	track(eventName, options) {
		Ember.Logger.log(`[AnalyticsKit] Event: ${eventName}, Options:`, options || {});
	}
});
