'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {

    console.log(`VENDOR: Thank you, ${payload.customer} your order ${payload.orderID} is complete.`);

    eventPool.emit('DELIVERED', payload);

  }, 1050);

};
