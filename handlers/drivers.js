'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {

  setTimeout(() => {
    console.log(`DRIVER: Has picked up an order for customer - ${payload.customer}`);
    eventPool.emit('DRIVER_PICKUP', payload);

    console.log(`DRIVER: In-transit with orderID, ${payload.orderID}`);

    // console.log(`Driver: Has delivered ${payload.orderID}`);
    // eventPool.emit('IN-TRANSIT', payload);

  }, 2000);

};
