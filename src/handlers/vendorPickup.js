'use strict';

const eventPool = require('../eventPool');
const chance = require('../modules/chance');

let vendorPickup = (payload) => {
  let payload = {
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address({short_suffix: true}),
  };
  console.log(`VENDOR: ready for pickup ${payload.store}`);
  eventPool.emit('VENDOR PICKUP', payload);
};


module.exports = {vendorPickup};
  