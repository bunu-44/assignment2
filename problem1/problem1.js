const http = require("http");
const fs = require("fs");

let indexFileBuffer;
let statuscode = 200;

const serveAllRequest = function (req, res) {
    const method = req.method;
    if (method == "GET") {
        if (req.url == "/") {
            res.setHeader("content-type", "text/html");
            fs.readFile(__dirname + "//index.html", function (err, buffer) {
                if (err) {
                    indexFileBuffer = "file not found";
                } else {
                    indexFileBuffer = buffer;
                    statuscode = 200;
                }

                res.writeHead(statuscode);
                res.end(indexFileBuffer);
            });

        }
    }
    else if (method == "POST") {
        res.setHeader("content-type", "application/json");
        res.writeHead(200);
        res.end("{'message':'hello'}");
    }
}
const server = http.createServer(serveAllRequest);
server.listen(4343, "localhost", function () {
    console.log("listening");
})