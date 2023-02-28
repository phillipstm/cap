'use strict';

const eventPool = require('../eventPool');

function deliveredHandler(payload) {
  console.log(`VENDOR: Thank you, ${payload.customer} your order is complete`);
  eventPool.emit('DELIVERED', payload.orderID);

}

module.exports = { deliveredHandler };