YellowRed.Views.ProfilesList = Backbone.View.extend({
	// call new with a collection specified
	
	initialize: function() {
		this.listenTo( this.collection, 
										"add remove change sync reset", 
										this.render)
	},
	
  template: JST['profiles/card'],
	
	render: function() {
		var that = this
		this.$el.html('');
		this.collection.each( function (profile) {
						
			that.$el.append(that.template({
				profile: profile
			}))
		});
		return this;
	}

});