var input = require('./src/components/input/input');
var button = require('./src/components/button/button');
var common = require('./src/common/common');


window.lab = lab;
if (!!module.exports) {
  module.exports = input;
  module.exports = button;
  module.exports = common;
}
