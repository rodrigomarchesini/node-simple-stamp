var crypto = require('crypto');

function stamp() {
  var len = 8;
  return crypto.randomBytes(Math.ceil(len / 2))
    .toString('hex')
    .slice(0, len);
}

module.exports = stamp;
