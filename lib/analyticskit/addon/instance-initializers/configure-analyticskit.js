
export function initialize(applicationInstance) {
	const router = applicationInstance.lookup('router:main');

	router.on('didTransition', function () {
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
