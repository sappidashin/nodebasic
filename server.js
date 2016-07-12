var http = require('http')

const start = function(){
	http.createServer(function(req, res){
		console.log('Request received')
		res.writeHead(200, {'content-Type': 'text/plain'})
		res.write('Hello World')
		res.end()
	}).listen(8888)

	console.log('server start!')
}

exports.start = start