var fs = require('fs')
  , path = require('path');

module.exports = {
  before: function (utils) {
    return utils.write('bar', '');
  }
}
