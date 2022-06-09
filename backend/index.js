const cors = require("cors");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const port = 45 || process.env.PORT;
const app = express();
const server  = http.createServer(app);
const io = socketIO(server);
var count = 0;
const groupUsers = [{}];

app.use(cors());
app.use("/", (req, res) => {
    res.send("hello");
})

io.on("connection", (socket) => {
    console.log("new Connection");
    count++;
    socket.on("joined", ({user}) => {
        groupUsers[socket.id] = user;
        console.log(`${user} has Joined`);
        // console.log(groupUsers);
    })
    socket.emit('send', {user:"Admin", message: "Welcome To The Chat"});
    socket.broadcast.emit("UserJoined", {user: "Admin", message: "User Has Joined"})
})

server.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })