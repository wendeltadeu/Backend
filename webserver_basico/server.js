// variavel http com  require para execução do protocolo http
const http = require('http');

// variavel variavel hostname que recebe o ip do servidor
const hostname = '127.0.0.1';

// variavel port que determina a porta de comunicação da aplicação no servidor
const port = 3000;

// metodo createserver cria o servidor para receber os paramretros request 
// da requisição e response da resposta do servidor ao cliente
http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end("<center><h1>Hello World,</br>Sejam bem vindos ao primeiro servidor em Node.js</h1></center>")
}).listen(port, hostname, () => {

  console.log(`O servidor está sendo executado em http://${hostname}:${port}/`);
});