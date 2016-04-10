import Server from 'socket.io';
import cookieParser from 'socket.io-cookie';

export default function startSocketServer(server) {
  const io = new Server(server);

  io.use(cookieParser);

  io.on('connection', socket => {
    socket.on('INIT', () => {
      socket.emit('INITED', {
        initied: true,
      });
    });
  });
}
