const net = require ('net');

net.createServer(connection => {
  connection.write("Hi, i'm the server!");
}).listen(3000);
