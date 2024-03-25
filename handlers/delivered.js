'use strict';

const { io } = require('socket.io-client');
const Socket = io('http://localhost:3001/caps');
const logEvent = require('logEvent');

const orderInterval = require('../hub');

// socket on delivered turn off eventLog

module.exports = (socket) => (payload) => {
  socket.on('DELIVERED', payload);

  setTimeout(() => {

    console.log(`VENDOR: Thank you, ${payload.customer} your order ${payload.orderID} is complete.`);
    logEvent(`VENDOR: Thank you, ${payload.customer} your order ${payload.orderID} is complete.`);

  }, 1050);

  socket.emit('DELIVERED', clearInterval(orderInterval),
    console.log('---ORDER Completed---'));
  logEvent.off
  clearInterval(orderInterval);


};
