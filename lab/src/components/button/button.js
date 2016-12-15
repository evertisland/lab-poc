const $ = require('jquery');
require('./button.css');
module.exports = {
  log: function () {
    console.log($);
  },
  click: function (e) {
    console.log('Clicked');
  }
};
