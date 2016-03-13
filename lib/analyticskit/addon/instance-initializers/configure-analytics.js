/*global window*/

export function initialize(application) {
	const router = application.container.lookup('router:main');

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
