/* HTTP 응답 */

var http = require('http');
var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.statusMessage = 'OK';

    res.write('Hello World');
    res.end();
}).listen(3000);