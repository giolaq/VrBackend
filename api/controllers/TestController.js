/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	sayhello : function(req, res) {
		res.send("Ciaone");
	},
	
	createUser : function(req, res) {
	var params = req.query;
	var testUser = {};

	testUser.firstName = params.firstName;
	testUser.lastName = params.lastName;

	Test.create(testUser).exec(function(err, data) {
		if (err) {
			sails.log("There was an error adding the user");
			sails.log(err);
			res.send("There was an error");
		} else {
			sails.log("User was created!");
			sails.log(data);
			res.send(data);
		}
	});

},
	deleteUser : function(req, res) {
	var params = req.query;
	var userToDeleteFirstName = params.firstName;

	Test.destroy({firstName: userToDeleteFirstName}).exec(function (err){
	  if (err) {
	    return res.negotiate(err);
	  }
	  sails.log('User named ' + userToDeleteFirstName + ' have now been deleted');
	  return res.ok();
	});

}
};
