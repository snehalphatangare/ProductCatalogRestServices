var express = require('express'),
app = express(),
cors = require('cors');
port = process.env.PORT || 3001,
mongoose = require('mongoose'),

app.use(cors());
//Register schema
Restaurant = require('./api/models/RestaurantModel');
MenuModel=require('./api/models/MenuItemModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://13.57.12.91/ShoppingCart', { useMongoClient: true }); 
//mongoose.connect('mongodb://localhost/ShoppingCart', { useMongoClient: true }); 

//Register routes
var routes = require('./api/routes/RestaurantRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Listening ShoppingCartAPI RESTful API server on: ' + port);