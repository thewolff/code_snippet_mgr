define([
	'underscore',
	'backbone',
], function( _, Backbone ) {

	var SnippetModel = Parse.Object.extend({
		className: "/snippet",

		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
		  content: "",
		  done: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function() {
			this.save({
				completed: !this.get('completed')
			});
		}
	});

	return SnippetModel;
});
