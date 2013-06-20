var now = require("./");

it('returns unique unix times', function(){

  var i = 99, last = 0, cur;

  while ( i -- ) {
    cur = now();
    expect(cur).to.be.above(last);
    last = cur;
  }

});
