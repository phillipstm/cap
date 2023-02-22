'use strict';

const eventPool = require('./src/eventPool');
const Chance = require('chance');
const { vendorPickup } = require('./src/handlers/vendorPickup');
const { driverHandler } = require('./src/handlers/driver');
const { driverDelivered } = require('./src/handlers/driverDelivered');
const { deliveredHandler } = require('./src/handlers/vendor');
const chance = new Chance();



eventPool.on('VENDOR PICKUP', vendorPickup);
eventPool.on('DRIVER PICKUP', driverHandler);
eventPool.on('DRIVER-DELIVERED', driverDelivered);
eventPool.on('DELIVERED', deliveredHandler);

setInterval(() => {
  const payload = {
    store: chance.company,
    customer: chance.name,
    orderId: chance.guid,
    address: chance.address,
    date: chance.date,
    time: chance.timestamp,
  };

  console.log('-----new order----');
  eventPool.emit('VENDOR PICKUP ', { order: payload });
}, 5000);