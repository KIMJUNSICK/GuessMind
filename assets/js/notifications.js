const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.append(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined`, "rgb(0, 122, 255)");
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, "rgb(255, 204, 0)");
};
