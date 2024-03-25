'use strict';

const{io} = require('socket.io-client');
const Socket = io('http://localhost:3001/caps');
const logEvent = require('logEvent');
// const { Socket } = require('socket.io');



module.exports = (socket) => (payload) => {
  socket.on('DRIVER_DELIVERED', payload);

  setTimeout(() => {

    console.log(`Driver: Has delivered to ${payload.customer}`);
    logEvent('DRIVER_DELIVERED', payload);
    Socket.emit('DRIVER_DELIVERED', payload);
  }, 3000);

};
