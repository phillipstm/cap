'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {
    console.log(`VENDOR: ready for pickup at ${payload.store}`);
    eventPool.emit('VENDOR PICKUP', payload);
  }, 3000);
};

