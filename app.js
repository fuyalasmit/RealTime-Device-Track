const express = require('express')
const http = require("http")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app);  // allows express and socket.io to share same server
const io = socketio(server);   //attaches socket.io to the http for server and realtime communication

app.set("view engine", "ejs")
app.use(express.static("public"))

io.on("connection", (socket)=>{
  console.log("connected", socket.id);
  socket.on("send-location", (data)=>{
    io.emit("receive-location", { id: socket.id, ...data });
  })
  socket.on("disconnect", ()=>{
    io.emit("user-disconnected", socket.id);
  }) 
})

app.get('/', (req, res) => {
  res.render("index")
})

server.listen(3000);