const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
  res.end('WebSocket Server Ready');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
  console.log('Client connecté');
  socket.send('Connexion établie !');

  socket.on('message', (msg) => {
    console.log('Message reçu :', msg);
    socket.send(`Réponse : ${msg}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));