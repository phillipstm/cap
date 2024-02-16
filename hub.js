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
// eventPool.on('IN-TRANSIT', driverDelivered);
eventPool.on('DRIVER-DELIVERED', deliveredHandler);
// eventPool.on('DRIVER-DELIVERED', (orderID) => {
//   console.log(`Order ${orderID.payload} has been delivered`);
eventPool.emit('DELIVERED', eventPool );
// });


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
  eventPool.emit('NEW_ORDER', payload);
  // eventPool.emit('VENDOR_PICKUP', payload);
  // eventPool.emit('DRIVER_PICKUP', payload);
  // eventPool.emit('DRIVER_DELIVERED', payload);
  // eventPool.emit('DELIVERED', payload);

}, ORDER_INTERVAL);

eventPool.on('DELIVERED', clearInterval(orderInterval),
  console.log('---ORDER Completed---'));
// clearInterval(orderInterval);


