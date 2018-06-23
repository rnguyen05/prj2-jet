// var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
// var Handlebars = require('express-handlebars');

Handlebars.registerHelper("firstArrayItem", function(string) {
  var array = string.split(",");
  return array[0].replace(/"/g, '');
});

// Handlebars.registerHelper("allPics", function(string) {
//   var array = string.split(",");
//   // for (i = 0; i < array.length; i++) {
    
//   // }
//   return array;
// })