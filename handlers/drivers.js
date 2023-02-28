'use strict';

// import { emit } from '../../eventPool';
const eventPool = require('../eventPool');
// let eventPool = require('../../eventPool');


function driverHandler(payload) {
  setTimeout(() => {
    console.log('DRIVER: Order has been picked up ${payload.orderID}');
    eventPool.emit('DRIVER PICKUP', payload.orderID);
  }, 3000);
}
function transitHandler(payload) {
  setTimeout(() => {
    console.log('DRIVER: in-transit' + payload.orderID);
    eventPool.emit('IN-TRANSIT', payload.company);
  }, 3010);
}


module.exports = { driverHandler, transitHandler };