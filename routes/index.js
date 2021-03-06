var express = require('express');
var router = express.Router();
var Controller = require('../controllers/score')


/* GET home page. */
router.get('/', Controller.index)
// show cute img

/* GET chart page. */
router.get('/scrabble/chart', Controller.getChart)

/* GET score page. */
router.get('/scrabble/score', Controller.getScore)
router.post('/scrabble/score', Controller.getScore)

router.get('/scrabble/score/:word', Controller.getScore)
router.post('/scrabble/score/:word', Controller.getScore)

/* POST score page. */
// router.post('/scrabble/score', Controller.setScore)

module.exports = router;
