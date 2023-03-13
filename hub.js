'use strict';

const eventPool = require('./eventPool');
const { vendorPickup } = require('./handlers/vendorPickup');
const { driverHandler, transitHandler } = require('./handlers/drivers');
const { driverDelivered } = require('./handlers/driverDelivered');
const { deliveredHandler } = require('./handlers/delivered');


eventPool.on('NEW_ORDER', vendorPickup);
eventPool.on('VENDOR_PICKUP', driverHandler);
eventPool.on('DRIVER_PICKUP', transitHandler);
eventPool.on('IN-TRANSIT', driverDelivered);
eventPool.on('DRIVER-DELIVERED', deliveredHandler);
// eventPool.on('DELIVERED');

function customerOrder() {

  const payload = {text: 'New Customer Order'};
  eventPool.emit('NEW_ORDER', payload);
}

setInterval(() => {
  console.log('-------------Start New Oder------');
  customerOrder();
}, 5000);
