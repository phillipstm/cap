'use strict';

// import { emit } from '../../eventPool';
// import eventPool from '../../eventPool';
let eventPool = require('../../eventPool');


module.exports = (payload) => {
  setTimeout(() => {
    console.log('DRIVER: Order has been picked up ${payload.orderID}');
    eventPool.emit('DRIVER PICKUP', payload.orderID);
    console.log('DRIVER: in-transit' + payload.orderID);


    eventPool.emit('IN-TRANSIT', payload.company);
  }, 3000);
};
// module.export driverHandler;