import GoogleProvider from '../providers/google';


export function initialize() {
	const application = arguments[1] || arguments[0];

	application.register('analyticskit/provider:google', GoogleProvider);
	application.inject('router:main', 'analytics', 'service:analyticskit');
}

export default {
	name: 'inject-analyticskit',
	initialize: initialize
};
