'use strict';

let eventPool = require('../eventPool');

//initiate new order

module.exports = (payload) => {
  setTimeout(() => {
    console.log('VENDOR_HERE!!!!', payload);

    console.log(`VENDOR: ${payload.orderID} ready for pickup at ${payload.store}`);

    eventPool.emit('VENDOR_PICKUP', payload);
  }, 1000);
};

