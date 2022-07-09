const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const express = require("express");
const port = 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch("/");

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});

const app = express();
app.use(connectLivereload());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("index.html");
});

//listen for requests
app.listen(port, () => {
  console.log(`Server is  listening at http://localhost:${port}`);
});