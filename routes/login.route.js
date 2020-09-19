const router = require('express').Router();
const passport = require('passport');



//Local authentication route
router.get('/login/local', 
	passport.authenticate('local', {failureRedirect: '/api'}),
	(req, res) => {
		// Successful authentication, redirect home.
		res.redirect('/api/dashboard');
		res.send(req.user);
});



//Google authentication route
router.get('/login/google',
	passport.authenticate('google', {scope: ['profile']}));

router.get('/login/google/redirect', 
	passport.authenticate('google', { failureRedirect: '/api' }), 
	(req, res) => {
		// Successful authentication, redirect home.
		res.redirect('/api/dashboard');
		res.send(req.user);
});



//Facebook authentication route
router.get('/login/facebook',
  passport.authenticate('facebook', {scope: ['profile']}));

router.get('/login/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/api' }),
  (req, res) => {
    // Successful authentication, redirect home.
	res.redirect('/api/dashboard');
	res.send(req.user)
});



module.exports = router;