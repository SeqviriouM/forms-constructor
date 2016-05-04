import io from 'socket.io-client';

export default function () {
  const socket = io();

  socket.on('INITED', (data) => {
    console.log(data);
  });

  socket.emit('INIT');
}
