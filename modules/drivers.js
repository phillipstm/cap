'use strict';

const eventPool = require('../eventPool');

let driverHandler = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  eventPool.emit('in-transit', payload);
  console.log(`DRIVER: delievered ${payload.orderID}`);
  eventPool.emit('delivery complete', payload);
};

module.exports = { driverHandler };