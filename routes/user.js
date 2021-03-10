var express = require('express');
var router = express.Router();
let meaning_data = require('../config/data')


router.get('/', function(req, res, next) {
    res.render('user/index', { meaning_data });
});

module.exports = router;
