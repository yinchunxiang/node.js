var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/yincx', function(req, res, next) {
    res.send('Welcome yincx');
});

module.exports = router;
