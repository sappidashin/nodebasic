var querystring = require('querystring'),
	fs = require('fs'),
	formidable = require("formidable");

function start(res, req){
	console.log('Request handler "start" was called')	

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    res.writeHead(200, {'content-Type': 'text/html'})
	res.write(body)
	res.end()
}

function upload(res, req){
	console.log('Request handler "upload" was called')
	
	var form = new formidable.IncomingForm();
	console.log('about to parse')
	form.parse(req, function(err, fields, files){
		console.log('parse done');
		fs.renameSync(files.upload.path, './tmp/test.jpg');

		res.writeHead(200, {'content-Type': 'text/html'})
		res.write("received image: <br/>");
		res.write("<img src='/show' /> ");
		res.end()
	})
	
}

function show(response, req) {
  console.log("Request handler 'show' was called.");
  fs.readFile("./tmp/test.jpg", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start
exports.upload = upload
exports.show = show;