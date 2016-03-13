
export function initialize(applicationInstance) {
	const analyticsConfig = applicationInstance.resolveRegistration('config:environment').analyticskit;
	const analytics = applicationInstance.lookup('service:analyticskit');

	analytics.set('providers', analyticsConfig.providers || []);

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
