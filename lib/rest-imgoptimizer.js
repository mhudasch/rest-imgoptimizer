
var RestImgoptimizer = (function(){

  function RestImgoptimizer(){
  }
  
  RestImgoptimizer.prototype.start = function(port){
    /**
     * Module dependencies.
     */ 
    var express = require('express')
        ,optimizations = require('./routes/optimize')
        ,http = require('http')
        ,path = require('path')
        ,app = express();

    // all environments
    app.set('port', port);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('stylus').middleware(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.bodyParser()); // for json,form-data request bodies

    app.configure('development', function(){
      app.use(express.errorHandler());
    })

    app.post('/optimize', optimizations.post);
    app.get('/optimize/ping', optimizations.ping);

    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });
  };
  
  return RestImgoptimizer;  
}());

exports.RestImgoptimizer = RestImgoptimizer;
