const port = 3010,
    http = require("http"),
    httpStatus = require("http-status-code"),
    app = http.createServer((request, response) => {
        console.log("Received an incomming request!");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html" }); // 클라이언트에 전달할 응답

        let responseMessage = "<h1>Hello, Universe! </h1>";
        response.write(responseMessage);
        response.end();
        console.log(`Sent a response: ${responseMessage}`);
    }); 

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);