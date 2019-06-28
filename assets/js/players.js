import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas
} from "./paint";
import { hideChat, showChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayer = players => {
  console.log(players);
  board.innerHTML = "";
  players.forEach(player => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = text => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayer(sockets);

export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  showChat();
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  hideChat();
  notifs.innerText = `You are the Painter, paint : ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("Game Ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleStartSoon = () => setNotifs("Game will start Soon");
