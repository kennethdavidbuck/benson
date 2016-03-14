import Ember from 'ember';

export default Ember.Object.extend({

	track(eventName, data) {
		Ember.Logger.log(`[AnalyticsKit] Event: ${eventName}, Data:`, data || {});
	}
});
