var http = require('http')
var url = require('url')

const start = function(route, handle){
	http.createServer(function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log('Request for ' + pathname + ' received!')

		route(handle, pathname, res)
		
	}).listen(8888)

	console.log('server start!')
}

exports.start = start