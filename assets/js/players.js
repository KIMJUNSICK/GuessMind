const board = document.getElementById("jsPBoard");

const addPlayer = players => {
  console.log(players);
  board.innerHTML = "";
  players.forEach(player => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} : ${player.point}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayer(sockets);
