'use strict';

let eventPool = require('../eventPool');


module.exports = (payload) => {
  setTimeout(() => {

    console.log(`Driver: Has delivered to ${payload.customer}`);
    eventPool.emit('DRIVER-DELIVERED', payload);
  }, 3000);

};

