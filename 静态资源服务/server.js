const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((request, response) => {
  if (request.method != "GET") {
    response.statusCode = 405;
    response.end("<h1>405 Method Not Allowed</h1>");
    return;
  }
  let dict = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png",
    jpg: "image/jpeg",
    gif: "image/gif",
    mp4: "video/mp4",
    mp3: "audio/mpeg",
    json: "application/json",
  };
  let baseUrl = __dirname + "/page";
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  let filePath = baseUrl + pathname;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      //设置字符集
      response.setHeader("content-type", "text/html;charset=utf-8");
      //判断错误的代号
      switch (err.code) {
        case "ENOENT":
          response.statusCode = 404;
          response.end("<h1>404 Not Found</h1>");
          break;
        case "EPERM":
          response.statusCode = 403;
          response.end("<h1>403 Forbidden</h1>");
          break;
        default:
          response.statusCode = 500;
          response.end("<h1>Internal Server Error</h1>");
          break;
      }
    } else {
      let ext = path.extname(filePath).slice(1);
      let type = dict[ext] || "application/octet-stream";
      response.setHeader(
        "content-type",
        type + ext == "html" ? ";charset=utf-8" : ""
      );
      response.end(data);
    }
  });
});
server.listen(9000, () => {
  console.log("运行在9000端口");
});
