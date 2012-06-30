define([
  "app",

  // Libs
  "backbone",
  
  // models
  
  // data
  "json!data/stories.json"
],

function(app, Backbone, Stories) {

  return Backbone.Model.extend({
    defaults: {
      "story":  Stories[0]
    },
    initialize: function() {
    }
  });

});

// End of file story.js