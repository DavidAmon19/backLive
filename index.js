const http = require("http");

const todos = require("./produtos");

const server = http.createServer((req, res) => {
  // let resultado = todos();

  // console.log(resultado);

  // res.end(JSON.stringify(resultado));

  res.end(
    todos()
      .map((produtos) => {
        return `-------------\n${produtos.nome}\n${produtos.preco}\n-------------`;
      })
      .join(`\n`)
  );
});

server.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080/");
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World\n");
// });

// server.listen(8080, () => {
//   console.log("Server running at http://127.0.0.1:8080/");
// });
