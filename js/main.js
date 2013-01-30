// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		modecss: {
			deps: [
				'codemirror'
			],
			exports: 'modecss'
		},
		modexml: {
			deps: [
				'codemirror'
			],
			exports: 'modexml'
		},
		modejs: {
			deps: [
				'codemirror'
			],
			exports: 'modejs'
		},
		modehtml: {
			deps: [
				'modecss',
				'modexml',
				'modejs'
			],
			exports: 'modehtml'
		},
		addonfolding: {
			deps: [
			'codemirror'
			],
			exports: 'addonfolding'
		},
		addoncollapse: {
			deps: [
			'codemirror'
			],
			exports: 'addoncollapse'
		}
	},
	paths: {
		jquery: 'lib/jquery-1.9.0.min',
		underscore: 'lib/lodash.min',
		backbone: 'lib/backbone/backbone-min',
		text: 'lib/text',
		codemirror: 'lib/codemirror/codemirror',
		modejs: 'lib/codemirror/mode/javascript/javascript',
		modexml: 'lib/codemirror/mode/xml/xml',
		modecss: 'lib/codemirror/mode/css/css',
		modehtml: 'lib/codemirror/mode/htmlembedded/htmlembedded',
		addoncollapse: 'lib/codemirror/addon/collapserange',
		addonfolding: 'lib/codemirror/addon/foldcode'
	}
});

require([
	'views/app',
	'routers/router'
], function( AppView, Workspace ) {
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	new AppView();
});