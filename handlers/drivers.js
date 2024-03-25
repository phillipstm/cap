'use strict';;
const { io } = require('socket.io-client');
let socket;
socket = io('http://localhost:3001/caps');
const logEvent = require('logEvent');


module.exports = (socket) => (payload) => {
  socket.on('DRIVER_PICKUP', payload);
  setTimeout(() => {

    console.log(`DRIVER: Has picked up an order for customer - ${payload.customer}`);
    logEvent(`Driver has picked up order from ${payload.store}`);
    socket.emit('DRIVER_PICKUP', payload);

    console.log(`DRIVER: In-transit with orderID, ${payload.orderID}`);


  }, 2000);

};
