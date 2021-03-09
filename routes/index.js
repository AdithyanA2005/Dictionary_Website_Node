var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // let meaning_data = [
    //     {
    //         word: "accidial",
    //         meaning: "dial someone's number on phone accidentally"
    //     },
    //     {
    //         word: "agender",
    //         meaning: "people do not identify as male or female"
    //     },
    //     {
    //         word: "airball",
    //         meaning: "completely miss the basket, rim, and backboard with a shot"

    //     }
    // ]



    let meaning_data = {
            "accidial": "dial someone's number on phone accidentally",
            "agender": "people do not identify as male or female",
            "airball": "completely miss the basket, rim, and backboard with a shot",
            "accidial": "dial someone's number on phone accidentally",
            "agender": "people do not identify as male or female",
            "airball": "completely miss the basket, rim, and backboard with a shot",
    }

  res.render('index', { meaning_data });
});

module.exports = router;


