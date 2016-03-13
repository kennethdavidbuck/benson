import GoogleProvider from '../providers/google';

export function initialize(application) {
	application.register('analyticskit/provider:google', GoogleProvider);
}

export default {
	name: 'register-analyticskit-providers',
	initialize: initialize
};
