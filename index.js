const http = require("http");

const metodoListar = require("./logicaProdutos");

const server = http.createServer((req, res) => {
  if (req.url === "/produtos") {
    res.end(metodoListar());
  } else {
    res.end("Tela Inicial");
  }
});

server.listen(9000, () => {
  console.log("Server running at http://127.0.0.1:9000/");
});
