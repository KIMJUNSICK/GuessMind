import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 5500;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));

const handleHome = (req, res) => {
  res.render("home");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅  Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);
