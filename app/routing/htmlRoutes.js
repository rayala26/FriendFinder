// Dependencies
// =============================================================
var path = require("path");

// Routes
// =====================================================

module.exports = function(app) {

	app.get("/", function(req, res) {
		console.log("path is: ",path.join(__dirname + "/../public/", "home.html"))
	  res.sendFile(path.join(__dirname + "/../public/",  "home.html"));
	});

	app.get("/survey", function(req, res) {
		console.log("path is: ",path.join(__dirname + "/../public/", "survey.html"))
	  res.sendFile(path.join(__dirname + "/../public/",  "survey.html"));
	});
};