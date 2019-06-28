import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMsg } from "./chat";
import {
  handleBeganPath,
  handleStrokedPath,
  handleFilledCanvas
} from "./paint";
import {
  handlePlayerUpdate,
  handleGameStarted,
  handleLeaderNotif,
  handleGameEnded,
  handleStartSoon
} from "./players";

let socket = null;

export const getSocket = () => socket;

export const initSockets = aSocket => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnected);
  socket.on(events.newMsg, handleNewMsg);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filledCanvas, handleFilledCanvas);
  socket.on(events.updatePlayer, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStarted);
  socket.on(events.leaderNotif, handleLeaderNotif);
  socket.on(events.gameEnded, handleGameEnded);
  socket.on(events.startSoon, handleStartSoon);
};
