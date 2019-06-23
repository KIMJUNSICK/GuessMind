const socket = io("/");

socket.on("Hello", () => console.log("It's me"));

setInterval(() => socket.emit("junsik"), 20000);
