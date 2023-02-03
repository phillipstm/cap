'use strict';

const eventPool = require('../../eventPool');
const chance = require('./chance');

let vendorPickup = (payload) => {
  let payload = {
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address({short_suffix: true}),
  };
  console.log(`VENDOR: ready for pickup ${payload.store}`);
  eventPool.emit('Vendor pickup', payload);
};

// let deliveredHandler = (payload) => {
//   console.log(`VENDOR: Thank you, ${payload.customer}`);
// };

module.exports = {vendorPickup};
  