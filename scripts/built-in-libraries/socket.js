const net = require('net');

const sleep = (seconds) => new Promise(resolve => {
  setTimeout(() => resolve(), seconds * 1000)
});

const server = net.createServer(async (socket) => {
  // 'connection' listener
  console.log('client connected');
  socket.on('end', () => {
    console.log('client disconnected');
  });
  socket.on('close', () => {
    console.log('server disconnected');
  });
  await sleep(15);
  socket.write('hello\r\n');
  socket.end();
});
server.on('error', (err) => {
  throw err;
});
server.listen(3000, () => {
  console.log('server listening on port 3000');
});