const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "hello world" }));
    }
});

server.listen(port, () => {
    console.log(`node http server running at http://localhost:${port}`);
});
