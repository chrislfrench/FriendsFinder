var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var setupRoutes = require("./app/routing/routes.js");
var setupHTML = require("./app/routing/html-routes.js");

var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'app/public')));


setupRoutes(app, express);
setupHTML(app, express);

// app.use(express.static('app'));

// require('./app/routing/routes.js')(app); 
// require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

