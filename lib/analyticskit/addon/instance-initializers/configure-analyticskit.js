/**
 * Created by kennethbuck on 2016-03-13.
 */

export function initialize(applicationInstance) {
	// backwards compatible
	const owner = (typeof applicationInstance.lookup === 'function') ? applicationInstance : applicationInstance.container;
	const router = owner.lookup('router:main');

	router.on('didTransition', function () {
		const url = this.get('url');

		this.get('analytics').page({
			title: url,
			page: url
		});
	});
}

export default {
	name: 'configure-analyticskit',
	initialize: initialize
};
