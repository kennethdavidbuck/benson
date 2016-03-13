/*global window*/

export function initialize(applicationInstance) {
	const router = applicationInstance.lookup('router:main');

	if(!!window.ga && typeof window.ga === 'function') {
		router.on('didTransition', function () {
			const url = this.get('url');

			window.ga('send', 'pageview', {
				title: url,
				page: url
			});
		});
	}
}

export default {
	name: 'configure-analyticskit',
	initialize: initialize
};
