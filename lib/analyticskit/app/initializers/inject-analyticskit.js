import initialize from 'analyticskit/initializers/inject-analyticskit';

export default {
	name: 'inject-analyticskit',
	after: 'register-analyticskit-providers',
	initialize: initialize
};
