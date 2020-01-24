import socketio from 'socket.io';

export default function setupWebSocket(server) {
  const io = socketio(server);

  io.on('connection', socket => {
    console.log(socket.id);
  });
}
