/*global window*/

export function initialize(application) {
	const router = application.container.lookup('router:main');

	if(!!window.ga && typeof window.ga === 'function') {
		router.on('didTransition', () => {
			window.ga('send', 'pageview');
		});
	}
}

export default {
	name: 'configure-analyticskit',
	initialize: initialize
};
