define([
	'jquery',
	'underscore',
	'backbone',
	'codemirror',
	'modehtml'

], function( $, _, Backbone, codemirror, modehtml) {

	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#main',


		// Delegated events for creating new items, and clearing completed ones.
		events: {

		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function() {
			this.render();
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function(){
			console.log('rendered');
			this.myCodeMirror = CodeMirror($('.main')[0], {
			  mode:  'htmlmixed',
			  lineNumbers: true,
			  theme: 'xq-dark'
			});
		},
	});

	return AppView;
});
