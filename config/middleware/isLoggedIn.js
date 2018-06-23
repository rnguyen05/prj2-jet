



function isLoggedIn(req, res, next) {
    console.log("req.isAuthenticated()", req.isAuthenticated());
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/');
}