var express = require('express');
var router  = express.Router();
var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


var property_controller = require('../controllers/property_controller');

//Property Search by Location and Price Range on Index Page
router.get('/:location/:pricerange', property_controller.index);

//Property Details Route
router.get('/detail',passport.authenticate("local"), property_controller.showDetail);


// remove later router.post('/login', passport.authenticate("local"), users_controller.loginUser);

//Lot Size filter on properties page
// <<<<<<< propertiesFilters
// router.get('/:lotSize', property_controller.lotsize);
// =======
// router.get('/:location/:pricerange/:lotSize', property_controller.lotSize);
// router.get('/:location/:pricerange/:lotSize/:propertyTypeId/:listingTypeId/:sqft/:beds/:baths/:status', property_controller.filter);
// >>>>>>> master

//Properties Filter
router.get('/filter/:location/:pricerange/:lotSize/:propertyTypeId/:listingTypeId/:sqft/:beds/:baths/:status', property_controller.filter);


module.exports = router;