import GoogleProvider from '../providers/google';


export function initialize(application) {
	application.register('analyticskit/provider:google', GoogleProvider);

	application.inject('router:main', 'analytics', 'service:analyticskit');
}

export default {
	name: 'inject-analyticskit',
	initialize: initialize
};
