import Ember from 'ember';

const {getWithDefault} = Ember;

export default function (applicationInstance) {
	const appConfig = applicationInstance.resolveRegistration('config:environment');
	const analyticsConfig = getWithDefault(appConfig, 'analyticskit', {});

	const providers = getWithDefault(analyticsConfig, 'providers', Ember.A()).map(providerName => {
		let provider = applicationInstance.lookup(`analyticskit/provider:${providerName}`);

		provider.set('config', getWithDefault(analyticsConfig, providerName, {}));

		return provider;
	});

	applicationInstance.lookup('service:analyticskit').set('providers', Ember.A(providers));

	applicationInstance.lookup('router:main').on('didTransition', function () {
		let url = this.get('url');

		this.get('analytics').track('pageView', {
			title: url,
			page: url
		});
	});
}
