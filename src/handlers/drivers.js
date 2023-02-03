'use strict';

// import { emit } from '../../eventPool';
import eventPool from '../../eventPool';
let eventPool = require('../../eventPool');


let driverHandler = (payload) => {
  setTimeout(() => {
    console.log('DRIVER: Vendor pick up ${payload.orderID}')
    eventPool.emit('Driver pickup', payload.orderID);
  console.log('DRIVER: in-transit' + payload.orderID);


  eventPool.emit('delivery in-transit', payload.company);
}, 1000);
}
export default { driverHandler };