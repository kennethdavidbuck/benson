
export function initialize(application) {
	application.inject('router:main', 'analytics', 'service:analyticskit');
}

export default {
	name: 'inject-analyticskit',
	after: 'register-analyticskit-providers',
	initialize: initialize
};
