'use strict';

let eventPool;
eventPool = require('./eventPool');
const Chance = require('chance');
const { vendorPickup } = require('./handlers/vendorPickup');
const { driverHandler, transitHandler } = require('./handlers/drivers');
const { driverDelivered } = require('./handlers/driverDelivered');
const { deliveredHandler } = require('./handlers/delivered');
const chance = new Chance();
// let customerOrder = payload;

eventPool.on('NEW_ORDER', customerOrder);
eventPool.on('VENDOR PICKUP', vendorPickup);
eventPool.on('DRIVER PICKUP', driverHandler);
eventPool.on('IN-TRANSIT', transitHandler);
eventPool.on('DRIVER-DELIVERED', driverDelivered);
eventPool.on('DELIVERED', deliveredHandler);

function customerOrder() {
  setInterval(() => {
    const payload = {
      store: chance.company,
      customer: chance.name,
      orderId: chance.guid,
      address: chance.address,
      date: chance.date,
      time: chance.timestamp,
      payload: payload,
    };

    console.log('-----new order----');
    eventPool.emit('NEW_ORDER', { customerOrder });
  }, 5000);

  return customerOrder;
}

// module.exports= { customerOrder };