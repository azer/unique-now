var last;

module.exports = uniqueNow;

function uniqueNow(){
  var now = Date.now();

  if ( now <= last ) {
    last++;
  } else {
    last = now;
  }

  return last;
}
