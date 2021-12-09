const fs = require('fs').promises;
const http = require('http');

function processWebRequest(request, response) {
	let body = '';
	request.on('data', chunk => {
		body += chunk.toString(); // convert Buffer to string
	});
	request.on('end', () => {
		fs.writeFile('dump.json',body)
			.then(() => {
				console.log('Dumped to dump.json!');
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.write(`{"dump":"it","success":true}`);
				response.end();
			})
			.catch(err => {
				console.error(err);
				response.writeHead(500, { 'Content-Type': 'application/json' });
				response.write(`{"dump":"it","error":"${err.message}"}`);
				response.end();
			})
	});
}

var webserver = http.createServer(processWebRequest);
webserver.listen(5555, "localhost");