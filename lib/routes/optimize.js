    /*
     * POST image optimization.
     */

exports.post = function (req, res) {
    var optimizer = require('imgoptimizer'),
        type = req.body ? req.body.type : undefined,
        base64 = req.body ? /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(req.body.base64) ? req.body.base64 : undefined : undefined,
        reqtime = Date.now(), result;
    optimizerCallback = function (err, optimized) {
        if (err) {
            res.send(500, JSON.stringify({ error: (typeof err === 'string' ? err : JSON.stringify(err)) }));
            return;
        } else {
            result = optimized.toJson();
            result.took = Date.now() - reqtime;
            res.send(200, result);
        }
    };

    if (base64) {
        if (type === 'gif') {
            optimizer.gif(base64, optimizerCallback);
        } else if (type === 'jpg') {
            optimizer.jpg(base64, optimizerCallback);
        } else if (type === 'jpeg') {
            optimizer.jpeg(base64, optimizerCallback);
        } else if (type === 'png') {
            optimizer.png(base64, optimizerCallback);
        } else {
            res.send(500, { error: 'Image type is not suppported. Supported are jpg, jpeg, png, gif.' });
        }
    } else {
        res.send(500, { error: 'POST body is not a valid base64 string.' });
    }

};

    /*
     * GET image optimization.
     */
exports.get = function (req, res) {

};

exports.ping = function(req, res) {
    res.send(200, null);
};