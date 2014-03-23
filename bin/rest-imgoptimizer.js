#!/usr/bin/env node

    /**
     * Module dependencies.
     */

var fs = require('fs')
  , program = require('commander')
  , path = require('path')
  , basename = path.basename
  , dirname = path.dirname
  , resolve = path.resolve
  , exists = fs.existsSync || path.existsSync
  , join = path.join
  , server = require('../');

    // options

program
.version(require('../package.json').version)
.option('-p, --port <port>', 'The port of the server');

program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    # start server');
    console.log('    $ rest-imgoptimizer');
    console.log('');
    console.log('    # start server on port 3000');
    console.log('    $ rest-imgoptimizer --port 3000');
    console.log('');
});

program.parse(process.argv);

startServer(program.port || 3000);
    
function startServer(port){
  server.start(port);
}