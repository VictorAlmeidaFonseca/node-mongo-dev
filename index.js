import http from 'http';
import config from './src/config';

const server = http.createServer((req, res) => {
  res.end('Hello World! Agora o ambiente de desenvolvimento esta padronozado');
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running on http://${config.hostname}:${config.port}/`);
});