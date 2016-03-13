/**
 * Created by kennethbuck on 2016-03-13.
 */

export function initialize() {
	const application = arguments[1] || arguments[0];

	application.inject('router:main', 'analytics', 'service:analyticskit');
}

export default {
	name: 'inject-analyticskit',
	initialize: initialize
};
