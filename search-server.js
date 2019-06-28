const http = require('http');
const url = require('url');
const fruits = require('./fruits');

//create a server object:
http.createServer(function (req, res) {

    // Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

    const parsedUrl = url.parse(req.url, true)
    const query = parsedUrl.query;
    let q = '';
    if (query['q']) {
        q = query['q']
    }
    const filtered = fruits.filter(f => f.name.includes(q))
    const text = JSON.stringify(filtered);    
    res.setHeader('Content-Type','application/json')
    res.write(text); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


// req headers body
