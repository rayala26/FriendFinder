// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// API GET Request
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
  	});
// API POST Request
	app.post("/api/friends", function(req, res) {
		if (friendsData.length < 10) {
			friendsData.push(req.body);
			res.json(true);
		}
	});
};
