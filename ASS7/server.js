const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === "/" || reqUrl.pathname === "/index.html") {
        // Serve the HTML page
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (reqUrl.pathname === "/styles.css") {
        // Serve the CSS file
        fs.readFile(path.join(__dirname, "public", "styles.css"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    } else if (reqUrl.pathname === "/script.js") {
        // Serve the JavaScript file
        fs.readFile(path.join(__dirname, "public", "script.js"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/javascript" });
                res.end(data);
            }
        });
    } else if (reqUrl.pathname === "/notes" && req.method === "GET") {
        // Handle GET request to retrieve notes (simulated in-memory storage)
        const notes = [
            { id: 1, text: "Buy groceries" },
            { id: 2, text: "Call John" },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(notes));
    } else {
        // Handle other routes with a 404 Not Found response
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
