

// This is middleware for restricting routes a user is not allowed to visit if not logged in
function attachAuthenticationStatus(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  res.locals.isAuthenticated = req.isAuthenticated();
  console.log("local authCheck",res.locals.isAuthenticated );
  next();
};

module.exports = attachAuthenticationStatus;

  