import Ember from 'ember';

const {copy} = Ember;

export default Ember.Service.extend({

	providers: [],

	track(eventName, data = {}) {
		this.get('providers').forEach(provider => provider.track(eventName, copy(data, true)));
	}
});
