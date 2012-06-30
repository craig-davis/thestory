define([
  // Application.
  "app",
  
  // Views
  "views/index"
],

function(app, IndexView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      // Create a layout and associate it with the #main div.
      var layout = new Backbone.Layout({
        el: "#main"
      });

      // Insert the tutorial into the layout.
      layout.insertView(new IndexView());

      // Render the layout into the DOM.
      layout.render();
    }
  });

  return Router;

});
