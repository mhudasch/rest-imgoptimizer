module.exports = (function () {
    var Optimizer = require('./lib/rest-imgoptimizer.js').RestImgoptimizer,
        c = new Optimizer();
    return c;
}());