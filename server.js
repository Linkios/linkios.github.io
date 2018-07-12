#!/usr/bin/env node
var connect = require('connect'),
	serveStatic = require('serve-static'),
	logger = require('morgan'),
	colors = require('colors'),
	argv = require('optimist').argv,
	portfinder = require('portfinder');

var port = argv.p,
	logging = argv.l,
	log = console.log;

if (!argv.p) {
	portfinder.basePort = 8080;
	portfinder.getPort(function (err, port) {
	if (err) throw err;
	listen(port);
	});
} else {
	listen(port);
}



function listen(port) {
	var server = connect();
		server.use(serveStatic(__dirname))
		
		if(!logging) server.use(logger(logging))
		
		server.listen(port);
	
	log('Starting up Server, serving '.yellow
		+ __dirname.green
		+ ' on port: '.yellow
		+ port.toString().cyan);
	log('Hit CTRL-C to stop the server');
	
}
	 
	

process.on('SIGINT', function () {
	log('http-server stopped.'.red);
	process.exit();
});
