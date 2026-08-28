// Minimal static server for local headless verification (port 8931).
const http = require("http"), fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const types = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".xml": "application/xml", ".txt": "text/plain", ".json": "application/json"
};
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  if (p.endsWith("/")) p += "index.html";
  fs.readFile(path.join(root, p), (e, d) => {
    if (e) { res.writeHead(404); res.end("not found"); return; }
    res.writeHead(200, { "Content-Type": types[path.extname(p).toLowerCase()] || "application/octet-stream" });
    res.end(d);
  });
}).listen(8931, () => console.log("static server up on 8931"));