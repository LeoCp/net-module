const net = require ('net');

var client = net.connect(3000);

client.on('data', message =>{
  console.log(message.toString());
});
