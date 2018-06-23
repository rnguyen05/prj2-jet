

var db = require('../models');
var bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;

//Login User
exports.loginUser = function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  //res.send("<h1>Authentication Successful</h1>");
  console.log(req.rawHeaders[17]);
  // res.json("/");
  res.json(req.rawHeaders[17]);
};

//Sign Out User
exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

//this is the users_controller.js file
exports.registrationPage = function(req,res) {
  res.render('users/registration', {
    layout: 'main-registration'
  });
};

// register a user
exports.signUpUser = function(req,res) {
  db.User.sync();
  console.log(req.body);

  db.User.findAll({
    where: {username: req.body.username},
    attributes: ["username"]  //Hacky Solution, fix later. Sequelize attempts to select id instead of uid, resulting in error
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    //At some point, make sure that only one user can be associated with an email.
    } else {
      
      var progress; //Necessary as bcrypt requires a progress variable. See link: https://stackoverflow.com/questions/39542974/bcrypt-node-is-throwing-error-no-callback-function-was-given
      var userpassword = req.body.password;
      bcrypt.hash(userpassword, null, null, function(err, hash){
        db.User.create({
          username: req.body.username,
          email: req.body.email,
          password: hash
        }).then(function() {
          //res.send("<h1>Authentication Successful</h1>");
          res.send({redirect: '/'});
        }).catch(function(err) {
          console.log(err);
          res.json(err);
        });
      });

      /*
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        //res.send("<h1>Authentication Successful</h1>");
        res.send({redirect: '/'});
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      });
      */
    }
  })
};

