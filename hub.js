'use strict';

const PORT = process.env.PORT || 3002;
// const server = new Server(PORT);
const socket = require('socket.io')(PORT);
// const io = new Server();

// creating cap server
const caps = socket.of('/caps');

const Chance = require('chance');
const chance = new Chance();
// const logEvent = require logEvent();
const ORDER_INTERVAL = 5000;

//connect to server

socket.on('connection', /**
 * This function is called when a new client connects to the server.
 * @param {Socket} socket - The socket object for the client connection.
 */
  socket.on('connection', (socket) => {
    console.log('socket connected to caps server', socket.id);

    /**
     * This function is called periodically to create new orders.
     * @param {Object} payload - The order information.
     */
    const orderInterval = setInterval(() => {
      const payload = {
        store: chance.company(),
        customer: chance.first() + ' ' + chance.last(),
        orderID: chance.guid({ version: 5 }),
        address: chance.address(),
        date: chance.date(),
        time: chance.timestamp(),
        event: logEvent(),
        payload: payload,
      }
    })
    console.log('-------------Start New Order------');
    caps.emit('NEW_ORDER', payload, orderInterval);
    logEvent.log('NEW_ORDER', payload);

  }));


console.log('Here!!!!!!!!', logEvent());
logEvent();



//joining room

socket.on('JOIN', (payload) => {
  logEvent.log(`${payload.customer} has placed a new order`);
  socket.join(payload);
});

socket.on('NEW_ORDER', (payload) => {
  logEvent('NEW_ORDER', payload);
  socket.emit('VENDOR_PICKUP', payload);
});


socket.on('VENDOR_PICKUP', (payload) => {
  logEvent('VENDOR_PICKUP', payload);
  socket.broadcast.emit('DRIVER_PICKUP', payload);
});

socket.on('DRIVER_PICKUP', (payload) => {
  logEvent('DRIVER_PICKUP', payload);
  socket.emit('DRIVER_DELIVERED', payload);
});

socket.on('DRIVER_DELIVERED', (payload) => {
  logEvent('DRIVER_DELIVERED', payload);
  socket.emit('DELIVERED', payload);
});

// }, ORDER_INTERVAL);

function logEvent(event, payload) {

  date = NewDate();
  time = date.toTimeString();
  event = event;
  payload = payload;
  console.log('logEvent working', { event, time, payload });
}

