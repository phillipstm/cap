'use strict';

const eventPool = require('./eventPool');
const vendorHandler = require('./handlers/vendorPickup');
const driverHandler = require('./handlers/drivers');
const driverDelivered = require('./handlers/driverDelivered');
const deliveredHandler = require('./handlers/delivered');
const Chance = require('chance');
const chance = new Chance();
const ORDER_INTERVAL = 5000;


eventPool.on('NEW_ORDER', vendorHandler);
eventPool.on('VENDOR_PICKUP', driverHandler);
eventPool.on('DRIVER_PICKUP', driverDelivered);
eventPool.on('DRIVER-DELIVERED', deliveredHandler);
eventPool.emit('DELIVERED', deliveredHandler );


const orderInterval = setInterval(() => {
  const payload = {
    store: chance.company(),
    customer: chance.first() + ' ' + chance.last(),
    orderID: chance.guid({ version: 5 }),
    address: chance.address(),
    date: chance.date(),
    time: chance.timestamp(),
  };

  console.log('-------------Start New Order------');
  eventPool.emit('NEW_ORDER', payload, orderInterval);

}, ORDER_INTERVAL);

// eventPool.emit('DELIVERED', clearInterval(orderInterval),
//   console.log('---ORDER Completed---'));
// clearInterval(orderInterval);


