import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 5500;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

const handleHome = (req, res) => {
  res.render("home");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅  Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

let sockets = [];

io.on("connection", socket => {
  sockets.push(socket.id);
});

setInterval(() => console.log(sockets), 3000);
