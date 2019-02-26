var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8888);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/');
});

io.on('connection', function (socket) {
    console.log("Socket: " + socket.id) 
    socket.emit('message',"connected");

    socket.on('message', function (data) {
        console.log(data);
        socket.broadcast.emit('transcript-update',data);
        socket.emit('transcript-update',data)
  });
  socket.on('disconnect', function (data) {
    console.log("bye");
    socket.emit('message',"disconnected");
    
});
});