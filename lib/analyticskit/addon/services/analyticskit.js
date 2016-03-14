import Ember from 'ember';

const {copy} = Ember;

export default Ember.Service.extend({

	providers: Ember.A(),

	track(eventName, options = {}) {
		this.get('providers').forEach(provider => provider.track(eventName, copy(options, true)));
	}
});
