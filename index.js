let http = require("http");
let exec = require("./exec");

const PORT = 8048;
const AI_WORKSPACE = "/usr/workspace";

startServer();

function startServer() {
  let deployServer = http.createServer((request, response) => {
    var content = "";
  
    req.on('data', function (chunk) {
      content += chunk;
    });
  
    req.on('end', function () {
      exec("cd " + AI_WORKSPACE + " && git status && git reset --hard HEAD && git clean -f && git status")
      .then(stdout => {
        response.writeHead(200);
        response.end(stdout);
      });
    });
  });
  console.log("listening port at: " + PORT);
  deployServer.listen(PORT);
}