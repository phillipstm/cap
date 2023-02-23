'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {
    console.log('Driver: Has delivered');
    eventPool.emit('DRIVER-DELIVERED', payload.orderId);
  }, 3000);
};