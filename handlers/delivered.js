'use strict';

let eventPool = require('../eventPool');
const orderInterval = require('../hub');

module.exports = (payload) => {
  setTimeout(() => {

    console.log(`VENDOR: Thank you, ${payload.customer} your order ${payload.orderID} is complete.`);

  }, 1050);

  eventPool.emit('DELIVERED', clearInterval(orderInterval),
    console.log('---ORDER Completed---'));
  clearInterval(orderInterval);


};
