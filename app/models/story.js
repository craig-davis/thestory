define([
  "app",

  // Libs
  "backbone"
  
  // models
],

function(app, Backbone) {

  return Backbone.Model.extend({
    defaults: {
      "story":  "A very nice story",
    }
  });

});

// End of file story.js