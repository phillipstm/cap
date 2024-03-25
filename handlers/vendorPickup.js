'use strict';;
const { io } = require('socket.io-client');
let socket;
socket = io('http://localhost:3001/caps');
const logEvent = require('logEvent');


/**
 *
 * @param {object} socket - the socket.io instance
 * @param {object} payload - the event payload
 */
module.exports = (socket) => (payload) => {
  /**
   * listen for a new order event
   */
  socket.on('VENDOR_PICKUP', payload.store);

  /**
   * log a message after a delay
   */
  setTimeout(() => {
    console.log('VENDOR_HERE!!!!', payload);

    /**
     * log an event with the order details
     */
    logEvent(`VENDOR_PICKUP: ${payload.orderID} ready for pickup at ${payload.store}`);

    /**
     * emit a vendor pickup event
     */
    socket.emit('VENDOR_PICKUP', payload);
  }, 1000);
};

