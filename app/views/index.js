define([
  "app",

  // Libs
  "backbone",
  
  // models
  "models/story"
],

function(app, Backbone, StoryModel) {

  return Backbone.View.extend({
    template: 'index',
    model: new StoryModel(),
    serialize: function() {
      return this.model.toJSON();
    }
  });

});

// End of file index.js