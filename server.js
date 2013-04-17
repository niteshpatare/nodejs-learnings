var http = require("http");
var url = require("url");

function start(route)
{
  function onRequest(request, response) {
    console.log("Request received.");
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	route(pathname);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World</h1>");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
}
exports.start=start;

console.log("Server has started.");