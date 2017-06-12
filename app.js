var images = require('images');

var path = require('path');

var watermarkImg = images('logo.jpg');

var sourceImg = images('source.jpg');

var sWidth = sourceImg.width();

var sHeight = sourceImg.height();

var wmWidth = watermarkImg.width();

var wmHeight = watermarkImg.height();

images(sourceImg)
	.draw(watermarkImg, sWidth - wmWidth - 40, sHeight - wmHeight - 40)
	.save('saveimg.png');