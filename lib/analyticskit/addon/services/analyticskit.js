import Ember from 'ember';

const {copy} = Ember;

export default Ember.Service.extend({

	providers: [],

	track(eventName, eventData) {
		const data = eventData || {};

		this.get('providers').forEach(provider => provider.track(eventName, copy(data, true)));
	}
});
