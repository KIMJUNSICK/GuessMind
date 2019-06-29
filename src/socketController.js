import events from "./events";
import { chooseWord } from "./words";

let sockets = [];
let inProgress = false;
let word = null;
let leader = null;
let timeout = null;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const globalBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    globalBroadcast(events.updatePlayer, { sockets });

  const startGame = () => {
    if (sockets.length > 1) {
      if (inProgress === false) {
        inProgress = true;
        leader = chooseLeader();
        word = chooseWord();
        globalBroadcast(events.startSoon);
        setTimeout(() => {
          globalBroadcast(events.gameStarted);
          globalBroadcast(events.timeOut);
          io.to(leader.id).emit(events.leaderNotif, { word });
          timeout = setTimeout(endGame, 31000);
        }, 5000);
      }
    }
  };

  const endGame = () => {
    inProgress = false;
    globalBroadcast(events.gameEnded);
    globalBroadcast(events.resetTimeout);
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    setTimeout(() => startGame(), 2000);
  };

  const addPoints = id => {
    sockets = sockets.map(socket => {
      if (socket.id === id) {
        socket.points += 10;
      }
      return socket;
    });
    sendPlayerUpdate();
    endGame();
  };

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, points: 0, nickname: nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    startGame();
  });

  socket.on(events.disconnect, () => {
    sockets = sockets.filter(aSocket => aSocket.id !== socket.id);
    if (sockets.length === 1) {
      endGame();
    } else if (leader) {
      if (leader.id === socket.id) {
        endGame();
      }
    }
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) => {
    if (message === word) {
      globalBroadcast(events.newMsg, {
        message: `WINNER is ${socket.nickname}, word was : ${word}`,
        nickname: "Bot"
      });
      addPoints(socket.id);
    } else {
      broadcast(events.newMsg, { message, nickname: socket.nickname });
    }
  });

  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );

  socket.on(events.strokePath, ({ x, y, color }) =>
    broadcast(events.strokedPath, { x, y, color })
  );

  socket.on(events.fillCanvas, ({ color }) =>
    broadcast(events.filledCanvas, { color })
  );
};

export default socketController;
