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
    locals.params = false;

    if (request.body.word) {
      locals.score = scrabble.score(request.body.word);
      locals.word = request.body.word;
    } else if (request.params.word !== undefined) {
      // locals.score = scrabble.score(request.params.word);
      locals.params = true;
      locals.score = scrabble.score(request.params.word);
      locals.word = request.params.word;
    } else {
      locals.score = "";
      locals.word = "";
    }
    locals.title = 'Scorer';
    // console.log(util.inspect(request, {showHidden: false, depth: null}));
  response.render('score', locals);
  }
}


module.exports = ScrabbleScorer;
