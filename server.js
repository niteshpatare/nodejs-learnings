var http = require("http");
var url = require("url");
var port = process.env.PORT || 8888;
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
  http.createServer(onRequest).listen(port);
}
exports.start=start;

console.log("Server has started.");