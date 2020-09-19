const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Please login.')
})

module.exports = router;
