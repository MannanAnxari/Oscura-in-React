const cors = require("cors");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const port = 45 || process.env.PORT;
const app = express();
const server  = http.createServer(app);
const io = socketIO(server);


app.use(cors());
app.use("/", (req, res) => {
    res.send("hello");
})

io.on("connection", () => {
    console.log("new Connection");
})

server.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })