'use strict';

const eventPool = require('../../eventPool');
const vendorPickup

let driverPickUp = (payload) => {
  console.log(`DRIVER: pick up ready ${payload.orderID}`);
  eventPool.emit('in-transit', payload);
  console.log(`DRIVER: delivered ${payload.orderID}`);
  eventPool.emit('delivery complete', payload);
};

module.exports = { driverHandler };