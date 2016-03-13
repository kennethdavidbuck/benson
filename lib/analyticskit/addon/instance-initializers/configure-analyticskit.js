
export function initialize(applicationInstance) {
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
