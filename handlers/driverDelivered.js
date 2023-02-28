'use strict';

const eventPool = require('../eventPool');

function driverDelivered(payload) {
  setTimeout(() => {
    console.log('Driver: Has delivered');
    eventPool.emit('DRIVER-DELIVERED', payload.orderId);
  }, 3000);
}

module.exports = { driverDelivered };