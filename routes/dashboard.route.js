const router = require('express').Router();

//Controllers import
const { authCheck } = require('../controllers/auth.controller.js');


router.get('/dashboard', authCheck, (req, res) => {
  res.send('<h1>Welcome ' + req.user.username + '!!</h1>');
});

// router.put('/api/dashboard/update', authCheck);

module.exports = router;