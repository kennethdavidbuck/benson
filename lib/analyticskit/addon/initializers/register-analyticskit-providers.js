import GoogleProvider from '../providers/google';
import MockProvider from '../providers/mock';

export function initialize(application) {
	application.register('analyticskit/provider:google', GoogleProvider);
	application.register('analyticskit/provider:mock', MockProvider);
}

export default {
	name: 'register-analyticskit-providers',
	initialize: initialize
};
