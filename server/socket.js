import Server from 'socket.io';
import cookieParser from 'socket.io-cookie';

export default function (server) {
  const io = new Server(server);

  io.use(cookieParser);

  // Check sessionId
  io.use((socket, next) => {
    if (socket.request.headers.cookie) {
      // const sessionId = socket.request.headers.cookie.sessionId;
      // checkSessionId(sessionId);
      // if (sessionId) {
      //   next();
      // }
      next();
    }
  });

  io.on('connection', socket => {
    socket.on('INIT', () => {
      socket.emit('INITED', {
        initied: true,
      });
    });
  });
}
