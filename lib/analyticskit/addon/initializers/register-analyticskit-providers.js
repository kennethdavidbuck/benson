import GoogleProvider from '../providers/google';
import MockProvider from '../providers/mock';

export default function (application) {
	application.register('analyticskit/provider:google', GoogleProvider);
	application.register('analyticskit/provider:mock', MockProvider);
}
