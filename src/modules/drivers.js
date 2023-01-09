'use strict';

const eventPool = require('../../eventPool');

let driverHandler = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  eventPool.emit('in-transit', payload);
  console.log(`DRIVER: delivered ${payload.orderID}`);
  eventPool.emit('delivery complete', payload);
};

module.exports = { driverHandler };