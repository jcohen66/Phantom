var page = require('webpage').create();
page.open('http://tovalrs04:7789/pricing-viewer', function() {
  page.render('pricing-viewer.png');
  phantom.exit();
});