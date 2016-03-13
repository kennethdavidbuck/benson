export default function (application) {
	application.inject('router:main', 'analytics', 'service:analyticskit');
}
