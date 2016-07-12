var http = require('http')

http.createServer(function(req, res){
	response.writhHead(200, {'content-Type': 'text/plain'})
	response.write('Hello World')
	response.end()
}).listen(8888)