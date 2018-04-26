// Dependencies
// =============================================================
var path = require("path");
var express = require("express");

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

	 // If no matching route is found default to home
  	app.get("*", function(req, res) {
    	res.sendFile(path.join(__dirname, "/../public/home.html"));
  	});
};