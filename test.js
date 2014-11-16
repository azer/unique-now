var test = require("prova");
var now = require("./");

test('return unique ts', function (t) {
  var i = 999, last = 0, val;

  while (i--) {
    val = now();

    if (!last) {
      last = val;
      continue;
    }

    t.ok(last < val);
    last = val;
  }

  t.end();
});
