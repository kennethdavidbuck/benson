import Ember from 'ember';

const {assert, copy} = Ember;

export default Ember.Service.extend({

	providers: ['google'],

	track(eventName, options) {
		const owner = Ember.getOwner(this);
		const _options = options || {};

		this.get('providers').forEach(providerName => {
			let provider = owner.lookup(`analyticskit/provider:${providerName}`);

			assert('AnalyticsKit: The provider does not exist', !!provider);

			provider.track(eventName, copy(_options, true));
		});
	}
});
