import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `<span class="author ${nickname ? "haveNickname" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${text}`;
  messages.appendChild(li);
};

const handleSendMsg = event => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appendMsg(value);
};

export const handleNewMsg = ({ message, nickname }) =>
  appendMsg(message, nickname);

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

export const hideChat = () => (sendMsg.style.display = "none");
export const showChat = () => (sendMsg.style.display = "flex");
