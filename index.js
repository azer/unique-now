var last;

module.exports = uniqueNow;

function uniqueNow(){
  var now = Date.now() * 1000;

  if (!last || now > last) {
    last = now;
    return last;
  }

  last = last + 1;

  return last;
}
