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
		//capture of the user input object
		var userInput = req.body;
		var userResponses = userInput.scores;
		//set up best friend variables
		var matchName = '';
		var matchImage = '';
		var totalDifference = 100; //initial value large for comparison
			for (var i = 0; i < friendsData.length; i++) {
				var diff = 0
				for (var j = 0; j < userResponses.length; j++){
					diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
				}

				if (diff < totalDifference) {
					totalDifference = diff
					matchName = friendsData[i].name;
					matchImage = friendsData[i].photo;
				}	
			}
		friendsData.push(req.body);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
