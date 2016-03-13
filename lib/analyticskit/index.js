/*jshint node:true*/
module.exports = {
	name: 'analyticskit',

	isDevelopingAddon: function () {
		return true;
	},

	contentFor: function (type, config) {
		var analyticskit = config.analyticskit;

		if (analyticskit.google.enabled) {
			if (type === 'head') {
				return '<script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||' +
					'function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=' +
					's.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,' +
					'\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\',\'' +
					analyticskit.google.appId + '\',\'auto\');</script>';
			}
		}
	}
};
