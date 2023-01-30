'use strict';

import { guid, name, address } from './chance'

const eventPool = require('../../eventPool');
const chance = require('./chance');

let vendorPickup = (store) => {
  let payload = {
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address({short_suffix: true}),
  };
  console.log(`VENDOR: ready for pickup ${payload.orderID}`);
  eventPool.emit('pickup', payload);
};

let deliveredHandler = (payload) => {
  console.log(`VENDOR: Thank you, ${payload.customer}`);
};

module.exports = {vendorPickup.payload};
  