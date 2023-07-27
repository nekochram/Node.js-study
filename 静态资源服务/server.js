const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((request, response) => {
  let dict = {
    ".html": "text/html",
    ".txt": "text/plain",
    ".rtf": " application/rtf",
    ".gif": " image/gif",
    ".jpeg": " image/jpeg",
    ".jpg": " image/jpeg",
    ".au": " audio/basic",
    ".mid": " audio/x-midi",
    ".midi": "audio/x-midi",
    ".ra": " audio/x-pn-realaudio",
    ".ram": "audio/x-pn-realaudio",
    ".mpg": " video/mpeg",
    ".mpeg": " video/mpeg",
    ".avi": " video/x-msvideo",
    ".gz": " application/x-gzip",
    ".tar": " application/x-tar",
  };
  let baseUrl = __dirname + "/page";
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  let filePath = baseUrl + pathname;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader("content-type", "text/html;charset=utf-8");
      response.statusCode = 500;
      response.end("文件读取错误");
    } else {
      let ext = path.extname(filePath);
      let type = dict[ext] || "application/octet-stream";
      response.setHeader("content-type", type);
      response.end(data);
    }
  });
});
server.listen(9000, () => {
  console.log("运行在9000端口");
});
