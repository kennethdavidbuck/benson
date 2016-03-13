import Ember from 'ember';

const {assert, makeArray, copy} = Ember;

export default Ember.Service.extend({

	providers: [],

	track(eventName, options) {
		const owner = Ember.getOwner(this);
		const _options = options || {};

		makeArray(this.get('providers')).forEach(providerName => {
			let provider = owner.lookup(`analyticskit/provider:${providerName}`);

			assert(`AnalyticsKit: The provider ${providerName} does not exist`, !!provider);

			provider.track(eventName, copy(_options, true));
		});
	}
});
