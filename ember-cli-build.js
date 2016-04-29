/*jshint node:true*/
/* global require, module, process*/
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var GIT_TAG = process.env.GIT_TAG;

module.exports = function (defaults) {
	var app = new EmberApp(defaults, {
		fingerprint: {
			exclude: ['fonts'],
			prepend: 'https://s3.amazonaws.com/www.kennethbuck.ca/benson-builds/' + GIT_TAG + '/'
		}
	});

	// bring in fonts TODO: convert this to a directory import
	app.import('bower_components/metro/fonts/metro.eot', {
		destDir: 'assets/fonts'
	});

	app.import('bower_components/metro/fonts/metro.svg', {
		destDir: 'assets/fonts'
	});

	app.import('bower_components/metro/fonts/metro.ttf', {
		destDir: 'assets/fonts'
	});

	app.import('bower_components/metro/fonts/metro.woff', {
		destDir: 'assets/fonts'
	});

	app.import('bower_components/metro/fonts/selection.json', {
		destDir: 'assets/fonts'
	});

	// Use `app.import` to add additional libraries to the generated
	// output files.
	//
	// If you need to use different assets in different
	// environments, specify an object as the first parameter. That
	// object's keys should be the environment name and the values
	// should be the asset to use in that environment.
	//
	// If the library that you are including contains AMD or ES6
	// modules that you would like to import into your application
	// please specify an object with the list of modules as keys
	// along with the exports of each module as its value.

	return app.toTree();
};
