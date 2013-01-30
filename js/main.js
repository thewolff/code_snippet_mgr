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
		},
		parse: {
			exports: 'parse-1.2.0.min'
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
	'views/app'
], function( AppView) {
	// Initialize routing and start Backbone.history()
	Backbone.history.start();
	
	Parse.initialize("bYPy4E9RrKFyg4IblH5pHlVFYsDXVGUnXuGEDjKv", "HgvQzzAWFsgEhGX9arIh8KZBQR8YIfuW9dQEsysM");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}, {
	  success: function(object) {
	    console.log("yay! it worked");
	  }
	});

	// Initialize the application view
	new AppView();
});