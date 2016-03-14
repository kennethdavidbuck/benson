import GoogleProvider from '../providers/google';
import LoggerProvider from '../providers/logger';

export default function (application) {
	application.register('analyticskit/provider:google', GoogleProvider);
	application.register('analyticskit/provider:mock', LoggerProvider);
}
