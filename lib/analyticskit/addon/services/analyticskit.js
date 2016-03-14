import Ember from 'ember';

const {copy} = Ember;

export default Ember.Service.extend({

	providers: [],

	track(eventName, options) {
		const _options = options || {};

		this.get('providers').forEach(provider => provider.track(eventName, copy(_options, true)));
	}
});
