import Ember from 'ember';

const {getWithDefault} = Ember;

export function initialize(applicationInstance) {
	const appConfig = applicationInstance.resolveRegistration('config:environment');
	const analyticsConfig = getWithDefault(appConfig, 'analyticskit', {});
	const providers = getWithDefault(analyticsConfig, 'providers', []);
	const analytics = applicationInstance.lookup('service:analyticskit');

	analytics.set('providers', providers);

	applicationInstance.lookup('router:main').on('didTransition', function () {
		let url = this.get('url');

		this.get('analytics').track('pageView', {
			title: url,
			page: url
		});
	});
}

export default {
	name: 'configure-analyticskit',
	initialize: initialize
};
