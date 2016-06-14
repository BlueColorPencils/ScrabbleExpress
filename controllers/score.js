var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble

var ScrabbleScorer = {
  index: function(req, response, next) {
    response.render('index', {title: 'Scrabble Scorer'})
  },

  getChart: function(request, response) {
    response.render('chart', {title: 'Tile Chart'});
  },

  getScore: function (request, response) {
    var locals = {}
    if (request.body.word) {
      locals.word = scrabble.score(request.body.word);
    } else {
      locals.word = ""
    }
    // locals.word = request.body.word;
    locals.title = 'Scorer';

  response.render('score', locals);
  }
}


module.exports = ScrabbleScorer;
