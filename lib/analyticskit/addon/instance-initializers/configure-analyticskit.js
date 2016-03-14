import Ember from 'ember';

const {getWithDefault} = Ember;

export default function (applicationInstance) {
	const appConfig = applicationInstance.resolveRegistration('config:environment');
	const analyticsConfig = getWithDefault(appConfig, 'analyticskit', {});
	const analytics = applicationInstance.lookup('service:analyticskit');

	const providers = getWithDefault(analyticsConfig, 'providers', Ember.A()).map(providerName => {
		return applicationInstance.lookup(`analyticskit/provider:${providerName}`);
	});

	analytics.set('providers', providers);

	applicationInstance.lookup('router:main').on('didTransition', function () {
		let url = this.get('url');

		this.get('analytics').track('pageView', {
			title: url,
			page: url
		});
	});
}
