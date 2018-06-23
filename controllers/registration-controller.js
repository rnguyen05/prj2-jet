const db = require("../models");

exports.index = function(req, res) {
    console.log("inside controllers/registration-controller.js");
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password1);
    console.log(req.body.password2);
    console.log(req.body.email);
    res.render("index", {title: "Registration Complete!"});
};
