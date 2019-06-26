const notif = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notif.append(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined`, "rgb(88, 86, 214)");
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, "rgb(255, 204, 0)");
};
