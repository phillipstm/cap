'use strict';

import eventPool from '../eventPool';
let eventPool = require('.../eventPool');

module.exports = (payload) => {
   setTimeout(() => {
      console.log('Driver: Has delivered',)
      eventPool.emit('DRIVER-DELIVERED', payload.orderId);
   }, 1000)
}