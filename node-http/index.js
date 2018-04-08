const http = require('http'); //node core module
const fs = require('fs');  //node core module
const path = require('path'); //node core module

const hostname = 'localhost'; //define host
const port = 3000; //select port for server

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);

		if (req.method === 'GET') {
			var fileUrl;
			if (req.url == '/') {
				fileUrl = '/index.html';
			} else {
				fileUrl = req.url; }

		var filePath = path.resolve('./public'+fileUrl);
		const fileExt = path.extname(filePath);
		if (fileExt == '.html') {
			fs.exists(filePath, (exists) => {
				if (!exists) {
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/html');
					res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found</h1></body></html>');
					return ;
				}
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				fs.createReadStream(filePath).pipe(res);
			});
		}
		else {
			res.statusCode = 404;
		  res.setHeader('Content-Type', 'text/html');
	    res.end('<html><body><h1>Error 404: ' + fileUrl +
						 ' not a HTML file</h1></body></html>');
		}
	}
	else {
	  res.statusCode = 404;
	  res.setHeader('Content-Type', 'text/html');
	  res.end('<html><body><h1>Error 404: ' + req.method +
					 ' not supported</h1></body></html>');
	}
})

server.listen(port, hostname, () => { //use port and hostname to determine server to listen to
  console.log(`Server running at http://${hostname}:${port}/`);
});
