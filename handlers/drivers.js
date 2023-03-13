'use strict';

const eventPool = require('../eventPool');
const payload = payload;

function driverHandler(payload) {
  setTimeout(() => {
    let event = {
      event: 'DRIVER_PICKUP',
      time: 'date.toCSTString()',
      orderID: 'guid.toString()',
      payload: payload,
    };
    console.log('DRIVER: Order has been picked up', payload);
    eventPool.emit('DRIVER_PICKUP', event.payload);
  }, 3000);
}
function transitHandler(payload) {
  setTimeout(() => {
    console.log('DRIVER: in-transit', payload.orderID);
    eventPool.emit('IN-TRANSIT', payload.company);
  }, 3010);
}


module.exports = { driverHandler, transitHandler };