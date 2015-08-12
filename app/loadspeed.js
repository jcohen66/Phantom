var $ = require('jquery');

$(document).ready(function() {
  var page = require('webpage').create(),
    system = require('system'),
    t,
    address;

  if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
  }

  t = Date.now();
  address = system.args[1];

  // Route console messages 
  page.onConsoleMessage = function(msg) {
    console.log(msg);
  };

  // Network request/response logging
  page.onResourceRequested = function(request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
  };
  page.onResourceReceived = function(response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
  };

  // Load the page from the url
  page.open(address, function(status) {
    if (status !== 'success') {
      console.log('FAIL to load the address')
    } else {
      t = Date.now() - t;
      console.log('Loading ' + system.args[1]);
      console.log('Loading time ' + t + ' msec');

      var title = page.evaluate(function() {
        return document.title;
      });
      console.log('Page title is ' + title);

    }
    phantom.exit();
  });


});