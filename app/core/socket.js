import io from 'socket.io-client';

export function startSocketClient() {
  const socket = io();

  socket.on('INITED', (data) => {
    console.log(data);
  });

  socket.emit('INIT');
}
