const router = require('express').Router();

router.get('/logout', (req, res) => {
    req.session = null;
    req.logOut();
    res.redirect('http://localhost:3000/login');
})


module.exports = router;