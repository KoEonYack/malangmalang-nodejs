/* HTTP 요청 */

var http = require('http');
var server = http.createServer(function(req, res) {

    console.log("Method: ", req.method);
    console.log("url: ", req.url);
    console.log("headers: ", req.headers);
    console.log("headers: ", req.headers['user-agent']);

    res.write('<h1>Hello world</h1>');
    res.end();

}).listen(3000);