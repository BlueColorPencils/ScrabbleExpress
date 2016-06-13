var ScrabbleScorer = {
  index: function(req, response, next) {
    response.render('index', {title: 'express'})
  },

  getChart: function(req, response, next) {
    response.render('index', {title: 'express'})
  },

  getScore: function (request, response) {
    var locals = {}
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    var costume = ['ABC - Anything But Clothes', 'Nakey Party', 'All-White Dress Code', 'All-Black Dress Code', 'Cowboys and Indians', 'Fight Club', 'Halloween', 'Toga', 'Island', 'Nerd', 'Orange is the New Black', 'Silent Party', 'Bros and Hos', 'Blacklight', 'Fancy AF', '80s', '50 Shades of Grey', 'Pajama'];

  locals.title = 'RANDOM PARTY GENERATOR';

  // pick a random number between 1 and 100
  locals.num = Math.floor(Math.random() * (100)) + 1;

  // pick a random day of the week
  locals.day = days[(Math.floor(Math.random() * 7))];

  // pick a costume theme for your party
  locals.theme = costume[(Math.floor(Math.random() * costume.length))];

  response.render('party', locals);
  }
}


module.exports = ScrabbleScorer;
