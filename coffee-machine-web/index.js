const fs = require("fs");
const http = require("http");
const HOST = "localhost";
const PORT = 5000;

const requestListener = (request, response) => {
  const { url, method } = request;

  if (url === "/" && method === "GET") {
    const readStream = fs.createReadStream("./templates/index.html");
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    readStream.on("open", () => {
      readStream.pipe(response);
    });

    readStream.on("error", err => {
      response.statusCode = 500;
      response.end(err);
    });
    return;

  } else if (url === "/order" && method === "POST") {
    let body = [];
    response.statusCode = 201;

    request.on("data", chunk => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const coffeeName = body.slice(body.indexOf("=") + 1);
      response.end(`<h4>${coffeeName} coffee has created!</h4><h4>$15 bill has been made!</h4>`);
    });
    return;
  }

  response.statusCode = 404;
  response.end("404 - Not Found");
};

const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
